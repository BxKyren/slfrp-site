import React from "react";
import { GlassCard } from "../App.jsx";

export default function PoliceDivisions() {
  const divisions = [
    {
      name: "Roads & Transport Policing Command",
      desc: "Enforcing road safety laws, investigating collisions and traffic crime.",
      img: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Metropolitan_Police_Traffic_Car.jpg",
    },
    {
      name: "Criminal Investigation Department (CID)",
      desc: "Serious crime investigations, major enquiries and detective operations.",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Detectives_in_London.jpg",
    },
    {
      name: "Dog Support Unit (DSU)",
      desc: "Search, tracking and public order support with highly trained dogs.",
      img: "https://upload.wikimedia.org/wikipedia/commons/8/88/Met_Police_Dog_Unit.jpg",
    },
    {
      name: "Armed Response Unit (ARU)",
      desc: "Immediate tactical response to firearms incidents and critical threats.",
      img: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Armed_Response_Vehicle_MET.jpg",
    },
    {
      name: "Forensic Services",
      desc: "Collecting and analysing evidence to support criminal investigations.",
      img: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Forensic_investigation_Metropolitan_Police.jpg",
    },
    {
      name: "Neighbourhood Policing",
      desc: "Local engagement, problem-solving and visible community policing.",
      img: "https://upload.wikimedia.org/wikipedia/commons/9/94/Metropolitan_Police_Community_Support_Officers.jpg",
    },
  ];

  return (
    <section className="py-16 bg-white/95">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-10">
          Metropolitan Police Divisions
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {divisions.map((div) => (
            <GlassCard
              key={div.name}
              className="hover:scale-[1.02] focus-within:ring-2 focus-within:ring-blue-300"
            >
              <img
                src={div.img}
                alt={div.name}
                className="w-full h-36 object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  {div.name}
                </h3>
                <p className="text-blue-700/90 text-sm leading-relaxed">
                  {div.desc}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
