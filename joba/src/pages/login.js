import React from 'react';
import { login, logout } from '/workspace/init/joba/src/utils.js';
import '/workspace/init/joba/src/gloal.css';
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

  return (
    <main>
      <p style={{ textAlign: 'center' }}>
        {title}
      </p>
      <p style={{ textAlign: 'center', marginTop: '2.5em' }}>
        <button onClick={handleClick}>{buttonLabel}</button>
      </p>
    </main>
  )
}