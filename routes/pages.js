const express = require("express");
const router = express.Router();
const userContoller = require("../controllers/users");

router.get(["/", "/index"], (req, res) => {
    res.render("index");
});

router.get("/register", (req, res) => {
    res.render("register");
});

router.get("/home", userContoller.isLoggedIn, (req, res) => {
    if (req.user) {
        res.render("home", { user: req.user });
      } else {
        res.redirect("/index");
      }
});

router.get("/profile", userContoller.isLoggedIn, (req, res) => {
    if (req.user) {
        res.render("profile", { user: req.user });
      } else {
        res.redirect("/index");
      }
});

module.exports = router;