import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Container } from "../../App.jsx";

export default function ContactCentre() {
  return (
    <motion.main initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -24 }}
      className="bg-white text-blue-900">
      <Container>
        <Link to="/services/police" className="inline-flex items-center gap-2 text-blue-700 hover:underline mt-10 mb-6">
          <ArrowLeft size={18} /> Back to Police
        </Link>

        <header className="mb-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Metropolitan_Police_Communications.jpg"
            alt="Met Contact Centre"
            className="w-full h-44 object-cover rounded-2xl"
          />
          <h1 className="text-3xl font-bold mt-4">Met Contact Centre</h1>
          <p className="text-blue-800 mt-2">
            Handling 999 emergencies and 101 non-emergency calls, creating CAD and dispatching units.
          </p>
        </header>

        <section className="space-y-4 pb-16">
          <h2 className="text-xl font-semibold">What They Do</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Call triage and incident grading</li>
            <li>Resource allocation and airwave dispatch</li>
            <li>Inter-service coordination with LAS & LFB</li>
          </ul>
        </section>
      </Container>
    </motion.main>
  );
}
