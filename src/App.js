// import logo from './logo.svg';
import Introduction from './components/Introduction';
import Technologies from './components/Technologies';
import styles from './index.module.css'
import Image from './profile.jpg'
import Heading from './components/Heading';
import Skills from './components/section 3/Skills';
import Projects from './components/section 4/Projects';
import Contact from './components/section 5/Contact';


function App() {
  return (
    <div className="App">
      {/* <section id='home' /> */}
     <Introduction styles={styles} Image={Image}/>
     <section id='skills' />
     <Technologies styles={styles}/>
     <section id='projects' />
     <Heading topMargin={110} styles={styles} headingText='My Projects'/>
     <Projects/>
     <Heading topMargin={110} styles={styles} headingText='Other Skills'/>
     <Skills/>
     <Heading topMargin={110} styles={styles} headingText='Contact'/>
     <section id='contact' />
     <Contact/>
    </div>
  );
}

export default App;
