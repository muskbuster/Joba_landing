import { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';
import Homepage from "./pages/homepage";
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
