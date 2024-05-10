import DefInput from '@/components/DefInput'
import DefMultipleChoices from '@/components/DefMultipleChoices'
import styles from './page.module.css'
import React from 'react'
import DefButton from '@/components/DefButton';

export default function signin() {

  const softSkillsOptions = ["communication", "teamwork", 
  "problem-solving","critical thinking","adaptability",
  "time management","leadership","creativity","emotional intelligence"];

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

  return (
    <div className={styles.div}>
      <div style={{margin: '10px'}}>
      Enter your data.
        <DefInput text ="Name"/>
        <DefInput text="Surname"/>
        <DefInput text="Email"/>
        <DefMultipleChoices text='Choose from 1 to 5 your soft-skills:' options={softSkillsOptions} limit ={5}/>

        <DefMultipleChoices text='Choose from 1 to 50 your hard-skills:' options={hardSkillsOptions} limit ={50}/>

        <DefInput text='Field of work'/>

        <DefMultipleChoices text='Choose your career goals:' options={careerGoalsOptions} limit={careerGoalsOptions.length}/>

        <DefButton text='Submit'/>
      </div>
    </div>
  )
}
