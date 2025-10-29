import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import FadeIn from "../FadeIn.jsx";
import {
  Shield,
  Target,
  Activity,
  Eye,
  Bolt,
  ExternalLink,
  Info,
} from "lucide-react";

/* 
  IMPORTANT: 
  - We define minimal Container & GlassCard locally to AVOID circular imports with App.jsx.
  - No dependency on App.jsx constants; set the banner URL here.
*/
const USER_BANNER_URL =
  "https://live.staticflickr.com/65535/54880830406_9d3a5e2065_b.jpg";
const DISCORD_INVITE = "https://discord.gg/H97wbtuX";

const Container = ({ children }) => (
  <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 font-roboto">
    {children}
  </div>
);

const GlassCard = ({ children, className = "" }) => (
  <div
    className={`rounded-2xl overflow-hidden shadow-sm border border-blue-100/60 bg-white/70 backdrop-blur-md transition transform hover:shadow-lg hover:-translate-y-1 ${className}`}
  >
    {children}
  </div>
);

const Badge = ({ children, className = "" }) => (
  <span
    className={`inline-flex items-center gap-1 rounded-xl px-2.5 py-1 text-xs font-semibold ${className}`}
  >
    {children}
  </span>
);

/* ---------------------------
   Division Data (ALL UNITS)
----------------------------*/
const DIVISIONS = [
  {
    key: "sco19",
    title: "Specialist Firearms Command (SCO19)",
    short: "SCO19",
    desc:
      "London’s elite firearms officers, tasked with armed protection and responding to the highest-risk threats.",
    img: "https://media.discordapp.net/attachments/1378773748827557918/1431715469152223403/FiveM_by_Cfx.re_-_Serving_London_Frontline_Roleplay___UK_Themed___MET___LAS___LFB___CIV___Custom_Cars___discord.gg_PgTvRZmRQR_25_10_2025_19_11_56.png?ex=690309af&is=6901b82f&hm=ff1b60f2de16a2c506b1c39eaaaff040e286bedf23b6ada6159436f39a2b2789&=&format=webp&quality=lossless&width=1461&height=822",
    icon: Target,
    brand: "ring-gray-300",
    gradient: "from-gray-900/90 to-gray-700/80",
    recruiting: "Open",
    details: {
      responsibilities: [
        "Firearms incident response and dynamic entries",
        "Dignitary protection & high-risk escorts",
        "Counter-terrorism support",
      ],
      equipment: ["Carbines & less-lethal options", "Armoured vehicles", "Ballistic PPE"],
      training: ["Advanced firearms training", "Hostage/CT scenarios", "Tactical medicine"],
    },
  },
  {
    key: "erpt",
    title: "Emergency Response Policing Team (ERPT)",
    short: "ERPT",
    desc:
      "Frontline 999 response officers handling priority calls and safeguarding the public 24/7.",
    img: "https://live.staticflickr.com/65535/54881152938_72ccd4cb31_b.jpg",
    icon: Activity,
    brand: "ring-blue-300",
    gradient: "from-blue-800/90 to-blue-500/80",
    recruiting: "Open",
    details: {
      responsibilities: [
        "Immediate response to emergency calls",
        "Crime scene management and early investigation",
        "Public reassurance and community policing",
      ],
      equipment: ["Patrol vehicles", "Body-worn video", "First aid & TASER (where authorised)"],
      training: ["Response driving", "Officer safety", "Incident command (Bronze)"],
    },
  },
  {
    key: "tsg",
    title: "Territorial Support Group (TSG)",
    short: "TSG",
    desc:
      "Public order specialists supporting major events, protests, and rapid deployments across London.",
    img: "https://live.staticflickr.com/65535/54884593236_170cef9403_b.jpg",
    icon: Shield,
    brand: "ring-indigo-300",
    gradient: "from-indigo-800/90 to-indigo-500/80",
    recruiting: "Open",
    details: {
      responsibilities: [
        "Level 1/2 public order operations",
        "High-visibility patrols and hotspot policing",
        "Warrants and planned arrests with safer custody handling",
      ],
      equipment: ["Public order vans", "Shields & helmets", "Specialist PPE"],
      training: ["Public order training (L1/L2)", "Cordon & contain tactics", "Dynamic risk assessment"],
    },
  },
  {
    key: "covert",
    title: "Covert Policing",
    short: "Covert",
    desc:
      "Specialist covert operatives conducting surveillance and supporting serious/organised crime investigations.",
    img: "https://live.staticflickr.com/65535/54883245122_e8dda23cd4.jpg",
    icon: Eye,
    brand: "ring-zinc-300",
    gradient: "from-zinc-900/90 to-zinc-700/80",
    recruiting: "Closed",
    details: {
      responsibilities: [
        "Mobile/static surveillance",
        "Intelligence development with partner agencies",
        "Support to covert deployments and arrests",
      ],
      equipment: ["Unmarked vehicles", "Technical surveillance kit", "Encrypted comms"],
      training: ["Surveillance craft", "Covert safety", "Legislation & policy compliance"],
    },
  },
  {
    key: "surge",
    title: "SURGE",
    short: "SURGE",
    desc:
      "Rapid deployment teams supporting critical incidents, spontaneous events, and major investigations.",
    img: "https://live.staticflickr.com/65535/54884593236_170cef9403_b.jpg",
    icon: Bolt,
    brand: "ring-yellow-300",
    gradient: "from-yellow-700/90 to-amber-500/80",
    recruiting: "Open",
    details: {
      responsibilities: [
        "Immediate surge capacity for major incidents",
        "High-risk area patrols and fast-time tasking",
        "Mutual aid across boroughs/commands",
      ],
      equipment: ["Rapid response vehicles", "Public order kit on demand", "Medical & rescue packs"],
      training: ["Major incident procedures", "Bronze command support", "Interoperability (JESIP)"],
    },
  },
];

