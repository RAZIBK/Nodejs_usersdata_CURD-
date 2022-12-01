const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const dbConnect = require("./config/dbConnection");
const { notFound, errorHandler } = require("./middlewares/errorHander");

const userRoutes = require("./router/userRouter/userRouter");

const app = express();
dbConnect();

app.use(express.json());

app.use(cors());

app.use("/api/user", userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server is running at ${PORT}`));
