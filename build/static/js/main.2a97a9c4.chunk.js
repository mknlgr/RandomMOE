(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{115:function(e,t){},118:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(26),s=a.n(o),c=(a(58),a(10)),i=a.n(c),l=a(27),u=a(4),m=a(5),g=a(6),h=a(8),d=a(7),p=a(9),f=(a(61),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).getStyle=function(e){return"You"===e?{backgroundColor:a.state.backgroundChatColor[0],overflowY:"auto",opacity:.75}:{backgroundColor:a.state.backgroundChatColor[1],overflowY:"auto",opacity:.75}},a.determineVisualContent=function(e,t){if("undefined"==typeof e||null==typeof e)return null;if(e.length<=0)return null;var n=new RegExp(/(https:\/\/c\.simmer\.io\/static\/unityFrame\/index\.html\?url=https)([^a-z]+)(simmercdn.com%2Funity%2F)([a-zA-Z0-9]{28})(%2Fcontent%2F)([a-zA-Z0-9]{8}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{12}&imagePath=screens\/[a-zA-Z0-9]{1}.png)/),o=e.split("/");if("files.catbox.moe"===o[2]||"i.imgur.com"===o[2])return"mp4"==(o=o[3].split("."))[1]||"webm"==o[1]||"avi"==o[1]||"ogg"==o[1]||"mpeg"==o[1]?r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("video",{ref:function(e){a.vidRef=e},onLoadedMetadata:a.scrollToBottomVideo,controls:!0,autoplay:!0}," ",r.a.createElement("source",{src:e}))," "):"jpg"==o[1]||"jpeg"==o[1]||"png"==o[1]||"gif"==o[1]?r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("img",{src:e,alt:"User Content"})):null;if("www.youtube.com"===o[2]||"youtube.com"===o[2]||"youtu.be"===o[2]||"www.youtu.be"===o[2]){var s="https://youtube.com/embed/"+o[3].replace(/^.*(watch\?v=)/,"");return r.a.createElement("div",null,r.a.createElement("iframe",{width:"560",height:"315",src:s,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}if(n.test(e)){var c=n.exec(e)[0];return r.a.createElement("div",null,r.a.createElement("iframe",{src:c,style:{width:960,height:540,border:0}})," ",r.a.createElement("br",null))}if("www.twitch.tv"===o[2]||"twitch.tv"===o[2]){console.log(o[3]);var i="https://player.twitch.tv/?channel="+o[3];return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("iframe",{src:i,frameborder:"0",allowfullscreen:"true",scrolling:"no",height:"378",width:"620"}))}return null},a.hoverOn=function(){a.chatRef.style.opacity=1},a.hoverOff=function(){a.chatRef.style.opacity=.75},a.scrollToBottom=function(){a.chatRef.scrollIntoView({behavior:"smooth",block:"start"})},a.scrollToBottomVideo=function(){a.vidRef.scrollIntoView({behavior:"smooth",block:"start"})},a.state={backgroundChatColor:a.props.backgroundChatColor},a}return Object(p.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){this.scrollToBottom()}},{key:"componentDidUpdate",value:function(){this.scrollToBottom()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{onMouseEnter:this.hoverOn,onMouseLeave:this.hoverOff,style:this.getStyle(this.props.chatItems.user),ref:function(t){e.chatRef=t}},this.props.chatItems.user+": "+this.props.chatItems.message,this.determineVisualContent(this.props.chatItems.message))}}]),t}(n.Component)),b=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).state={backgroundChatColor:a.props.backgroundChatColor},a}return Object(p.a)(t,e),Object(g.a)(t,[{key:"componentDidUpdate",value:function(){this.state.backgroundChatColor!=this.props.backgroundChatColor&&this.setState({backgroundChatColor:this.props.backgroundChatColor})}},{key:"render",value:function(){var e=this;return this.props.chatMessages.map(function(t){return r.a.createElement(f,{backgroundChatColor:e.state.backgroundChatColor,key:t.id,chatItems:t})})}}]),t}(n.Component),v=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={content:""},a.onChange=function(e){return a.setState({content:e.target.value})},a.onSubmit=function(e){e.preventDefault(),a.props.createMessage("You",a.state.content),a.setState({content:"",user:"You"})},a}return Object(p.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{class:"input-area"},r.a.createElement("form",{id:"input",class:"flex",onSubmit:this.onSubmit},r.a.createElement("div",{class:"input-area"},r.a.createElement("input",{class:"textarea",type:"text",autocomplete:"nope",placeholder:"Type Message Here...",value:this.state.content,onChange:this.onChange})),r.a.createElement("div",{class:"action-area"},r.a.createElement("input",{type:"submit",value:"Send",className:"send"}))))}}]),t}(n.Component),y=a(3),C=(a(77),a(51)),k=a.n(C),S=a(52),E=a.n(S);if(y.initWorker({path:"./dist/openpgp.worker.min.js"}),"undefined"==typeof localStorage.publicKey||"undefined"==typeof localStorage.privateKey||"undefined"==typeof localStorage.pass){var M=new Uint32Array(4);window.crypto.getRandomValues(M),localStorage.pass=M[2].toString();var w={userIds:[{name:M[3].toString(),email:M[0]+"@"+M[1]+".com"}],numBits:2048,passphrase:localStorage.pass};y.generateKey(w).then(function(e){localStorage.setItem("privateKey",e.privateKeyArmored),localStorage.setItem("publicKey",e.publicKeyArmored)})}var O=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(d.a)(t).call(this,e))).socketConnection=function(e){var t=E.a.connect("merkroulette2.herokuapp.com");a.setState({chatMessages:[].concat(Object(u.a)(a.state.chatMessages),[{id:a.state.chatMessages.length,user:"Client",message:"Connecting to Server..."}])}),t.on("peer",function(n){a.createPeer(n.initiator,e),console.log("Server told client to become initiator: "+n.initiator),n.initiator&&a.state.peer.on("signal",function(e){t.emit("initiatorData",e),a.setState({chatMessages:[].concat(Object(u.a)(a.state.chatMessages),[{id:a.state.chatMessages.length,user:"Client",message:"Emitting Initiator data to Server..."}])})})}),t.on("joinInitiator",function(e){if(a.setState({chatMessages:[].concat(Object(u.a)(a.state.chatMessages),[{id:a.state.chatMessages.length,user:"Client",message:"Joining Initiator..."}])}),a.state.peer.signal(e.data),!e.initiator){var n=e.socketid;a.state.peer.on("signal",function(e){t.emit("backToInitiator",{socketid:n,data:e}),a.setState({chatMessages:[].concat(Object(u.a)(a.state.chatMessages),[{id:a.state.chatMessages.length,user:"Client",message:"Recieving Initiator's Data..."}])})})}}),t.on("toInitiatorFromServer",function(e){a.state.peer.signal(e.data),a.setState({chatMessages:[].concat(Object(u.a)(a.state.chatMessages),[{id:a.state.chatMessages.length,user:"Client",message:"Connecting to Peer..."}])})})},a.submitButton=function(){console.log("Can Submit")},a.next=function(){a.setState({chatMessages:[].concat(Object(u.a)(a.state.chatMessages),[{id:a.state.chatMessages.length,user:"Client",message:"Finding User..."}])}),null!=a.state.peer&&"undefined"!=typeof a.state.peer&&(a.state.peer.destroy(),a.setState({chatMessages:[],peerInfo:null,stream:null,peer:null,inConvo:!1})),navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then(function(e){a.socketConnection(e)}).catch(function(e){a.socketConnection(!1)})},a.createPeer=function(e,t){var n=new k.a({initiator:e,trickle:!1,stream:t});return a.setState({inConvo:!0}),n.on("error",function(e){a.setState({chatMessages:[{id:a.state.chatMessages.length,user:"Client",message:e.code+" Error. Try clicking next, or refreshing if problem persists"}]})}),n.on("connect",function(){n.send(JSON.stringify({isPublicKey:!0,peerPublicKey:localStorage.publicKey})),a.setState({chatMessages:[]})}),n.on("data",function(){var e=Object(l.a)(i.a.mark(function e(t){var n,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!0!==(t=JSON.parse(t)).isPublicKey){e.next=6;break}sessionStorage.setItem("peerPublicKey",t.peerPublicKey),a.setState({chatMessages:[{id:a.state.chatMessages.length,user:"Client",message:"You can now send messages!"}]}),e.next=17;break;case 6:return e.next=8,y.key.readArmored(localStorage.privateKey);case 8:return n=e.sent.keys[0],e.next=11,n.decrypt(localStorage.pass);case 11:return e.next=13,y.message.readArmored(t.data);case 13:e.t0=e.sent,e.t1=[n],r={message:e.t0,privateKeys:e.t1},y.decrypt(r).then(function(e){var n={id:a.state.chatMessages.length,user:t.user,message:e.data};a.setState({chatMessages:[].concat(Object(u.a)(a.state.chatMessages),[n])})});case 17:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),n.on("stream",function(e){a.setState({peerStream:e}),a.peerRef.srcObject=a.state.peerStream,a.peerRef.onloaddedmetadata=a.peerRef.play()}),a.setState({peer:n,inConvo:!0}),n},a.createMessage=function(){var e=Object(l.a)(i.a.mark(function e(t,n){var r,o,s;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r={id:a.state.chatMessages.length,user:t,message:n},a.setState({chatMessages:[].concat(Object(u.a)(a.state.chatMessages),[r])}),o=y.message.fromText(n),e.t0=o,e.next=6,y.key.readArmored(sessionStorage.peerPublicKey);case 6:e.t1=e.sent.keys,s={message:e.t0,publicKeys:e.t1};try{y.encrypt(s).then(function(e){var t=e.data;a.state.peer.send(JSON.stringify({user:"Collega",data:t}))})}catch(c){a.setState({chatMessages:[{id:a.state.chatMessages.length,user:"Client",message:"There was an error sending the message..."}]})}case 9:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),a.backgroundImage=function(){var e=prompt("Please enter Catbox/Imgur image URL: ");if("string"==typeof e){var t=e.split("/");if("files.catbox.moe"!==t[2]&&"i.imgur.com"!==t[2])return a.setState({backgroundImage:null}),null;if("jpg"!=(t=t[3].split("."))[1]&&"jpeg"!=t[1]&&"png"!=t[1]&&"gif"!=t[1])return a.setState({backgroundImage:null}),null;a.setState({backgroundImage:e})}},a.backgroundChatColor=function(){var e=prompt("Hex Color For You (No Pound Symbol): "),t=prompt("Hex Color For Anon (No Pound Symbol): ");if("#"===e.charAt(0)||"#"===t.charAt(0))return null;var n=/^[0-9a-fA-F]+$/;return e.match(n)&&t.match(n)?(console.log("Valid hex colors"),e="#"+e,t="#"+t,a.setState({backgroundChatColor:[e,t]})):console.log("Invalid Hex Colors"),null},a.state={chatMessages:[],peerInfo:null,stream:null,peer:null,inConvo:!1,backgroundImage:"",backgroundChatColor:["#FFDAB9","#FFD700"]},a}return Object(p.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){var e=this;navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then(function(t){e.clientRef.srcObject=t,e.clientRef.onloaddedmetadata=e.clientRef.play(),e.forceUpdate()}).catch(function(t){navigator.mediaDevices.getUserMedia({video:!1,audio:!1}).then(function(t){e.forceUpdate()})})}},{key:"componentDidCatch",value:function(e,t){console.log(e),console.log(t)}},{key:"componentDidUpdate",value:function(){console.log(this.state.backgroundChatColor)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{id:"header",class:"flex"},r.a.createElement("h1",null,r.a.createElement("a",{href:"/"},r.a.createElement("img",{height:"60",src:"merkroulette.png"}))),r.a.createElement("ul",{class:"control"},r.a.createElement("li",null,r.a.createElement("button",{type:"button",onClick:this.next,ref:function(t){e.findUsers=t}},"Connect/Swap")))),r.a.createElement("div",{id:"container",class:"flex"},r.a.createElement("aside",{id:"webcam"},r.a.createElement("div",{class:"partner"},r.a.createElement("h2",null,"Partner"),r.a.createElement("video",{ref:function(t){e.peerRef=t}})),r.a.createElement("div",{class:"you"},r.a.createElement("h2",null,"You"),r.a.createElement("video",{ref:function(t){e.clientRef=t},muted:!0}))),r.a.createElement("div",{id:"room",class:"flex"},r.a.createElement("ul",{id:"messages"},r.a.createElement(b,{backgroundChatColor:this.state.backgroundChatColor,chatMessages:this.state.chatMessages,submit:this.submitButton})),r.a.createElement(v,{createMessage:this.createMessage,peer:this.peer,next:this.next}))))}}]),t}(n.Component);s.a.render(r.a.createElement(O,null),document.getElementById("root"))},53:function(e,t,a){e.exports=a(118)},58:function(e,t,a){},77:function(e,t,a){},86:function(e,t){},88:function(e,t){}},[[53,1,2]]]);
//# sourceMappingURL=main.2a97a9c4.chunk.js.map