import React from "react";

export default function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl overflow-hidden shadow-sm border border-blue-100/60 bg-white/70 backdrop-blur-md
                  hover:shadow-lg hover:-translate-y-1 transition transform ${className}`}
    >
      {children}
    </div>
  );
}
