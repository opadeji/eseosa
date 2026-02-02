import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Instagram,
  Twitter,
  Linkedin,
  Target,
  Users,
  Menu,
  X,
  BarChart3,
  Palette,
  ArrowUpRight,
  Calendar,
  Send,
  Quote,
  Sparkles,
  MousePointer2,
} from "lucide-react";
// Assuming img is your profile photo
import img from "./assets/Eseosa.jpeg";

const Button = ({
  children,
  className = "",
  variant = "primary",
  ...props
}) => {
  const base =
    "px-8 py-4 font-bold transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-[0.2em] text-[10px] relative overflow-hidden group";
  const variants = {
    primary: "bg-black text-white hover:bg-rose-500 rounded-full",
    outline:
      "border-[1px] border-black text-black hover:bg-black hover:text-white rounded-full",
    neo: "border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]",
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "services",
        "experience",
        "portfolio",
        "testimonials",
        "contact",
      ];
      const scrollPos = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (
          el &&
          el.offsetTop <= scrollPos &&
          el.offsetTop + el.offsetHeight > scrollPos
        ) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      icon: Palette,
      title: "Art Direction",
      desc: "Crafting a visual identity that cuts through the digital noise.",
    },
    {
      icon: Target,
      title: "Strategic Growth",
      desc: "Data-led narratives that convert followers into a community.",
    },
    {
      icon: BarChart3,
      title: "Deep Analytics",
      desc: "Measuring what matters to scale your brand impact.",
    },
    {
      icon: Users,
      title: "Community Management",
      desc: "Nurturing brand sentiment with precision and a human touch.",
    },
  ];

  return (
    <div className="bg-[#fffcf9] min-h-screen text-black overflow-x-hidden selection:bg-rose-200">
      {/* Dynamic Background Element */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-rose-100/50 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-50/50 blur-[120px] rounded-full animate-pulse" />
      </div>

      {/* Modern Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b-[1px] border-black/5">
        <div className="max-w-[1400px] mx-auto px-8 py-5 flex justify-between items-center">
          <a
            href="#home"
            className="text-2xl font-black tracking-tighter hover:text-rose-500 transition-colors"
          >
            ESEOSA<span className="text-rose-500">.</span>
          </a>

          <div className="hidden md:flex gap-10 font-bold uppercase text-[10px] tracking-[0.25em]">
            {["services", "experience", "portfolio", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className={`relative pb-1 transition-colors hover:text-rose-500 ${
                  activeSection === item ? "text-rose-500" : "text-black/50"
                }`}
              >
                {item}
                {activeSection === item && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-rose-500"
                  />
                )}
              </a>
            ))}
          </div>

          <Button
            variant="primary"
            className="hidden md:flex py-3! px-6!"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Let's Talk
          </Button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 bg-black text-white rounded-full"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-rose-50 p-12 flex flex-col justify-center items-center gap-6 md:hidden text-center"
          >
            {["home", "services", "experience", "portfolio", "contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-4xl font-black uppercase tracking-tighter"
                >
                  {item}
                </a>
              ),
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center px-6 pt-20 max-w-[1400px] mx-auto relative"
      >
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-8 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-[1px] w-12 bg-rose-400"></div>
              <span className="text-rose-500 text-xs font-bold uppercase tracking-[0.3em]">
                Digital Strategist 2026
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[14vw] lg:text-[10rem] font-black leading-[0.8] tracking-tighter uppercase mb-10"
            >
              Pure <br />
              <span className="italic font-light text-rose-400">Impact</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-black/70 max-w-xl leading-relaxed mb-10"
            >
              Elevating brands through high-aesthetic content and data-driven
              social architecture. I don't just follow trends—I set them.
            </motion.p>

            <div className="flex flex-wrap gap-5">
              <Button
                variant="primary"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Start a Project
              </Button>

              <Button
                variant="outline"
                onClick={() =>
                  document
                    .getElementById("portfolio")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Gallery
              </Button>
            </div>
          </div>

          <div className="lg:col-span-4 relative">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative z-10 rounded-[2rem] overflow-hidden border-[1px] border-black/10 shadow-2xl"
            >
              <img
                src={img}
                alt="Eseosa"
                className="w-full grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
            </motion.div>
            {/* Aesthetic badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 border-[1px] border-rose-100 hidden md:block">
              <Sparkles className="text-rose-400 mb-2" />
              <p className="text-[10px] font-black uppercase tracking-widest">
                Available for <br />
                New Bookings
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-20">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic">
              Capabilities
            </h2>
            <div className="h-2 w-32 bg-rose-200 mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s, i) => (
              <motion.div
                whileHover={{ y: -10 }}
                key={i}
                className="p-10 rounded-[2rem] bg-[#fffcf9] border-[1px] border-black/5 hover:border-rose-200 transition-all group shadow-sm hover:shadow-xl"
              >
                <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-rose-500 group-hover:text-white transition-colors">
                  <s.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold uppercase mb-4 tracking-tight">
                  {s.title}
                </h3>
                <p className="text-black/50 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience / Legacy Section */}
      <section
        id="experience"
        className="py-32 px-6 border-y-[1px] border-black/5"
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col items-center text-center mb-20">
            <span className="text-rose-500 font-bold tracking-[0.4em] text-[10px] uppercase mb-4">
              The Journey
            </span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
              Work History
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                year: "2024-25",
                role: "Sr. Strategist",
                company: "Insurance with Perpetual",
                color: "bg-rose-50",
              },
              {
                year: "2022-23",
                role: "Creative Lead",
                company: "Startup Hub Global",
                color: "bg-orange-50",
              },
            ].map((exp, i) => (
              <div
                key={i}
                className={`p-8 md:p-12 rounded-[2rem] ${exp.color} flex flex-col md:flex-row justify-between items-center group cursor-pointer hover:shadow-lg transition-all`}
              >
                <div className="text-rose-400 font-bold mb-4 md:mb-0">
                  {exp.year}
                </div>
                <div className="text-2xl md:text-4xl font-black uppercase italic group-hover:text-rose-600 transition-colors">
                  {exp.role}
                </div>
                <div className="text-sm font-bold uppercase tracking-widest text-black/40">
                  {exp.company}
                </div>
                <ArrowUpRight className="hidden md:block opacity-20 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section id="portfolio" className="py-32 px-6 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter">
            Vault
          </h2>
          <p className="text-sm font-bold text-black/40 uppercase tracking-[0.3em]">
            Selected Projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {[
            {
              img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
              title: "Minimal Muse",
              cat: "Art Direction",
            },
            {
              img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
              title: "Digital Aura",
              cat: "Strategy",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group overflow-hidden rounded-[2.5rem] relative"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={item.img}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-full p-10 bg-gradient-to-t from-black/80 to-transparent text-white translate-y-4 group-hover:translate-y-0 transition-transform">
                <p className="text-rose-300 text-xs font-bold uppercase tracking-[0.2em] mb-2">
                  {item.cat}
                </p>
                <h3 className="text-3xl font-black uppercase tracking-tighter flex justify-between items-center">
                  {item.title} <ArrowUpRight />
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto bg-black rounded-[3rem] p-8 md:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <MousePointer2 size={200} />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-none">
                Start the <span className="text-rose-400">Vibe</span>.
              </h2>
              <p className="text-white/60 text-lg mb-10 max-w-sm">
                Available for luxury branding and strategic management for late
                2026.
              </p>

              <div className="flex gap-6 mb-12">
                {[
                  {
                    icon: Instagram,
                    url: "https://www.instagram.com/__iam_eseosa",
                  },
                  { icon: Twitter, url: "https://twitter.com/bubblesontiktok" },
                  {
                    icon: Linkedin,
                    url: "https://www.linkedin.com/in/eseosa-uhuns",
                  },
                ].map(({ icon: Icon, url }, i) => (
                  <a
                    key={i}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-rose-500 hover:border-rose-500 transition-all"
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em]">
                  Currently accepting clients
                </span>
              </div>
            </div>

            <form
              action="https://formspree.io/f/xwvqapla"
              method="POST"
              className="space-y-4"
            >
              <input
                type="text"
                placeholder="Name"
                required
                name="name"
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 outline-none focus:border-rose-400 transition-colors font-bold"
              />
              <input
                type="email"
                required
                name="email"
                placeholder="Email"
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 outline-none focus:border-rose-400 transition-colors font-bold"
              />
              <textarea
                rows={4}
                name="message"
                required
                placeholder="Your Vision"
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 outline-none focus:border-rose-400 transition-colors font-bold"
              />
              <button
                type="submit"
                className="w-full bg-rose-500 hover:bg-rose-600 text-white font-black py-6 rounded-2xl uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-3"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Minimalist Footer */}
      <footer className="py-12 px-8 flex flex-col md:flex-row justify-between items-center opacity-40 hover:opacity-100 transition-opacity">
        <p className="text-[10px] font-bold uppercase tracking-[0.4em]">
          © 2026 ESEOSA. Designed for Impact.
        </p>
        <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.4em]">
          <a
            href="https://www.instagram.com/__iam_eseosa"
            className="hover:text-rose-500"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/eseosa-uhuns"
            className="hover:text-rose-500"
          >
            LinkedIn
          </a>
          <a href="mailto:eseosau2@gmail.com" className="hover:text-rose-500">
            Email
          </a>
        </div>
      </footer>
    </div>
  );
}
