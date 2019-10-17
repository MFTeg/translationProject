require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const socket = require("socket.io");
const translate = require("google-translate-api");
//const { Translate } = require("@google-cloud/translate");
// const translate = require("yandex-translate")(
//   "trnsl.1.1.20190829T040235Z.890db9d479f85b75.1b22e9727b69710bd1383f08aefedc29257a1853"
// );
const app = express();
//const PORT = process.env.PORT || 300;
const PORT = process.env.PORT || 3001;
const User = require("./models/user.js");
const Message = require("./models/message");
const projectId = process.env.PROJECT_ID;
//const translate = new Translate({ projectId });

// console.log(process.env.MONGO_USERNAME);
// console.log(process.env.MONGO_PASSWORD);

// mongoose
//   .connect(
//     "mongodb://" +
//       process.env.MONGO_USERNAME +
//       ":" +
//       process.env.MONGO_PASSWORD +
//       "@cluster0-shard-00-00-updmb.mongodb.net:27017,cluster0-shard-00-01-updmb.mongodb.net:27017,cluster0-shard-00-02-updmb.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority",
//     { useNewUrlParser: true }
//   )
//   .then(() => {
//     console.log("Database connected");
//   })
//   .catch(error => {
//     console.log(error);
//   });

// app.use(
//   bodyParser.urlencoded({
//     extended: false
//   })
// );

app.use(bodyParser.json());

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//  App routes
app.post("/data", function(req, res) {
  console.log(req.body);
  User.create(req.body)
    .then(function(dbUser) {
      // If saved successfully, send the the new User document to the client
      res.json(dbUser);
    })
    .catch(function(err) {
      // If an error occurs, send the error to the client
      res.json(err);
    });
});

app.post("/signin", function(req, res) {
  console.log(req.body);
  User.findOne(req.body)
    .then(function(dbUser) {
      console.log("Signed in");
      console.log(dbUser);
      // If saved successfully, send the the new User document to the client
      if (dbUser) {
        res.json({
          id: dbUser._id,
          message: "Successfully signed in",
          status: 200
        });
      } else {
        res.json({
          message: "Invalid email or password",
          status: 403
        });
      }
    })
    .catch(function(err) {
      // If an error occurs, send the error to the client
      res.json(err);
    });
});

app.get("/user/:id", function(req, res) {
  console.log(req.params);
  let id = req.params.id;
  User.findById(id).then(data => res.json(data));
});

app.post("/users", function(req, res) {
  console.log("Do something");
  console.log(req.body);
  User.find({
    fullName: {
      $regex: req.body.query,
      $options: "i"
    }
  })
    .then(data => {
      let userList = [];
      for (let i = 0; i < data.length; i++) {
        userList.push({
          _id: data[i]._id,
          fullName: data[i].fullName,
          email: data[i].email
        });
      }

      User.find({
        email: {
          $regex: req.body.query,
          $options: "i"
        }
      })
        .then(results => {
          let listLen = userList.length;
          console.log(userList);
          console.log(results);
          console.log(listLen);
          for (let i = 0; i < results.length; i++) {
            let repeat = false;

            for (let j = 0; j < listLen; j++) {
              repeat = results[i]._id.toString() === userList[j]._id.toString();
              if (repeat) {
                break;
              }
            }

            if (!repeat) {
              userList.push({
                _id: results[i]._id,
                fullName: results[i].fullName,
                email: results[i].email
              });
            }
          }

          res.json(userList);
        })
        .catch(err => console.log(err));
    })
    .catch(err => {
      console.log(err);
    });
});

app.get("/messages", function(req, res) {
  console.log("Get messages");
  Message.find({})
    .populate("senderId")
    .populate("reciverId")
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
    });
});

app.post("/send", function(req, res) {
  console.log("Send message");
  console.log(req.body);
  User.findOne({
    email: req.body.receiverEmail
  })
    .then(data => {
      console.log(data);

      let messageData = {
        language: req.body.language,
        senderId: req.body.senderId,
        reciverId: data._id,
        msgContent: req.body.msgContent
      };
      Message.create(messageData).then(function(dbMessage) {
        // If saved successfully, send the the new User document to the client
        res.json(dbMessage);
      });
    })

    .catch(function(err) {
      // If an error occurs, send the error to the client
      res.json(err);
    });
  //  Get the properties from the front end via req.body
  //  Find a way to get the User ObjectId when a message is sent

  //  Create a new message
});

