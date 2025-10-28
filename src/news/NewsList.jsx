import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GlassCard, Container } from "../App.jsx";
import { newsData } from "./newsData.js";

export default function NewsList() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="bg-blue-50/40 text-blue-900 min-h-screen"
    >
      <section className="relative h-[300px] sm:h-[360px] flex items-center justify-center text-center">
        <motion.div
          className="absolute inset-0 bg-cover bg-center -z-10"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1600&auto=format&fit=crop)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-700/60 to-white/60 -z-10" />
        <h1 className="text-white text-5xl font-extrabold drop-shadow-lg font-[BBH Sans Bartle]">
          Community News
        </h1>
      </section>

      <Container>
        <p className="text-center font-roboto text-blue-700 mb-10 text-lg mt-10">
          Latest announcements, events and updates.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 pb-20">
          {newsData.map((item, i) => (
            <motion.div key={item.id} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
              <Link to={`/news/${item.id}`}>
                <GlassCard className="hover:scale-[1.02] cursor-pointer">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-44 object-cover"
                    loading="lazy"
                  />
                  <div className="p-5">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-blue-700 text-sm">{item.desc}</p>
                  </div>
                </GlassCard>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </motion.main>
  );
}
