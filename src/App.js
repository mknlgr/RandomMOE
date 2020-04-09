//npm run build

import React, { Component } from 'react';
import Chat from './components/Chat';
//import SiteIntro from './components/SiteIntro';
import CreateMessage from './components/CreateMessage';
import * as openpgp from 'openpgp';
import './App.css';
import Peer from 'simple-peer'; 
import socketIOClient from 'socket.io-client';
//import data from 'emoji-mart/data/messenger.json'
//import { NimblePicker } from 'emoji-mart'
//import $ from 'jquery';


openpgp.initWorker({path: './dist/openpgp.worker.min.js'}); 

if(typeof localStorage.publicKey == 'undefined' || typeof localStorage.privateKey == 'undefined' || typeof localStorage.pass == 'undefined') {

  var cryptoArray = new Uint32Array(4);
  window.crypto.getRandomValues(cryptoArray);
  localStorage.pass = cryptoArray[2].toString()
  var options = {
    userIds: [{name: cryptoArray[3].toString(), email: cryptoArray[0] + '@' + cryptoArray[1] + '.com' }],
    numBits: 2048,
    passphrase: localStorage.pass
  }

  openpgp.generateKey(options).then(function(key) {
  localStorage.setItem('privateKey', key.privateKeyArmored);
  localStorage.setItem('publicKey', key.publicKeyArmored);

  })
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      chatMessages: [ 
      ],
      peerInfo: null,
      stream: null,
      peer: null,
      inConvo: false,
      backgroundImage: '',
      backgroundChatColor: ['#FFDAB9', '#FFD700']
    }
    
  }

  componentDidMount() {
    navigator.mediaDevices.getUserMedia({video:true, audio: true}).then(stream => {
      this.clientRef.srcObject = stream;
      this.clientRef.onloaddedmetadata = this.clientRef.play();
      this.forceUpdate();
    }).catch((err) => {
      navigator.mediaDevices.getUserMedia({video:false, audio: false}).then(stream => {
        this.forceUpdate();
      })
    })
  }

  componentDidCatch(err, info) {
    console.log(err);
    console.log(info);
  }

  componentDidUpdate( ) {
    console.log(this.state.backgroundChatColor);
  }

  socketConnection = (stream) => {
    var socket = socketIOClient.connect("merkroulette2.herokuapp.com");   
    this.setState({chatMessages: [...this.state.chatMessages, {id: this.state.chatMessages.length, user: "Merkle", message:"Verbinden met Server..."}]})
    socket.on('peer', (data) => {
      this.createPeer(data.initiator, stream);
      
      console.log("Server told client to become initiator: " + data.initiator);
      if(data.initiator) {
        this.state.peer.on("signal", (data) => {
          socket.emit("initiatorData", data);
          this.setState({chatMessages: [...this.state.chatMessages, {id: this.state.chatMessages.length, user: "Merkle", message:"Beschikbaarheid doorgeven aan de Server..."}]})
        })
      }
    });

      socket.on('joinInitiator', (data) => {
        this.setState({chatMessages: [...this.state.chatMessages, {id: this.state.chatMessages.length, user: "Merkle", message:"Verbinden met collega..."}]})
        this.state.peer.signal(data.data);
 

        if(!data.initiator) {
          var initiaitorSocketId = data.socketid;
          this.state.peer.on('signal', (data) => {
            socket.emit("backToInitiator", {socketid: initiaitorSocketId, data: data});
            this.setState({chatMessages: [...this.state.chatMessages, {id: this.state.chatMessages.length, user: "Merkle", message:"Data ontvangen van collega..."}]})
          })
        }
      })

      socket.on('toInitiatorFromServer', (data) => {
       
          this.state.peer.signal(data.data);  
          this.setState({chatMessages: [...this.state.chatMessages, {id: this.state.chatMessages.length, user: "Collega", message:"Verbinding maken met collega..."}]})
      })
  }

  submitButton = () => {
    console.log("Can Submit")
  }

  next = () => {
    this.setState({chatMessages: [...this.state.chatMessages, {id: this.state.chatMessages.length, user: "Merkle", message:"Op zoek naar collega..."}]})
    if(this.state.peer != null && typeof this.state.peer != 'undefined') {
        this.state.peer.destroy();
        this.setState({
          chatMessages: [ 
          ],
          peerInfo: null,
          stream: null,
          peer: null,
          inConvo: false,
        });
      }
          navigator.mediaDevices.getUserMedia({video:true, audio: true}).then(stream => {
            this.socketConnection(stream);
          }).catch((err) => { this.socketConnection(false)})
  }

  //Needs to be finished
  createPeer = (initiator, stream) => {
  var peer = new Peer({initiator: initiator, trickle: false, stream: stream});

  this.setState({inConvo: true});
  
    peer.on("error", (err) => {
      this.setState({chatMessages: [{id: this.state.chatMessages.length, user: "Merkle", message:  err.code + " Foutmelding. Verbind met een nieuwe collega of vernieuw de pagina."}]});
    })

    peer.on("connect", () => {
        peer.send(JSON.stringify({isPublicKey: true, peerPublicKey: localStorage.publicKey}))
        this.setState({chatMessages: []});
    })

    peer.on("data", async (data) => {
      data = JSON.parse(data);

      if(data.isPublicKey === true) {
        sessionStorage.setItem("peerPublicKey", data.peerPublicKey);
        this.setState({chatMessages: [{id: this.state.chatMessages.length, user: "Merkle", message:"Je kunt nu berichten verzenden!"}]});

      } else {

        let privKey = ( await openpgp.key.readArmored(localStorage.privateKey)).keys[0];
        await privKey.decrypt(localStorage.pass);

        let options = {
          message: await openpgp.message.readArmored(data.data),
          privateKeys: [privKey]
        }

        openpgp.decrypt(options).then( (plaintext) => {
          let newMessage = {
            id: this.state.chatMessages.length,
            user: data.user,
            message: plaintext.data 
          }

          this.setState({chatMessages: [...this.state.chatMessages, newMessage]});
        })
      }
    });

    peer.on("stream", (data) => {
      this.setState({peerStream: data});
      this.peerRef.srcObject = this.state.peerStream;
      this.peerRef.onloaddedmetadata = this.peerRef.play();
    });

    this.setState({peer: peer, inConvo: true});
    return peer;
  }


  createMessage = async (user, content) => {

      const newMessage = {
        id: this.state.chatMessages.length,
        user: user,
        message: content 
      }

      this.setState({chatMessages: [...this.state.chatMessages, newMessage]});
      let data = openpgp.message.fromText(content);

      let options = {
        message: data,
        publicKeys: ( await openpgp.key.readArmored(sessionStorage.peerPublicKey)).keys,
      }

      try {
      openpgp.encrypt(options).then( (ciphertext) => {
        let data = ciphertext.data;
        this.state.peer.send(JSON.stringify({user: 'Collega', data: data}));
      });    
    } catch (err) {
      this.setState({chatMessages: [{id: this.state.chatMessages.length, user: "Merkle", message:"Er is een fout opgetreden bij het verzenden van je bericht."}]});
    } 
  }

  backgroundImage = () => {
      var imgUrl = prompt('Please enter Catbox/Imgur image URL: ')
      if(typeof imgUrl == 'string') {
        var splitContent = imgUrl.split('/');
        if(splitContent[2] === "files.catbox.moe" || splitContent[2] === "i.imgur.com") {
          splitContent = splitContent[3].split(".");
          if(splitContent[1] == "jpg" || splitContent[1] == "jpeg" || splitContent[1] == "png" || splitContent[1] == "gif")  {
              this.setState({backgroundImage: imgUrl})    
          } else {
              this.setState({backgroundImage: null})
              return null;
          }
        } else {
          this.setState({backgroundImage: null})
          return null;
      }
    }
  }

  backgroundChatColor = () => {
    var bgColorOne = prompt('Hex Color For You (No Pound Symbol): ')
    var bgColorTwo = prompt('Hex Color For Anon (No Pound Symbol): ')

    if (bgColorOne.charAt(0) === '#' || bgColorTwo.charAt(0) === '#') {
      return null;
    }

    var hexRegExp = /^[0-9a-fA-F]+$/;

    if(bgColorOne.match(hexRegExp) && bgColorTwo.match(hexRegExp)) {
      console.log('Valid hex colors');    
      bgColorOne = '#' + bgColorOne;
      bgColorTwo = '#' + bgColorTwo;

      this.setState({backgroundChatColor: [bgColorOne, bgColorTwo]});
    } else {
      console.log('Invalid Hex Colors');
    }

    return null;
  }


  render() {
    return (
      <div className="App">
<header id="header" class="flex"><h1><a href="/"><img height="60" src="merkroulette.png" /></a></h1><ul class="control"><li><button type="button" onClick = {this.next} ref = {findUsers => {this.findUsers = findUsers}}>Connect/Swap</button></li></ul></header>
	  <div id="container" class="flex">
	  
	  <aside id="webcam"><div class="partner"><h2>Partner</h2><video ref = {peerRef => {this.peerRef = peerRef}}></video></div><div class="you"><h2>You</h2><video ref = {clientRef => {this.clientRef = clientRef}} muted></video></div></aside>     
        <div id="room" class="flex">
		<ul id="messages">
          <Chat backgroundChatColor = {this.state.backgroundChatColor} chatMessages = {this.state.chatMessages} submit = {this.submitButton} />
		  </ul>
		  
		  
		  
		  
        
			<CreateMessage createMessage =  {this.createMessage} peer = {this.peer} next = {this.next} />
		
		</div>
		</div>
		
      </div>
    );
  }
}

export default App;
