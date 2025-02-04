const {chatbotres}=require('../controller/chatbot.controller');

function socketevent(io){
    io.on('connection',(socket)=>{
        console.log("Connected");
        socket.on('chat',(message)=>{
            console.log('user says',message);
            const botres=chatbotres(message);
            socket.emit('botres',botres);
        });

        socket.on('disconnect',()=>{
            console.log('disconnected');
        })

    })
    
}

module.exports=socketevent;