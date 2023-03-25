const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        id: { type: Number },
        title: { type: String, required:true, unique:true },
        desc: { type:String, required:true },
        img: {type: String},
        categories: {type: Array },
        size: { type: Array },
        color: { type: Array} ,
        brand: { type: String} ,
        price: { type:Number, required:true },
        newPrice: { type:Number},
        inStock:{type: Boolean, default: true}
        
    },
    { timestamps:true }
);

ProductSchema.pre("save", function(next){
    var docs = this;
    mongoose.model('Product', ProductSchema).countDocuments(function(error, counter){
        if(error) return next(error);
        docs.id = counter+1;
        next();
    });   
});

module.exports = mongoose.model("Product", ProductSchema);