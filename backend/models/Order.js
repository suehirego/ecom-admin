const mongoose = require("mongoose")

const OrderSchema = new mongoose.Schema(
    {
        id: { type: Number },
        userId: { type: String, required:true },
        products: [
            {
                orderId: { type: Number },
                productId: { type:String },
                productDesc: { type:String },
                quantity: { type:Number, default:1 },

            }
        ],
        amount: { type: Number, required:true },
        address: { type: Object, required:true},
        status: { type: String, default: "Pending"},
        paymentMethod: { type: String, default: "MobileMoney"},
        
    },
    { timestamps:true }
);

OrderSchema.pre("save", function(next){
    var docs = this;
    mongoose.model('Order', OrderSchema).countDocuments(function(error, counter){
        if(error) return next(error);
        docs.id = counter+1;
        next();
    });   
});


module.exports = mongoose.model("Order", OrderSchema);