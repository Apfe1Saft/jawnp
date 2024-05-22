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
    let updatedOptions:string[] = [];

    if (event.target.checked) {
      if (selectedOptions.length < limit) {
        updatedOptions = [...selectedOptions, choice];
        setSelectedOptions(updatedOptions);
      }
    } else {
      updatedOptions = selectedOptions.filter(item => item !== choice);
      setSelectedOptions(updatedOptions);
    }

    onMultipleChoice(updatedOptions);
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