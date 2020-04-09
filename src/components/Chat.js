import React, { Component } from 'react';
import Messages from './Messages';
import PropTypes from 'prop-types';

class Chat extends Component {

  constructor(props) {
    super(props)

    this.state = {
        backgroundChatColor: this.props.backgroundChatColor
    }

}   

 componentDidUpdate () {
   if(this.state.backgroundChatColor != this.props.backgroundChatColor) {
     this.setState({backgroundChatColor: this.props.backgroundChatColor})
   }
 }

  render() {    

    return (
        this.props.chatMessages.map(chatItems => (
            <Messages backgroundChatColor = {this.state.backgroundChatColor} key = {chatItems.id} chatItems = {chatItems}/>
        
     ))
     
    );
  }
}

Chat.propTypes = {
    chatMessages: PropTypes.array.isRequired
}

export default Chat;