import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Container from "../components/Container.jsx";
import FireDivisions from "./FireDivisions.jsx";

export default function Fire() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="relative overflow-hidden bg-red-50/40 text-red-900 min-h-screen"
    >
      {/* ✅ Background */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm opacity-40 -z-10"
        style={{ backgroundImage: "url(https://i.imgur.com/6MJ6k8E.jpeg)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/70 via-red-800/50 to-white/70 -z-10" />

      {/* ✅ Hero Section */}
      <Container>
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-red-700 hover:underline mb-8 block mt-10"
        >
          <ArrowLeft size={18} /> Back to Services
        </Link>

        <h1 className="text-4xl font-[BBH Sans Bartle] font-bold text-white drop-shadow mb-4">
          London Fire Brigade
        </h1>

        <p className="font-roboto text-lg text-red-100 max-w-3xl leading-relaxed mb-8">
          Fire suppression, life-saving rescue operations and major incident response
          across London. Train and operate as a high-performing emergency crew.
        </p>

        <motion.img
          src="https://i.imgur.com/6MJ6k8E.jpeg"
          alt="London Fire Brigade"
          className="rounded-2xl shadow-lg ring-1 ring-white/40 w-full max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </Container>

      {/* ✅ Divisions Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        <FireDivisions />
      </motion.section>
    </motion.main>
  );
}
