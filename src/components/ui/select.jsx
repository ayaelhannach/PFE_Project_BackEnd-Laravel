import React, { useState } from "react";

export const Select = ({ children }) => {
  return <div className="relative">{children}</div>;
};

export const SelectTrigger = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="w-full border border-gray-300 rounded px-3 py-2 text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      {children}
    </button>
  );
};

export const SelectValue = ({ value }) => {
  return <span>{value || "Sélectionner..."}</span>;
};

export const SelectContent = ({ open, children }) => {
  if (!open) return null;

  return (
    <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded shadow-md">
      {children}
    </div>
  );
};

export const SelectItem = ({ value, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(value)}
      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
    >
      {value}
    </div>
  );
};
