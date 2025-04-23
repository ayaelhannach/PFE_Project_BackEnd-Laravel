import React from 'react';

export const Textarea = ({ id, name, value, onChange, placeholder, className }) => {
  return (
    <textarea
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full p-2 border border-gray-300 rounded-md ${className}`}
    />
  );
};
