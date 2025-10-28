import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Container } from "../App.jsx";
import DivisionsSection from "./DivisionsSection"; // ✅ import the new component

export default function Police() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="bg-blue-50/40 text-blue-900 min-h-screen"
    >
      <Container>
        {/* Back Button */}
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-blue-700 hover:underline mt-10 mb-6"
        >
          <ArrowLeft size={18} /> Back to Services
        </Link>

        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-poppins font-bold mb-4">
            Metropolitan Police Service
          </h1>
          <p className="font-roboto text-lg text-blue-800 max-w-3xl mx-auto mb-8">
            The Metropolitan Police Service (MPS) is responsible for keeping
            London’s streets safe. Join units like{" "}
            <strong>
              Roads Traffic Policing Command, Specialist Firearms Command, CID,
              and Response
            </strong>{" "}
            — experience realistic policing, teamwork, and high-quality training
            environments inspired by the real Metropolitan Police.
          </p>

          <motion.img
            src="https://live.staticflickr.com/65535/54883403625_689db8f2b3_b.jpg"
            alt="Metropolitan Police Service"
            className="rounded-2xl shadow-md w-full max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </motion.section>
      </Container>

      {/* Divisions Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <DivisionsSection />
      </motion.section>
    </motion.main>
  );
}
