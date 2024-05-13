import React, { useState } from 'react';

interface UserMultipleChoiceProps {
  text: string;
  options: string[];
  limit: number;
  onMultipleChoice: (data: string[]) => void;
}

const MultipleChoices: React.FC<UserMultipleChoiceProps> = ({ text, options, limit, onMultipleChoice }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleMCChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const choice = event.target.value;

    if (event.target.checked && selectedOptions.length < limit) {
      setSelectedOptions([...selectedOptions, choice]);
    } 
    else if (!event.target.checked) {
      setSelectedOptions(selectedOptions.filter(item => item !== choice));
    }

    onMultipleChoice(selectedOptions);
  };

  return (
    <div>
      <form>
        <label>{text}</label><br />
        <div style={{ margin: '10px' }}>
          {options.map((option, index) => (
            <div key={index}>
              <input
                type="checkbox"
                id={option}
                value={option}
                checked={selectedOptions.includes(option)}
                onChange={handleMCChange}
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