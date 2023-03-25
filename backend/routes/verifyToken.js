const jwt = require("jsonwebtoken");

const verifyToken = (req,res,next) => {
    const token = req.cookies.access_token;
    //if there is no token;
    if(!token){
        return res.status(401).json("You are not authenticated!");
    }

    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
        //if there is an error
        if(err) res.status(402).json("Token is not valid!");
        //asign user to your request
        req.user = user;
        next();
    });
};

const verifyTokenAndAuthorization = (req,res,next) => {
    verifyToken(req,res,next, () => {
        //if the signedin user is equal to the owner of the account or is an admin;
        if(req.user.id === req.params.id || req.user.isAdmin){
            next();
        }else{
            res.status(403).json("Access Denied!")
        }
    });
};

const verifyTokenAndAdmin = (req,res,next) => {
    verifyToken(req,res,next, () => {
        //if the signedin user is equal to the owner of the account or is an admin;
        if(req.user.isAdmin){
            next();
        }else{
            res.status(403).json("Access Denied!")
        }
    });
};

module.exports = { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin };