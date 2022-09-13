import {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Col} from "react-bootstrap";
import styles from "/workspace/init/joba/src/App.module.css";
import { useForm } from "react-hook-form";
import logo from "/workspace/init/joba/src/joba.png"
import { login, logout } from '/workspace/init/joba/src/utils.js';
import hero from "/workspace/init/joba/src/hero1.png"
import ndhero from "/workspace/init/joba/src/hero2.png"
import { db } from "/workspace/init/joba/src/config/firebaseConfig.js";
import rdhero from "/workspace/init/joba/src/hero3.png" 
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function Homepage() {
    const [email, setEmail] = useState("");
    const isConnected = window.walletConnection.isSignedIn();
    const wallet =`${window.accountId}`
    const handleSubmit = (e) => {
      e.preventDefault();
  
      db.collection("Waitlist").doc(email)
        .set({
          email: email
        })
        .then(() => {
          alert("You are added to the waitlist");
        })
        .catch((error) => {
          alert(error.message);
        });
  
      setEmail("");
    };


    return (
      <>
      <div className={styles.homepageDiv}>
        <div className={styles.heroSectionDiv}>
          <div className={styles.rectangleDiv} />
          <b className={styles.workEarnAndInvestInWeb3}>
            Work, earn and invest in Web 3.0
          </b>
          <div
            className={styles.discoverOpenJobsInMultiple}
          >{`Discover open jobs in multiple blockchain ecosystems + earn bounties for referrals & getting hired - over $1,000,000+ in crypto bounties have been set to date.`}</div>
         
          <div className={styles.gLOBALIZATION30Div}>GLOBALIZATION 3.0</div>
          <img className={styles.heroImageIcon} alt="" src={hero} />
          {/* <Button className={styles.button1} variant="primary">
            Join the waitlist
          </Button> */}
          
          {/* <Form.Group className={styles.frameFormGroup}>
            <Form.Control type="text" placeholder="Enter mail address" />
          </Form.Group> */}
          <form  onSubmit={handleSubmit}>
          <input
         placeholder="Enter mail address"
        value={email}
        size="sm"
        className={styles.formarea} 
        onChange={(e) => setEmail(e.target.value)}/>
        <button
        type="submit" className={styles.subtton1} > <div className={styles.font2}>Join the waitlist</div></button>
          </form>
        </div>
        <div className={styles.subsectionDiv}>
          <b className={styles.builtByBuildersForBuilder}>
            Built by builders, for builders
          </b>
          <div
            className={styles.theDemandForWeb3TalentIs}
          >{`The demand for Web3 talent is rising faster than supply. Bitcoin and blockchain technology are helping us create a better world. Joba is creating a new standard for hiring to optimize talent acquisition & productivity in the Web3 era.`}</div>
          <img
            className={styles.secondSectionImage}
            alt=""
            src={ndhero}
          />
        </div>
        <div className={styles.joinJobaDiv}>
          <b className={styles.joinTheJobaNetwork}>Join the Joba network</b>
          <b className={styles.earnAndInvestInWeb3}>Earn and invest in Web3</b>
          <div className={styles.loremIpsumDolorSitAmetCo}>
            With the upcoming release of Joba. You will be able work invest and earn from a wide range of projects.And maintain your hiring and vesting needs in one place

          </div>
          <img
            className={styles.lastSectionImage}
            alt=""
            src={rdhero}
          />
          <Link to='/login'>
          <Button className={styles.button2} variant="light">
            I want to earn
          </Button>
        </Link>
          
          <div className={styles.iAmATalentLookingForRole}>
            I am a talent looking for roles
          </div>
          <div className={styles.iAmLookingToHire}>I am looking to hire</div>
          <Button className={styles.button3} variant="dark">
            I want to invest
          </Button>
        </div>
        {/* <div className={styles.footerDiv}>
          <b className={styles.stayTunedForMoreUpdates}>
            Stay tuned for more updates
          </b>
          <div className={styles.loremIpsumDolorSitAmetCo1}>
            This is the initial iteration of what Joba could be. Subscribe to get regular updates on developments of joba in the NEAR future.
          </div>
          <div className={styles.contactUsDiv}>Contact us:</div>
          <a href="https://discord.gg/wkHWPZMs" target="_blank" className={styles.telegramDiv}>Telegram</a>
          <a href="https://discord.gg/wkHWPZMs" target="_blank" className={styles.discordDiv}><div> Discord</div> </a>
          <a href="https://discord.gg/wkHWPZMs" target="_blank" className={styles.twitterDiv}>Twitter</a>
          <div className={styles.frameDiv1}>
            <div className={styles.enterYourEmailAddress}>
              Enter your email address
            </div>
          </div>
          <Button
            className={styles.frameButton}
            variant="outline-primary"
          >{`Subscribe ->`}</Button>
          <img className={styles.joba02Icon1} alt="" src={logo} />
        </div> */}
      </div>
       <div className={styles.footerDiv}>
       <b className={styles.stayTunedForMoreUpdates}>
         Stay tuned for more updates
       </b>
       <div className={styles.loremIpsumDolorSitAmetCo1}>
         This is the initial iteration of what Joba could be. Subscribe to get regular updates on developments of joba in the NEAR future.
       </div>
       <div className={styles.contactUsDiv}>Contact us:</div>
       <div  className={styles.telegramDiv}>Telegram</div>
       <div className={styles.discordDiv}><div> Discord</div> </div>
       <div className={styles.twitterDiv}>Twitter</div>
       <div className={styles.frameDiv1}>
         <div className={styles.enterYourEmailAddress}>
           Enter your email address
         </div>
       </div>
       <Button
         className={styles.frameButton}
         variant="outline-primary"
       >{`Subscribe`}</Button>
       <img className={styles.joba02Icon1} alt="" src={logo} />
     </div>
     </>
  );
  };

export default Homepage;
