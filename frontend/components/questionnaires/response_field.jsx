import React from 'react';


const ResponseField = ({ questionKey, onChange, value}) => {
  const handleChange = (e) => {
    const bodyValue = e.target.value;
    onChange(questionKey, bodyValue);
  };
  return (
    <label>Response:
      <input onChange={ handleChange } value={ value }/>
    </label>
  );
};

export default ResponseField;
