import "../../src/pages/dashboard.css";
import { Link , useNavigate} from 'react-router-dom';
import { db } from "/workspace/init/joba/src/config/firebaseConfig.js";
import {useState} from "react";
import logo from "../../src/pages/ljoba2.png"
import near from "../../src/pages/near.png"
import { Button, Form, Col} from "react-bootstrap";

export default function Dashboard(){
    const isConnected = window.walletConnection.isSignedIn();
    const wallet =`${window.accountId}`
    const buttonLabel = isConnected ? `${window.accountId}` : 'Connect Wallet';
    const [info , setInfo] = useState([]);
    const Frame = ({name}) => {
       
        return (
            <>
            <div>
            
                <div className="boxsuc"> 
               <p className="textpos">{name}
               <div className="dots">. . .</div>
               </p>
               
       
                </div>
                </div>
    
           </>
        );
    }
    // Start the fetch operation as soon as
    // the page loads
    window.addEventListener('load', () => {
        Fetchdata();

      });
  
    // Fetch the required data using the get() method
    const Fetchdata = ()=>{
        db.collection(wallet).doc("records").collection("projects").where("status", "==", "completed").get().then((querySnapshot) => {
             
            // Loop through the data and store
            // it in array to display
            querySnapshot.forEach(element => {
                var data = element.data();
                setInfo(arr => [...arr , data]);
                  
            });
        })
    
    }
   
    return(
<>
<div className="pagecont">
<div className="sidebar">
    <div className="vertical"><Link to="/login">
             <Button  className="walletree" variant="primary">
                <img className="near" src={near}/>
             {buttonLabel}
           </Button>
           </Link></div>
<img className="logoholder" src={logo} alt="logo" />
<div className="homebut">
    <div className="fonty">
        Home
    </div>
</div>
<div className="homebut1">
    <div className="fonty">
        Earn
    </div>
</div>
<div className="homebut2">
    <div className="fonty">
        Messages
    </div>
</div>
<div className="homebut3">
    <div className="fonty">
        Settings
    </div>
</div>
</div>
<div className="home"> Home </div>
<div className="walletbalance"><div className="blfont"> balance</div></div>
<div className="successful">
    <div className="dot"></div>
    <div className="line"></div>
    <div className="suc">successful</div>
    <div className="boxsuccontainer">
    {
            info.map((data) => (
            <Frame 
                   name={data.name} 
                   />
            ))
        }
</div>
</div>
<div className="refund">
<div className="dot2"></div>
    <div className="line1"></div>
    <div className="suc">Refund</div>
    
    <div className="boxsuccontainer">Any refunds that your client requests in the future will show up here.Which you can further take actions by raising a dispute or refunding it</div>
</div>
<div className="disputed">
<div className="dot1"></div>
    <div className="line2"></div>
    <div className="suc">Disputed</div>
    <div className="boxsuccontainer">All disputed projects show up here</div>
</div>
<div className="projectint">Projects you might be interested in</div>
<div className="projectshold"> 
<div className="sph">
    <div className="m1">
        Joba tokenomics
    </div>
    <div className="m2">
    Brainstorming brings team members' diverse experience into play. 
    </div>
    <div className="m3">
    </div> <div className="comms"> 2 comments</div>
</div>
<div className="sph1"><div className="m1">
GeegPay Development
    </div>
    <div className="m2">
    Brainstorming brings team members' diverse experience into play. 
    </div>
    <div className="m3">
    </div>
    <div className="comms"> 2 comments</div>
    </div>
<div className="sph2"><div className="m1">
NFT Frontend
    </div>
    <div className="m2">
    Brainstorming brings team members' diverse experience into play. 
    </div>
    <div className="m3">
    </div>
    <div className="comms"> 2 comments</div>
    </div>
<div className="sph3"><div className="m1">
DeFi
    </div>
    <div className="m2">
    Brainstorming brings team members' diverse experience into play. 
    </div>
    <div className="m3">
    </div>
    <div className="comms"> 4 comments</div>
    </div>
<div className="sph4"><div className="m1">
NFT Website
    </div>
    <div className="m2">
    Brainstorming brings team members' diverse experience into play. 
    </div>
    <div className="m3">
    </div>
    <div className="comms"> 9 comments</div>
    </div>
<div className="sph5"><div className="m1">
Development
    </div>
    <div className="m2">
    Brainstorming brings team members' diverse experience into play. 
    </div>
    <div className="m3">
    </div>
    <div className="comms"> 2 comments</div>
    </div>
</div>
</div>
</>
    )

}