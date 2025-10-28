import React from "react";
import { motion } from "framer-motion";
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

  console.log("💚 AmbulanceDivisions component loaded");

  return (
    <section className="py-20 bg-gradient-to-b from-white to-green-50 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-green-900 mb-12 font-[BBH Sans Bartle]"
        >
          London Ambulance Service Divisions
        </motion.h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {divisions.map((div, index) => (
            <motion.div
              key={div.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <GlassCard className="hover:shadow-lg hover:scale-[1.02] transition-transform duration-300">
                <img
                  src={div.img}
                  alt={div.name}
                  className="w-full h-36 object-cover rounded-t-2xl"
                />
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-green-900 mb-2 font-poppins">
                    {div.name}
                  </h3>
                  <p className="text-green-700 text-sm leading-relaxed font-roboto">
                    {div.desc}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
