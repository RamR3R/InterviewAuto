const express = require("express");
require("dotenv").config();
const { connection } = require("./Config/db");
const { userRoute } = require("./route/user.route");

const app = express();


app.use(express.json());

app.use("/user", userRoute);

app.listen(process.env.PORT, async () => {
  await connection;
  console.log(`server started on port ${process.env.PORT} `);
});

