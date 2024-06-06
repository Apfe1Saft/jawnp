import React, { useState } from 'react';

interface UserRegisterFormProps {
  text: string;
  onData: (data: string) => void;
}

const DefInput: React.FC<UserRegisterFormProps> = ({ text, onData }) => {
  const [name, setName] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    onData(event.target.value);
  };

  return (
    <div>
        <label htmlFor="fname">{text}:</label><br />
        <input type="text" id="fname" name="fname" value={name} onChange={handleInputChange} /><br />
    </div>
  );
};

export default DefInput;