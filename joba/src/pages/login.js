import React from 'react';
import { login, logout } from '/workspace/init/joba/src/utils.js';
import '/workspace/init/joba/src/login.css';
import 'regenerator-runtime/runtime';
import { Link } from 'react-router-dom';
import talent from "/workspace/init/joba/src/components/talent.svg"
import builder from"/workspace/init/joba/src/components/builder.svg"
export default function Logger() {
  const isConnected = window.walletConnection.isSignedIn();

  const title = isConnected ? "choose your profile" : 'Not connected';
  const buttonLabel = isConnected ? 'Disconnect' : 'Connect';

  const handleClick = () => {
    if (isConnected) {
      logout();
    } else {
      login();
    }
  }

  if (!isConnected) {return (
    <main>
      <div className="flexbox">

     
      <div className="h1">
          You need to connect your wallet first
      </div>
      <p className="h2">
      To become a talent on joba, you’re required to connect to your metamask wallet  to enable access
      </p>
      
        <button className='btn2' onClick={handleClick}>{buttonLabel}</button>
        </div>
    </main>
  )
  }
  else{
    return (
      <main>
        <div>
          
        <div className="h3">
        {title}
        </div>
        <Link to="/dashboard">
        <button className="box1">
        <div >
          <div className="ih1">
            I am talent
          </div>
          <img src={talent} className="svgholder"/>
          <div className="ih2">
          I am looking for roles  </div>
        </div>
        
        </button>
        </Link>
        <button className="box2">
        <div>
        <div className="ih1">
          I am builder
          </div>
          <img src={builder} className="svgholder"/>
          <div className="ih2">
          I am looking to hire  </div>
        </div>
        </button>
        <button className='btn2' onClick={handleClick}>{buttonLabel}</button>
        </div>
        </main>
    );
  }
}