app.get("/inbox", function(req, res) {
  //  Retrieve a number of messages from a user utilizing the User ObjectId
  //  Use .populate(<Schema property>) to get the actual name(s) to display
});

app.get("/", function(req, res) {
  res.send("Routing");
});

// app.get("/*", function(req, res) {
//   console.log(__dirnamme);

//   res.sendFile(path.join(__dirname, "/public/index.html"));
// });

mongoose
  .connect(
    "mongodb://" +
      process.env.MONGO_USERNAME +
      ":" +
      process.env.MONGO_PASSWORD +
      "@cluster0-shard-00-00-updmb.mongodb.net:27017,cluster0-shard-00-01-updmb.mongodb.net:27017,cluster0-shard-00-02-updmb.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority",
    // "mongodb+srv://Mesay:Mesi463946@cluster0-updmb.mongodb.net/test?retryWrites=true&w=majority",
    // process.env.MONGODB_URI ||
    //   "mongodb://Mesay:Mesi463946@cluster0-shard-00-00-vfzwn.mongodb.net:27017,cluster0-shard-00-01-vfzwn.mongodb.net:27017,cluster0-shard-00-02-vfzwn.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority",
    // "mongodb+srv://Mesay:Mesi463946@cluster0-vfzwn.mongodb.net/test?retryWrites=true&w=majority",
    // mongodb+srv:Mesay:<>@cluster0-vfzwn.mongodb.net/test?retryWrites=true&w=majority
    // "mongodb://Mesay:Mesi463946@cluster0-updmb.mongodb.net/test?retryWrites=true&w=majority",
    // "mongodb://Mesay:Mesi463946@cluster0-shard-00-00-updmb.mongodb.net:27017,cluster0-shard-00-01-updmb.mongodb.net:27017,cluster0-shard-00-02-updmb.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority"
    { useNewUrlParser: true }
  )

  .then(() => {
    console.log("DB connected");
  })
  .catch(err => {
    console.log(err);
  });

// Start the API server
let server = app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

// Socket setup & pass server
var io = socket(server);
io.on("connection", socket => {
  console.log("made socket connection", socket.id);

  // Handle chat event
  socket.on("chat", function(data) {
    console.log("Getting socket data");
    console.log(data);

    // if (data.handle === "bob") {
    //   var lang = "ru";
    // } else {
    //   var lang = "es";
    // }

    //  Search for data.handle in the User collection and return the preferred language of the user
    let userLang;
    User.findOne({
      email: data.handle
    })
      .then(user => {
        userLang = user.language;
        data.handle = user.fullName;

        User.findById(data.senderId).then(dbUser => {
          data.sender = dbUser.fullName;
          console.log(data.message);
          console.log(userLang);

          translate(data.message, { to: userLang }).then(res=>{
            console.log(res);
            data.messageT = res;
            console.log(data);
            io.sockets.emit("chat", data);
          }) 
            
          });
          // async function translateText(text, target) {
          //   let [translations] = await translate.translate(text, target);
          //   console.log(translations);
          //   data.messageT = translations;
          //   io.sockets.emit("chat", data);
          // }
          // translateText(data.message, userLang);
        });

        // const text = "Hello, world!";
        // const target = "am";

        // console.log("Text:", text);
        // console.log("Translation:", translation);

        // translate.translate(data.message, { to: userLang }, function(err, res) {
        //   console.log("Get message text");
        //   console.log(res.text);
        //   data.messageT = res.text;
        //   io.sockets.emit("chat", data);
        // });
      })
      .catch(err => {
        console.log(err);
      });
  });

  // Handle typing event
  socket.on("typing", function(data) {
    socket.broadcast.emit("typing", data);
  });

  io.sockets.on("connection", function(socket) {
    socket.on("create", function(room) {
      socket.join(newRoom);
    });
  });
});
