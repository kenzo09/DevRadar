const express = require('express')
const monoose = require('mongoose')
const routes = require('./routes')
const dotenv = require('dotenv')

// Iniciar as configurações
dotenv.config()

const app = express()

monoose.connect(process.env.DB_OMNISTACK, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})

app.use(express.json())
app.use(routes)

app.listen(5005)
