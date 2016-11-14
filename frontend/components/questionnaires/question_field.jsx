import React from 'react';


const QuestionField = ({ fieldKey, onChange, value}) => {
  const handleChange = (field, e) => {
    const fieldValue = e.target.value;
    onChange(fieldKey, field, fieldValue);
  };
  return (
    <li>
      <label>Name:
        <input onChange={ (e) => handleChange("name", e) } value={ value["name"] }/>
      </label>
      <label>Label:
        <input onChange={ (e) => handleChange("label", e) } value={ value["label"] }/>
      </label>
    </li>
  );
};

export default QuestionField;
