import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "../App.jsx";

export default function FireDivisions() {
  const divisions = [
    {
      name: "Firefighting & Rescue Operations",
      desc: "Frontline crews responding to fires, rescues, and emergencies across London.",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/d3/London_Fire_Brigade_Appliance.jpg",
    },
    {
      name: "Urban Search & Rescue (USAR)",
      desc: "Highly trained teams handling collapsed structures and technical rescues.",
      img: "https://upload.wikimedia.org/wikipedia/commons/f/f7/London_Fire_Brigade_USAR_vehicle.jpg",
    },
    {
      name: "Fire Investigation Unit",
      desc: "Specialists who determine the cause and origin of fires using forensic techniques.",
      img: "https://upload.wikimedia.org/wikipedia/commons/4/41/LFB_Fire_Investigation_Unit.jpg",
    },
    {
      name: "Command & Control Unit",
      desc: "Oversees coordination at large-scale incidents, maintaining communication and control.",
      img: "https://upload.wikimedia.org/wikipedia/commons/9/96/LFB_Command_Unit.jpg",
    },
    {
      name: "Training & Development",
      desc: "Ensuring all firefighters are skilled in the latest rescue, fire safety, and incident command techniques.",
      img: "https://upload.wikimedia.org/wikipedia/commons/7/74/London_Fire_Brigade_Training_Centre.jpg",
    },
    {
      name: "Community Fire Safety",
      desc: "Engaging with communities to promote fire prevention and home safety awareness.",
      img: "https://upload.wikimedia.org/wikipedia/commons/a/a8/London_Fire_Brigade_Community_Safety.jpg",
    },
  ];

  console.log("🔥 FireDivisions component loaded");

  return (
    <section className="py-20 bg-gradient-to-b from-white to-red-50 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-red-900 mb-12 font-[BBH Sans Bartle]"
        >
          London Fire Brigade Divisions
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
                  <h3 className="text-lg font-semibold text-red-900 mb-2 font-poppins">
                    {div.name}
                  </h3>
                  <p className="text-red-700 text-sm leading-relaxed font-roboto">
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
