import React from "react";
import { teamData } from "./teamData.js";
import { Container, GlassCard } from "./App.jsx";
import FadeIn from "./FadeIn.jsx";
import { motion } from "framer-motion";

export default function Team() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="bg-blue-50/40 text-blue-900"
    >
      {/* Page Header */}
      <section className="relative h-[280px] sm:h-[350px] flex items-center justify-center text-center">
        <motion.div
          className="absolute inset-0 bg-cover bg-center -z-10 blur-sm scale-105"
          style={{
            backgroundImage: `url(https://live.staticflickr.com/65535/54880830406_9d3a5e2065_b.jpg)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-700/50 to-white/50 -z-10" />
        <h1 className="text-white text-5xl font-extrabold drop-shadow-lg font-[BBH Sans Bartle]">
          Meet the Team
        </h1>
      </section>

      <Container>
        <div className="py-14 space-y-16">
          {Object.entries(teamData).map(([section, members]) => (
            <div key={section}>
              <h2 className="text-3xl font-poppins font-bold text-blue-800 mb-6 text-center">
                {section.replace(/([A-Z])/g, " $1").trim()}
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {members.map((member, i) => (
                  <FadeIn key={i} delay={i * 0.1}>
                    <GlassCard className="p-4 text-center bg-white/90">
                      <img
                        src={
                          member.img ||
                          "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
                        }
                        alt={member.name}
                        className="w-28 h-28 mx-auto rounded-full object-cover ring-2 ring-blue-300 mb-4"
                      />
                      <h3 className="font-poppins font-semibold text-xl text-blue-900">
                        {member.name || "Unnamed"}
                      </h3>
                      <p className="font-roboto text-blue-700 text-sm mt-1">
                        {member.desc}
                      </p>
                    </GlassCard>
                  </FadeIn>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </motion.div>
  );
}
