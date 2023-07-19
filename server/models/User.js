const { Schema, model, Types } = require("mongoose");

// Creating a User schema 
const userSchema = new Schema({
    userName: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      valdate: {
        validator: function (v) {
          return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(v);
        },
      },
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
  },
  {
    toJSON: {
      virtuals: true, 
    },
      id: false, 
});

const User = model("User", userSchema);


module.exports = User;