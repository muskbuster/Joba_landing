import "bootstrap/dist/css/bootstrap.min.css";
import React from "react"


import { Button, Form, Col} from "react-bootstrap";
import styles from "/workspace/init/joba/src/App.module.css";
import logo from "/workspace/init/joba/src/joba.png"


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
            <Link to="/login">
             <Button  className={styles.button}  variant="primary">
            Connect wallet
           </Button>
           </Link>
      </nav>

      <Outlet />
    </>
  )
};

export default Navbar;