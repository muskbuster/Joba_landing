import { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';
import Homepage from "./pages/homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "/workspace/init/joba/src/components/navbar.js";
import Invoice from "/workspace/init/joba/src/pages/invoice.js";
function App() {
    return (
      <>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navbar/>}>
        <Route path="/homepage" element={<Homepage />}/>
        <Route path="/invoice" element={<Invoice />}/>
</Route>
      
      </Routes>
    </BrowserRouter>
     </>
  );
  };

export default App;
