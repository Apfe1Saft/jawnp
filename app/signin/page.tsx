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

  return (
    <div className={styles.div}>
      <div style={{margin: '10px'}}>
      Enter your data.
        <DefInput text ="Name"/>
        <DefInput text="Surname"/>
        <DefInput text="Email"/>
        <DefMultipleChoices text='Choose from one to five your soft-skills:' options={softSkillsOptions} limit ={5}/>

        <DefMultipleChoices text='Choose from one to five your soft-skills:' options={hardSkillsOptions} limit ={50}/>

        <DefButton text='Submit'/>
      </div>
    </div>
  )
}
