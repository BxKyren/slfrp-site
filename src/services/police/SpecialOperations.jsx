import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Container } from "../../App.jsx";

export default function SpecialOperations() {
  return (
    <motion.main initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -24 }}
      className="bg-white text-blue-900">
      <Container>
        <Link to="/services/police" className="inline-flex items-center gap-2 text-blue-700 hover:underline mt-10 mb-6">
          <ArrowLeft size={18} /> Back to Police
        </Link>

        <header className="mb-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Armed_Response_Vehicle_MET.jpg"
            alt="Special Operations"
            className="w-full h-44 object-cover rounded-2xl"
          />
          <h1 className="text-3xl font-bold mt-4">Special Operations</h1>
          <p className="text-blue-800 mt-2">
            High-risk and specialist policing across London including protection, firearms and counter-terrorism.
          </p>
        </header>

        <section className="space-y-4 pb-16">
          <h2 className="text-xl font-semibold">Included SO Units</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>SO14</strong> — Royalty & Specialist Protection (RASP)</li>
            <li><strong>SO15</strong> — Counter Terrorism Command (CTP)</li>
            <li><strong>SO19</strong> — Specialist Firearms Officers / ARV</li>
            <li>Diplomatic Protection & Protective Security elements</li>
            <li>Aviation/Ports liaison and specialist tasking</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6">Roleplay Notes</h2>
          <p>
            Access to SO units should be controlled and trained. Use tiered applications, supervised training and
            scenario-based assessments.
          </p>
        </section>
      </Container>
    </motion.main>
  );
}
