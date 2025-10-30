import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Container } from "../../App.jsx";

export default function RoadsTransport() {
  return (
    <motion.main initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -24 }}
      className="bg-white text-blue-900">
      <Container>
        <Link to="/services/police" className="inline-flex items-center gap-2 text-blue-700 hover:underline mt-10 mb-6">
          <ArrowLeft size={18} /> Back to Police
        </Link>

        <header className="mb-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Metropolitan_Police_Traffic_Car.jpg"
            alt="RTPC"
            className="w-full h-44 object-cover rounded-2xl"
          />
          <h1 className="text-3xl font-bold mt-4">Roads & Transport Policing Command (RTPC)</h1>
          <p className="text-blue-800 mt-2">
            RTPC keeps London’s roads and public transport safe, working alongside TfL and specialist units.
          </p>
        </header>

        <section className="space-y-4 pb-16">
          <h2 className="text-xl font-semibold">Key Responsibilities</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Traffic enforcement and vehicle stops</li>
            <li>Fatal & serious collision investigation</li>
            <li>Taskings on the Tube/bus network with partners</li>
            <li>Proactive operations targeting high-harm offenders</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6">Units</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Roads Policing & Commercial Vehicle Unit</li>
            <li>Serious Collision Investigation Unit</li>
            <li>Proactive Tasking Teams (road crime, pursuit trained)</li>
          </ul>
        </section>
      </Container>
    </motion.main>
  );
}
