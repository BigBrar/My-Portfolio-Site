// import logo from './logo.svg';
import styles from './index.module.css'
import Image from './profile.jpg'

function App() {
  const description = 'Dedicated software developer with 3+ years of experience in various programming languages or technologies. Skilled in [list of key skills, e.g., full-stack development, data analysis, machine learning]. Passionate about crafting innovative solutions and delivering high-quality products. Committed to staying up-to-date with the latest industry trends and technologies.';
  return (
    <div className="App">
     <div className={styles.navbar}>
        <a className={`${styles.navItem} ${styles.active}`}>Home</a>
        <a className={styles.navItem}>Skills</a>
        <a className={styles.navItem}>Projects</a>
        <a className={styles.navItem}>Contact</a>
     </div>

     <div className={styles.firstPart}>
        <div className={styles.introduction}>
          <div className={styles.profileDiv}>
            <img className={styles.profileImg} src={Image} alt='Profile photo'/>
          </div>
          <div className={styles.profileDesc}>
            <h2>I am <span className={styles.textBeautify}>Deepinder</span>, a passionate <span className={styles.textBeautify}> Fullstack Developer</span></h2>
            {/* <p>this is a test</p> */}
            <p className={styles.descriptionText}>
            {description}
            </p>
          </div>
        </div>
     </div>
    </div>
  );
}

export default App;
