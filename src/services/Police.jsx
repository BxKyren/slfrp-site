import React from "react";
import { GlassCard } from "../App.jsx";

export default function DivisionsSection() {
  const divisions = [
    {
      name: "Traffic Division",
      desc: "Enforcing road safety and responding to incidents across London.",
      img: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Metropolitan_Police_Traffic_Car.jpg",
    },
    {
      name: "Criminal Investigation Division (CID)",
      desc: "Handling serious crime investigations and detective operations.",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Detectives_in_London.jpg",
    },
    {
      name: "Dog Support Unit",
      desc: "Supporting patrols and searches with highly trained police dogs.",
      img: "https://upload.wikimedia.org/wikipedia/commons/8/88/Met_Police_Dog_Unit.jpg",
    },
    {
      name: "Armed Response Unit (ARU)",
      desc: "Responding to incidents involving firearms and critical threats.",
      img: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Armed_Response_Vehicle_MET.jpg",
    },
    {
      name: "Forensics Division",
      desc: "Collecting and analysing evidence to support investigations.",
      img: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Forensic_investigation_Metropolitan_Police.jpg",
    },
    {
      name: "Community Policing",
      desc: "Building trust and relationships with local communities.",
      img: "https://upload.wikimedia.org/wikipedia/commons/9/94/Metropolitan_Police_Community_Support_Officers.jpg",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-10">
          Metropolitan Police Divisions
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {divisions.map((div) => (
            <GlassCard
              key={div.name}
              className="hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <img
                src={div.img}
                alt={div.name}
                className="w-full h-32 object-cover rounded-t-2xl"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  {div.name}
                </h3>
                <p className="text-blue-700 text-sm">{div.desc}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
