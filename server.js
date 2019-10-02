require("dotenv").config();
var cookieParser = require('cookie-parser')
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const translate = require("yandex-translate")(
  "trnsl.1.1.20190829T040235Z.890db9d479f85b75.1b22e9727b69710bd1383f08aefedc29257a1853"
);
const app = express();
//const PORT = process.env.PORT || 300;
const PORT = process.env.PORT || 3001;
const User = require("./models/user.js");
const Message = require("./models/message");
const OnlineUsers = require("./models/onlineUsers.js");

// console.log(process.env.MONGO_USERNAME);
// console.log(process.env.MONGO_PASSWORD);



app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(bodyParser.json());

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose
  .connect(
    "mongodb://" +
      process.env.MONGO_USERNAME +
      ":" +
      process.env.MONGO_PASSWORD +
      "@cluster0-shard-00-00-updmb.mongodb.net:27017,cluster0-shard-00-01-updmb.mongodb.net:27017,cluster0-shard-00-02-updmb.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority",
    { useNewUrlParser: true,  useUnifiedTopology: true}
  )

  .then(() => {
    console.log("DB connected");
  })
  .catch(err => {
    console.log(err);
  });

  
const socket = require("socket.io");
let server = app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});  
var io = socket(server);
io.on("connection", socket => {

  var cookief =socket.handshake.headers.cookie; 
  
    console.log(cookief);
    // console.log(cookies)

  io.sockets.emit("connected",{
      Id: socket.id
  })


  socket.on('signIn', function (data) {
    console.log(data)
 
    OnlineUsers.create({
      userName: data.userName,
      password: data.password,
      language: data.language,
      cookie: cookief,
     }, function(err, OnlineUser){
       if(err){
         console.log("houston we have a problem")
         console.log(err)
       } 
       else {
         console.log("added to database")
         console.log(OnlineUser)
         OnlineUsers.find(function (err, res) {
          if (err) throw err;
          socket.emit('userList', res); 
      });
       }
    })

   })
 
  

socket.on("SignUpData", function(data){
  data.cookief = cookief
  console.log(data)
  
        User.create({
          fullName: data.fullName,
          userName:data.userName,
          password:data.password,
          email:data.email,
          language:data.language,
          cookie: cookief
        }, function(err, sender){
          if(err){
            console.log("houston we have a problem")
            console.log(err)
          } 
          else {
            console.log("added to database")
            console.log(sender)
          }
        });
  });

  socket.on("chatroom", function(data) {
    console.log("Getting socket data");
    console.log(data);

  
 

        translate.translate(data.message, { to: data.language }, function(err, res) {
        console.log(res.text);
        data.messageT = res.text
        io.sockets.emit('chatlog', {
          username: data.username,
          message: data.message,
          messageT: data.messageT
        });
       
        });  
      });
  

    




});
