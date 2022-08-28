import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Col} from "react-bootstrap";
import styles from "/workspace/init/joba/src/App.module.css";
import logo from "/workspace/init/joba/src/joba.png"
function Navbar() {

   
    return (
      
        <div>
      <div className={styles.frameDiv}>
            <Button  className={styles.button}  variant="primary">
              Connect wallet
            </Button>
          </div>
      <img className={styles.joba02Icon} alt="" src={logo} />
      </div>
      
    );
  }
  
  export default Navbar;