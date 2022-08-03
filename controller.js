const User = require('./models/User')
const Message = require('./models/Message')

class emailController {
  async login(req, res) {
    try {
      const { username } = req.body
      const user = await User.findOne({ username })
      if (!user) {
        await User.create({ username })
      }
      return res.status(200).json({ message: 'User was logged in' })
    } catch (e) {
      console.log(e)
      res.status(500).json({ message: 'Server error' })
    }
  }

  async sendMessage(req, res) {
    try {
      const { sender, topic, recipient, text } = req.body
      const message = await Message.create({ sender, recipient, topic, text })
      await message.save()
      return res.status(200).json({ message: 'Your email was sended' })
    } catch (e) {
      console.log(e)
      res.status(500).json({ message: 'Server error' })
    }
  }

  async getReceivedMessages(req, res) {
    try {
      const { username } = req.query
      const messages = await Message.find({ recipient: username })
      res.json(messages)
    } catch (e) {
      console.log(e)
      res.status(500).json({ message: 'Server error' })
    }
  }

  async getSendedMessages(req, res) {
    try {
      const { sender, recipient } = req.query
      const messages = await Message.find({
        sender,
        recipient,
      })
      res.json(messages)
    } catch (e) {
      console.log(e)
      res.status(500).json({ message: 'Server error' })
    }
  }

  async searchUser(req, res) {
    try {
      const { search } = req.query
      const regex = new RegExp(search, 'i')
      const users = await User.find({ username: { $regex: regex } })
      res.json(users)
    } catch (e) {
      console.log(e)
      res.status(500).json({ message: 'Server error' })
    }
  }
}

module.exports = new emailController()
