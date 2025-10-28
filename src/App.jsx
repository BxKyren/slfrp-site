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
import { teamData } from "./teamData.js";

// ✅ Division-based service pages
import Police from "./services/Police.jsx";
import Ambulance from "./services/Ambulance.jsx";
import Fire from "./services/Fire.jsx";

// --- Constants ---
const DISCORD_INVITE = "https://discord.gg/H97wbtuX";
const USER_LOGO_URL =
  "https://live.staticflickr.com/65535/54880864576_f820d278b3_m.jpg";
const USER_BANNER_URL =
  "https://live.staticflickr.com/65535/54880830406_9d3a5e2065_b.jpg";

// --- Shared Components ---
export const Container = ({ children }) => (
  <div className="mx-auto max-w-7xl px-4 font-roboto">{children}</div>
);

export const Button = ({
  as: Tag = "a",
  href,
  children,
  className = "",
  onClick,
  to,
}) => (
  <Tag
    href={href}
    to={to}
    onClick={onClick}
    className={`inline-flex items-center justify-center rounded-xl px-5 py-3 font-poppins font-semibold tracking-wide transition ${className}`}
  >
    {children}
  </Tag>
);

export const GlassCard = ({ children, className = "" }) => (
  <div
    className={`rounded-2xl overflow-hidden shadow-sm border border-blue-100 bg-white/70 backdrop-blur ${className}`}
  >
    {children}
  </div>
);

// --- Navbar ---
function NavBar() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/news", label: "News" },
    { to: "/about", label: "About" },
    { to: "/team", label: "Team" },
  ];

  return (
    <header className="sticky top-0 border-b border-blue-100 bg-white/80 backdrop-blur z-50 font-poppins">
      <Container>
        <div className="flex items-center justify-between py-3">
          <NavLink to="/" className="flex items-center gap-3">
            <img
              src={USER_LOGO_URL}
              alt="SLFRP Logo"
              className="h-10 w-10 rounded-xl"
            />
            <div className="text-blue-800 font-black leading-tight">
              <div>Serving London Frontline Roleplay</div>
              <div className="text-xs text-blue-600 font-roboto">
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
                  `px-3 py-2 rounded-xl text-sm font-semibold ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-blue-800 hover:bg-blue-100"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <Button
              href={DISCORD_INVITE}
              className="bg-blue-600 text-white hover:bg-blue-700"
            >
              Join Discord
            </Button>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 text-blue-800"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="grid gap-2 pb-4 lg:hidden font-roboto">
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className="px-3 py-2 text-blue-800 hover:bg-blue-100 rounded-xl"
              >
                {label}
              </NavLink>
            ))}
            <Button href={DISCORD_INVITE} className="bg-blue-600 text-white">
              Join Discord
            </Button>
          </div>
        )}
      </Container>
    </header>
  );
}

// --- Page Wrapper ---
function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
}

// --- Splash Screen ---
function SplashScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 1400);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center z-[9999] bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60 blur-sm"
        style={{ backgroundImage: `url(${USER_BANNER_URL})` }}
      />
      <motion.img
        src={USER_LOGO_URL}
        alt="SLFRP Logo"
        className="relative z-10 w-28 h-28 rounded-xl shadow-lg"
        animate={{
          boxShadow: [
            "0 0 14px #3b82f6",
            "0 0 26px #1d4ed8",
            "0 0 14px #3b82f6",
          ],
        }}
        transition={{ repeat: Infinity, duration: 1.6 }}
      />
      <motion.h1
        className="absolute bottom-16 text-white text-xl font-poppins font-bold tracking-wide"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        Serving London Frontline Roleplay
      </motion.h1>
    </motion.div>
  );
}

// --- Home Page ---
function Home() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, 100]);

  return (
    <PageWrapper>
      <section className="relative overflow-hidden">
        <motion.div
          style={{ backgroundImage: `url(${USER_BANNER_URL})`, y }}
          className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat blur-sm scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-800/60 to-white/70 -z-10" />
        <Container>
          <motion.div
            className="py-20 max-w-2xl text-white drop-shadow-md"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: "easeOut" }}
          >
            <h1 className="text-5xl font-extrabold mb-4 leading-tight font-[BBH Sans Bartle]">
              Serving London{" "}
              <span className="text-blue-400">Frontline Roleplay</span>
            </h1>
            <p className="font-roboto text-lg text-blue-100 mb-6">
              Join our realistic FiveM community inspired by London emergency
              services. Immerse yourself in policing, medical, fire, and
              civilian operations — build your own story.
            </p>
            <div className="flex gap-3">
              <Button
                href={DISCORD_INVITE}
                className="bg-blue-600 text-white hover:bg-blue-700"
              >
                Join Discord
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </PageWrapper>
  );
}

// --- Services ---
function Services() {
  const services = [
    {
      title: "Metropolitan Police Service",
      desc: "Tackling crime across London. Serving Communities.",
      img: "https://live.staticflickr.com/65535/54881152938_72ccd4cb31_b.jpg",
      link: "/services/police",
    },
    {
      title: "London Ambulance Service",
      desc: "Racing against time. Saving lives across London.",
      img: "https://live.staticflickr.com/65535/54881220125_63bb692836_b.jpg",
      link: "/services/ambulance",
    },
    {
      title: "London Fire Brigade",
      desc: "Putting out fires, saving lives.",
      img: "https://live.staticflickr.com/65535/54882169677_b2ee358218_b.jpg",
      link: "/services/fire",
    },
  ];

  return (
    <PageWrapper>
      <section className="relative h-[300px] sm:h-[400px] flex items-center justify-center text-center">
        <motion.div
          className="absolute inset-0 bg-cover bg-center -z-10"
          style={{ backgroundImage: `url(${USER_BANNER_URL})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-700/60 to-white/60 -z-10" />
        <h1 className="text-white text-5xl font-extrabold drop-shadow-lg font-[BBH Sans Bartle]">
          Our Services
        </h1>
      </section>

      <main className="py-16 bg-blue-50/30 text-blue-900">
        <Container>
          <p className="text-center font-roboto text-blue-700 mb-10 text-lg">
            Explore the divisions that make Serving London Frontline Roleplay
            unique.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.12}>
                <Link to={s.link}>
                  <GlassCard className="overflow-hidden hover:shadow-lg transition transform hover:-translate-y-1 hover:scale-[1.02] cursor-pointer">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <h2 className="font-poppins text-lg font-semibold mb-1">
                        {s.title}
                      </h2>
                      <p className="font-roboto text-sm text-blue-800">
                        {s.desc}
                      </p>
                    </div>
                  </GlassCard>
                </Link>
              </FadeIn>
            ))}
          </div>
        </Container>
      </main>
    </PageWrapper>
  );
}

