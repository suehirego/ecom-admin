const express = require("express");
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const multer = require("multer");
const cookieParser = require("cookie-parser");

//import routes
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const productsRoute = require("./routes/products");
const cartsRoute = require("./routes/carts");
const ordersRoute = require("./routes/orders");


dotenv.config();

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("CONNECTED TO MongoDB!"))
.catch((err) => console.log(err));


//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cookieParser());
// app.use(cors({ origin: '*', credentials: true }));

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
}
app.use(cors(corsOptions));


//Testing routes
app.get("/", (req, res) => {
    res.json("Welcome to the Sheboss E-commerce ADMIN & CLIENT API!")
});

// use routes
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/products", productsRoute);
app.use("/api/carts", cartsRoute);
app.use("/api/orders", ordersRoute);



app.listen(process.env.PORT || 8800, () => {
    console.log("Susan, you are the real Sheboss ADMIN!!!");
});

