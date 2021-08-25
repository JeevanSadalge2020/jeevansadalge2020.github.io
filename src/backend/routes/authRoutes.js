const authControllers = require("../controllers/authControllers");
var router = require("express").Router();

router.get("/signup", authControllers.get_signup);
router.post("/signup", authControllers.post_signup);
router.get("/login", authControllers.get_login);
router.post("/login", authControllers.post_login);

module.exports = router;