/* ---------------------------
   Detail Modal
----------------------------*/
function DivisionModal({ unit, isOpen, onClose }) {
  const Icon = unit?.icon ?? Info;
  return (
    <AnimatePresence>
      {isOpen && unit && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-3xl rounded-2xl bg-white shadow-xl overflow-hidden"
            initial={{ scale: 0.95, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 20, opacity: 0 }}
            transition={{ type: "spring", stiffness: 240, damping: 22 }}
            role="dialog"
            aria-modal="true"
          >
            {/* Header Image */}
            <div className="relative">
              <img
                src={unit.img}
                alt={unit.title}
                className="w-full h-56 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center gap-3">
                <Icon className="w-6 h-6 text-white/90" />
                <h3 className="text-white text-xl font-bold drop-shadow">
                  {unit.title}
                </h3>
                <Badge className="ml-auto bg-white text-blue-900 ring-1 ring-blue-200">
                  Recruiting: {unit.recruiting}
                </Badge>
              </div>
            </div>

            {/* Body */}
            <div className="p-5 grid md:grid-cols-3 gap-6 text-blue-900">
              <div className="md:col-span-3">
                <p className="text-sm text-blue-800/90">{unit.desc}</p>
              </div>

              <div>
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Info className="w-4 h-4" /> Responsibilities
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  {unit.details.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Equipment</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  {unit.details.equipment.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Training</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  {unit.details.training.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Actions */}
            <div className="px-5 pb-5 flex gap-3 justify-end">
              <a
                href={DISCORD_INVITE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-xl bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2"
              >
                Apply <ExternalLink className="w-4 h-4" />
              </a>
              <button
                onClick={onClose}
                className="rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ---------------------------
   MAIN PAGE
----------------------------*/
export default function Police() {
  const [active, setActive] = useState(null);

  const openModal = (unit) => setActive(unit);
  const closeModal = () => setActive(null);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      {/* Hero (matches brand style) */}
      <section className="relative h-[340px] flex items-center justify-center text-center">
        <motion.div
          className="absolute inset-0 bg-cover bg-center blur-sm scale-105 -z-10"
          style={{ backgroundImage: `url(${USER_BANNER_URL})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/90 via-blue-800/50 to-white/70 -z-10" />
        <h1 className="text-white text-5xl font-extrabold drop-shadow-lg font-[BBH Sans Bartle]">
          Metropolitan Police Service
        </h1>
        <p className="absolute bottom-10 text-blue-100 text-lg font-roboto">
          Public Safety ✦ Protection ✦ Professional Policing
        </p>
      </section>

      {/* Divisions */}
      <main className="py-16 bg-blue-50/50 text-blue-900">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {DIVISIONS.map((unit, i) => {
              const Icon = unit.icon ?? Info;
              return (
                <FadeIn key={unit.key} delay={i * 0.12}>
                  <GlassCard className="group">
                    {/* Image */}
                    <div className="relative overflow-hidden">
                      <motion.img
                        src={unit.img}
                        alt={unit.title}
                        className="w-full h-52 object-cover group-hover:scale-110 transition duration-500"
                      />
                      {/* Top-right chips */}
                      <div className="absolute top-3 right-3 flex gap-2">
                        <Badge className="bg-white/90 text-blue-900 ring-1 ring-blue-200">
                          <Icon className="w-3.5 h-3.5" />
                          {unit.short}
                        </Badge>
                        <Badge
                          className={`${
                            unit.recruiting === "Open"
                              ? "bg-green-600 text-white"
                              : "bg-zinc-700 text-white"
                          }`}
                        >
                          Recruiting: {unit.recruiting}
                        </Badge>
                      </div>
                      {/* Gradient edge */}
                      <div
                        className={`absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t ${unit.gradient}`}
                      />
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="text-xl font-bold text-blue-900">
                        {unit.title}
                      </h3>
                      <p className="text-sm text-blue-800/90 mt-1">{unit.desc}</p>

                      {/* Actions */}
                      <div className="flex items-center gap-2 pt-4">
                        <button
                          onClick={() => openModal(unit)}
                          className="text-xs bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-3 py-1.5"
                        >
                          Learn More
                        </button>
                        <a
                          href={DISCORD_INVITE}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs bg-green-600 hover:bg-green-700 text-white rounded-xl px-3 py-1.5 inline-flex items-center gap-1"
                        >
                          Apply <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                        {/* Optional: route link if you add separate detail pages later */}
                        {/* <Link to={`/services/police/${unit.key}`} className="text-xs underline text-blue-700">Open page</Link> */}
                      </div>
                    </div>
                  </GlassCard>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </main>

      {/* Detail Modal */}
      <DivisionModal unit={active} isOpen={!!active} onClose={closeModal} />
    </motion.div>
  );
}
