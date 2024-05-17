'use client'
import DefInput from '@/components/DefInput'
import DefMultipleChoices from '@/components/DefMultipleChoices'
import styles from './page.module.css'
import React, { useState } from 'react'
import DefPasswordInput from '@/components/DefPasswordInput';

export default function SighIn() {



  const softSkillsOptions = [
    "communication",
    "teamwork", 
    "problem-solving",
    "critical thinking",
    "adaptability",
    "time management",
    "leadership",
    "creativity",
    "emotional intelligence"
  ];

  const hardSkillsOptions = [
    "Programming (e.g., JavaScript, Python, Java)",
    "Web Development (e.g., HTML, CSS, React)",
    "Mobile App Development (e.g., iOS, Android)",
    "Database Management (e.g., SQL, MongoDB)",
    "Backend Development (e.g., Node.js, Django)",
    "Frontend Development (e.g., Angular, Vue.js)",
    "Full-Stack Development",
    "UI/UX Design",
    "Software Engineering",
    "Cloud Computing (e.g., AWS, Azure, Google Cloud)",
    "DevOps",
    "Network Administration",
    "Cybersecurity",
    "Machine Learning",
    "Artificial Intelligence",
    "Data Science",
    "Big Data Analytics",
    "Statistical Analysis",
    "Quantitative Analysis",
    "Mathematics",
    "Financial Modeling",
    "Risk Management",
    "Project Management",
    "Agile Methodologies",
    "Scrum",
    "Product Management",
    "Quality Assurance (QA)",
    "Software Testing",
    "Automation Testing",
    "Embedded Systems",
    "Robotics",
    "3D Printing",
    "CAD/CAM Design",
    "Electrical Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Chemical Engineering",
    "Biomedical Engineering",
    "Materials Science",
    "Physics",
    "Chemistry",
    "Biology",
    "Bioinformatics",
    "Geographic Information Systems (GIS)",
    "Technical Writing",
    "Data Visualization",
    "Geospatial Analysis",
    "Geology",
    "Meteorology"
  ];
  const careerGoalsOptions = [
    "Become a manager or team leader",
    "Gain expertise in a specific technology or domain",
    "Advance to a higher position (e.g., senior developer, director)",
    "Start my own business or freelance",
    "Improve work-life balance",
    "Expand professional network and connections",
    "Develop leadership skills",
    "Obtain certifications or additional qualifications",
    "Transition to a new career field",
    "Enhance communication and presentation skills",
    "Become a subject matter expert in a particular field",
    "Gain international work experience",
    "Increase earning potential",
    "Build a personal brand or online presence",
    "Mentor or coach others",
    "Contribute to open-source projects",
    "Improve time management and productivity",
    "Develop expertise in project management",
    "Learn new programming languages or frameworks",
    "Acquire domain-specific knowledge (e.g., finance, healthcare)",
    "Enhance problem-solving and analytical skills",
    "Become proficient in data analysis or machine learning",
    "Work on challenging and innovative projects",
    "Improve public speaking and presentation skills",
    "Attend industry conferences and events",
    "Join professional organizations or associations",
    "Seek opportunities for professional development and training",
    "Receive recognition or awards for achievements",
    "Enhance negotiation and conflict resolution skills",
    "Contribute to community or social causes through work",
    "Become an expert in a specialized niche",
    "Improve organizational and planning skills",
    "Stay updated with industry trends and advancements",
    "Build a strong professional reputation",
    "Improve decision-making and critical thinking abilities",
    "Develop a strategic mindset for career growth",
    "Increase job satisfaction and fulfillment",
    "Network with industry leaders and influencers",
    "Achieve work-life balance and well-being",
    "Transition to a remote or flexible work environment",
    "Become a thought leader in the industry",
    "Enhance technical writing and documentation skills",
    "Contribute to the development of new products or services",
    "Create and execute a career development plan",
    "Become a mentor or advisor for junior professionals",
    "Master the art of delegation and team management",
    "Pursue opportunities for international assignments or travel",
    "Achieve financial independence and stability",
    "Develop expertise in emerging technologies",
    "Lead cross-functional teams on complex projects"
  ];
  const [enteredName, setName] = useState('');
  const [enteredSurname, setSurname] = useState('');
  const [enteredEmail, setEmail] = useState('');
  const [enteredFieldOfWork, setFieldOfWork] = useState('');
  const [enteredPassword, setPassword] = useState('');
  const [enteredSubmitPassword, setSubmitPassword] = useState('');
  const [enteredLink, setLink] = useState('');
  const [enteredSoft, setSoft] = useState<string[]>([]);
  const [enteredHard, setHard] = useState<string[]>([]);
  const [enteredCareerGoals, setCareerGoals] = useState<string[]>([]);
  const [enteredLogin, setLogin] = useState('');
  const [notification, setNotification] = useState('');


  const handleName = (data: string) => setName(data);
  const handleSurname = (data: string) => setSurname(data);
  const handleEmail = (data: string) => setEmail(data);
  const handleFieldOfWork = (data: string) => setFieldOfWork(data);
  const handlePassword = (data: string) => setPassword(data);
  const handleSubmitPassword = (data: string) => setSubmitPassword(data);
  const handleLink = (data: string) => setLink(data);
  const handleSoft = (data: string[]) => setSoft(data);
  const handleHard = (data: string[]) => setHard(data);
  const handleCareerGoals = (data: string[]) => setCareerGoals(data);
  const handleLogin = (data: string) => setLogin(data);

  const handleSubmit = () => {
    console.log('click')
    if (
        enteredName === '' ||
        enteredSurname === '' ||
        enteredEmail === '' ||
        enteredFieldOfWork === '' ||
        enteredPassword === '' ||
        enteredSubmitPassword === '' ||
        enteredLink === '' ||
        enteredSoft.length === 0 ||
        enteredHard.length === 0 ||
        enteredCareerGoals.length === 0 ||
        enteredLogin === '' ||
        notification === ''
    ) {
      console.log('empty data')
    } else{
      console.log('great!')
      window.location.href = '/main/page';
    }
};


  return (
    <div className={styles.div}>
      <div style={{margin: '10px'}}>
      <h1>Enter your data:</h1>
      <div id='name'><DefInput text="Name" onData={handleName}/></div>
      <div id='surname'><DefInput text="Surname" onData={handleSurname}/></div>
      <div id='email'><DefInput text="Email" onData={handleEmail}/></div>
      <div id='sskills'><DefMultipleChoices text='Choose from 1 to 5 your soft-skills:' options={softSkillsOptions}
        limit ={5} onMultipleChoice={handleSoft}/></div>
      <div id='hskills'><DefMultipleChoices text='Choose from 1 to 50 your hard-skills:' options={hardSkillsOptions}
        limit ={50} onMultipleChoice={handleHard}/></div>
      <div id='fow'><DefInput text='Field of work'  onData={handleFieldOfWork}/></div>
      <div id='cgoals'><DefMultipleChoices text='Choose your career goals' options={careerGoalsOptions}
         limit={careerGoalsOptions.length} onMultipleChoice={handleCareerGoals}/></div>
      <div id='llink'><DefInput text='Enter link to your LinkedIn profile'  onData={handleLink}/></div>
      <div id='login'><DefInput text="Login" onData={handleLogin}/></div>
      <div id='password'><DefPasswordInput text='Password' onPasswordData={handlePassword}/></div>
      <div id='spassword'><DefPasswordInput text='Submit password' onPasswordData={handleSubmitPassword}/></div>
      <div id='sbutton' style={{ textAlign: 'center' ,marginLeft: 'auto', marginRight: 'auto' }}>
        <button type='button' id='submitBtn' onClick={handleSubmit}>Submit</button>
      </div>
      </div>
    </div>
  )
}
