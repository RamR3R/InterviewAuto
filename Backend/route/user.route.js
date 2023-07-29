const express = require("express");
const userRoute = express.Router();
const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
  apiKey: process.env.AIKey,
});

const openai = new OpenAIApi(config);

let ChatHistory = [];

userRoute.post("/start", async (req, res) => {
  ChatHistory = [];
  const params = req.query.sub;
  //   const { email } = req.body;
  let sub = "";
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
    content: `Act as an interviewer and ask me exactly one question from the below topics. ${sub} and mention the question in a variable called question`,
  });

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: ChatHistory,
    });
    ChatHistory.push(completion.data.choices[0].message);
    res.send(completion.data.choices[0].message);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

userRoute.post("/submit", async (req, res) => {
  try {
    const { prompt } = req.body;
    ChatHistory.push({
      role: "user",
      content: `${prompt} This is a answer , judge based on these 2 key points 
      Content and Relevance and Communication and Delivery and 
      To score each answer, you can use a rating scale, such as:
      5: Excellent - The answer is highly relevant, well-structured, and effectively communicated with strong technical knowledge.
4: Good - The answer is mostly relevant and well-presented, but some areas could be improved or elaborated upon.
3: Satisfactory - The answer meets the minimum requirements but lacks depth or clarity.
2: Fair - The answer is somewhat relevant, but significant improvements are needed in content and delivery.
1: Poor - The answer is irrelevant, unclear, or poorly communicated, showing a lack of understanding.  Give the rating and mention the ating in the variable as rate
 `,
    });

    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: ChatHistory,
    });
    ChatHistory.push(completion.data.choices[0].message);

    res.send(completion.data);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

userRoute.post("/next", async (req, res) => {
  try {
    ChatHistory.push({
      role: "user",
      content:
        "Just generate the next question bases on above selected subject  and methion the  question in the variable called question ",
    });

    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: ChatHistory,
    });
    ChatHistory.push(completion.data.choices[0].message);
    res.send(completion.data);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

userRoute.post("/logout", async (req, res) => {
  try {
    ChatHistory.push({
      role: "user",
      content: ` Based on the above questions and answers give a  feedback  evaluate using the following rubrics
      Theoretical Knowledge: Assess the candidate's understanding of core theoretical concepts related to the position.

      Problem-Solving: Evaluate the candidate's ability to apply theoretical knowledge to solve practical problems.
      
      Critical Thinking: Assess the candidate's ability to analyze complex scenarios and make informed decisions.
      
      Communication Skills: Consider how effectively the candidate communicates technical concepts and ideas.
      
      Depth of Understanding: Evaluate the candidate's level of comprehension and mastery of theoretical topics.
      
      Domain Expertise: Assess the candidate's knowledge and experience within the specific domain relevant to the role.
      
      Learning Ability: Consider the candidate's receptiveness to new information and willingness to learn.
      
      Analytical Skills: Assess the candidate's capacity to break down problems and analyze them systematically.
      
      Attention to Detail: Evaluate how accurately the candidate answers theoretical questions and handles nuances.
      
      Integration of Theory and Practice: Assess the candidate's ability to bridge the gap between theoretical concepts and real-world applications.
      rate each key out of 10 and make an average of 100 and store the score of each with respective key and then average in the variable called average`,
    });
    console.log(ChatHistory);

    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: ChatHistory,
    });
    ChatHistory.push(completion.data.choices[0].message);
    res.send(completion.data);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

module.exports = { userRoute };
