import "/workspace/init/joba/src/pages/dashboard.css";
import { Link , useNavigate} from 'react-router-dom';
import { db } from "/workspace/init/joba/src/config/firebaseConfig.js";
import {useState} from "react";
import logo from "/workspace/init/joba/src/pages/ljoba2.png"
import near from "/workspace/init/joba/src/pages/near.png"
import { Button, Form, Col} from "react-bootstrap";

export default function Dashboard(){
    const isConnected = window.walletConnection.isSignedIn();
    const buttonLabel = isConnected ? `${window.accountId}` : 'Connect Wallet';
    return(
<>
<div className="sidebar">
    <div className="vertical"><Link to="/login">
             <Button  className="walletree" variant="primary">
                <img className="near" src={near}/>
             {buttonLabel}
           </Button>
           </Link></div>
<img className="logoholder" src={logo} alt="logo" />
</div>
<div className="home"> Home </div>
<div className="walletbalance">balance</div>
<div className="successful">
    <div className="line"></div>
    <div className="suc">successful</div>
</div>
<div className="refund">
    <div className="line1"></div>
    <div className="suc">Refund</div>
</div>
<div className="disputed">
    <div className="line2"></div>
    <div className="suc">Disputed</div>
</div>
<div className="projectint">Projects you might be interested in</div>
<div className="projectshold"> 
<div className="sph">hello</div>
<div className="sph1">hello</div>
<div className="sph2">hello</div>
<div className="sph3">hello</div>
<div className="sph4">hello</div>
<div className="sph5">hello</div>
</div>
</>
    )
}