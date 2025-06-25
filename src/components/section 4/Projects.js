import Project from './Project'
import classes from './projects.module.css'
import Project1 from '../../assets/project1Screenshot.png'
import githubLogo from '../../assets/githubLogoFinal.png'
import Project2 from '../../assets/project2Screenshot.png'
import Project3 from '../../assets/project3Screenshot.png'
import Project4 from '../../assets/project4Screenshot.png'
import Project5 from '../../assets/project5Screenshot.png'
import Project6 from '../../assets/project6Screenshot.png'
import Project7 from '../../assets/project7Screenshot.jpeg'
import Project8 from '../../assets/project8Screenshot.png'
import Project9 from '../../assets/project9Screenshot.png'

export default function Projects(){
    const description1 = `ExamPlify is an innovative web application designed to revolutionize how students approach exam preparation through data-driven insights. At its core, the platform features a sophisticated Question Paper Analyzer that employs advanced analytics to process historical examination papers, identifying patterns and predicting high-probability topics for upcoming exams. By analyzing multiple PDF documents and images of past papers, the system generates increasingly accurate predictions, helping students focus their study efforts on topics most likely to appear in their examinations. The application comprises three specialized modules, with the Question Paper Analyzer being the cornerstone feature that develops more precise predictions with each additional paper processed. ExamSmart's intuitive design and powerful analytical capabilities empower students to make informed decisions about their study strategies, ultimately optimizing their exam preparation time and enhancing their potential for academic success.`
    const description2 = `This project is a web scraping tool that helps you understand how Instagram Reels are performing for any public profile. Simply input a username, and the tool automatically goes through all their Reels, collecting the number of views, likes, and comments for each Reel. Using browser automation, it smoothly navigates through Instagram (without needing manual login) and gathers these engagement metrics from every Reel on the profile. The tool then neatly packages all this statistical data into a JSON format, organizing the Reels from lowest to highest engagement. Whether you're a content creator wanting to understand what works best or just curious about Reel performance patterns, this tool makes it easy to get these insights without the manual work of checking each Reel individually.`
    const projects = [
        {
            title:'Punjab Power Supply Check',
            description:`Punjab Power Cut Tracker is a practical web application developed to make real-time electricity supply information easily accessible to residents across Punjab. The project replicates and extends the core functionality of the official PSPCL mobile app—specifically the power supply status feature—into a user-friendly web interface that requires no installation or login. By reverse-engineering the app's network requests, the backend captures and utilizes a secure tokenId to fetch live data from PSPCL’s internal API, delivering up-to-date outage information based on district, division, and subdivision selections.`,
            techStack:['Frontend: React', 'Backend: Flask', 'API: PSPCL'],
            image:Project7,
            sourceCode:'https://github.com/BigBrar/pspcl-power-supply-check'
        },
        {
            title:'Websocket Chat Application',
            description:`Step into a world of instant connection with this real-time chat application. Designed for seamless communication, it offers a secure login system, allowing users to effortlessly connect and engage in live conversations. Experience immediate message delivery, where every word shared is instantly visible to the recipient. The application intelligently manages chat histories, storing messages along with details like sender, receiver, and timestamps, ensuring your conversations are always organized and easily accessible. Stay constantly updated with a built-in ping mechanism that actively checks for new messages, keeping your chats fresh and responsive. Planned future enhancements include comprehensive user profile management and support for multimedia messages, aiming to enrich your interactive experience even further.`,
            techStack:['Frontend: React', 'Backend: Websocket Flask', 'Technology: Websockets'],
            image:Project8,
            sourceCode:'https://github.com/BigBrar/websocket-chat-web'
        },
        {
            title:'Exam Preparation Assistant',
            description:description1,
            techStack:['Frontend: React', 'Backend: Flask', 'Processing: Gemini'],
            image:Project1,
            sourceCode:'https://github.com/bigbrar/examplify'
        },
        {
            title:'Insta Reel Scroller',
            description:`Tired of endless scrolling through irrelevant Instagram Reels? This command-line tool intelligently curates your Reels feed. Leveraging the power of Playwright to automate browsing and AI to analyze reel captions, it determines if content is informational or educational. Reels deemed valuable are engaged with for longer, signaling your preferences to Instagram's algorithm. This bot helps you break free from time-wasting content and subtly reshape your feed towards topics you genuinely find useful and engaging.`,
            techStack:['Playwright', 'BeautifulSoup', 'Prompt Engineering'],
            image:Project9,
            sourceCode:'https://github.com/bigbrar/Insta_reel_scroller'
        },
        {
            title:'Instagram Reel Analytics',
            description:description2,
            techStack:['Playwright', 'BeautifulSoup', 'Python'],
            image:Project2,
            sourceCode:'https://github.com/bigbrar/instagram_reel_analyser'
        },
        {
            title:'CollegeCore',
            description:`This project arose from a practical need to solve accessibility issues with the official college website, which was plagued by SSL certificate problems and unreliable hosting. Built with Python Flask, this clone operates smoothly on the college's local network, providing uninterrupted access to essential services like student results and profiles. Through careful network analysis and request inspection, the application accurately replicates the original website's functionality, handling complex elements like session management and user authentication. The project evolved through three major iterations, each bringing significant improvements: the initial version utilized Python's requests module for basic functionality, the second implementation leveraged async programming for concurrent data fetching and caching, and the final version employed httpx for enhanced performance with built-in async and session support. Now serving as the go-to platform for both students and staff, this solution enables quick access to student information and results, demonstrating how a well-engineered alternative can effectively replace a problematic system.`,
            techStack:['Flask framework', 'Session Management', 'Async programming'],
            image:Project6,
            sourceCode:'https://github.com/BigBrar/collegecore'
        },
        {
            title:'Tic Tac Toe with WebSockets',
            description:`This project is a modern take on the classic Tic Tac Toe game, featuring both local and online multiplayer modes. In local mode, friends can play together on the same device, but the real excitement begins with the online multiplayer feature. When players activate online mode, the game connects to a Python-powered WebSocket server that matches them with a random opponent ready to play. The entire game communication happens in real-time through WebSockets, ensuring that every move is instantly synchronized between both players' screens. The system also handles disconnections gracefully – if your opponent leaves mid-game or loses connection, you'll be notified immediately. Built with a clean HTML/CSS/JavaScript frontend and a Python backend, this project demonstrates how traditional games can be transformed into engaging online experiences while maintaining their simple charm.`,
            techStack:['- WebSocket Server Programming', '- Real-time Communication', '- Connection State Management'],
            image:Project3,
            sourceCode:'https://github.com/BigBrar/Websocket-Tic-Tac-Toe'
        },
        {
            title:'Pass Keeper',
            description:`This project is a secure password management web application built with Python Flask that helps users create and store strong passwords for their various accounts. With a clean and intuitive interface, users can create their own secure account to access the password manager locally. Once logged in, the app generates robust passwords for different accounts while allowing users to add custom descriptions for easy identification. All generated passwords are displayed on a convenient dashboard where they can be quickly copied with a single click. The application prioritizes security by implementing bcrypt encryption to ensure all sensitive data remains protected. Whether you're managing passwords for social media, email, or banking accounts, this tool offers a secure and organized way to store and access your credentials without the need to remember multiple complex passwords.`,
            techStack:['Session Management', 'User Authentication', 'Python/Flask'],
            image:Project4,
            sourceCode:'https://github.com/BigBrar/password-manager'
        },
        {
            title:'Weather Checker',
            description:`This project is an interactive weather application that brings weather data to life through its dynamic user interface. Users can easily check weather conditions by entering a country code and city name (like "CAN, Surrey"). What makes this app special is its responsive design – the background actively changes to match the current weather conditions of the searched location, creating an immersive experience. The application fetches real-time data including temperature, humidity, current weather conditions, and sunset/sunrise timings from a weather API. Built entirely on the client side using HTML, CSS, and JavaScript, this web app showcases how weather information can be presented in an engaging and visually appealing way, making checking the weather less of a task and more of an experience.`,
            techStack:['Html/Css', 'Javascript', 'Json Parsing'],
            image:Project5,
            sourceCode:'https://github.com/BigBrar/Beautiful-weather-web'
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