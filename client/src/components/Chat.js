import React, { Component } from 'react';

export default class Chat extends Component {

    state = {
        output: "",
        feedback: "",
        handle: "",
        message: "",
    }

    render() {
        return (
            <div id="container">
                <div id="mario-chat">
                    <h2>Mario Chat</h2>

                    <div id="output"></div>
                    <div id="feedback"></div>
                </div>

                <input id="handle" type="text" placeholder="Handle" />
                <input id="message" type="text" placeholder="Message" />
                <button id="send">Send</button>

            </div>
        )
    }
}