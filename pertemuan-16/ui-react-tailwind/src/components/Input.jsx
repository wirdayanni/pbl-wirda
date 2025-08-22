import React from 'react';

function Input({ name, value, onChange, placeholder, required, readOnly }) {
  return (
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      readOnly={readOnly}
      className={`p-2 border rounded w-full ${readOnly ? 'bg-gray-100 text-gray-500' : ''}`}
    />
  );
}

export default Input;