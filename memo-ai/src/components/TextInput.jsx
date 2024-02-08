import React, { useState } from 'react';

const DynamicHeightInput = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <textarea
      placeholder='Message Memo'
      value={inputValue}
      onChange={handleInputChange}
      className='w-full focus:outline-none resize-none'
      style={{
        wordWrap: 'break-word',
        height: 'auto',  // Set initial height to auto
        minHeight: '20px',  // Set a minimum height (adjust as needed)
      }}
    />
  );
};

export default DynamicHeightInput;
