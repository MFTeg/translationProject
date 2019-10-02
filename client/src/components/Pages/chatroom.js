// import React, {Component} from "react";

// // import Navbar from "../Navbar/Navbar";
// // import Footer from "../Navbar/Navbar";  
// // import { Link } from "react-router-dom";
     
// import io from "socket.io-client";
// let socket = io.connect(`http://localhost:3001`);

// socket.on("connected", function(data) {
//     console.log("We are connected")
//     console.log(data);
// })


// // socket.on("signUpToChatroom", function(data) {
// //     console.log("ChatroomData")
// //     console.log(data);

// // })

// class Chat extends React.Component {
//     constructor(){
//     super()
//     this.state = {
//         message: "",
//         handle: ""
//       }
//     }
  

//       componentDidMount() {
//         var userName;
//         socket.on("signUpToChatroom", function(data) {
//           console.log("MessageJS, on Chat")
//           console.log(data);
//            var userList = document.getElementById("userList")
//         //    var message = document.getElementById("message")
//         //    var handle = document.getElementById("handle")
//         //  message.value = " "
//         //  handle.value = " "
//             userName = data.userName
//           userList.innerHTML +=
//             "<p><strong>" +
//             data.userName +
//             ": </strong>" +
//             data.language +
            
       
//             "<br></p>";

//         });
// socket.on("chatlog", function(data) {
//     console.log("ChatroomData")
//     console.log(data);
//     console.log("username"+ userName)
//     var output = document.getElementById("output")
//     var message = document.getElementById("message")
//     var handle = document.getElementById("handle")

//     message.value = " "
//     handle.value = " "
//     output.innerHTML +=
//     "<p><strong>" +
//     // userName +
//     ": </strong>" +
//     data.message +
    

//     "<br></p>";
// })
            

//       }
  
      
//       ChatInfo = event => {
//         console.log(event.target.id)
      

//         this.setState({
//           [event.target.id]: event.target.value
//         });
    
     
//       };
     
//       Chatbox = () => {
//         console.log(this.state);
//           socket.emit("chatroom", {
//             message: this.state.message,
//             handle: this.state.handle
//           });

//         this.setState({
//             message: "",
//             handle: ""
//         })
//       //   // });
//       };

//     render() {
//         return (
//             <div>
//                 <div id = "userList">
//             <h2>Mario Chat</h2>
            
//             </div> */}
//             <div id="chat-window">
//                 <div id="output"></div>
//                 <div id="feedback"></div>
//             </div>
//             <input id="handle" type="text" placeholder="Handle" 
//             onChange={event => this.ChatInfo(event)}/>
//             <input id="message" type="text" placeholder="Message"
//              onChange={event => this.ChatInfo(event)}/> />
           
//             <button id="send"
//                     onClick={() => this.Chatbox()}>
//              Send</button>
        
//             </div>
//     );
// }
// }

// export default Chat;


    