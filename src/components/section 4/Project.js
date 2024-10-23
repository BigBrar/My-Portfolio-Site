import { useRef, useState } from 'react'
import styles from './projects.module.css'
import {  AnimatePresence, motion } from "framer-motion";

export default function Project({title,description,image,techStack,githubLogo,sourceCode}){
    const [modalShow, setmodalShow] = useState(false)
    // const dialog = useRef();
    const backdrop = {
        visible: {opacity:1},
        hidden:{opacity:0}
    }
    return (
        <AnimatePresence mode='wait'>
            {modalShow && 
            <motion.div className={styles.backdrop}
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
            >
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className={styles.projectItem}
            >
                <img className={styles.projectImage} src={image} alt='image for the project'/>
            <div className={styles.projectHeading}>
                <h2>{title}</h2>
            </div>
            <h4>Tech Stack - </h4>
                {techStack.map((item)=>(
                    <p> {item}</p>
                ))}
            <a href={sourceCode}>
            <div className={styles.githubDiv}>
                <div className={styles.githubSource}>
                <img className={styles.githubImg} src={githubLogo} alt='github logo'/>
                </div>
            </div>
            </a>
            <div className={styles.projectDescription}>
                <p>{description}</p>
            </div>
            <button onClick={()=>setmodalShow(modalShow?false:true)}>close</button>
            </motion.div>

            </motion.div>}
            <motion.div 
            onClick={()=>setmodalShow(modalShow?false:true)}
            whileHover={{ scale: 1.02 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
            className={styles.projectPreview}>
                <div className={styles.previewItem}>
                    <img className={styles.previewImage} src={image} alt='image for the project'/>
                    <h3>{title}</h3>
                    {/* <div className={styles.modalButton}>
                    <h4 className={styles.modalToggle} onClick={()=>setmodalShow(modalShow?false:true)}>Expand</h4>
                    </div> */}
                </div>
            </motion.div>
        </AnimatePresence>




        // <AnimatePresence mode='wait'>
        // <motion.dialog
        // ref={dialog} className={styles.projectItem}>
        //     <motion.div
        //     initial="hidden"
        //     whileInView="visible"
        //     viewport={{ once: true }}
        //     transition={{ duration: 1.5 }}
        //     >
        //         <img className={styles.projectImage} src={image} alt='image for the project'/>
        //     <div className={styles.projectHeading}>
        //         <h2>{title}</h2>
        //     </div>
        //     <div className={styles.projectDescription}>
        //         <p>{description}</p>
        //     </div>
        //     <form method='dialog'>
        //         <button>close</button>
        //     </form>
        //     </motion.div>
        // </motion.dialog>
        
        // {/* <button onClick={()=>setmodalShow(modalShow?false:true)}>Expand</button> */}
        // {/* <button onMouseLeave={()=>dialog.current.close()} onMouseEnter={()=>dialog.current.showModal()}>Expand</button> */}
        // <button onClick={()=>dialog.current.showModal()}>Expand</button>
        
        // </AnimatePresence>
    )
}