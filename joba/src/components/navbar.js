import "bootstrap/dist/css/bootstrap.min.css";
import React from "react"


import { Button, Form, Col} from "react-bootstrap";
import styles from "/workspace/init/joba/src/App.module.css";
import { FunctionComponent } from "react";
import logo from "/workspace/init/joba/src/joba.png"
import getConfig from '/workspace/init/joba/src/config.js'
import { login, logout } from '/workspace/init/joba/src/utils.js'

import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
  
            <Link to="/homepage">
            <button >
     <img className={styles.joba02Icon} alt="" src={logo} />
      </button>
            </Link>
            
             <Button  className={styles.button} onClick={login}  variant="primary">
            Connect wallet
           </Button>
      </nav>

      <Outlet />
    </>
  )
};

export default Navbar;