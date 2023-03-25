const { verifyTokenAndAuthorization, verifyTokenAndAdmin, verifyToken } = require("./verifyToken");
const Product = require("../models/Product");

const router = require("express").Router();


//CREATE PRODUCT
router.post("/", async (req,res) => {
    
    const newProduct = new Product(req.body);

    try{

        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);

    }catch(err){
        res.status(500).json(err)
    }
});


// //UPDATE PRODUCT
router.put("/:id", async (req, res) => {
    
    const product = await Product.findById(req.params.id)

    if(product){
        product.title = req.body.title || product.title
        product.desc = req.body.desc || product.desc
        product.img = req.body.img || product.img
        product.categories = req.body.categories || product.categories
        product.size = req.body.size || product.size
        product.color = req.body.color || product.color
        product.brand = req.body.brand || product.brand
        product.price = req.body.price || product.price
        product.newPrice = req.body.newPrice || product.newPrice
        

        const updatedProduct = await product.save()
        res.json({
            _id: updatedProduct._id,
            title: updatedProduct.title,
            desc: updatedProduct.desc,
            img: updatedProduct.img,
            categories: updatedProduct.categories,
            size: updatedProduct.size,
            color: updatedProduct.color,
            brand: updatedProduct.brand,
            price: updatedProduct.price,
            newPrice: updatedProduct.newPrice,
        })

    }else{
        res.status(404)
        throw new Error('Product not found')
    }
    
})


//DELETE PRODUCT
router.delete("/:id", async (req,res) => {

    try{

        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been deleted!")

    }catch(err){
        res.status(500).json(err);
    }
});

//GET PRODUCT
router.get("/find/:id",  async (req,res) => {

    try{

        const product = await Product.findById(req.params.id);
        res.status(200).json(product);

    }catch(err){
        res.status(500).json(err);
    }

});

// GET ALL PRODUCTS
router.get("/", async (req,res) => {

    const qNew = req.query.new;
    const qCategory = req.query.category;


    try{

        let products;

        if(qNew){

            products = await Product.find().sort({createdAt: -1}).limit(1);

        } else if(qCategory){

            products = await Product.find({
                categories: {
                    $in: [qCategory],
                },
            });


        } else {

            products = await Product.find();
        }

        res.status(200).json(products);

    }catch(err){
        res.status(500).json(err);
    }

});


//GET SALE PRODUCTS
router.get("/sale", async (req, res) => {
 
    try {
      
    //   const products = await Product.find().sort({newPrice: newPrice});
      const products = await Product.find({ "newPrice": { $gt: 10 }})
      
      res.status(200).json(products);
     
    }catch(err){
        res.status(500).json(err);
    }
  });


//GET PRODUCTS COUNT
router.get("/productcount", async (req, res) => {
    
    try { 
        const productCount = await Product.countDocuments();
        res.status(200).json(productCount);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;