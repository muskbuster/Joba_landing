import React from 'react';
import { login, logout } from '/workspace/init/joba/src/utils.js';
import '/workspace/init/joba/src/login.css';
import 'regenerator-runtime/runtime';

export default function Logger() {
  const isConnected = window.walletConnection.isSignedIn();

  const title = isConnected ? `Connected, ${window.accountId}` : 'Not connected';
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
      
        <button className='btn1' onClick={handleClick}>{buttonLabel}</button>
        </div>
    </main>
  )
  }
  else{
    return (
      <main>
        <div>
          
        <div className="h1">
        {title}
        </div>
        <button className='btn1' onClick={handleClick}>{buttonLabel}</button>
        </div>
        </main>
    );
  }
}