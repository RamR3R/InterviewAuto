const express = require("express");
const userRouter = express.Router();
const { UserModel } = require("../models/user.model");
const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
  apiKey: process.env.AIKey,
});

const openai = new OpenAIApi(config);

userRouter.post("/start", async (req, res) => {
  try {
    const { email, subject } = req.body;

    const prompt = `generate a  one interview question on ${subject}`;

    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    const question = completion.data.choices[0].message.content;

    const newUser = new UserModel({
      email,
      subject,
      data: [
        {
          question,
        },
      ],
    });

    await newUser.save();

    res.send(question);
  } catch (err) {
    console.log(err);
    res.status(400).json({ msg: err });
  }
});

userRouter.patch("/users/:email", async (req, res) => {
  try {
    const { email } = req.params;
    const { answer } = req.body;

    // Find the user by email ID
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Save the updated user data
    await user.save();

    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: "Error updating user data" });
  }
});

module.exports = { userRouter };
