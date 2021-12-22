const express = require('express');
const database=require('./public/config.js')
const {Server} = require('socket.io');
const app = express();
const PORT = process.env.PORT || 8080;
const server = app.listen(PORT,()=>{
    console.log("Listening to port "+PORT);
})
app.use(express.static(__dirname+'/public'))
const io = new Server(server)

io.on('connection',async socket=>{
    console.log("Cliente conectado");
    let messages=await database.select().from('messages')
    socket.emit('messagelog',messages);
    socket.on('message',async data=>{
        await database.table('messages').insert(data)
        let messages=await database.select().from('messages')
        io.emit('messagelog',messages);
    })
})