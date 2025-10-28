import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Container } from "../App.jsx";
import PoliceDivisions from "./PoliceDivisions.jsx"; // ✅ Division cards

export default function Police() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="relative overflow-hidden bg-blue-50/40 text-blue-900 min-h-screen"
    >
      {/* 🚓 Background Layers */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm opacity-40 -z-10"
        style={{
          backgroundImage:
            "url(https://live.staticflickr.com/65535/54883403625_689db8f2b3_b.jpg)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-800/50 to-white/70 -z-10" />

      {/* 🚓 Hero Section */}
      <Container>
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-blue-700 hover:underline mb-8 block mt-10"
        >
          <ArrowLeft size={18} /> Back to Services
        </Link>

        <h1 className="text-4xl font-[BBH Sans Bartle] font-bold text-white drop-shadow-md mb-4">
          Metropolitan Police Service
        </h1>

        <p className="font-roboto text-lg text-blue-100 max-w-3xl leading-relaxed mb-8">
          The Metropolitan Police Service is responsible for keeping London’s
          streets safe. Join specialist divisions such as{" "}
          <strong>
            Roads and Transport Command, CID, Dog Unit, Armed Response, and
            Community Policing
          </strong>{" "}
          — experience authentic policing and teamwork across the capital.
        </p>

        <motion.img
          src="https://live.staticflickr.com/65535/54883403625_689db8f2b3_b.jpg"
          alt="Metropolitan Police Service"
          className="rounded-2xl shadow-lg w-full max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </Container>

      {/* 🚓 Divisions Grid */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <PoliceDivisions />
      </motion.section>
    </motion.main>
  );
}
