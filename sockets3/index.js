
var express = require('express');
var socket = require('socket.io');
var translate = require("yandex-translate")(
    "trnsl.1.1.20190829T040235Z.890db9d479f85b75.1b22e9727b69710bd1383f08aefedc29257a1853"
);
var bodyParser = require("body-parser");


// App setup
var app = express();
var server = app.listen(4000, function(){
    console.log('listening for requests on port 4000,');
});

// Static files
app.use(express.static('public'));




// Socket setup & pass server
var io = socket(server);
io.on('connection', (socket) => {

    console.log('made socket connection', socket.id);

    // Handle chat event
    socket.on('chat', function(data){
        console.log(data.handle)
        console.log(data.message)

        if(data.handle === "bob"){
        var lang = 'ru'
        }
        else{
            var lang = 'en'  
        }
        translate.translate(data.messageT, { to: lang }, function(err, res) {
        console.log(res.text);
        data.messageT = res.text
        io.sockets.emit('chat', data);
        });
    });

    // Handle typing event
    socket.on('typing', function(data){
        socket.broadcast.emit('typing', data);
    });

});
