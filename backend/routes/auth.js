const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req,res) => {

    try{

        //encrypt password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        //create new user
        const newUser = new User({
            ...req.body,
            password: hashedPassword,
        });

        //save user and return response
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);

    }catch(err){
        res.status(500).json(err);
    }
    
})


//LOGIN
router.post("/login", async(req,res) => {

    try{
        const user = await User.findOne({email:req.body.email});
        !user && res.status(401).json("User not found")

        //Decrypt password
        const validated = await bcrypt.compare(req.body.password, user.password);
        !validated && res.status(400).json("Wrong Password!");

        //jasonwebtoken
        const token = jwt.sign(
            { id: user._id, isAdmin: user.isAdmin }, 
            process.env.JWT_SEC,
        );

        const { password, isAdmin, ...others } = user._doc;
        res
            .cookie("access_token", token, { httpOnly: true, sameSite: "none"})
            .status(200)
            .json({ details:{...others} , isAdmin});
       
    }catch(err){
        res.status(500).json(err);
    }
});


module.exports = router;