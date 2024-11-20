// src/components/Filters.js
import React from 'react';

function Filters({ onChange }) {
  const handleInputChange = (e) => {
    // Update filters based on user input
    onChange({ [e.target.name]: e.target.value });
  };

  return (
    <div>
      <input name="condition" onChange={handleInputChange} placeholder="Condition" />
      {/* Add more filter inputs as needed */}
    </div>
  );
}

export default Filters;
