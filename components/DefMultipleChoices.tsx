'use client'
import React, { useState } from 'react';

interface UserMultipleChoiceProps {
  text: string;
  options: string[];
  limit: number
}

const MultipleChoices: React.FC<UserMultipleChoiceProps> = ({ text, options, limit }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionChange = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter(item => item !== option));
    } else {
      if (selectedOptions.length < limit) {
        setSelectedOptions([...selectedOptions, option]);
      } else {
      }
    }
  };

  return (
    <div>
      <form>
        <label>{text}</label><br />
        <div style={{margin: '10px'}}>
        {options.map((option, index) => (
          <div key={index}>
            <input
              type="checkbox"
              id={option}
              value={option}
              checked={selectedOptions.includes(option)}
              onChange={() => handleOptionChange(option)}
            />
            <label htmlFor={option}>{option}</label><br />
          </div>
        ))}
        </div>
      </form>
    </div>
  );
};

export default MultipleChoices;