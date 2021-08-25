const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcryptjs");

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
    maxlength: [15, "Max password length is 15 characters"],
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

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(8);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.post("save", function (doc, next) {
  next();
});

userSchema.statics.login = async function (email, password) {
  const user = await User.findOne({ email });
  if (user) {
    const salt = await bcrypt.genSalt(8);
    const a = await bcrypt.hash(password, salt);
    const auth = await bcrypt.compare(password, user.password);
    if (auth) return user;
    throw new Error("Invalid password");
  }
  throw new Error("User does not exists");
};

const User = mongoose.model("User", userSchema);

module.exports = User;
