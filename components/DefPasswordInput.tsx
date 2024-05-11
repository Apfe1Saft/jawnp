import React from 'react';

interface DefPasswordInputProps {
  text: string;
}

const DefPasswordInput: React.FC<DefPasswordInputProps> = ({ text }) => {
  return (
    <div>
      <form>
        <label htmlFor="password">{text}:</label><br />
        <input type="password" id="password" name="password" /><br />
      </form>
    </div>
  );
};

export default DefPasswordInput;