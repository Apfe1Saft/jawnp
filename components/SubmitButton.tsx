import React from 'react';

interface ButtonProps {
  text: string;
}

const SubmitButton: React.FC<ButtonProps> = ({ text }) => {
  return (
    <div>
      <button>{text}</button>
    </div>
  );
};

export default SubmitButton;