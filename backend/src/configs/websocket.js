const socketio = require('socket.io')
const parseStringAsArray = require('../utils/parseStringAsArray')
const calculateDistance = require('../utils/calculateDistance')

let io
const connections = [];

const setupWebsocket = server => {
  io = socketio(server)

  io.on('connection', socket => {
    const { latitude, longitude, techs } = socket.handshake.query

    connections.push({
      id: socket.id,
      coordinates: {
        latitude: Number(latitude),
        longitude: Number(longitude),
      },
      techs: parseStringAsArray(techs),
    })
  })
}

const findConnections = (coordinates, techs) => {
  return connections.filter(connection => {
    return calculateDistance(coordinates, connection.coordinates) < 10 &&
      connection.techs.some(tech => techs.includes(tech))
  })
}

const sendMessage = (to, message, data) => {
  to.forEach(connection => {
    io.to(connection.id).emit(message, data)
  })
}

module.exports = {
  setupWebsocket,
  findConnections,
  sendMessage
}