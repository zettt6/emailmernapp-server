const { Schema, model } = require('mongoose')
const mongoose = require('mongoose')

const Message = new Schema(
  {
    sender: {
      type: String,
      required: true,
    },
    recipient: {
      type: String,
      required: true,
    },
    topic: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

module.exports = model('Message', Message)
