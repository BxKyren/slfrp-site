import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "../App.jsx";

/* Small reusable UI bits (kept local so this file is drop-in) */
const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold bg-green-100 text-green-800 ring-1 ring-green-200">
    {children}
  </span>
);

function Modal({ open, onClose, item }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] bg-black/50 backdrop-blur-[1px] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* click backdrop to close */}
          <div className="absolute inset-0" onClick={onClose} />

          <motion.div
            className="relative z-[81] w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl"
            initial={{ scale: 0.96, y: 12, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.96, y: 12, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 24, duration: 0.28 }}
          >
            {/* header image */}
            <div className="relative">
              <img src={item.hero} alt={item.title} className="w-full h-56 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between">
                <h3 className="text-white text-2xl md:text-3xl font-bold drop-shadow">
                  {item.title}
                </h3>
                <Badge>Recruiting: Open</Badge>
              </div>
            </div>

            {/* body */}
            <div className="p-6 md:p-8">
              <p className="text-blue-900/90 mb-6">{item.summary}</p>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-green-900 mb-2">Responsibilities</h4>
                  <ul className="list-disc pl-5 space-y-1 text-green-800/90 text-sm">
                    {item.details.responsibilities.map((li, i) => (
                      <li key={i}>{li}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-900 mb-2">Equipment</h4>
                  <ul className="list-disc pl-5 space-y-1 text-green-800/90 text-sm">
                    {item.details.equipment.map((li, i) => (
                      <li key={i}>{li}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-900 mb-2">Training</h4>
                  <ul className="list-disc pl-5 space-y-1 text-green-800/90 text-sm">
                    {item.details.training.map((li, i) => (
                      <li key={i}>{li}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* footer */}
              <div className="mt-8 flex items-center justify-end gap-3">
                <a
                  href="https://discord.gg/H97wbtuX"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold bg-green-600 text-white hover:bg-green-700 transition"
                >
                  Apply
                  <span aria-hidden>↗</span>
                </a>
                <button
                  onClick={onClose}
                  className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold bg-blue-100 text-blue-900 hover:bg-blue-200 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DivisionCard({ item, onLearnMore }) {
  return (
    <GlassCard className="cursor-default">
      <div className="relative">
        <img src={item.banner} alt={item.title} className="w-full h-44 object-cover" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute top-3 left-3">
          <Badge>{item.tag}</Badge>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-poppins text-lg font-semibold text-green-900 mb-1">
          {item.title}
        </h3>
        <p className="text-green-800/90 text-sm mb-4">{item.desc}</p>

        <div className="flex items-center gap-2">
          <button
            onClick={onLearnMore}
            className="inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 transition shadow-sm"
          >
            Learn More
          </button>
          <a
            href="https://discord.gg/H97wbtuX"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-semibold bg-green-600 text-white hover:bg-green-700 transition shadow-sm"
          >
            Apply
          </a>
        </div>
      </div>
    </GlassCard>
  );
}

export default function AmbulanceDivisions() {
  const [active, setActive] = useState(null);

  const divisions = [
    {
      tag: "EOC",
      title: "Emergency Operations Centre",
      banner: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
      hero: "https://images.unsplash.com/photo-1594818372316-79c01c0d1bb3?q=80&w=1600&auto=format&fit=crop",
      desc: "Call handling and dispatch coordination for ambulance responses.",
      summary:
        "The EOC manages 999 calls and coordinates ambulance resources to incidents across the city.",
      details: {
        responsibilities: [
          "Answer emergency calls",
          "Dispatch ambulance assets",
          "Resource prioritisation",
        ],
        equipment: ["CAD terminals", "Radio systems", "Mapping & AVL"],
        training: ["Triage protocols", "Radio procedures", "Stress management"],
      },
    },
    {
      tag: "PRU",
      title: "Paramedic Response Unit",
      banner: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
      hero: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop",
      desc: "Rapid solo responders for high-priority calls.",
      summary:
        "Specialist paramedics deployed in fast response vehicles to reach priority patients quickly.",
      details: {
        responsibilities: ["Rapid response", "Initial treatment", "Handover to crews"],
        equipment: ["FRV kit", "Defibrillator", "Advanced dressings"],
        training: ["Advanced life support", "Driving", "Scene safety"],
      },
    },
    {
      tag: "HART",
      title: "Hazardous Area Response Team",
      banner: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop",
      hero: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop",
      desc: "Specialist medics for hazardous environments.",
      summary:
        "HART provides medical care in challenging environments like height, water, or confined spaces.",
      details: {
        responsibilities: ["Hot-zone access", "Team medic support", "Technical extrication"],
        equipment: ["PPE & RPE", "Specialist stretchers", "Monitoring"],
        training: ["Hazmat awareness", "Rope access basics", "Water safety"],
      },
    },
    {
      tag: "HEMS",
      title: "Air Ambulance (HEMS)",
      banner: "https://images.unsplash.com/photo-1482192505345-5655af888cc4?q=80&w=1200&auto=format&fit=crop",
      hero: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop",
      desc: "Critical care doctors and paramedics delivering advanced treatment.",
      summary:
        "HEMS delivers advanced pre-hospital critical care to the most seriously ill and injured patients.",
      details: {
        responsibilities: ["Critical interventions", "Air deployment", "Major trauma support"],
        equipment: ["Airway kit", "Blood products", "Ultrasound (basic)"],
        training: ["Major trauma", "Air ops orientation", "Night ops awareness"],
      },
    },
    {
      tag: "PTS",
      title: "Patient Transport Service",
      banner: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
      hero: "https://images.unsplash.com/photo-1581091014534-73b9a6cfd09b?q=80&w=1600&auto=format&fit=crop",
      desc: "Planned non-emergency transport for eligible patients.",
      summary:
        "PTS provides safe, scheduled transport for patients to and from care facilities.",
      details: {
        responsibilities: ["Planned journeys", "Patient comfort", "Safeguarding"],
        equipment: ["Stretcher chairs", "Lift aids", "Basic first aid"],
        training: ["Manual handling", "Safeguarding", "Customer care"],
      },
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-green-900 text-center mb-10">
          Ambulance Divisions
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {divisions.map((item) => (
            <DivisionCard key={item.title} item={item} onLearnMore={() => setActive(item)} />
          ))}
        </div>
      </div>

      <Modal open={!!active} item={active || {}} onClose={() => setActive(null)} />
    </section>
  );
}
