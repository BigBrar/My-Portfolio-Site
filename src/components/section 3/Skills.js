import SkillItem from './SkillItem'
import styles from './skills.module.css'
export default function Skills(){
    const firstH = "Web Scraping"
    const firstP = 'I possess a strong expertise in web scraping, leveraging tools like Requests for static web pages and browser automation frameworks for dynamic content extraction.'
    const skills = [
        {heading:'Web Scraping',
         para:'I possess a strong expertise in web scraping, leveraging tools like Requests for static web pages and browser automation frameworks for dynamic content extraction.'
        },
        {heading:'Automatoin',
         para:'I possess a strong expertise in web scraping, leveraging tools like Requests for static web pages and browser automation frameworks for dynamic content extraction.'
        },
        {heading:'Scripting',
         para:'I possess a strong expertise in web scraping, leveraging tools like Requests for static web pages and browser automation frameworks for dynamic content extraction.'
        },
        {heading:'Sockets',
         para:'I possess a strong expertise in web scraping, leveraging tools like Requests for static web pages and browser automation frameworks for dynamic content extraction.'
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