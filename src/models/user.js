const mongoose = require("mongoose");
const { isEmail } = require("validator");

const userSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    validate: [isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Passowrd is required"],
    minlength: [6, "Min password length is 6 characters"],
  },
  gender: {
    type: String,
  },
  dateOfBirth: {
    type: String,
    required: [true, "Date pf birth is required"],
  },
  mobileNumber: {
    type: Number,
    required: [true, "Mobile number is required"],
  },
  city: {
    type: String,
    required: [true, "City is required"],
  },
  state: {
    type: String,
    required: [true, "State is required"],
  },
  country: {
    type: String,
    required: [true, "Country is required"],
  },
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
