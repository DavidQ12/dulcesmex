// src/components/UI/card.js
import React from "react";

export function Card({ className = "", children }) {
  return (
    <div className={`border rounded-2xl shadow-lg bg-zinc-900/60 p-4 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ className = "", children }) {
  return (
    <div className={`p-4 ${className}`}>
      {children}
    </div>
  );
}
