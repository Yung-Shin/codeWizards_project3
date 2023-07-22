const { Schema, model } = require("mongoose");
const bycrypt = require("bcrypt");

// Creating a User schema 
const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },

});

// Hass the password before saving (security)
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = next.hashSync(this.password, 10);
  }
  next();
});

// validate the password method
userSchema.validatePassword = async function (password) {
  return bscrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;