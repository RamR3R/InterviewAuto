const express = require("express");
const userRoute = express.Router();
const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
  apiKey: process.env.AIKey,
});

const openai = new OpenAIApi(config);

let ChatHistory = [];

let user = {}

userRoute.post("/test", async (req, res) => {
  const { prompt } = req.body;
  ChatHistory.push({ role: "user", content: prompt });
  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: ChatHistory,
    });
    ChatHistory.push(completion.data.choices[0].message);
    console.log(completion.data.choices[0].message);
    res.send(completion.data.choices[0].message);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

userRoute.post("/start", async (req, res) => {
  const params = req.query.sub;
  user.email = req.body.email;
  user.course = params;
  let sub = "";
  ChatHistory = [];
  question = [];
  if (params === "Node") {
    sub = `Node.js
            JavaScript
            Asynchronous
            Event Loop
            Callback
            Promise
            Async/Await
            HTTP
            Express.js
            Middleware
            Routing
            API
            NPM (Node Package Manager)
            Package.json
            Modules
            CommonJS`;
  } else if (params == "React") {
    sub = `JSX (JavaScript XML)
            Components
            State
            Props
            Rendering
            Virtual DOM
            Hooks (useState, useEffect, etc.)
            Functional Components
            Class Components
            Lifecycle Methods (e.g., componentDidMount, componentDidUpdate)
            Reconciliation
            React Router
            React Context API
            Redux
            Flux Architecture
            Actions
            Reducers
            Store`;
  } else if (params == "Java") {
    sub = `abstract
            assert
            boolean
            break
            byte
            case
            catch
            char
            class
            const (deprecated and not used)
            continue
            default
            do
            double
            else
            enum (added in Java 5)
            extends
            final
            finally
            float
            for
            goto (not used)
            if
            implements
            import
            instanceof
            int
            interface
            long
            native
            new`;
  }

  ChatHistory.push({
    role: "user",
    content: `Act as an interviewer and ask me exactly one question from the below topics. ${sub}`,
  });

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: ChatHistory,
    });
    ChatHistory.push(completion.data.choices[0].message);
    question.push(completion.data.choices[0].message.content);
    res.send(completion.data.choices[0].message.content);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

userRoute.post("/submit", async (req, res) => {
  try {
    const { prompt } = req.body;
    let feedback = req.query.feedback;
    console.log(feedback);
    if (feedback == 1) feedback = "do";
    else feedback = "Don't";
    ChatHistory.push({
      role: "user",
      content: `${prompt} . this is my response to the above question keep a note of it  and ${feedback} provide a feed back and ask the next question in the interview.`,
    });
    console.log(ChatHistory, feedback);

    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: ChatHistory,
    });
    ChatHistory.push(completion.data.choices[0].message);    
    res.send(completion.data.choices[0].message.content);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

userRoute.post("/next", async (req, res) => {
  try {
    ChatHistory.push({
      role: "user",
      content: `Ask the next question and not be included in ${JSON.stringify(
        question
      )}`,
    });

    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: ChatHistory,
    });
    ChatHistory.push(completion.data.choices[0].message);
    question.push(completion.data.choices[0].message.content);
    res.send(completion.data.choices[0].message.content);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

userRoute.post("/logout", async (req, res) => {
  try {
    ChatHistory.push({
      role: "user",
      content: `Based on the above questions and answers give a  feedback   using the following rubrics
          Technical Knowledge: The interviewer will gauge your understanding of core technical concepts related to the field you're being interviewed for. This could include knowledge of programming languages, algorithms, data structures, specific frameworks, or relevant technologies.
    
    Problem-Solving Skills: You might be presented with hypothetical scenarios or theoretical problems to solve. The interviewer will assess your ability to approach problems logically, break them down into smaller parts, and devise solutions using your technical knowledge.
    
    Critical Thinking: Your capacity to analyze information critically will be examined. This involves evaluating various options, considering pros and cons, and selecting the most appropriate solution or approach.
    
    Communication Skills: It's not just about knowing the answers; you should be able to articulate your thoughts effectively. Clear and concise communication is vital in a technical role, as you may need to collaborate with teammates or explain complex concepts to non-technical stakeholders.
    
    Understanding of Fundamentals: A solid grasp of the foundational principles is crucial. The interviewer may ask questions about basic concepts in the field to assess whether you have a strong understanding of the fundamentals.
    Rate each key out of 10 and  and give the response in json format and calculate the average `,
    });

    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: ChatHistory,
    });
    ChatHistory.push(completion.data.choices[0].message);
    let data = JSON.parse(completion.data.choices[0].message.content);
    let result ={};
    console.log(data);
    
    result.TechnicalKnowledge = data["Technical Knowledge"];
    result.ProblemSolving = data["Problem-Solving Skills"];
    result.CriticalThinking = data["Critical Thinking"];
    result.CommunicationSkills = data["Communication Skills"];
    result.UoF = data["Understanding of Fundamentals"];
    console.log(result);
    user.data = result;

    res.send(result);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

module.exports = { userRoute };
