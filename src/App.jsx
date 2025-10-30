import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  useLocation,
  Link,
} from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import FadeIn from "./FadeIn.jsx";

// Pages
import Team from "./team.jsx";
import Police from "./services/Police.jsx";
import Ambulance from "./services/Ambulance.jsx";
import Fire from "./services/Fire.jsx";
import NewsList from "./news/NewsList.jsx";
import NewsArticle from "./news/NewsArticle.jsx";
import NewsEditor from "./news/NewsEditor.jsx";

// ✅ Police Division Subpages
import RoadsTransport from "./services/police/RoadsTransport.jsx";
import DogSupportUnit from "./services/police/DogSupportUnit.jsx";
import SpecialOperations from "./services/police/SpecialOperations.jsx";
import ContactCentre from "./services/police/ContactCentre.jsx";
import Custody from "./services/police/Custody.jsx";
import Marine from "./services/police/Marine.jsx";

// Constants
const DISCORD_INVITE = "https://discord.gg/H97wbtuX";
export const USER_LOGO_URL =
  "https://live.staticflickr.com/65535/54880864576_f820d278b3_m.jpg";
export const USER_BANNER_URL =
  "https://live.staticflickr.com/65535/54880830406_9d3a5e2065_b.jpg";

/* ✅ Shared UI */
export const Container = ({ children }) => (
  <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 font-roboto">
    {children}
  </div>
);

export const Button = ({ as: Tag = "a", href, to, onClick, children }) => (
  <Tag
    href={href}
    to={to}
    onClick={onClick}
    className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-poppins font-semibold tracking-wide transition bg-blue-600 text-white hover:bg-blue-700"
  >
    {children}
  </Tag>
);

export const GlassCard = ({ children, className = "" }) => (
  <div
    className={`rounded-2xl overflow-hidden shadow-md border border-blue-100 bg-white/70 backdrop-blur transform transition hover:shadow-lg hover:-translate-y-1 ${className}`}
  >
    {children}
  </div>
);

/* ✅ Navbar */
function NavBar() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/team", label: "Team" },
    { to: "/news", label: "News" },
  ];

  return (
    <header className="sticky top-0 border-b border-blue-100 bg-white/80 backdrop-blur-lg z-50">
      <Container>
        <div className="flex items-center justify-between py-3">
          <NavLink to="/" className="flex items-center gap-3">
            <img src={USER_LOGO_URL} className="h-10 w-10 rounded-xl" />
            <div className="text-blue-800 font-black leading-tight">
              Serving London Frontline Roleplay
              <div className="text-xs text-blue-600">
                Realistic Public Roleplay Community
              </div>
            </div>
          </NavLink>

          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-xl text-sm font-semibold transition ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-blue-800 hover:bg-blue-100"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <Button href={DISCORD_INVITE}>Join Discord</Button>
          </nav>

          <button onClick={() => setOpen(!open)} className="lg:hidden p-2">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="grid gap-2 pb-4 lg:hidden">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className="px-3 py-2 rounded-xl text-blue-800 hover:bg-blue-100"
              >
                {label}
              </NavLink>
            ))}
            <Button href={DISCORD_INVITE}>Join Discord</Button>
          </div>
        )}
      </Container>
    </header>
  );
}

/* ✅ Scroll Reset */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
}

/* ✅ Splash Screen */
function SplashScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 1200);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-[9999]">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50 blur-sm"
        style={{ backgroundImage: `url(${USER_BANNER_URL})` }}
      />
      <motion.img
        src={USER_LOGO_URL}
        className="relative z-10 w-28 h-28 rounded-xl shadow-lg"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 1.4, repeat: Infinity }}
      />
      <motion.h1
        className="absolute bottom-16 text-white text-xl font-bold"
        animate={{ opacity: [0, 1] }}
        transition={{ delay: 0.4 }}
      >
        Serving London Frontline Roleplay
      </motion.h1>
    </motion.div>
  );
}

/* ✅ Home */
function Home() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, 100]);
  return (
    <motion.div>
      <section className="relative overflow-hidden">
        <motion.div
          style={{ y, backgroundImage: `url(${USER_BANNER_URL})` }}
          className="absolute inset-0 bg-cover blur-sm scale-105 -z-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-700/50 to-white/60 -z-10" />

        <Container>
          <div className="py-20 max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-4">
              Serving London <span className="text-blue-300">Frontline Roleplay</span>
            </h1>
            <p className="text-lg opacity-90 mb-6">
              Join our realistic FiveM community inspired by London’s emergency services.
            </p>
            <Button href={DISCORD_INVITE}>Join Discord</Button>
          </div>
        </Container>
      </section>
    </motion.div>
  );
}

/* ✅ Services Page */
function Services() {
  const services = [
    {
      title: "Metropolitan Police Service",
      desc: "Tackling crime across London.",
      img: "https://live.staticflickr.com/65535/54881152938_72ccd4cb31_b.jpg",
      link: "/services/police",
    },
    {
      title: "London Ambulance Service",
      desc: "Saving lives across London.",
      img: "https://live.staticflickr.com/65535/54881220125_63bb692836_b.jpg",
      link: "/services/ambulance",
    },
    {
      title: "London Fire Brigade",
      desc: "Rescue excellence.",
      img: "https://live.staticflickr.com/65535/54882169677_b2ee358218_b.jpg",
      link: "/services/fire",
    },
  ];

  return (
    <motion.div>
      <main className="py-16 bg-blue-50/40 text-blue-900">
        <Container>
          <h2 className="text-center text-3xl font-bold mb-10">Emergency Services</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.1}>
                <Link to={s.link}>
                  <GlassCard>
                    <img src={s.img} className="w-full h-44 object-cover" />
                    <div className="p-5">
                      <h2 className="font-bold text-xl mb-1">{s.title}</h2>
                      <p className="text-sm opacity-80">{s.desc}</p>
                    </div>
                  </GlassCard>
                </Link>
              </FadeIn>
            ))}
          </div>
        </Container>
      </main>
    </motion.div>
  );
}

/* ✅ Footer */
function Footer() {
  return (
    <footer className="text-center py-10 text-blue-700 bg-white border-t border-blue-100">
      © {new Date().getFullYear()} Serving London Frontline Roleplay
    </footer>
  );
}

/* ✅ Route Manager */
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/police" element={<Police />} />
        <Route path="/services/ambulance" element={<Ambulance />} />
        <Route path="/services/fire" element={<Fire />} />

        {/* ✅ Police Sub-Routes */}
        <Route path="/services/police/rtpc" element={<RoadsTransport />} />
        <Route path="/services/police/dsu" element={<DogSupportUnit />} />
        <Route path="/services/police/special-ops" element={<SpecialOperations />} />
        <Route path="/services/police/contact-centre" element={<ContactCentre />} />
        <Route path="/services/police/custody" element={<Custody />} />
        <Route path="/services/police/marine" element={<Marine />} />

        {/* ✅ News */}
        <Route path="/news" element={<NewsList />} />
        <Route path="/news/:id" element={<NewsArticle />} />
        <Route path="/news/editor" element={<NewsEditor />} />
      </Routes>
    </AnimatePresence>
  );
}

/* ✅ App Root */
export default function App() {
  const [loading, setLoading] = useState(true);
  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        {loading ? (
          <SplashScreen onFinish={() => setLoading(false)} />
        ) : (
          <>
            <ScrollToTop />
            <NavBar />
            <AnimatedRoutes />
            <Footer />
          </>
        )}
      </AnimatePresence>
    </BrowserRouter>
  );
}
