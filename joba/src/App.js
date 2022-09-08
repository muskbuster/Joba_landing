import { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';
import Homepage from "./pages/homepage";
import Dashboard from "./pages/dashboard";
import Navbar from "../src/components/navbar.js";
import Invoice from "../src/pages/invoice.js";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  useLocation,
  Navigate
} from "react-router-dom";
import { motion } from "framer-motion";
import Logger from "./pages/login";
import Project from "./pages/projects";

const PageLayout = ({ children }) => children;

const pageVariants = {
  initial: {
    opacity: 0
  },
  in: {
    opacity: 1
  },
  out: {
    opacity: 0
  }
};

const pageTransition = {
  type: "tween",
  ease: "linear",
  duration: 0.5
};

const AnimationLayout = () => {
  const { pathname } = useLocation();
  return (
    <PageLayout>
      <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        variants={pageVariants}
        transition={pageTransition}
      >
        <Outlet />
      </motion.div>
    </PageLayout>
  );
};

function App() {
    return (
      <>
     
        <BrowserRouter>
      <Routes>
      <Route element={<AnimationLayout />}>
      <Route path="/" element={<Navbar/>}>
        <Route path="/" element={<Homepage />}/>
        <Route path="/homepage" element={<Homepage />}/>
        <Route path="/invoice" element={<Invoice />}/>
        <Route path="/login" element={<Logger/>}/>
        <Route path="/projects" element={<Project/>}/>
        </Route>
        <Route path="/dashboard" element={<Dashboard/>}/>
        </Route>
      </Routes>
      

    </BrowserRouter>   
    
    
    </>
   
  );
  };

export default App;
