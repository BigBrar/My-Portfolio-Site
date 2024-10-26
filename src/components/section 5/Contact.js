import styles from './contact.module.css'
import image from '../../assets/emailIcon.png'
import dialerImage from '../../assets/whatsappIcon.png'
import upworkImage from '../../assets/upworkIcon1.png'
import gmailImage from '../../assets/gmailIcon.png'
export default function Contact(){
    return(
        <>
        <div className={styles.emailDiv} >
            <img className={styles.emailImage} src={gmailImage}/>
            <h4>deepindersinghdeep03@gmail.com</h4>
        </div>
        <div className={styles.emailDiv} >
            <img className={styles.emailImage} src={dialerImage}/>
            <h4>+918528800978</h4>
        </div>
        <div className={styles.emailDiv} >
            <img className={styles.upworkImage} src={upworkImage}/>
            <a href='https://www.upwork.com/freelancers/~01ca4e54e7158fbd99'><h4>My Upwork Profile</h4></a>
        </div>
        </>
    )
}