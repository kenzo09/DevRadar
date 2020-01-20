const express = require('express')
const monoose = require('mongoose')
const http = require('http')
const cors = require('cors')
const dotenv = require('dotenv')
const routes = require('./routes')
const { setupWebsocket } = require('./configs/websocket')

// Iniciar as configurações
dotenv.config()

const app = express()
const server = http.Server(app)

setupWebsocket(server)

monoose.connect(process.env.DB_OMNISTACK, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})

app.use(cors())
app.use(express.json())
app.use(routes)

server.listen(5005);
