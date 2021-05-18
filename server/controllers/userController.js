const express = require("express");
const router = express.Router();
const userModel = require("../models/users/userModel");

const guard = require("../utils/guard");
//const validateUser = require("../../utils/validations/validationUser");

router.post("/register", userModel.reg);
router.post("/login", userModel.login);
router.post("/logout", guard, userModel.logout);
//router.get("/user", guard, UsersCtrl.getUserInfo);

module.exports = router;
