import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Col} from "react-bootstrap";
import styles from "/workspace/init/joba/src/App.module.css";
import logo from "/workspace/init/joba/src/joba.png"
import { login, logout } from '/workspace/init/joba/src/utils.js'
function Navbar() {

   
    return (
      
        <div>
      <div className={styles.frameDiv}>
            <Button  className={styles.button}  variant="primary">
              Connect wallet
            </Button>
          </div>
          <button >
      <img className={styles.joba02Icon} alt="" src={logo} />
      </button>
      </div>
      
    );
  }
  
  export default Navbar;