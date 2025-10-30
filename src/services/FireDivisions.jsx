import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "../App.jsx";

const Badge = ({ children }) => (
  <span className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold bg-red-100 text-red-800 ring-1 ring-red-200">
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
          <div className="absolute inset-0" onClick={onClose} />
          <motion.div
            className="relative z-[81] w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl"
            initial={{ scale: 0.96, y: 12, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.96, y: 12, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 24, duration: 0.28 }}
          >
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

            <div className="p-6 md:p-8">
              <p className="text-blue-900/90 mb-6">{item.summary}</p>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-red-900 mb-2">Responsibilities</h4>
                  <ul className="list-disc pl-5 space-y-1 text-red-800/90 text-sm">
                    {item.details.responsibilities.map((li, i) => (
                      <li key={i}>{li}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-900 mb-2">Equipment</h4>
                  <ul className="list-disc pl-5 space-y-1 text-red-800/90 text-sm">
                    {item.details.equipment.map((li, i) => (
                      <li key={i}>{li}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-900 mb-2">Training</h4>
                  <ul className="list-disc pl-5 space-y-1 text-red-800/90 text-sm">
                    {item.details.training.map((li, i) => (
                      <li key={i}>{li}</li>
                    ))}
                  </ul>
                </div>
              </div>

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
        <h3 className="font-poppins text-lg font-semibold text-red-900 mb-1">
          {item.title}
        </h3>
        <p className="text-red-800/90 text-sm mb-4">{item.desc}</p>

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

export default function FireDivisions() {
  const [active, setActive] = useState(null);

  const divisions = [
    {
      tag: "Ops",
      title: "Firefighting & Rescue",
      banner: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?q=80&w=1200&auto=format&fit=crop",
      hero: "https://images.unsplash.com/photo-1581090465119-5ce92861c4a7?q=80&w=1600&auto=format&fit=crop",
      desc: "Frontline fire and rescue response across the city.",
      summary:
        "Primary response crews tackling fires, rescues and life-risk incidents with coordinated tactics.",
      details: {
        responsibilities: ["Fire attack", "Rescues", "Scene safety"],
        equipment: ["PPE & BA", "Hoses & ladders", "Thermal imaging"],
        training: ["BA drills", "Pump ops", "Safe systems of work"],
      },
    },
    {
      tag: "USAR",
      title: "Urban Search & Rescue",
      banner: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?q=80&w=1200&auto=format&fit=crop",
      hero: "https://images.unsplash.com/photo-1524499982521-1ffd58dd89ea?q=80&w=1600&auto=format&fit=crop",
      desc: "Specialist teams for structural collapse and complex rescues.",
      summary:
        "USAR units deliver technical rescue capability at major incidents and challenging environments.",
      details: {
        responsibilities: ["Shoring & lifting", "Search operations", "Technical access"],
        equipment: ["Listening devices", "Cutting gear", "Shoring systems"],
        training: ["Search methods", "Rigging basics", "Team coordination"],
      },
    },
    {
      tag: "FI",
      title: "Fire Investigation",
      banner: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?q=80&w=1200&auto=format&fit=crop",
      hero: "https://images.unsplash.com/photo-1563459713737-6a4a3b0f547a?q=80&w=1600&auto=format&fit=crop",
      desc: "Determining cause and origin of fires.",
      summary:
        "Investigation officers gather evidence, analyse burn patterns and support legal processes.",
      details: {
        responsibilities: ["Scene examination", "Evidence capture", "Reporting"],
        equipment: ["Cameras", "Sampling kits", "PPE"],
        training: ["Scene preservation", "Interview basics", "Report writing"],
      },
    },
    {
      tag: "Ctrl",
      title: "Control Room",
      banner: "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?q=80&w=1200&auto=format&fit=crop",
      hero: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop",
      desc: "999 call handling and mobilising of fire assets.",
      summary:
        "Control coordinates incoming calls, mobilises appliances and supports incident commanders.",
      details: {
        responsibilities: ["Call handling", "Mobilising", "Info support"],
        equipment: ["CAD terminals", "Radio & MDT links", "Mapping"],
        training: ["Call triage", "Mobilising rules", "Radio procedures"],
      },
    },
    {
      tag: "TRU",
      title: "Technical Rescue Unit",
      banner: "https://images.unsplash.com/photo-1581090464737-51f09c83a3e2?q=80&w=1200&auto=format&fit=crop",
      hero: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=1600&auto=format&fit=crop",
      desc: "Rescues at height, confined space and water environments.",
      summary:
        "TRU delivers specialist capability for complex extrication and access challenges.",
      details: {
        responsibilities: ["Rope access", "Confined space", "Water safety"],
        equipment: ["Tripods & winches", "Lines & hardware", "Rescue craft"],
        training: ["Rope fundamentals", "CS entry basics", "Swift water awareness"],
      },
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-red-900 text-center mb-10">
          Fire Brigade Divisions
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
