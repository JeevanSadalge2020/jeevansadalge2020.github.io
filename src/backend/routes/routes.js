var router = require("express").Router();
const authControllers = require("../controllers/authControllers");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Home" });
});

router.get("/signup", authControllers.get_signup);
router.post("/signup", authControllers.post_signup);
router.get("/login", authControllers.get_login);
router.post("/login", authControllers.post_login);

module.exports = router;
