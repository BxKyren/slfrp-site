import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Container } from "../../App.jsx";

export default function Marine() {
  return (
    <motion.main initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -24 }}
      className="bg-white text-blue-900">
      <Container>
        <Link to="/services/police" className="inline-flex items-center gap-2 text-blue-700 hover:underline mt-10 mb-6">
          <ArrowLeft size={18} /> Back to Police
        </Link>

        <header className="mb-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/88/Thames_police_boat.jpg"
            alt="Marine Policing Unit"
            className="w-full h-44 object-cover rounded-2xl"
          />
          <h1 className="text-3xl font-bold mt-4">Marine Policing Unit (MPU)</h1>
          <p className="text-blue-800 mt-2">
            Policing the River Thames: safety, search & rescue, and maritime counter-terrorism.
          </p>
        </header>

        <section className="space-y-4 pb-16">
          <h2 className="text-xl font-semibold">Operations</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Patrols, vessel stops and licensing checks</li>
            <li>Search & rescue with multi-agency partners</li>
            <li>Major event security on and near the river</li>
          </ul>
        </section>
      </Container>
    </motion.main>
  );
}
