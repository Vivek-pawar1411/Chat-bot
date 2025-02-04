function chatbotres(usermessage){
    const response={
        'hello': 'Hi there! How can I assist you today?',
        'how are you': 'I am just a bot, but I am doing great!',
        'service':'may i help you',
        'bye': 'Goodbye! Take care!',
        'default': 'Sorry, I didn`t understand that. Can you try again?'
    };
    const message=usermessage.toLowerCase();
    return response[message] || response['default'];
}
module.exports={chatbotres};