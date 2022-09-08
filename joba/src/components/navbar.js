import "bootstrap/dist/css/bootstrap.min.css";
import React from "react"
import { Button, Form, Col} from "react-bootstrap";
import styles from "../../src/App.module.css";
import logo from "/workspace/init/joba/src/joba.png"
import { login, logout } from '/workspace/init/joba/src/utils.js';
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {

  const isConnected = window.walletConnection.isSignedIn();
  const buttonLabel = isConnected ? `${window.accountId}` : 'Connect Wallet';
  
  return (
    <>
      <div className={styles.navbar}>
  
            <Link to="/homepage">
            <button >
     <img className={styles.joba02Icon} alt="" src={logo} />
      </button>
            </Link>
            <Link to="/login">
             <Button  className={styles.button}  variant="primary">
             {buttonLabel}
           </Button>
           </Link>
      </div>

      <Outlet />
    </>
  )
  
  
    

  
};

export default Navbar;