import SkillItem from './SkillItem'
import styles from './skills.module.css'
export default function Skills(){
    const firstH = "Web Scraping"
    const firstP = 'I possess a strong expertise in web scraping, leveraging tools like Requests for static web pages and browser automation frameworks for dynamic content extraction.'
    const skills = [
        {heading:'Web Scraping',
         para:'I possess a strong expertise in web scraping, leveraging tools like Requests for static web pages and browser automation frameworks for dynamic content extraction.'
        },
        {heading:'Automation',
         para:'Proficient in automation techniques to solve complex problems and optimize workflows. I have a strong foundation in automating repetitive tasks, allowing me to focus on strategic initiatives.'
        },
        {heading:'Scripting',
         para:'Proficient in automation techniques to solve complex problems and optimize workflows. I have a strong foundation in automating repetitive tasks, allowing me to focus on strategic initiatives.'
        },
        {heading:'Sockets',
         para:'Experienced in building efficient and scalable network applications using sockets and websockets. Proficient in handling real-time communication and data transfer protocols.'
        }
    ]
    return (
    <>
    <section className={styles.parentDiv}>
    <div className={`${styles.mainDiv1} ${styles.snapsInline}`}>
        {skills.map((skill)=>(
            <SkillItem Heading={skill.heading} styles={styles} paraText={skill.para}/>        
        ))}
    {/* <SkillItem Heading={firstH} styles={styles} paraText={firstP}/>
    <SkillItem Heading={firstH} styles={styles} paraText={firstP}/> */}
    </div>
    </section>
    </>
    )
}