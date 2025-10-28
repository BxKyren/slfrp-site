import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GlassCard } from "../App.jsx";
import { newsData } from "./newsData.js";

export default function NewsList() {
  return (
    <section className="py-20 bg-blue-50/40 text-blue-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12 font-[BBH Sans Bartle]">
          Community News & Updates
        </h1>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {newsData.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link to={`/news/${item.id}`}>
                <GlassCard className="hover:shadow-lg hover:scale-[1.02] transition-transform duration-300 cursor-pointer">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-40 object-cover rounded-t-2xl"
                  />
                  <div className="p-5">
                    <h3 className="text-xl font-semibold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-blue-700 text-sm">{item.desc}</p>
                  </div>
                </GlassCard>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
