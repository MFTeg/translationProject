<<<<<<< HEAD
// Make connection



  // constructing a queryURL variable we will use instead of the literal string inside of the ajax method
 
var socket = io.connect('http://localhost:4000');
=======
var socket = io.connect("http://localhost:4000");
>>>>>>> d2c857fd638e985cdd33ea505d07d7d8452f99f8

// Query DOM
var message = document.getElementById("message"),
  messageT = document.getElementById("message"),
  handle = document.getElementById("handle"),
  btn = document.getElementById("send"),
  output = document.getElementById("output"),
  feedback = document.getElementById("feedback");
submit = document.getElementById("create-room-btn");

var lang = prompt("welcome, what language would you to translate to?");
// Emit events
btn.addEventListener("click", function() {
  socket.emit("chat", {
    message: message.value,
    handle: handle.value,
    messageT: message.value,
    language: lang
  });
  message.value = "";
  messageT.value = "";
});

message.addEventListener("keypress", function() {
  socket.emit("typing", handle.value);
});

// Listen for events
<<<<<<< HEAD
socket.on('chat', function(data){
    var text= 'hello';
    var lang= 'fr'
    var key = 'trnsl.1.1.20190829T040235Z.890db9d479f85b75.1b22e9727b69710bd1383f08aefedc29257a1853'
    var queryURL = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20190829T040235Z.890db9d479f85b75.1b22e9727b69710bd1383f08aefedc29257a1853&text=hello&lang=fr"
    var queryURL2 = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=" + key + "&text=" + text + "&lang=" + lang
    $.ajax({
      url: queryURL2,
      method: "GET"
    }).then(function(response) {
      console.log(response.text);
    });
    feedback.innerHTML = '';
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message +'<br>'+  data.messageT + '<br></p>';
=======
socket.on("chat", function(data) {
  feedback.innerHTML = "";
  output.innerHTML +=
    "<p><strong>" +
    data.handle +
    ": </strong>" +
    data.message +
    "<br>" +
    data.messageT +
    "<br></p>";
>>>>>>> d2c857fd638e985cdd33ea505d07d7d8452f99f8
});

socket.on("typing", function(data) {
  feedback.innerHTML = "<p><em>" + data + " is typing a message...</em></p>";
});

submit.addEventListener("click", function() {
  var newRoom = getElementById("newroom")
    .value()
    .trim();
  var socket = io.connect();
  socket.emit("create", newRoom);
  console.log(newRoom);

});
