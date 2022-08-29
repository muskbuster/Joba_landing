import "bootstrap/dist/css/bootstrap.min.css";
import React from "react"
import { Button, Form, Col} from "react-bootstrap";
import styles from "/workspace/init/joba/src/App.module.css";
import { FunctionComponent } from "react";
import logo from "/workspace/init/joba/src/joba.png"
import getConfig from '/workspace/init/joba/src/config.js'
import { login, logout } from '/workspace/init/joba/src/utils.js'

const { networkId } = getConfig(process.env.NODE_ENV || 'development')

function Navbar() {

   
    // return (
      
    //     <div>
    //   <div className={styles.frameDiv}>
    //         <Button  className={styles.button}  variant="primary">
    //           Connect wallet
    //         </Button>
    //       </div>
    //       <button >
    //   <img className={styles.joba02Icon} alt="" src={logo} />
    //   </button>
    //   </div>
      
    // );
  }
  
  export default Navbar;