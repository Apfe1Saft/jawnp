import React from 'react';


interface UserRegisterFormProps {
    text: string;
  }
  
  const DefButton: React.FC<UserRegisterFormProps> = ({ text }) => {
    return (
      <div>
        <button>{text}</button>
      </div>
    );
  };
  
  export default DefButton;