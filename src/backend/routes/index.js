var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Home" });
});

router.get("/doctors", function (req, res, next) {
  res.render("doctor", { title: "Doctor" });
});

router.get("/hospitals", function (req, res, next) {
  res.render("hospital", { title: "Hospital" });
});

router.get("/treatment", function (req, res, next) {
  res.render("treatment", { title: "Treatment" });
});

router.get("/about", function (req, res, next) {
  res.render("about", { title: "About Us" });
});

router.get("/login", function (req, res, next) {
  res.render("login", { title: "Log In" });
});

router.get("/faq", function (req, res, next) {
  res.render("faq", { title: "FAQ" });
});

router.get("/tvastra-plus", function (req, res, next) {
  res.render("tvastra-plus", { title: "TVASTRA Plus" });
});

router.get("/submit-query", function (req, res, next) {
  res.render("submit-query", { title: "Submit Your Query" });
});

router.get("/about-hospital", function (req, res, next) {
  res.render("about-hospital", { title: "About Hospital" });
});

router.get("/doctor-profile", function (req, res, next) {
  res.render("doctor-profile", { title: "Doctor's Profile" });
});

router.get("/appointment", function (req, res, next) {
  res.render("appointment", { title: "Appointment" });
});

router.get("/contact-us", function (req, res, next) {
  res.render("contact-us", { title: "Contact Us" });
});

router.get("/sign-up", function (req, res, next) {
  res.render("signup", { title: "Contact Us" });
});

module.exports = router;
