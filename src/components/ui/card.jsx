// src/components/ui/card.jsx
import React from "react";

// Un simple composant Card
export function Card({ children }) {
  return (
    <div className="border rounded-lg shadow-lg p-4">
      {children}
    </div>
  );
}

// Un composant CardContent pour contenir des informations à l'intérieur de la Card
export function CardContent({ children }) {
  return <div className="text-gray-700">{children}</div>;
}
