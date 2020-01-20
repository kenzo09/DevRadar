import socketio from 'socket.io-client'

const socket = socketio('http://192.168.0.11:5005', {
  autoConnect: false
})

const connect = (latitude, longitude, techs) => {
  socket.io.opts.query = {
    latitude,
    longitude,
    techs
  }
  
  socket.connect()
}

const disconnect = () => {
  if (socket.connected) {
    socket.disconnect()
  }
}

const subcribeToNewDev = (subcribeCallback) => {
  socket.on('newDev', subcribeCallback)
}

export {
  connect,
  disconnect,
  subcribeToNewDev
}