export default function Heading({topMargin, styles,headingText}){
    return (
        <div style={{marginTop:`${topMargin}px`, justifyContent:'center'}}> 
            <h1 className={styles.skillsHeading}>{headingText}</h1>
        </div>
    )
}