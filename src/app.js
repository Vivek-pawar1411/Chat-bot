const express=require('express');
const http=require('http');
const socketio=require('socket.io');
const chatbotres=require('./controller/chatbot.controller');
const socketevent=require('./socket/socket.event');

const app =express();
const server=http.createServer(app);
const io=socketio(server);

socketevent(io);


server.listen(6000);