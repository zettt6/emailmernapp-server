const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const router = require('./router')

const PORT = process.env.PORT || 4000
const app = express()

app.use(cors())
app.use(express.json())
app.use('/email', router)

const start = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://zet6:123@cluster0.zhswmvj.mongodb.net/?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    app.listen(PORT, () => {
      console.log(`Server has been started on ${PORT}`)
    })
  } catch (e) {
    console.log(e)
  }
}

start()
