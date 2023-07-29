const mongoose = require("mongoose");
const { userSchema } = require("../Schema/user.schema");

const UserModel = mongoose.model(userSchema);

module.exports = {
    UserModel
}