import React from 'react';


const QuestionField = ({ fieldKey, onChange, value}) => {
  const handleChange = (field, e) => {
    const fieldValue = e.target.value;
    onChange(fieldKey, field, fieldValue);
  };
  return (
    <li>
      <label>Name:</label>
      <input onChange={ (e) => handleChange("name", e) } value={ value["name"] }/>
      <label>Label:</label>
      <input onChange={ (e) => handleChange("label", e) } value={ value["label"] }/>
    </li>
  );
};

export default QuestionField;
