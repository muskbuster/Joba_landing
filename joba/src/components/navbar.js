import "bootstrap/dist/css/bootstrap.min.css";
import React from "react"
import { Button, Form, Col} from "react-bootstrap";
import styles from "../../src/App.module.css";
import near from "../../src/pages/near.png"
import logo from "/workspace/init/joba/src/joba.png"
import { login, logout } from '/workspace/init/joba/src/utils.js';
import { Outlet, Link } from "react-router-dom";

export default function Navbar() {

  const isConnected = window.walletConnection.isSignedIn();
  const buttonLabel = isConnected ? `${window.accountId}` : 'Connect Wallet';
  
 if(!isConnected) {return (
    <>
      <div className={styles.navbar}>
  
            <Link to="/homepage">
            <Button className={styles.joba02Icon} >
     <img  alt="" src={logo} />
      </Button>
            </Link>
            <Link to="/login">
             <Button  className={styles.walletree}  variant="primary">
             <img className="near" src={near}/>
             {buttonLabel}
           </Button>
           </Link>
      </div>

      <Outlet />
    </>
  )
 }
 else{
  return(
    <>
      <div className={styles.navbar}>
  
            <Link to="/dashboard">
            <Button className={styles.joba02Icon} >
     <img  alt="" src={logo} />
      </Button>
            </Link>
            <Link to="/login">
             <Button  className={styles.walletree}  variant="primary">
             <img className="near" src={near}/>
             {buttonLabel}
           </Button>
           </Link>
      </div>

      <Outlet />
    </>
  )
 }
  
  
    

  
};
