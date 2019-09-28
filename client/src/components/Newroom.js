import React from 'react';

class Newroom extends React.Component {

    state = {
        newroom: "",
        
    }

    render() {
        return (
            <div className="new-room-form">
            <form>
                <input id="newroom" type="text" placeholder="Create a room" required/>
                <button id="create-room-btn" type="submit">+</button>
            </form>
        </div>
        )
    }
}