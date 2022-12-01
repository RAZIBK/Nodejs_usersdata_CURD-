const express = require("express");
const {
  registerUser,
  fetchUsersCtrl,
  updateUserCtrl,
  deleteUserCtrl,
  LoginUserCrtl,
  fetchSingleUserCtrl,
} = require("../../controllers/UserControllers/UserControllers");
const authmidlewarres = require("../../middlewares/authmidlewarres");
const userRoutes = express.Router();

userRoutes.post("/register", registerUser);
userRoutes.post("/login", LoginUserCrtl);
userRoutes.get("/", authmidlewarres, fetchUsersCtrl);
userRoutes.get("/:id", authmidlewarres, fetchSingleUserCtrl);
userRoutes.put("/", authmidlewarres, updateUserCtrl);
userRoutes.delete("/:id", authmidlewarres, deleteUserCtrl);

module.exports = userRoutes;
