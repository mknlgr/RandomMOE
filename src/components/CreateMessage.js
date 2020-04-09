import React, { Component } from 'react';

class CreateMessage extends Component {

    state = {
        content: ''
    }

    onChange = (e) => this.setState({content: e.target.value}); 
    onSubmit = (e) => {
        e.preventDefault();
        this.props.createMessage("You", this.state.content);
        this.setState({content: '', user: 'You' })
    }
  render() {    

    return (
	
			  
    
        
    
    
        
    

	<div class="input-area">
            <form  id="input" class="flex" onSubmit = {this.onSubmit}>
				<div class="input-area">
					<input class="textarea" type="text" autocomplete="nope" placeholder="Type Message Here..." value={this.state.content} onChange={this.onChange} />
				</div>
				<div class="action-area">
					<input type="submit" value="Send" className = "send" />
				</div>
            </form>
			</div>
    )
  };
}



export default CreateMessage;
