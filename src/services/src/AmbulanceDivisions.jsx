import React from "react";
import { GlassCard } from "../App.jsx";

export default function AmbulanceDivisions() {
  const divisions = [
    {
      name: "Emergency Operations Centre (EOC)",
      desc: "Coordinating emergency calls and dispatching paramedic crews.",
      img: "https://upload.wikimedia.org/wikipedia/commons/0/0c/London_Ambulance_Service_EOC.jpg",
    },
    {
      name: "Advanced Paramedic Unit",
      desc: "Providing advanced trauma care and critical support on-scene.",
      img: "https://upload.wikimedia.org/wikipedia/commons/8/8a/London_Ambulance_Paramedic.jpg",
    },
    {
      name: "Hazardous Area Response Team (HART)",
      desc: "Specialist paramedics trained for hazardous environments.",
      img: "https://upload.wikimedia.org/wikipedia/commons/4/49/HART_London_Ambulance_Service.jpg",
    },
    {
      name: "Cycle Response Unit",
      desc: "Rapid-response medics on bicycles for central London incidents.",
      img: "https://upload.wikimedia.org/wikipedia/commons/5/5c/London_Ambulance_Cycle_Response.jpg",
    },
    {
      name: "Patient Transport Service",
      desc: "Safe and efficient non-emergency transport for patients.",
      img: "https://upload.wikimedia.org/wikipedia/commons/7/72/LAS_Patient_Transport_Service.jpg",
    },
    {
      name: "Training and Development",
      desc: "Preparing new recruits and enhancing paramedic skills.",
      img: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Paramedic_training_London_Ambulance_Service.jpg",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-green-900 mb-10">
          London Ambulance Divisions
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
                <h3 className="text-lg font-semibold text-green-900 mb-2">
                  {div.name}
                </h3>
                <p className="text-green-700 text-sm">{div.desc}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
