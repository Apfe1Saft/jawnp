import React, { useState } from 'react';

interface UserRegisterFormProps {
  text: string;
}

const DefInput: React.FC<UserRegisterFormProps> = ({ text }) => {
  return (
    <div>
      <form>
        <label htmlFor="fname">{text}:</label><br />
        <input type="text" id="fname" name="fname" /><br />
      </form>
    </div>
  );
};

export default DefInput;


