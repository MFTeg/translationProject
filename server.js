const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;

const User = require("./models/user.js");
const Message = require("./models/message");

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
      // If saved successfully, send the the new User document to the client
      res.json(dbUser);
    })
    .catch(function(err) {
      // If an error occurs, send the error to the client
      res.json(err);
    });
});

app.get("/users", function(req, res) {
  console.log("Do something");
  User.find({})
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get("/messages", function(req, res) {
  console.log("Get messages");
  Message.find({})
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
  Message.create(req.body)
    .then(function(dbMessage) {
      // If saved successfully, send the the new User document to the client
      res.json(dbMessage);
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

mongoose
  .connect(
    "mongodb://Mesay:Mesi463946@cluster0-shard-00-00-updmb.mongodb.net:27017,cluster0-shard-00-01-updmb.mongodb.net:27017,cluster0-shard-00-02-updmb.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority",
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
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
