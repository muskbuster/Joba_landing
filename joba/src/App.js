import { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Col} from "react-bootstrap";
import styles from "./App.module.css";
import logo from "./joba.png"
import hero from "./hero1.png"
import ndhero from "./hero2.png" 
import rdhero from "./hero3.png" 
import { useNavigate } from 'react-router-dom';
import Homepage from "./pages/homepage";
import invoice from "/workspace/init/joba/src/pages/invoice.js";
import Navbar from "/workspace/init/joba/src/components/navbar.js";
import Invoice from "/workspace/init/joba/src/pages/invoice.js";
function App() {
    return (
      <>
     <div>
      <Navbar/>
     </div>
     <div>
      <Homepage/>
     </div>
     </>
  );
  };

export default App;