// --- Basic Pages ---
function Team() {
  return (
    <PageWrapper>
      <section className="py-20 bg-blue-50 text-blue-900 text-center">
        <Container>
          <h1 className="text-4xl font-bold mb-4 font-poppins">Our Team</h1>
          <p className="text-blue-700 font-roboto">
            Meet the dedicated members behind Serving London Frontline Roleplay.
          </p>
        </Container>
      </section>
    </PageWrapper>
  );
}

function News() {
  return (
    <PageWrapper>
      <section className="py-20 bg-blue-50 text-blue-900 text-center">
        <Container>
          <h1 className="text-4xl font-bold mb-4 font-poppins">News</h1>
          <p className="text-blue-700 font-roboto">
            Community Updates can be found here!
          </p>
        </Container>
      </section>
    </PageWrapper>
  );
}

function About() {
  return (
    <PageWrapper>
      <section className="py-20 bg-blue-50 text-blue-900 text-center">
        <Container>
          <h1 className="text-4xl font-bold mb-4 font-poppins">About SLFRP</h1>
          <p className="text-blue-700 font-roboto">
            A serious, immersive FiveM community inspired by London’s emergency
            services.
          </p>
        </Container>
      </section>
    </PageWrapper>
  );
}

// --- Footer ---
function Footer() {
  return (
    <footer className="border-t border-blue-100 bg-white text-blue-700 font-roboto">
      <Container>
        <p className="py-10 text-sm text-center">
          © {new Date().getFullYear()} Serving London Frontline Roleplay
        </p>
      </Container>
    </footer>
  );
}

// --- Animated Routes ---
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/police" element={<Police />} />
        <Route path="/services/ambulance" element={<Ambulance />} />
        <Route path="/services/fire" element={<Fire />} />
        <Route path="/team" element={<Team />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </AnimatePresence>
  );
}

// --- App Root ---
export default function App() {
  const [loading, setLoading] = useState(true);
  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        {loading ? (
          <SplashScreen onFinish={() => setLoading(false)} key="splash" />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ScrollToTop />
            <NavBar />
            <AnimatedRoutes />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </BrowserRouter>
  );
}
