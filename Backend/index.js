const bodyParser = require('body-parser');
const express = require('express');
const cors = require("cors");
require("dotenv").config();
const { connection } = require('mongoose');
const { Configuration, OpenAIApi } = require('openai');

const config = new Configuration({
    apiKey : process.env.key
});

const openai = new OpenAIApi(config);

// server setup

const app = express()
const port = 3000;
app.use(bodyParser.json());
app.use(cors());
let ChatHistory = [];
let question = [];


app.post("/test", async(req,res)=>{
    const {prompt} = req.body;
    ChatHistory.push({ role: "user", content: prompt });
    try{
        const completion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: ChatHistory
        });
        ChatHistory.push(completion.data.choices[0].message);
        console.log(completion.data.choices[0].message);
        res.send(completion.data.choices[0].message);
        }
        catch(err)
        {
            res.status(400).json({msg:err});
        }
});

app.get('/', (req, res) => res.send('Hello World!'));
app.post("/start", async(req,res)=>{
    const params = req.query.sub;
    const {email} = req.body;
    let sub = "";
    ChatHistory = [];
    question = [];
    if(params === "Node")
    {
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
        CommonJS`
    }
    else if(params == "React"){
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
    }
    else if(params == "Java"){
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
        new`
    }

    ChatHistory.push({ role: "user", content: `Act as an interviewer and ask me exactly one question from the below topics. ${sub}` });

    try{
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: ChatHistory
    });
    ChatHistory.push(completion.data.choices[0].message);
    question.push(completion.data.choices[0].message.content);
    res.send(completion.data.choices[0].message);
    }
    catch(err)
    {
        res.status(400).json({msg:err});
    }


})

app.post("/submit",async(req,res)=>{
    try{
        const {prompt} = req.body;
        let feedback = (req.query.feedback);
        console.log(feedback)
        if(feedback == 1)
        feedback = "do";
        else
        feedback = "Don't";
        ChatHistory.push({ role: "user", content: `${prompt} . this is my response to the above question keep a note of it  and ${feedback} provide a feed back and ask the next question in the interview.` });
        console.log(ChatHistory,feedback);

    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: ChatHistory
    });
    ChatHistory.push(completion.data.choices[0].message);
    res.send(completion.data);
    }
    catch(err)
    {
        res.status(400).json({msg:err.message});
    }
})

app.post("/next",async(req,res)=>{
    try{
        ChatHistory.push({ role: "user", content: `Ask the next question and not be included in ${JSON.stringify(question)}` }); 

    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: ChatHistory
    });
    ChatHistory.push(completion.data.choices[0].message);
    question.push(completion.data.choices[0].message.content);
    res.send(completion.data);
    }
    catch(err)
    {
        res.status(400).json({msg:err});
    }
})

app.post("/logout",async(req,res)=>{
    try{
        ChatHistory.push({ role: "user", content: `The feedback should be evaluated using the following rubrics
        1.Subject Matter Expertise
        2.Communication skills
        3.Hiring criteria : Options are Reject, Waitlist, Hire and Strong Hire;

        Feedback for Subject Matter Expertise and Communication skills and display the hiring status should contain ratings on my interview responses from 0 - 10 give this out in a json file format alone` }); 

    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: ChatHistory
    });
    ChatHistory.push(completion.data.choices[0].message);
    res.send(completion.data);
    }
    catch(err)
    {
        res.status(400).json({msg:err});
    }
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});