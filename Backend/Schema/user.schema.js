const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    email : {
        unique : true,
        type : String,
        required : true
    },
    course :{
        type : String,
        required : true
    },
    data :[
        {
            interviewNumber : Number,
            TechnicalKnowledge: Number,
            ProblemSolving: Number,
            CriticalThinking: Number,
            CommunicationSkills: Number,
            UoF: Number,
        }
    ]
})

module.exports = {
    userSchema
}