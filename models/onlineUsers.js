const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: String,
  password: { type: String, required: true },
  language: String,
});

const OnlineUsers = mongoose.model("OnlineUsers", userSchema);

module.exports = OnlineUsers;