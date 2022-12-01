const expressAsyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const User = require("../../model/user/user");
const { generateToken } = require("../../config/token");


const registerUser = expressAsyncHandler(async (req, res) => {
  const userExists = await User.findOne({ email: req?.body?.email });
  if (userExists) throw new Error("User already exists");
  try {
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;

    const newuser = await User.create({
      firstName: req?.body?.firstName,
      lastName: req?.body?.lastName,
      middleName: req?.body?.middleName,
      email: req?.body?.email,
      phone: req?.body?.phone,
      occupation: req?.body?.occupation,
      company: req?.body?.company,
      password: req?.body?.password,
    });
    res.json(newuser);
  } catch (error) {
    res.json(error.message);
  }
});

const LoginUserCrtl = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  console.log(user);
  const isMatch = await bcrypt.compare(password, user.password);
  console.log(isMatch);

  if (!isMatch) {
    res.status(401);
    throw new Error("Your username or password is incorrect");
  } else {
    let token = generateToken(user?._id);

    res.json({ message: "Login successful", success: true, token: token });
  }
});

const fetchUsersCtrl = expressAsyncHandler(async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.json(error);
  }
});

const fetchSingleUserCtrl = expressAsyncHandler(async (req, res) => {
    try {
      const users = await User.findById(req.params.id);
      res.json(users);
    } catch (error) {
      res.json(error);
    }
  });

const updateUserCtrl = expressAsyncHandler(async (req, res) => {
  const id = req.user.id;
  try {
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;

    const userData = await User.findByIdAndUpdate(
      id,
      {
        firstName: req?.body?.firstName,
        lastName: req?.body?.lastName,
        middleName: req?.body?.middleName,
        email: req?.body?.email,
        phone: req?.body?.phone,
        occupation: req?.body?.occupation,
        company: req?.body?.company,
        password: req?.body?.password,
      },
      {
        new: true,
      }
    );

    console.log(userData);
    res.json({ userData });
  } catch (error) {
    res.json(error);
  }
});

const deleteUserCtrl = expressAsyncHandler(async (req, res) => {
  const id = req.params.id;
  try {
    const userData = await User.findByIdAndDelete(id);
    res.json({ userData });
  } catch (error) {
    res.json(error);
  }
});

module.exports = {
  registerUser,
  LoginUserCrtl,
  fetchSingleUserCtrl,
  fetchUsersCtrl,
  updateUserCtrl,
  deleteUserCtrl,
};
