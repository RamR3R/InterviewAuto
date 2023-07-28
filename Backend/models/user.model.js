const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  subject: {
    type: String,
    required: true,
  },
  data: [
    {
      question: {
        type: String,
      },
      answer: {
        type: String,
      },
    },
  ],
});

const UserModel = mongoose.model("user", userSchema);

module.exports = { UserModel };
