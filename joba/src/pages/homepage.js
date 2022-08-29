import { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Col} from "react-bootstrap";
import styles from "/workspace/init/joba/src/App.module.css";
import logo from "/workspace/init/joba/src/joba.png"
import hero from "/workspace/init/joba/src/hero1.png"
import ndhero from "/workspace/init/joba/src/hero2.png" 
import rdhero from "/workspace/init/joba/src/hero3.png" 
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function Homepage() {


    return (
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
          <Button className={styles.button1} variant="primary">
            Join the waitlist
          </Button>
          
          <Form.Group className={styles.frameFormGroup}>
            <Form.Control type="text" placeholder="Enter mail address" />
          </Form.Group>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            curabitur ut ut urna. Integer sollicitudin mattis ac gravida vel
            egestas gravida diam.
          </div>
          <img
            className={styles.lastSectionImage}
            alt=""
            src={rdhero}
          />
          <Button className={styles.button2} variant="light">
            I want to earn
          </Button>
          <div className={styles.iAmATalentLookingForRole}>
            I am a talent looking for roles
          </div>
          <div className={styles.iAmLookingToHire}>I am looking to hire</div>
          <Button className={styles.button3} variant="dark">
            I want to invest
          </Button>
        </div>
        <div className={styles.footerDiv}>
          <b className={styles.stayTunedForMoreUpdates}>
            Stay tuned for more updates
          </b>
          <div className={styles.loremIpsumDolorSitAmetCo1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            curabitur ut ut urna. Integer sollicitudin mattis ac gravida vel
            egestas gravida diam.
          </div>
          <div className={styles.contactUsDiv}>Contact us:</div>
          <div className={styles.telegramDiv}>Telegram</div>
          <div className={styles.discordDiv}>Discord</div>
          <div className={styles.twitterDiv}>Twitter</div>
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
        </div>
      </div>
  );
  };

export default Homepage;
