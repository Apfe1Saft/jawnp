'use client'

import { useState } from "react";
import DefMultipleChoices from '@/components/DefMultipleChoices'
import { createUser , isUserByEmailExist, isUserByLoginExist} from "@/app/api/users/actions"

const softSkillsOptions = [
    "communication", "teamwork", "problem-solving", "critical thinking", "adaptability",
    "time management", "leadership", "creativity", "emotional intelligence"
];

const hardSkillsOptions = [
    "Programming (e.g., JavaScript, Python, Java)", "Web Development (e.g., HTML, CSS, React)",
    "Mobile App Development (e.g., iOS, Android)", "Database Management (e.g., SQL, MongoDB)",
    "Backend Development (e.g., Node.js, Django)", "Frontend Development (e.g., Angular, Vue.js)",
    "Full-Stack Development", "UI/UX Design", "Software Engineering", "Cloud Computing (e.g., AWS, Azure, Google Cloud)",
    "DevOps", "Network Administration", "Cybersecurity", "Machine Learning", "Artificial Intelligence", "Data Science",
    "Big Data Analytics", "Statistical Analysis", "Quantitative Analysis", "Mathematics", "Financial Modeling",
    "Risk Management", "Project Management", "Agile Methodologies", "Scrum", "Product Management", "Quality Assurance (QA)",
    "Software Testing", "Automation Testing", "Embedded Systems", "Robotics", "3D Printing", "CAD/CAM Design",
    "Electrical Engineering", "Mechanical Engineering", "Civil Engineering", "Chemical Engineering",
    "Biomedical Engineering", "Materials Science", "Physics", "Chemistry", "Biology", "Bioinformatics",
    "Geographic Information Systems (GIS)", "Technical Writing", "Data Visualization", "Geospatial Analysis",
    "Geology", "Meteorology"
];

const careerGoalsOptions = [
    "Become a manager or team leader", "Gain expertise in a specific technology or domain",
    "Advance to a higher position (e.g., senior developer, director)", "Start my own business or freelance",
    "Improve work-life balance", "Expand professional network and connections", "Develop leadership skills",
    "Obtain certifications or additional qualifications", "Transition to a new career field",
    "Enhance communication and presentation skills", "Become a subject matter expert in a particular field",
    "Gain international work experience", "Increase earning potential", "Build a personal brand or online presence",
    "Mentor or coach others", "Contribute to open-source projects", "Improve time management and productivity",
    "Develop expertise in project management", "Learn new programming languages or frameworks",
    "Acquire domain-specific knowledge (e.g., finance, healthcare)", "Enhance problem-solving and analytical skills",
    "Become proficient in data analysis or machine learning", "Work on challenging and innovative projects",
    "Improve public speaking and presentation skills", "Attend industry conferences and events",
    "Join professional organizations or associations", "Seek opportunities for professional development and training",
    "Receive recognition or awards for achievements", "Enhance negotiation and conflict resolution skills",
    "Contribute to community or social causes through work", "Become an expert in a specialized niche",
    "Improve organizational and planning skills", "Stay updated with industry trends and advancements",
    "Build a strong professional reputation", "Improve decision-making and critical thinking abilities",
    "Develop a strategic mindset for career growth", "Increase job satisfaction and fulfillment",
    "Network with industry leaders and influencers", "Achieve work-life balance and well-being",
    "Transition to a remote or flexible work environment", "Become a thought leader in the industry",
    "Enhance technical writing and documentation skills", "Contribute to the development of new products or services",
    "Create and execute a career development plan", "Become a mentor or advisor for junior professionals",
    "Master the art of delegation and team management", "Pursue opportunities for international assignments or travel",
    "Achieve financial independence and stability", "Develop expertise in emerging technologies",
    "Lead cross-functional teams on complex projects"
];

export default function SignInForm() {
    const [enteredSoft, setSoft] = useState<string[]>([]);
    const [enteredHard, setHard] = useState<string[]>([]);
    const [enteredCareerGoals, setCareerGoals] = useState<string[]>([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSoft = (data: string[]) => setSoft(data);
    const handleHard = (data: string[]) => setHard(data);
    const handleCareerGoals = (data: string[]) => setCareerGoals(data);

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const validatePassword = (password: string) => {
        const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return re.test(password);
    };
    

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        formData.append('softSkills', enteredSoft.join(', '));
        formData.append('hardSkills', enteredHard.join(', '));
        formData.append('careerGoals', enteredCareerGoals.join(', '));
        formData.append('email', email);
        formData.append('password', password);

        try {
            await createUser(formData);
        } catch (error) {
            console.log("ERROR")
            console.error('Error creating user:', error);
        }
    };

    return (
        <form className="sign-in-form" onSubmit={handleSubmit}>
            <h1>Sign In</h1>
            <div className="form-group">
                <label>Name: </label>
                <input
                    type="text"
                    name="name"
                    aria-label="Name"
                    placeholder="Enter your name"
                    required
                />
            </div>
            <div className="form-group">
                <label>Surname: </label>
                <input
                    type="text"
                    name="surname"
                    aria-label="Surname"
                    placeholder="Enter your surname"
                    required
                />
            </div>
            <div className="form-group">
                <label>Email: </label>
                <input
                    type="email"
                    name="email"
                    aria-label="Email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        if (!validateEmail(e.target.value)) {
                            e.target.setCustomValidity("Invalid email format");
                        } else {
                            e.target.setCustomValidity("");
                        }
                    }}
                    required
                />
            </div>
            <div className="form-group">
                <label>Field of work: </label>
                <input
                    type="text"
                    name="fieldOfWork"
                    aria-label="Field of Work"
                    placeholder="Enter your field of work"
                    required
                />
            </div>
            <div className="form-group">
                <label>Link to LinkedIn:</label>
                <input
                    type="url"
                    name="linkedInLink"
                    aria-label="LinkedIn Link"
                    placeholder="Enter your LinkedIn profile link"
                />
            </div>
            <div className="form-group">
                <label>Link to Github:</label>
                <input
                    type="url"
                    name="githubLink"
                    aria-label="GitHub Link"
                    placeholder="Enter your GitHub profile link"
                />
            </div>
            <div className="form-group">
                <label>Password: </label>
                <input
                    type="password"
                    name="password"
                    aria-label="Password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        if (!validatePassword(e.target.value)) {
                            e.target.setCustomValidity("Password must be at least 8 characters long and contain both letters and numbers");
                        } else {
                            e.target.setCustomValidity("");
                        }
                    }}
                    required
                />
            </div>
            <div className="form-group">
                <label>Login: </label>
                <input
                    type="text"
                    name="login"
                    aria-label="Login"
                    placeholder="Enter your login"
                    required
                />
            </div>
            <div id='sskills' className="multi-form">
                <DefMultipleChoices
                    text='Choose from 1 to 5 your soft-skills:'
                    options={softSkillsOptions}
                    limit={5}
                    onMultipleChoice={handleSoft}
                />
            </div>
            <div id='hskills' className="multi-form">
                <DefMultipleChoices
                    text='Choose from 1 to 50 your hard-skills:'
                    options={hardSkillsOptions}
                    limit={50}
                    onMultipleChoice={handleHard}
                />
            </div>
            <div id='cgoals' className="multi-form">
                <DefMultipleChoices
                    text='Choose your career goals'
                    options={careerGoalsOptions}
                    limit={careerGoalsOptions.length}
                    onMultipleChoice={handleCareerGoals}
                />
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit">Sign In</button>
        </form>
    );
}

export { SignInForm };