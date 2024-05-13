import React from 'react';

interface FormData {
  name: string;
  surname: string;
  email: string;
  fieldOfWork: string;
  password: string;
  submitPassword: string;
  link: string;
  softSkills: string[];
  hardSkills: string[];
  careerGoals: string[];
  login: string;
}

interface FormProps {
  formData: FormData;
}

const DefForm: React.FC<FormProps> = ({ formData }) => {
  return (
    <form>
      <label>
        Name:
        <input type="text" defaultValue={formData.name} />
      </label><br />
      <label>
        Surname:
        <input type="text" defaultValue={formData.surname} />
      </label><br />
      <label>
        Email:
        <input type="email" defaultValue={formData.email} />
      </label><br />
      <label>
        Field of Work:
        <input type="text" defaultValue={formData.fieldOfWork} />
      </label><br />
      <label>
        Password:
        <input type="password" defaultValue={formData.password} />
      </label><br />
      <label>
        Submit Password:
        <input type="password" defaultValue={formData.submitPassword} />
      </label><br />
      <label>
        Link:
        <input type="text" defaultValue={formData.link} />
      </label><br />
      <label>Soft Skills:</label><br />
      {formData.softSkills.map((skill, index) => (
        <div key={index}>
          <label>
            <input type="checkbox" defaultChecked={true} />
            {skill}
          </label>
        </div>
      ))}
      <label>
        Login:
        <input type="text" defaultValue={formData.login} />
      </label><br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default DefForm;