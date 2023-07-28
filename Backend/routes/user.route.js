const express = require("express");
const userRouter = express.Router();

const axios = require("axios");

const openAIUrl = "https://api.openai.com/v1/completions";
const openAIKey = "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"; // Replace with your actual OpenAI API key

const subjects = ["node js", "java", "mern"];

userRouter.post("/api/start-interview", async (req, res) => {
  const { email, subject } = req.body;

  if (!subjects.includes(subject)) {
    return res.status(400).json({ error: "Invalid subject selection." });
  }

  try {
    const prompt = `I want you to act as an interviewer. I will be the candidate and you will ask me the interview questions for the position of Backend Software Developer.
    Generate random important interview questions for ${subject} for Backend Software Developer. and dont ask question related to experience\n`;
    console.log(prompt);
    const response = await axios.post(
      openAIUrl,
      {
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 50,
        temperature: 0,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${openAIKey}`,
        },
      }
    );

    // console.log(response);
    const filteredResponse = {
      generatedQuestions: response.data.choices[0].text,
    };

    res.json(filteredResponse);
  } catch (error) {
    console.error("Error during question generation:", error);
    res
      .status(500)
      .json({ error: "Something went wrong during question generation." });
  }
});

module.exports = { userRouter };
