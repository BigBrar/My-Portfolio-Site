// import logo from './logo.svg';
import Introduction from './components/Introduction';
import Technologies from './components/Technologies';
import styles from './index.module.css'
import Image from './profile.jpg'
import Heading from './components/Heading';
import Skills from './components/section 3/Skills';


function App() {
  return (
    <div className="App">
     <Introduction styles={styles} Image={Image}/>
     <Technologies styles={styles}/>
     <Heading topMargin={110} styles={styles} headingText='Other Skills'/>
     <Skills/>
    </div>
  );
}

export default App;
