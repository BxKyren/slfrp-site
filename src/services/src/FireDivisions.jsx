import React from "react";
import { GlassCard } from "../App.jsx";

export default function FireDivisions() {
  const divisions = [
    {
      name: "Firefighting Operations",
      desc: "Responding to fires and emergencies across Greater London.",
      img: "https://upload.wikimedia.org/wikipedia/commons/0/00/London_Fire_Brigade_Firefighters.jpg",
    },
    {
      name: "Urban Search and Rescue (USAR)",
      desc: "Specialised team for collapsed buildings and technical rescues.",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/6d/London_Fire_Brigade_USAR.jpg",
    },
    {
      name: "Fire Investigation Unit",
      desc: "Determining fire causes and supporting legal investigations.",
      img: "https://upload.wikimedia.org/wikipedia/commons/f/f5/London_Fire_Investigation_Unit.jpg",
    },
    {
      name: "Community Safety",
      desc: "Educating the public and promoting fire prevention.",
      img: "https://upload.wikimedia.org/wikipedia/commons/3/3c/London_Fire_Community_Safety.jpg",
    },
    {
      name: "Training and Development",
      desc: "Ensuring firefighters maintain high levels of readiness and skill.",
      img: "https://upload.wikimedia.org/wikipedia/commons/b/bd/LFB_Training_Centre.jpg",
    },
    {
      name: "High-Rise Response Team",
      desc: "Specialised crews trained for complex high-rise incidents.",
      img: "https://upload.wikimedia.org/wikipedia/commons/8/8a/London_Fire_High_Rise_Response.jpg",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-red-900 mb-10">
          London Fire Brigade Divisions
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
                <h3 className="text-lg font-semibold text-red-900 mb-2">
                  {div.name}
                </h3>
                <p className="text-red-700 text-sm">{div.desc}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
