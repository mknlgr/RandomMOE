import React, { Component } from 'react';

class SiteIntro extends Component {




  render() {    

    return (
            <div>
                <p>Please check the <b>TOP RIGHT</b> (in Chrome) <b>TOP LEFT</b> (in Firefox) of your browser and make sure your webcam/mic is accessible to the browser!<br /></p>
                <p>Welcome to Paradox!</p>
                <p>Paradox is an <a href="https://github.com/openpgpjs/openpgpjs">encrypted</a>, <a href="https://github.com/feross/simple-peer">peer-to-peer</a>, <a href= "https://github.com/paradoxmoe/paradox">open source</a> random chat alternative to Omegle/Chatroulette/etc.</p>
                <p>Special thanks to: <a href='http://stackoverflow.com/a/35387759'>Kecer</a> on Stackoverflow and <a href="https://codepen.io/Anomaly942/">Kaustav</a> on CodePen</p>
            
                <p>Youtube Support! Just Copy and Paste a youtube URL into the chat!</p>
                <p>Imgur support! </p>
                <p><a href="http://catbox.moe">Catbox</a> Support! Just Copy and Paste a Catbox.moe URL into the chat! (Images and videos!) </p>
                <p>As the site is currently in Early Access, please report bugs or other issues <a href= "https://github.com/paradoxmoe/paradox/issues">here</a>!</p>
                <p>Furthermore, as you are talking to random and anonymous users, please exercise caution when using this platform.</p>


                <a href="" onclick="">Click here if you've read the above!</a>
            </div>
    )
  };
}



export default SiteIntro;