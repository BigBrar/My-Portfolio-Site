import {  motion } from "framer-motion";
export default function SkillItem({styles,Heading, paraText}){
    return(
        <>
        <motion.div 
        // whileHover={{ scale: 1.03 }}
        // whileTap={{ scale: 0.9 }}
        // transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className={styles.skillItem}
        >
            <div className={styles.backgroundBall}></div>
            <h2>{Heading}</h2>
            <p style={{lineHeight:'25px',padding:'6px'}}>{paraText}</p>
        </motion.div>
        </>
    )
}