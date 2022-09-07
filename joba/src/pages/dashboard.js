import "/workspace/init/joba/src/pages/dashboard.css";
import { Link , useNavigate} from 'react-router-dom';
import { db } from "/workspace/init/joba/src/config/firebaseConfig.js";
import {useState} from "react";
import logo from "/workspace/init/joba/src/pages/ljoba2.png"

export default function Dashboard(){

    return(
<>
<div className="sidebar">
<img className="logoholder" src={logo} alt="logo" />
</div>
<div className="home"> Home </div>
<div className="walletbalance">balance</div>
<div className="successful">
    <div className="line"></div>
</div>
<div className="refund">
    <div className="line1"></div>
</div>
<div className="disputed">
    <div className="line2"></div>
</div>
<div className="projectint">Projects you might be interested in</div>
<div className="projectshold"> 
</div>
</>
    )
}