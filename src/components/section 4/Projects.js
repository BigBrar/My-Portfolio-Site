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
    const description1 = `ExamPlify is an innovative web application designed to revolutionize how students approach exam preparation through data-driven insights. At its core, the platform features a sophisticated Question Paper Analyzer that employs advanced analytics to process historical examination papers, identifying patterns and predicting high-probability topics for upcoming exams. By analyzing multiple PDF documents and images of past papers, the system generates increasingly accurate predictions, helping students focus their study efforts on topics most likely to appear in their examinations. The application comprises three specialized modules, with the Question Paper Analyzer being the cornerstone feature that develops more precise predictions with each additional paper processed. ExamSmart's intuitive design and powerful analytical capabilities empower students to make informed decisions about their study strategies, ultimately optimizing their exam preparation time and enhancing their potential for academic success.`
    const description2 = `This project is a web scraping tool that helps you understand how Instagram Reels are performing for any public profile. Simply input a username, and the tool automatically goes through all their Reels, collecting the number of views, likes, and comments for each Reel. Using browser automation, it smoothly navigates through Instagram (without needing manual login) and gathers these engagement metrics from every Reel on the profile. The tool then neatly packages all this statistical data into a JSON format, organizing the Reels from lowest to highest engagement. Whether you're a content creator wanting to understand what works best or just curious about Reel performance patterns, this tool makes it easy to get these insights without the manual work of checking each Reel individually.`
    const projects = [
        {
            title:'Exam Preparation Assistant',
            description:description1,
            techStack:['Frontend: React', 'Backend: Flask', 'Processing: Gemini'],
            image:Project1,
            sourceCode:'https://github.com/bigbrar/examplify'
        },
        {
            title:'Instagram Reel Analytics',
            description:description2,
            techStack:['Playwright', 'BeautifulSoup', 'Python'],
            image:Project2,
            sourceCode:'https://github.com/bigbrar/instagram_reel_analyser'
        },
        {
            title:'Tic Tac Toe with WebSockets',
            description:`This project is a modern take on the classic Tic Tac Toe game, featuring both local and online multiplayer modes. In local mode, friends can play together on the same device, but the real excitement begins with the online multiplayer feature. When players activate online mode, the game connects to a Python-powered WebSocket server that matches them with a random opponent ready to play. The entire game communication happens in real-time through WebSockets, ensuring that every move is instantly synchronized between both players' screens. The system also handles disconnections gracefully – if your opponent leaves mid-game or loses connection, you'll be notified immediately. Built with a clean HTML/CSS/JavaScript frontend and a Python backend, this project demonstrates how traditional games can be transformed into engaging online experiences while maintaining their simple charm.`,
            techStack:['- WebSocket Server Programming', '- Real-time Communication', '- Connection State Management'],
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