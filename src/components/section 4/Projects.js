import Project from './Project'
import classes from './projects.module.css'
import Project1 from '../../assets/project1Screenshot.png'
import githubLogo from '../../assets/githubLogoFinal.png'
import Project2 from '../../assets/project2Screenshot.png'
import Project3 from '../../assets/project3Screenshot.png'
import Project4 from '../../assets/project4Screenshot.png'
import Project5 from '../../assets/project5Screenshot.png'
import Project6 from '../../assets/project6Screenshot.png'

export default function Projects(){
    const description1 = `It's to help students prepare better for exams and study. It helps students focus on the topics that matter the most. It has various different modals and all of them take either pdf or various images as input like the 
    "Question Paper Analyser" that takes previous question papers, the more question paper you provide the accurate the output. Then it analyses all the submitted papers and predicts which topics have the most probability to appear in the next examination.
          It has two other modals each with its own purpose.`
    const projects = [
        {
            title:'Exam Preparation Assistant',
            description:description1,
            techStack:['Frontend: React', 'Backend: Flask', 'Processing: Gemini'],
            image:Project1,
            sourceCode:'https://github.com/bigbrar/examplify'
        },
        {
            title:'Instagram Reel Analyser',
            description:description1,
            techStack:['Playwright', 'BeautifulSoup', 'Python'],
            image:Project2,
            sourceCode:'https://github.com/bigbrar/instagram_reel_analyser'
        },
        {
            title:'Instagram Reel Analyser',
            description:description1,
            techStack:['Playwright', 'BeautifulSoup', 'Python'],
            image:Project3,
            sourceCode:'https://github.com/BigBrar/Websocket-Tic-Tac-Toe'
        },
        {
            title:'Instagram Reel Analyser',
            description:description1,
            techStack:['Playwright', 'BeautifulSoup', 'Python'],
            image:Project4,
            sourceCode:'https://github.com/BigBrar/password-manager'
        },
        {
            title:'Instagram Reel Analyser',
            description:description1,
            techStack:['Playwright', 'BeautifulSoup', 'Python'],
            image:Project5,
            sourceCode:'https://github.com/BigBrar/Beautiful-weather-web'
        },
        {
            title:'Instagram Reel Analyser',
            description:description1,
            techStack:['Playwright', 'BeautifulSoup', 'Python'],
            image:Project6,
            sourceCode:'https://github.com/BigBrar/simtmutksar'
        },
    ]
    return (
        <div className={classes.sectionContainer}>
            <div className={classes.elementContainer}>
                {projects.map((project)=>(
                    <Project title={project.title} description={project.description} image={project.image} techStack={project.techStack} githubLogo={githubLogo} sourceCode={project.sourceCode}/>
                ))}
            </div>
        </div>
    )
}