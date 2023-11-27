const authController = require("../controllers/authController");

const router = require("express").Router();

router.post("/signUp", authController.signUp);
router.get("/login", authController.login);
router.get("/logout", authController.logout);

module.exports = router;
