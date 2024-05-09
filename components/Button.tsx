import React from 'react';

interface ButtonProps {
  text: string;
}

const DefButton: React.FC<ButtonProps> = ({ text }) => {
  return (
    <div>
      <button>{text}</button>
    </div>
  );
};

export default DefButton;