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
      <p className="h1">
      You need to connect your wallet first
      </p>
      <p className="h2">
      To become a talent on joba, you’re required to connect to your metamask wallet  to enable access
      </p>
      
        <button className='btn1' onClick={handleClick}>{buttonLabel}</button>
      
    </main>
  )
  }
  else{
    return (
      <main>
        <p className="h1">
        {title}
        </p>
        <button className='btn1' onClick={handleClick}>{buttonLabel}</button>
        </main>
    );
  }
}