import React from "react";
import { GlassCard } from "../App.jsx";
import { motion } from "framer-motion";

export default function PoliceDivisions() {
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

  console.log("✅ PoliceDivisions component loaded");

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-blue-900 mb-12"
        >
          Metropolitan Police Divisions
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
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    {div.name}
                  </h3>
                  <p className="text-blue-700 text-sm leading-relaxed">
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
