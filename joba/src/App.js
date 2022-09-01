import { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';
import Homepage from "./pages/homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "/workspace/init/joba/src/components/navbar.js";
import Invoice from "/workspace/init/joba/src/pages/invoice.js";
import Logger from "./pages/login";
import Test from "./pages/flexboxtest";
import Project from "./pages/projects";
function App() {
    return (
      <>
{/*      
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navbar/>}>
        <Route path="/" element={<Homepage />}/>
        <Route path="/homepage" element={<Homepage />}/>
        <Route path="/invoice" element={<Invoice />}/>
        <Route path="/login" element={<Logger/>}/>
        </Route>
      </Routes>
    </BrowserRouter> */}
    <Project/>
    </>
   
  );
  };

export default App;
