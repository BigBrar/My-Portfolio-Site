// import logo from './logo.svg';
import Introduction from './components/Introduction';
import ProgressBar from './components/ProgressBar';
import styles from './index.module.css'
import Image from './profile.jpg'
import ReactImage from './assets/reactLogo.png'
import HtmlImage from './assets/htmlLogo.png'
import FlaskImage from './assets/flaskLogo.png'
import CssImage from './assets/cssLogo.png'
import PythonImage from './assets/pythonLogo.png'
import JsImage from './assets/jsLogo.png'
import NodeJSImage from './assets/nodejsLogo.png'
import MongoDBImage from './assets/mongodbLogo.png'


function App() {
  return (
    <div className="App">
     <Introduction styles={styles} Image={Image}/>
     <div className={styles.skillsDiv}>
        <h1 className={styles.skillsHeading}>Skills & Technologies</h1>
        <div className={styles.skills}>
          <div className={styles.skillItem}>
            <ProgressBar barLength={400} skillImage={ReactImage} skillPercentage={'80%'} skillName="React"/>
          </div>
          <div className={styles.skillItem1}>
            <ProgressBar barLength={430} skillImage={HtmlImage} skillPercentage={'90%'} skillName="HTML"/>
          </div>
        </div>
        <div className={styles.skills}>
          <div className={styles.skillItem}>
            <ProgressBar barLength={420} skillImage={FlaskImage} skillPercentage={'85%'} skillName="Flask"/>
          </div>
          <div className={styles.skillItem1}>
            <ProgressBar barLength={390} skillImage={CssImage} skillPercentage={'75%'} skillName="CSS"/>
          </div>
        </div>
        <div className={styles.skills}>
          <div className={styles.skillItem}>
            <ProgressBar barLength={440} skillImage={PythonImage} skillPercentage={'95%'} skillName="Python"/>
          </div>
          <div className={styles.skillItem1}>
            <ProgressBar barLength={410} skillImage={JsImage} skillPercentage={'80%'} skillName="JavaScript"/>
          </div>
        </div>
        <div className={styles.skills}>
          <div className={styles.skillItem}>
            <ProgressBar barLength={380} skillImage={NodeJSImage} skillPercentage={'70%'} skillName="Node JS"/>
          </div>
          <div className={styles.skillItem1}>
            <ProgressBar barLength={380} skillImage={MongoDBImage} skillPercentage={'70%'} skillName="MongoDB"/>
          </div>
        </div>
     </div>
    </div>
  );
}

export default App;
