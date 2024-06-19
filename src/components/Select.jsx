import { useState } from "react";

export const Select = ({ options, value }) => {
  const [selectedOption, setSelectedOption] = useState(value);

  const handleSelectChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
  };
  
  return (
    <select value={selectedOption} onChange={handleSelectChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value} label={option.label} name={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};