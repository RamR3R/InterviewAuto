const express = require("express");
require("dotenv").config();
const { connection } = require("./Config/db");
const { userRoute } = require("./Routes/user.route");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/chat", userRoute);

app.listen(process.env.PORT, async () => {
  await connection;
  console.log(`server started on port ${process.env.PORT} `);
});

