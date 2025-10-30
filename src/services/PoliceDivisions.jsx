import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard, Button } from "../App.jsx";

// ✅ Major Units (Fully detailed modal content)
const detailedUnits = {
  "Specialist Firearms Command (SCO19)": {
    tag: "SCO19",
    status: "Recruiting: Open",
    desc: "London’s elite firearms officers, tasked with armed protection and responding to the highest-risk threats.",
    img: "https://live.staticflickr.com/65535/54883403625_689db8f2b3_b.jpg",
    responsibilities: [
      "Firearms incident response and dynamic entries",
      "Dignitary protection & high-risk escorts",
      "Counter-terrorism support",
    ],
    equipment: [
      "Carbines & less-lethal options",
      "Armoured vehicles",
      "Ballistic PPE",
    ],
    training: [
      "Advanced firearms training",
      "Hostage/CT scenarios",
      "Tactical medicine",
    ],
  },

  "Emergency Response Policing Team (ERPT)": {
    tag: "ERPT",
    status: "Recruiting: Open",
    desc: "Frontline 999 response officers handling priority calls and safeguarding the public 24/7.",
    img: "https://live.staticflickr.com/65535/54883403625_689db8f2b3_b.jpg",
    responsibilities: [
      "Immediate response to emergency calls",
      "Crime scene management",
      "Community policing & reassurance",
    ],
    equipment: ["Patrol vehicles", "Body-worn cameras", "TASER (authorised)"],
    training: [
      "Response driving",
      "Officer safety",
      "Incident command (Bronze)",
    ],
  },

  "Territorial Support Group (TSG)": {
    tag: "TSG",
    status: "Recruiting: Open",
    desc: "Public order specialists supporting major events, protests, and rapid deployments across London.",
    img: "https://live.staticflickr.com/65535/54883403625_689db8f2b3_b.jpg",
    responsibilities: [
      "Riot & public order policing",
      "Rapid deployment support",
      "High-risk warrants & entry",
    ],
    equipment: ["Shields & helmets", "Carrier vans", "Less-lethal kit"],
    training: ["Public order (Level 2)", "Tactical intervention"],
  },
};

// ✅ Simpler units — can upgrade later
const simpleDivisions = [
  {
    name: "Roads & Traffic Policing (RTPC)",
    desc: "Enforcing road safety and pursuit operations across London.",
    img: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Metropolitan_Police_Traffic_Car.jpg",
  },
  {
    name: "Dog Support Unit",
    desc: "Police dogs supporting patrols and searches across London.",
    img: "https://upload.wikimedia.org/wikipedia/commons/8/88/Met_Police_Dog_Unit.jpg",
  },
  {
    name: "Special Operations",
    desc: "SO14, SO15 and covert specialist operations supporting national security.",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Armed_Response_Vehicle_MET.jpg",
  },
  {
    name: "Met Contact & Command",
    desc: "Emergency call handling and dispatching specialist resources.",
    img: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Forensic_investigation_Metropolitan_Police.jpg",
  },
  {
    name: "Met Custody",
    desc: "Detention and safety of arrested persons in custody suites.",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Detectives_in_London.jpg",
  },
  {
    name: "Marine Policing Unit",
    desc: "Patrolling the River Thames and protecting vital maritime assets.",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/45/Met_Police_Marine_Unit.jpg",
  },
];

const modalAnimation = {
  initial: { opacity: 0, scale: 0.9, y: 30 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.9, y: -30 },
  transition: { duration: 0.4 },
};

export default function PoliceDivisions() {
  const [activeUnit, setActiveUnit] = useState(null);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-2 lg:grid-cols-3">

        {/* ✅ Render Detailed Units First */}
        {Object.entries(detailedUnits).map(([name, data]) => (
          <GlassCard key={name}>
            <img src={data.img} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-xl text-blue-900 mb-2">{name}</h3>
              <p className="text-blue-800 text-sm mb-4">{data.desc}</p>
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveUnit({ name, ...data })}
                  className="px-4 py-2 text-sm bg-blue-600 text-white rounded-xl hover:bg-blue-700"
                >
                  Learn More
                </button>
                <a
                  href="#"
                  className="px-4 py-2 text-sm bg-green-600 text-white rounded-xl hover:bg-green-700"
                >
                  Apply ↗
                </a>
              </div>
            </div>
          </GlassCard>
        ))}

        {/* ✅ Render Simple Units */}
        {simpleDivisions.map((div) => (
          <GlassCard key={div.name}>
            <img src={div.img} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-xl text-blue-900 mb-2">{div.name}</h3>
              <p className="text-blue-800 text-sm mb-4">{div.desc}</p>
              <button
                onClick={() => setActiveUnit(div)}
                className="px-4 py-2 text-sm bg-blue-600 text-white rounded-xl hover:bg-blue-700"
              >
                Learn More
              </button>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* ✅ MODAL POPUP */}
      <AnimatePresence>
        {activeUnit && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50 px-4"
              {...modalAnimation}
            >
              <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden">
                <img src={activeUnit.img} className="w-full h-56 object-cover" />

                <div className="p-8 text-blue-900">
                  <h2 className="text-2xl font-bold mb-2">{activeUnit.name}</h2>
                  <p className="mb-6">{activeUnit.desc}</p>

                  {/* ✅ If detailed — show columns */}
                  {activeUnit.responsibilities && (
                    <div className="grid md:grid-cols-3 gap-6 text-sm">
                      <div>
                        <h4 className="font-bold mb-2">Responsibilities</h4>
                        <ul className="list-disc ml-5 space-y-1">
                          {activeUnit.responsibilities.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Equipment</h4>
                        <ul className="list-disc ml-5 space-y-1">
                          {activeUnit.equipment.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Training</h4>
                        <ul className="list-disc ml-5 space-y-1">
                          {activeUnit.training.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                {/* ✅ Modal Buttons */}
                <div className="flex justify-end gap-3 p-6 bg-blue-50">
                  <a className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 cursor-pointer">
                    Apply ↗
                  </a>
                  <button
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700"
                    onClick={() => setActiveUnit(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
