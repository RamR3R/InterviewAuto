const express = require("express");
require("dotenv").config();
const { connection } = require("./db");
const { userRouter } = require("./routes/user.route");

const app = express();

app.use(express.json());

app.use("/user", userRouter);

app.listen(process.env.PORT, async () => {
  await connection;
  console.log(`server started on port ${process.env.PORT}`);
});
