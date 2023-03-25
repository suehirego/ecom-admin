const { verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken");
const bycrypt = require("bcrypt");
const User = require("../models/User");

const router = require("express").Router();


// //UPDATE USER
router.put("/:id", async (req, res) => {
    
    const user = await User.findById(req.params.id)

    if(user){
        user.username = req.body.username || user.username
        user.firstname = req.body.firstname || user.firstname
        user.lastname = req.body.lastname || user.lastname
        user.email = req.body.email || user.email
        user.address = req.body.address || user.address
        user.img = req.body.img || user.img
        

        const updatedUser = await user.save()
        res.json({
            _id: updatedUser._id,
            username: updatedUser.username,
            firstname: updatedUser.firstname,
            lastname: updatedUser.lastname,
            email: updatedUser.email,
            address: updatedUser.address,
            img: updatedUser.img,
        })

    }else{
        res.status(404)
        throw new Error('User not found')
    }
    
})



//DELETE USER
router.delete("/:id", async (req, res) => {

    try {

        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("Account has been deleted!")

    } catch (err) {
        res.status(500).json(err);
    }
});

//GET USER
router.get("/find/:id", async (req, res) => {

    try {

        const user = await User.findById(req.params.id);
        const { password, ...others } = user._doc;

        res.status(200).json(others);

    } catch (err) {
        res.status(500).json(err);
    }

});


//GET ALL USERS
router.get("/", async (req, res) => {

    const query = req.query.new;

    try {

        const users = query
            ? await User.find().sort({ _id: -1 }).limit(10)
            : await User.find();
        res.status(200).json(users);

    } catch (err) {
        res.status(500).json(err);
    }

});

//GET USER STATS

router.get("/stats",  async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

    try {
        const data = await User.aggregate([
            { $match: { createdAt: { $gte: lastYear } } },
            {
                $project: {
                    month: { $month: "$createdAt" },
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 },
                },
            },
        ]);
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json(err);
    }
});


//GET USER COUNT
router.get("/usercount", async (req, res) => {
    
    try { 
        const userCount = await User.countDocuments();
        res.status(200).json(userCount);
    } catch (err) {
        res.status(500).json(err);
    }
});





module.exports = router;
