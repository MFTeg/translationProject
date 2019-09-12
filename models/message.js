const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  // userName: { type: String, required: true },
  // password: { type: String, required: true },
  // fullName: String,
  language: String,
  senderId: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true
  },
  reciverId: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true
  },

  msgContent: {
    type: String,
    required: true
  },

  date: { type: Date, default: Date.now }
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
