const jwt = require("jsonwebtoken");
const User = require("../../models/user");
const bcrypt = require("bcryptjs");

// // NOTEHANDLE ERROR
function handleErrors(err) {
  let errors = { email: "", password: "" };
  if (err.code === 11000) {
    errors.email = "That email is already registered";
    return errors;
  }
  if (err.message.includes("User validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  if (err.message.includes("Invalid password")) {
    errors.password = "Invalid password";
  }

  if (err.message.includes("User does not exists")) {
    errors.email = "User does not exists";
  }

  if (err.message.includes("Authentication failed")) {
    errors.email = "Authentication failed";
  }
  return errors;
}

const createToken = id => {
  return jwt.sign({ id }, "secret");
};

module.exports.get_signup = (req, res) => {
  res.render("signup", { title: "Signup" });
};

module.exports.get_login = (req, res) => {
  res.render("login", { title: "Login" });
};

module.exports.post_signup = async (req, res) => {
  //   const date = req.body.dateOfBirth;
  //   BUGchange user model date to DATE format in later StaticRange. Currently it is string
  const {
    name,
    email,
    password,
    gender,
    mobileNumber,
    city,
    state,
    country,
    dateOfBirth,
  } = req.body;
  try {
    const user = await User.create({
      name,
      email,
      password,
      gender,
      dateOfBirth,
      mobileNumber,
      city,
      state,
      country,
    });
    res.status(201).json({ user });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.post_login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    // console.log(user);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: 24 * 1000 * 60 * 60 });
    res.status(200).json({ user: user.id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};
