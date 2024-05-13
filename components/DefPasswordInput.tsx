import React from 'react';

interface DefPasswordInputProps {
  text: string;
  onPasswordData: (data: string) => void; 
}

const DefPasswordInput: React.FC<DefPasswordInputProps> = ({ text, onPasswordData }) => {
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value;
    onPasswordData(password);
  };

  return (
    <div>
      <form>
        {/* Rendering the password input field */}
        <label htmlFor="password">{text}:</label><br />
        <input 
          type="password" 
          id="password" 
          name="password" 
          onChange={handlePasswordChange} 
        /><br />
      </form>
    </div>
  );
};

export default DefPasswordInput;