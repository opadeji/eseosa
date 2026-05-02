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
  Send,
  Sparkles,
  MousePointer2,
  Quote,
  TrendingUp,
  Eye,
  Heart,
  Star,
  Zap,
} from "lucide-react";
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
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      <span className="relative z-10">{children}</span>
    </button>
  );
};

const NAV_LINKS = [
  "services",
  "experience",
  "portfolio",
  "testimonials",
  "contact",
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", ...NAV_LINKS];
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

  const portfolioItems = [
    {
      platform: "TikTok",
      brand: "Tees Tresses & Polish",
      handle: "@tees_tresses_and_polish",
      metric: "44K+",
      metricLabel: "Followers Reached",
      sub: "Built a loyal beauty community from the ground up",
      icon: TrendingUp,
      tag: "Content Strategy",
      link: "https://www.tiktok.com/@tees_tresses_and_polish?_r=1&_t=ZS-961VMzt2wpF",
    },
    {
      platform: "TikTok",
      brand: "🌱ickles",
      handle: "@darkceee",
      metric: "32k+",
      metricLabel: "likes",
      sub: "Organic content that went viral with zero ad spend",
      icon: Eye,
      tag: "Organic Growth",
      link: "https://www.tiktok.com/@darkceee?_r=1&_t=ZS-961VF3JZ4fQ",
    },

    {
      platform: "Facebook",
      brand: "Insurance with Perpetual",
      handle: "Page",
      metric: "3×",
      metricLabel: "Engagement Lift",
      sub: "Repositioned brand voice to resonate with a younger audience",
      icon: Heart,
      tag: "Brand Strategy",
      link: "https://www.facebook.com/share/1DhNHNFTeh/",
    },
  ];

  const testimonials = [
    {
      quote:
        "Eseosa completely transformed how our audience perceives us. The content strategy was intentional, aesthetic, and actually drove results we could measure.",
      name: "Perpetual O.",
      title: "Founder, Insurance with Perpetual",
      initials: "PO",
      color: "bg-rose-500",
    },
    {
      quote:
        "Working with Eseosa felt like having a creative director and data analyst in one. Our TikTok went from zero traction to a consistent growth engine.",
      name: "Tees T.",
      title: "Owner, Tees Tresses & Polish",
      initials: "TT",
      color: "bg-orange-400",
    },
    {
      quote:
        "She understood our brand voice immediately. Every post felt authentic, and the community response was overwhelming. Highly recommend.",
      name: "Celestina",
      title: "Co-founder, 🌱ickles",
      initials: "c",
      color: "bg-purple-500",
    },
  ];

  const marqueeItems = [
    "TikTok Strategy",
    "Brand Identity",
    "Content Creation",
    "Community Growth",
    "Facebook Ads",
    "Viral Content",
    "Analytics",
    "Social Architecture",
  ];

  return (
    <div className="bg-[#fffcf9] min-h-screen text-black overflow-x-hidden selection:bg-rose-200">
      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-rose-100/50 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-50/50 blur-[120px] rounded-full animate-pulse" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b-[1px] border-black/5">
        <div className="max-w-[1400px] mx-auto px-8 py-5 flex justify-between items-center">
          <a
            href="#home"
            className="text-2xl font-black tracking-tighter hover:text-rose-500 transition-colors"
          >
            ESEOSA<span className="text-rose-500">.</span>
          </a>

          <div className="hidden md:flex gap-8 font-bold uppercase text-[10px] tracking-[0.25em]">
            {NAV_LINKS.map((item) => (
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
            {["home", ...NAV_LINKS].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-4xl font-black uppercase tracking-tighter"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── Hero Section ─── */}
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

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-5 mb-12"
            >
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
            </motion.div>

            {/* ── Social Proof Strip ── */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap items-center gap-5"
            >
              <div>
                <div className="flex items-center gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={10}
                      className="text-rose-400 fill-rose-400"
                    />
                  ))}
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">
                  Trusted by 3+ brands
                </p>
              </div>
              <div className="hidden md:block w-[1px] h-8 bg-black/10" />
              <blockquote className="hidden md:block text-[11px] text-black/35 italic max-w-[200px] leading-relaxed">
                "Results we could actually measure." — Perpetual O.
              </blockquote>
            </motion.div>
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

      {/* Experience Section */}
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
                year: "2025-26",
                role: "Social Media Strategist",
                company: "Insurance with Perpetual",
                color: "bg-rose-50",
                link: "https://www.facebook.com/share/1DhNHNFTeh/",
              },
              {
                year: "2024-present",
                role: "Social Media Manager",
                company: "Tees Tresses & Polish",
                color: "bg-orange-50",
                link: "https://www.tiktok.com/@tees_tresses_and_polish?_r=1&_t=ZS-961VMzt2wpF",
              },
              {
                year: "2024-present",
                role: "Social media handler",
                company: "🌱ickles",
                color: "bg-purple-50",
                link: "https://www.tiktok.com/@darkceee?_r=1&_t=ZS-961VF3JZ4fQ",
              },
            ].map((exp, i) => (
              <a
                key={i}
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
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
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Portfolio / Gallery Section ─── */}
      <section id="portfolio" className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-[1200px] mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-6">
            <div>
              <span className="text-rose-500 font-bold tracking-[0.4em] text-[10px] uppercase mb-4 block">
                Selected Work
              </span>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic leading-none">
                Gallery
              </h2>
            </div>
            <p className="text-black/40 text-sm max-w-xs leading-relaxed">
              Real results for real brands — content that grows communities and
              moves numbers.
            </p>
          </div>

          {/* Marquee strip */}
          <div className="relative overflow-hidden border-y border-black/5 py-4 mb-12">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="flex gap-12 whitespace-nowrap"
            >
              {[...marqueeItems, ...marqueeItems].map((label, i) => (
                <span
                  key={i}
                  className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-black/30"
                >
                  <span className="w-1.5 h-1.5 bg-rose-400 rounded-full inline-block" />
                  {label}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            {/* Featured card — dark, large */}
            <motion.a
              href={portfolioItems[0].link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.015 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="md:col-span-7 bg-black rounded-[2rem] p-10 flex flex-col justify-between min-h-[420px] group cursor-pointer relative overflow-hidden"
            >
              {/* Subtle background number watermark */}
              <div className="absolute -bottom-6 -right-4 text-[160px] font-black text-white/5 leading-none select-none pointer-events-none">
                01
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] px-3 py-1.5 rounded-full bg-white/10 text-white/60">
                  {portfolioItems[0].platform}
                </span>
                <ArrowUpRight
                  size={20}
                  className="text-white opacity-30 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                />
              </div>

              <div>
                <div className="text-[80px] md:text-[100px] font-black text-white leading-none mb-2">
                  {portfolioItems[0].metric}
                </div>
                <div className="flex items-center gap-2 text-rose-400 text-xs font-black uppercase tracking-widest mb-6">
                  <Eye size={14} />
                  {portfolioItems[0].metricLabel}
                </div>
                <p className="text-white/40 text-sm leading-relaxed max-w-xs">
                  {portfolioItems[0].sub}
                </p>
              </div>

              <div className="flex items-end justify-between">
                <div>
                  <div className="font-black text-xl text-white uppercase tracking-tight">
                    {portfolioItems[0].brand}
                  </div>
                  <div className="text-white/30 text-[10px] font-bold uppercase tracking-widest mt-1">
                    {portfolioItems[0].handle} · {portfolioItems[0].tag}
                  </div>
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full bg-rose-500 text-white">
                  Featured
                </span>
              </div>
            </motion.a>

            {/* Right column — two stacked cards */}
            <div className="md:col-span-5 flex flex-col gap-5">
              {portfolioItems.slice(1).map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="rounded-[2rem] p-8 flex flex-col justify-between flex-1 group cursor-pointer relative overflow-hidden border border-black/5 hover:shadow-xl transition-shadow"
                  style={{
                    background:
                      i === 0
                        ? "linear-gradient(135deg, #fff7ed 0%, #fef3c7 100%)"
                        : "linear-gradient(135deg, #fff1f2 0%, #fce7f3 100%)",
                  }}
                >
                  <div
                    className="absolute -bottom-4 -right-2 text-[80px] font-black leading-none select-none pointer-events-none"
                    style={{
                      color:
                        i === 0
                          ? "rgba(251,146,60,0.08)"
                          : "rgba(244,63,94,0.08)",
                    }}
                  >
                    0{i + 2}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-[10px] font-black uppercase tracking-[0.25em] px-3 py-1.5 rounded-full"
                      style={{
                        background:
                          i === 0
                            ? "rgba(251,146,60,0.15)"
                            : "rgba(244,63,94,0.12)",
                        color: i === 0 ? "#f97316" : "#e11d48",
                      }}
                    >
                      {item.platform}
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="opacity-20 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                      style={{ color: i === 0 ? "#f97316" : "#e11d48" }}
                    />
                  </div>

                  <div>
                    <div
                      className="text-5xl font-black leading-none mb-1"
                      style={{ color: i === 0 ? "#f97316" : "#e11d48" }}
                    >
                      {item.metric}
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-black/30 mb-3">
                      <item.icon size={11} />
                      {item.metricLabel}
                    </div>
                    <p className="text-black/40 text-xs leading-relaxed">
                      {item.sub}
                    </p>
                  </div>

                  <div className="mt-4">
                    <div className="font-black text-sm uppercase tracking-tight">
                      {item.brand}
                    </div>
                    <div className="text-black/25 text-[10px] font-bold uppercase tracking-widest mt-0.5">
                      {item.handle} · {item.tag}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Bottom stat bar */}
            <div className="md:col-span-12 bg-black rounded-[1.5rem] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              {[
                { value: "3+", label: "Brands Elevated" },
                { value: "100K+", label: "Total Reach" },
                { value: "100%", label: "Client Retention" },
                { value: "2yrs", label: "Of Expertise" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="text-4xl md:text-5xl font-black text-white">
                    {stat.value}
                  </div>
                  <div className="text-white/30 text-[10px] font-black uppercase tracking-[0.3em] mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
              <div className="hidden md:flex items-center gap-3">
                <Zap size={16} className="text-rose-400" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">
                  Results speak louder
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Testimonials Section ─── */}
      <section
        id="testimonials"
        className="py-32 px-6 border-t-[1px] border-black/5"
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col items-center text-center mb-20">
            <span className="text-rose-500 font-bold tracking-[0.4em] text-[10px] uppercase mb-4">
              Social Proof
            </span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
              Kind Words
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="bg-[#fffcf9] border border-black/5 rounded-[2rem] p-8 flex flex-col justify-between gap-8 hover:shadow-xl transition-all"
              >
                <div>
                  <Quote
                    size={28}
                    className="text-rose-300 mb-6"
                    strokeWidth={1.5}
                  />
                  <p className="text-black/70 text-sm leading-relaxed font-medium">
                    "{t.quote}"
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center text-white text-[10px] font-black`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-black text-sm uppercase tracking-tight">
                      {t.name}
                    </p>
                    <p className="text-black/30 text-[10px] font-bold uppercase tracking-widest">
                      {t.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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

      {/* Footer */}
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
