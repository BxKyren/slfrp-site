import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Container } from "../App.jsx";

export default function Ambulance() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="relative overflow-hidden bg-blue-50/40 text-blue-900 min-h-screen"
    >
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm opacity-40 -z-10"
        style={{ backgroundImage: "url(https://i.imgur.com/ceyHc6e.jpeg)" }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-b from-green-900/70 via-green-800/50 to-white/70 -z-10"></div>

      <Container>
        <Link to="/services" className="inline-flex items-center gap-2 text-green-700 hover:underline mb-8 block mt-10">
          <ArrowLeft size={18} /> Back to Services
        </Link>

        <h1 className="text-4xl font-[BBH Sans Bartle] font-bold text-white drop-shadow-md mb-4">
          London Ambulance Service
        </h1>

        <p className="font-roboto text-lg text-blue-100 max-w-3xl leading-relaxed mb-8">
          The London Ambulance Service provides emergency medical support across the city.
          Join divisions such as <strong>HART, Paramedics, and Air Ambulance</strong> to deliver life-saving care
          in high-pressure, realistic FiveM roleplay scenarios.
        </p>

        <motion.img
          src="https://i.imgur.com/ceyHc6e.jpeg"
          alt="London Ambulance Service"
          className="rounded-2xl shadow-lg w-full max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </Container>
    </motion.main>
  );
}
