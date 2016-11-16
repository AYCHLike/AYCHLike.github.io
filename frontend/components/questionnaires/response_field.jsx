import React from 'react';


const ResponseField = ({ questionKey, onChange, value}) => {
  const handleChange = (e) => {
    const bodyValue = e.target.value;
    onChange(questionKey, bodyValue);
  };
  return (
    <textarea onChange={ handleChange } value={ value }/>
  );
};

export default ResponseField;
