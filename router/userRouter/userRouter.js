const express = require("express");
const {
  registerUser,
  fetcUsersCtrl,
  updateUserCtrl,
  deleteUserCtrl,
  LoginUserCrtl,
  fetcSingleUserCtrl,
} = require("../../controllers/UserControllers/UserControllers");
const authmidlewarres = require("../../middlewares/authmidlewarres");
const userRoutes = express.Router();

userRoutes.post("/register", registerUser);
userRoutes.post("/login", LoginUserCrtl);
userRoutes.get("/", authmidlewarres, fetcUsersCtrl);
userRoutes.get("/:id", authmidlewarres, fetcSingleUserCtrl);
userRoutes.put("/", authmidlewarres, updateUserCtrl);
userRoutes.delete("/:id", authmidlewarres, deleteUserCtrl);

module.exports = userRoutes;
