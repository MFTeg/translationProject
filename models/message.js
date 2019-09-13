const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  userName: { type: String, required: true },
  password: { type: String, required: true },
  fullName: String,
  language: String,

  date: { type: Date, default: Date.now }
});

const User = mongoose.model("Message", messageSchema);

module.exports = Message;
