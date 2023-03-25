const mongoose = require("mongoose")

const CartSchema = new mongoose.Schema(
    {
        id: { type: Number },
        userId: { type: String },
        products: [
            {
                productId: { type: String },
                quantity: { type: Number, default: 1 },

            }
        ],
        
    },
    { timestamps:true }
);

CartSchema.pre("save", function(next){
    var docs = this;
    mongoose.model('Cart', CartSchema).countDocuments(function(error, counter){
        if(error) return next(error);
        docs.id = counter+1;
        next();
    });   
});



module.exports = mongoose.model("Cart", CartSchema);