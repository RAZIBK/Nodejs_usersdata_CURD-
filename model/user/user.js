const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      required: [true, "first name is required"],
      type: String,
    },
    lastName: {
      required: [true, "first name is required"],
      type: String,
    },
    middleName: {
      type: String,
    },

    email: {
      type: String,
      unique: true,
      required: [true, "email is required"],
    },
    phone: {
      type: String,
      unique: true,
      required: [true, "Phone is required"],
    },
    occupation: {
      type: String,
    },
    company: {
      type: String,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
