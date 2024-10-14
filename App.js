// import logo from './logo.svg';
import Introduction from './components/Introduction';
import styles from './index.module.css'
import Image from './profile.jpg'

function App() {
  return (
    <div className="App">
     <Introduction styles={styles} Image={Image}/>
     <div className={styles.skillsDiv}>
        <h1 className={styles.skillsHeading}>Skills & Technologies</h1>
        <div className={styles.skills}>
          <div className={styles.skillItem}><h3>React</h3></div>
          <div className={styles.skillItem}><h3>HTML</h3></div>
        </div>
     </div>
    </div>
  );
}

export default App;
