const User = require("../../models/user");
var moment = require("moment"); // require
// // NOTEHANDLE ERROR
// function handleErrors(err) {
//   // console.log(err.message, err.code);
//   let errors = { email: "", password: "" };
//   // duplicate email error
//   if (err.code === 11000) {
//     errors.email = "that email is already registered";
//     return errors;
//   }
//   // validation errors
//   if (err.message.includes("User validation failed")) {
//     Object.values(err.errors).forEach(({ properties }) => {
//       errors[properties.path] = properties.message;
//     });
//   }
//   return errors;
// }

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
    console.log(user);
    res.status(201).json(user);
    // res.status(201).send(user);
  } catch (err) {
    // const errors = handleErrors(err);
    res.status(400).json({ err });
  }
};

module.exports.post_login = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  res.send("user login");
};
