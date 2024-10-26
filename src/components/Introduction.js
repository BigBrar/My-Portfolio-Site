import ImageNew from './profile1.png'
export default function Introduction({styles, Image}){
    // const description = 'Dedicated software developer with 3+ years of experience in various programming languages or technologies. Skilled in [list of key skills, e.g., full-stack development, data analysis, machine learning]. Passionate about crafting innovative solutions and delivering high-quality products. Committed to staying up-to-date with the latest industry trends and technologies.';
    // const description = "Passionate about crafting innovative solutions, I leverage my expertise in React, Next.js, and Python to build efficient and user-centric web applications. Committed to continuous learning, and delivering high-quality results. I thrive in collaborative environments and enjoy working with diverse teams to achieve common goals."
    const description = "Driven to create innovative web solutions, I leverage my expertise in React, Next.js, and Python to build efficient and user-friendly interfaces. Currently a 3rd year B.Sc. IT student at Maharaja Ranjit Singh University, I'm passionate about technology and constantly learning new skills to stay ahead of the curve. I thrive in collaborative environments and enjoy working with diverse teams to achieve common goals."
    window.onload = function() {

      const animatedElement = document.querySelector('#ImageDiv');
    
      animatedElement.style.animationPlayState = "running"; 
    
    };
    return (
        <>
        <section id='home' />
        <div className={styles.navbar}>
        <a href='#home' className={`${styles.navItem} ${styles.active}`}>Home</a>
        <a href='#skills' className={styles.navItem}>Skills</a>
        <a href='#projects' className={styles.navItem}>Projects</a>
        <a href='#contact' className={styles.navItem}>Contact</a>
     </div>

      
     <div className={styles.firstPart}>
        <div className={styles.introduction}>
          <div className={styles.profileDiv}>
            {/* <img className={styles.profileImg} src={Image} alt='Profile photo'/> */}
            <div id='ImageDiv' className={styles.ImageDiv}>
            </div>
                <img className={styles.newProfileImg} src={ImageNew} alt='Profile photo'/>
          </div>
          <div className={styles.profileDesc}>
            <h2>I am <span className={styles.textBeautify}>Deepinder</span>, an enthusiastic <span className={styles.textBeautify}> Web Developer</span></h2>
            {/* <p>this is a test</p> */}
            <p  className={styles.descriptionText}>
            {description}
            </p>
          </div>
        </div>
     </div>
        </>
    )
}