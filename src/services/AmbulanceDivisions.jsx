import React from "react";
import { GlassCard } from "../App.jsx";

export default function AmbulanceDivisions() {
  const divisions = [
    {
      name: "Emergency Operations Centre (EOC)",
      desc: "Coordinating 999 calls and dispatching paramedic resources across London.",
      img: "https://upload.wikimedia.org/wikipedia/commons/0/0c/London_Ambulance_Service_EOC.jpg",
    },
    {
      name: "Advanced Paramedic Unit",
      desc: "Critical care paramedics providing advanced trauma interventions on scene.",
      img: "https://upload.wikimedia.org/wikipedia/commons/8/8a/London_Ambulance_Paramedic.jpg",
    },
    {
      name: "Hazardous Area Response Team (HART)",
      desc: "Specialist medics trained for hazardous environments and major incidents.",
      img: "https://upload.wikimedia.org/wikipedia/commons/4/49/HART_London_Ambulance_Service.jpg",
    },
    {
      name: "Cycle Response Unit",
      desc: "Rapid-response medics on bicycles for dense urban areas and events.",
      img: "https://upload.wikimedia.org/wikipedia/commons/5/5c/London_Ambulance_Cycle_Response.jpg",
    },
    {
      name: "Patient Transport Service",
      desc: "Safe and efficient non-emergency transport for patients and discharges.",
      img: "https://upload.wikimedia.org/wikipedia/commons/7/72/LAS_Patient_Transport_Service.jpg",
    },
    {
      name: "Helicopter Emergency Medical Service (HEMS)",
      desc: "Air ambulance delivering rapid critical care by helicopter across London.",
      img: "https://upload.wikimedia.org/wikipedia/commons/7/74/London_Air_Ambulance_2020.jpg",
    },
  ];

  return (
    <section className="py-16 bg-white/95">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-900 mb-10">
          London Ambulance Divisions
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {divisions.map((div) => (
            <GlassCard
              key={div.name}
              className="hover:scale-[1.02] focus-within:ring-2 focus-within:ring-green-300"
            >
              <img
                src={div.img}
                alt={div.name}
                className="w-full h-36 object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-green-900 mb-2">
                  {div.name}
                </h3>
                <p className="text-green-700/90 text-sm leading-relaxed">
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
