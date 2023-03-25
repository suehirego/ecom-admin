const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
      {
            id: { type: Number },
            username: { type: String, required: true, unique: true },
            firstname: { type: String, required: true },
            lastname: { type: String, required: true },
            city: { type: String, default: "" },
            address: { type: String, default: "" },
            phone: { type: String, default: "" },
            email: { type: String, required: true, unique: true },
            password: { type: String, required: true, min: 6 },
            isAdmin: { type: Boolean, default: false },
            img: { type: String },
      },
      { timestamps: true }
);

UserSchema.pre("save", function (next) {
      var docs = this;
      mongoose.model('User', UserSchema).countDocuments(function (error, counter) {
            if (error) return next(error);
            docs.id = counter + 1;
            next();
      });
});

module.exports = mongoose.model("User", UserSchema);