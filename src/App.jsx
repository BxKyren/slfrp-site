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
    className="inline-flex items-center justify-center rounded-2xl px-5 py-3 font-poppins font-semibold tracking-wide transition shadow-sm ring-1 ring-blue-200 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 bg-blue-600 text-white"
  >
    {children}
  </Tag>
);

export const GlassCard = ({ children, className = "" }) => (
  <div
    className={`rounded-2xl overflow-hidden shadow-sm border border-blue-100/60 bg-white/70 backdrop-blur-md transition transform hover:shadow-lg hover:-translate-y-1 ${className}`}
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
    <header className="sticky top-0 border-b border-blue-100/60 bg-white/75 backdrop-blur-lg z-50">
      <Container>
        <div className="flex items-center justify-between py-3">
          <NavLink to="/" className="flex items-center gap-3">
            <img src={USER_LOGO_URL} className="h-10 w-10 rounded-xl" />
            <div className="text-blue-800 font-black leading-tight">
              <div>Serving London Frontline Roleplay</div>
              <div className="text-xs">Realistic Public Roleplay Community</div>
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

/* ✅ Full Animated Splash */
function SplashScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 1100);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-[9999]">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50 blur-md"
        style={{ backgroundImage: `url(${USER_BANNER_URL})` }}
      />
      <motion.img
        src={USER_LOGO_URL}
        className="relative z-10 w-28 h-28 rounded-xl shadow-lg ring-2 ring-blue-500/50"
        animate={{ scale: [1, 1.06, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 1.6, repeat: Infinity }}
      />
      <motion.h1
        className="absolute bottom-16 text-white text-xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Serving London Frontline Roleplay
      </motion.h1>
    </motion.div>
  );
}

/* ✅ Home Page — original styling preserved */
function Home() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, 120]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <section className="relative overflow-hidden">
        <motion.div
          style={{ y, backgroundImage: `url(${USER_BANNER_URL})` }}
          className="absolute inset-0 bg-cover blur-sm scale-105 -z-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-800/40 to-white/70 -z-10" />

        <Container>
          <div className="py-20 max-w-2xl text-white drop-shadow-xl">
            <h1 className="text-5xl font-extrabold mb-4 font-[BBH Sans Bartle]">
              Serving London <span className="text-blue-300">Frontline Roleplay</span>
            </h1>
            <p className="text-lg mb-6 opacity-90">
              Join our realistic FiveM community inspired by London emergency services.
            </p>
            <Button href={DISCORD_INVITE}>Join Discord</Button>
          </div>
        </Container>
      </section>
    </motion.div>
  );
}

/* ✅ Services Page — NOW MATCHES TEAM UI */
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
      desc: "Emergency medical response across London.",
      img: "https://live.staticflickr.com/65535/54881220125_63bb692836_b.jpg",
      link: "/services/ambulance",
    },
    {
      title: "London Fire Brigade",
      desc: "Fire & rescue excellence.",
      img: "https://live.staticflickr.com/65535/54882169677_b2ee358218_b.jpg",
      link: "/services/fire",
    },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <section className="relative h-[350px] flex items-center justify-center text-center">
        <motion.div
          className="absolute inset-0 bg-cover bg-center -z-10 blur-sm scale-105"
          style={{ backgroundImage: `url(${USER_BANNER_URL})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/90 via-blue-800/50 to-white/70 -z-10" />
        <h1 className="text-white text-5xl font-extrabold drop-shadow-lg font-[BBH Sans Bartle]">
          Our Services
        </h1>
      </section>

      <main className="py-16 bg-blue-50/50 text-blue-900">
        <Container>
          <p className="text-center mb-10 text-lg opacity-75">
            Explore London’s frontline emergency departments.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <FadeIn key={i} delay={i * 0.12}>
                <Link to={s.link}>
                  <GlassCard className="cursor-pointer">
                    <img src={s.img} className="w-full h-48 object-cover" />
                    <div className="p-5">
                      <h2 className="font-bold text-xl">{s.title}</h2>
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
    <footer className="text-center py-8 text-blue-700 bg-white border-t border-blue-100">
      © {new Date().getFullYear()} Serving London Frontline Roleplay
    </footer>
  );
}

/* ✅ Router Setup */
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/police" element={<Police />} />
        <Route path="/services/ambulance" element={<Ambulance />} />
        <Route path="/services/fire" element={<Fire />} />
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