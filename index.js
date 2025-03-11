require('dotenv').config()
const WebSocket = require('ws')
const wss = new WebSocket.Server({
    port: process.env.PORT || 3000
})

function onMessage(ws, data){
    console.log(data.toString())
    ws.send('Received!')
}
function onError(ws, err){
    console.log(err)
    ws.send('Error')
}
function onConnection(ws, req){
    console.log('Connected')
    ws.on('message', data => onMessage(ws, data) )
    ws.on('error', err => onError(ws, err))
}

wss.on('connection', onConnection)

console.log(`Websocket server is running at http://localhost:${process.env.PORT}`)