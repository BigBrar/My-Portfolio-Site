import imageStyle from './progressBar.module.css';
import {  motion } from "framer-motion";

export default function ProgressBar({barLength, skillImage,skillPercentage, skillName}){
    console.log(barLength)
    return (
        <motion.div className={imageStyle.skillsDiv} style={{display:'flex', gap:'10px'}}>
        <div>
            <img src={skillImage} className={imageStyle.skillLogo} alt='react logo icon'/>
        </div>
        <div style={{display:'grid', alignItems:'left', justifyContent:'left'}}>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr'}}>
                <p style={{ textAlign:'left', padding:'0', margin:'0'}}>{skillName}</p>
                <p style={{ textAlign:'right', padding:'0', margin:'0'}}>{skillPercentage}</p>
            </div>
            <div style={{position:'relative'}}>
                <div className={imageStyle.totalProgress}></div>
                {/* <motion.div className={imageStyle.progressBar} style={{width:`${barLength}px`}}></motion.div> */}
                <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                variants={{
                    visible: { width:barLength },
                    hidden: { width:0 }
                }}
                className={imageStyle.progressBar} style={{width:`${barLength}px`}}></motion.div>
                <div className={imageStyle.flowingColor} ></div>
            </div>
        </div>
        </motion.div>
    )
}
