
import React, { useState, useEffect, useRef } from 'react';
import netflixImg from "./assets/netflix.png";
import regexImg from "./assets/regex.png";
import youtubeImg from "./assets/youtube.png";
import chatAppImg from "./assets/chatApp.png";
import emailjs from '@emailjs/browser';
import liveCodingImg from "./assets/leetcode.png";
import {GitHubCalendar} from 'react-github-calendar';
import {ActivityCalendar} from 'react-activity-calendar';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { 
  Menu, X, ArrowRight, Download, Calendar, Layers, 
  Mail, MapPin, Send, Loader2, AlertCircle, 
  Code, Globe, Play, ChevronLeft, ChevronRight,
  Target, Briefcase, GraduationCap, Star, GitCommit, Terminal, Cpu
} from 'lucide-react';

// --- CUSTOM CURSOR ---
const CustomCursor = () => {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = ringRef.current;
    
    let mouseX = -100, mouseY = -100;
    let ringX = -100, ringY = -100;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (cursor) cursor.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0)`;
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      if (ring) ring.style.transform = `translate3d(${ringX - 16}px, ${ringY - 16}px, 0)`;
      requestAnimationFrame(animateRing);
    };

    window.addEventListener('mousemove', moveCursor);
    const animationId = requestAnimationFrame(animateRing);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="fixed top-0 left-0 w-2 h-2 bg-black rounded-full pointer-events-none z-[9999]" />
      <div ref={ringRef} className="fixed top-0 left-0 w-8 h-8 border border-black/30 rounded-full pointer-events-none z-[9998] transition-all duration-100 ease-out" />
    </>
  );
};

// --- SCROLLABLE CONTAINER COMPONENT ---
const ScrollToRight = ({ children, dependency }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (containerRef.current) {
        containerRef.current.scrollLeft = containerRef.current.scrollWidth;
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [children, dependency]);

  return (
    <div ref={containerRef} className="w-full flex overflow-x-auto pb-2 scrollbar-hide">
      {children}
    </div>
  );
};

// --- LEETCODE COMPONENT ---
const LeetCodeCalendar = ({ username }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://leetcode-stats-api.herokuapp.com/${username}`)
      .then(res => res.json())
      .then(apiData => {
        if (apiData.status === 'error') throw new Error('User not found');
        const calendarData = Object.entries(apiData.submissionCalendar).map(([timestamp, count]) => {
          const date = new Date(parseInt(timestamp) * 1000).toISOString().split('T')[0];
          return { date, count, level: count > 5 ? 4 : count > 3 ? 3 : count > 1 ? 2 : 1 };
        });
        
        const today = new Date().toISOString().split('T')[0];
        if (!calendarData.find(d => d.date === today)) {
            calendarData.push({ date: today, count: 0, level: 0 });
        }
        
        setData(calendarData);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [username]);

  const theme = {
    light: ['#f1f5f9', '#ccfbf1', '#5eead4', '#14b8a6', '#0f766e'],
    dark: ['#f1f5f9', '#ccfbf1', '#5eead4', '#14b8a6', '#0f766e'],
  };

  if (loading) return <div className="h-32 flex items-center justify-center text-slate-400"><Loader2 className="animate-spin w-6 h-6" /></div>;
  if (error) return <div className="text-xs text-red-400">Could not load LeetCode data.</div>;

  return (
    <ScrollToRight dependency={data}>
      <ActivityCalendar 
        data={data} 
        theme={theme} 
        blockSize={14} 
        blockMargin={4} 
        fontSize={12} 
        colorScheme="light" 
        labels={{ legend: { less: 'Less', more: 'More' }, months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] }} 
      />
    </ScrollToRight>
  );
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedProject, setExpandedProject] = useState(null);

  const form = useRef();

  // --- CONFIGURATION ---
  const githubUsername = "jeffrey-thomass"; 
  const leetcodeUsername = "jeffreythomas";
  const SkillPill = ({ label }) => (
    <span
      className="
        px-4 py-2
        bg-slate-50
        border border-slate-200
        rounded-full
        text-sm font-medium
        text-slate-700
        transition-all duration-300
        cursor-none
        hover:bg-black
        hover:text-white
        hover:border-black
        hover:scale-110
      "
    >
      {label}
    </span>
  );
  

  const projects = [
    {
      title: "Live Coding Collaboration Platform",
      date: "Apr 2025",
      description: "A LeetCode-inspired live coding platform that enables real-time collaborative problem solving. Users can create or join coding sessions with up to two participants, featuring live code editing, voice and video chat, screen sharing, and synchronized execution. Includes a production-grade dashboard to track session history and coding activity. Authentication is handled via Clerk, background workflows via Inngest, and real-time communication via WebSockets.",
      tags: [
        "MongoDB",
        "Express",
        "React",
        "Node.js",
        "Socket.IO",
        "WebSockets",
        "Clerk",
        "Inngest",
        "TanStack Query"
      ],
      type: "Web App",
      image: liveCodingImg, // import like other images
      live: "https://codemate-0q8m.onrender.com", // optional
    },
    {
      title: "Realtime Chat App",
      date: "Mar 2025",
      description: "A full-stack real-time chat application built using the MERN stack. Features include user authentication, private messaging, online/offline presence, and instant message delivery powered by Socket.IO. Global state is managed efficiently with Zustand for a smooth and responsive user experience.",
      tags: ["MongoDB", "Express", "React", "Node.js", "Socket.IO", "Zustand"],
      type: "Web App",
      image: chatAppImg, // import this just like other images
      live: "https://chatapp-co8p4.sevalla.app/", // optional
    },    
    {
      title: "Netflix Clone",
      date: "Feb 2025",
      description: "A Netflix-inspired web application built with React and Firebase authentication. Focused on building clean UI components and implementing secure user sign-in flows for a real-world streaming-style experience.",
      tags: ["React", "Firebase", "JavaScript", "CSS"],
      type: "Web App",
      image: netflixImg,
      live: "https://illustrious-netfliexxxxjef-15ee3c.netlify.app/",
    },
    {
      title: "Regex Practice Tool",
      date: "Apr 2025",
      description: "A lightweight regex practice website built using plain JavaScript. Allows users to test and experiment with regular expressions in real time, making it easier to understand patterns and matches.",
      tags: ["JavaScript", "HTML", "CSS"],
      type: "Web Tool",
      image: regexImg,
      live: "https://dulcet-jeff-stitch-50aa3e.netlify.app/",
    },{
      title: "YouTube Clone",
      date: "Jul 2025",
      description: "A YouTube clone built with React using the official YouTube Data API. Fetches and displays real video content and serves as a foundation for a more feature-rich video platform.",
      tags: ["React", "YouTube API", "JavaScript", "CSS"],
      type: "Web App",
      image: youtubeImg,
      live: "https://frolicking-jtube-utube-clone.netlify.app/",
    },
  ];

  const nextProject = () => setCurrentIndex((prev) => (prev + 1) % projects.length);
  const prevProject = () => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

  const getCardStyle = (index) => {
    if (index === currentIndex) return "z-20 scale-100 opacity-100 translate-x-0 cursor-default shadow-2xl shadow-purple-900/10 border-slate-200/60";
    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    const nextIndex = (currentIndex + 1) % projects.length;
    if (index === prevIndex) return "z-10 scale-90 opacity-40 -translate-x-[20%] lg:-translate-x-[60%] cursor-pointer hover:opacity-60 blur-[2px] border-transparent";
    if (index === nextIndex) return "z-10 scale-90 opacity-40 translate-x-[20%] lg:translate-x-[60%] cursor-pointer hover:opacity-60 blur-[2px] border-transparent";
    return "z-0 scale-75 opacity-0 hidden";
  };
  const [scrolled, setScrolled] = useState(false);

useEffect(() => {
  const onScroll = () => {
    setScrolled(window.scrollY > 40);
  };
  window.addEventListener("scroll", onScroll);
  return () => window.removeEventListener("scroll", onScroll);
}, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setErrorMessage("");
    const lastSentTime = localStorage.getItem("lastEmailSentTime");
    const twelveHoursInMs = 12 * 60 * 60 * 1000;
    const now = new Date().getTime();

    if (lastSentTime && (now - parseInt(lastSentTime) < twelveHoursInMs)) {
      const hoursLeft = Math.ceil((twelveHoursInMs - (now - parseInt(lastSentTime))) / (1000 * 60 * 60));
      setErrorMessage(`Please wait ${hoursLeft} hours before sending another message.`);
      return;
    }

    setIsSubmitting(true);
    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_PUBLIC_KEY
    ).then(() => {
        setSubmitStatus('success');
        setIsSubmitting(false);
        e.target.reset();
        localStorage.setItem("lastEmailSentTime", new Date().getTime().toString());
        setTimeout(() => setSubmitStatus('idle'), 5000);
    }, () => {
        setSubmitStatus('error');
        setErrorMessage("Something went wrong. Please try again.");
        setIsSubmitting(false);
    });
  };

  const marqueeItems = [
    "Full-Stack Engineering",
    "Scalable Systems",
    "Realtime Applications",
    "Node.js & React",
    "System Design",
    "WebSockets",
    "Authentication & Security",
    "Cloud Deployment",
    "MongoDB & Redis",
    "State Management",
    "Full-Stack Engineering",
    "Scalable Systems",
  ];
  

  const gitHubTheme = {
    light: ['#f1f5f9', '#e9d5ff', '#c084fc', '#9333ea', '#581c87'],
    dark: ['#f1f5f9', '#e9d5ff', '#c084fc', '#9333ea', '#581c87'],
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-purple-100 selection:text-purple-900 relative overflow-x-hidden cursor-none scroll-smooth">
      <CustomCursor />

      <style>{`
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-scroll { animation: scroll 30s linear infinite; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-15px); } 100% { transform: translateY(0px); } }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .reveal-1 { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
        .reveal-2 { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards; opacity: 0; }
        .reveal-3 { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards; opacity: 0; }
        .glass-card { background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.5); box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07); }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* --- BACKGROUND --- */}
      <div className="fixed inset-0 z-0 h-full w-full pointer-events-none">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
         <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-200/30 rounded-full blur-[120px]" />
         <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-blue-200/30 rounded-full blur-[100px]" />
         <div className="absolute bottom-[10%] left-[10%] w-[30vw] h-[30vw] bg-indigo-200/30 rounded-full blur-[100px]" />
      </div>

      {/* --- NAVBAR --- */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
  <div
    className={`
      flex items-center justify-between
      rounded-full
      transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
      backdrop-blur-2xl
      border border-white/30
      shadow-[0_10px_40px_rgba(0,0,0,0.08)]
      
      ${
        scrolled
          ? "w-[60vw] max-w-3xl px-3 py-1.5 bg-white/35"
          : "w-[90vw] max-w-5xl px-4 py-2 bg-white/50"
      }
    `}
  >
    {/* Logo */}
    <div className="pl-6 text-lg font-bold tracking-tight text-slate-900">
      Jeffrey.dev
    </div>

    {/* Desktop Nav */}
    <div className="hidden md:flex items-center gap-1">
      {['Home', 'About', 'Activity', 'Projects', 'Contact'].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          onClick={() => setActiveSection(item.toLowerCase())}
          className={`
            px-5 py-2 rounded-full text-sm font-medium
            transition-all duration-300 cursor-none
            ${
              activeSection === item.toLowerCase()
                ? "bg-black/90 text-white shadow-md"
                : "text-slate-700 hover:text-black hover:bg-white/30"
            }
          `}
        >
          {item}
        </a>
      ))}
    </div>

    {/* Mobile Menu Button */}
    <button
      className="md:hidden p-3 rounded-full hover:bg-white/30 mr-2 transition cursor-none"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
    </button>
  </div>
</nav>


      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white/95 backdrop-blur-xl z-40 pt-32 px-6 md:hidden">
          <div className="flex flex-col items-center gap-6">
            {['Home', 'About', 'Activity', 'Projects', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-2xl font-medium text-slate-900 cursor-none" onClick={() => setIsMenuOpen(false)}>{item}</a>
            ))}
          </div>
        </div>
      )}

      {/* --- HERO SECTION --- */}
      <section id="home" className="relative z-10 pt-48 lg:pt-60 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24 relative z-10">
          
          <div className="space-y-8 relative">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100/80 border border-slate-200 backdrop-blur-sm text-xs font-bold tracking-wide uppercase text-slate-700 reveal-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Full Stack Developer 
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] reveal-2 mt-6">
  Building scalable <br />
  real-time systems <br />
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
    end-to-end
  </span>
</h1>

              <p className="text-lg text-slate-600 max-w-lg leading-relaxed reveal-3 mt-6">
  I design and build scalable full-stack systems,
  from real-time features to production-ready infrastructure.
</p>

              <div className="flex flex-wrap gap-4 pt-6 reveal-4">
              <a
  href="#projects"
  className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-slate-800 transition-all flex items-center gap-2 group shadow-xl shadow-purple-900/10 cursor-none hover:scale-105 active:scale-95 duration-300"
>
  View my work
  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
</a>

                <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-medium hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm cursor-none hover:scale-105 active:scale-95 duration-300">
                  Download Resume <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          
          {/* Hero Animation */}
          <div className="relative group perspective-1000 reveal-4 flex justify-center lg:justify-end items-center">
             <div className="w-full transform scale-110 lg:scale-190">
                <DotLottieReact
                  src="https://lottie.host/26567980-938b-404b-b8d6-2c814453b44a/54o9H4IC89.lottie"
                  loop
                  autoplay
                />
             </div>
          </div>
        </div>
      </section>

      {/* --- MARQUEE --- */}
      <div className="w-full border-y border-slate-100/60 bg-white/30 backdrop-blur-lg py-6 overflow-hidden relative z-10">
  <div className="whitespace-nowrap flex animate-scroll items-center">
    {[...marqueeItems, ...marqueeItems].map((item, i) => (
      <div
        key={i}
        className="flex items-center mx-8 text-sm font-medium tracking-wide
                   text-slate-400 hover:text-slate-800 transition-colors duration-300
                   cursor-default"
      >
        {/* subtle dot */}
        <span className="mx-4 text-slate-300">•</span>

        {/* soft text */}
        <span className="opacity-80 hover:opacity-100 transition-opacity">
          {item}
        </span>
      </div>
    ))}
  </div>

  {/* ultra-soft fade edges */}
  <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white/80 to-transparent" />
  <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white/80 to-transparent" />
</div>


      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-24 px-6 relative z-10 max-w-7xl mx-auto overflow-visible">
        
        {/* Alignment Fix: items-start to align top edges */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
           
           {/* Left Column: Vertical Stack */}
           <div className="flex flex-col relative h-full">
              {/* Header */}
              <div className="mb-10">
                 <div className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-4">About Me</div>
                 <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">Digital Craftsman</h2>
              </div>

              {/* Text */}
              <div className="space-y-8 text-lg text-slate-600 leading-relaxed font-medium relative z-10">
              <p>
  I build full-stack applications with a strong focus on system design,
  real-time features, and performance at scale.
</p>
<p>
  My work spans backend architecture, APIs, authentication, and modern frontend
  state management — always with maintainability in mind.
</p>

                <div className="pt-2">
                   <a href="#projects" className="inline-flex items-center gap-2 font-bold text-black hover:text-purple-600 transition-colors cursor-none hover:translate-x-2 duration-300">
                      <span className="h-px w-8 bg-current"></span> See my work
                   </a>
                </div>
              </div>

              {/* ROCKET: Massive & Anchored */}
              <div className="
  absolute
  top-[43%]
  left-3/5
  -translate-x-1/2
  w-[140%]
  max-w-[900px]
  pointer-events-none
  z-20
  opacity-90
">
  <DotLottieReact
    src="https://lottie.host/a4efe1b9-556e-47a3-9d56-3e247ce71cc3/6S8ekYvQxG.lottie"
    loop
    autoplay
    className="w-full h-auto"
  />
</div>

           </div>
           
           {/* Right Column: Skills Card (Sticky if needed, or just standard) */}
           <div className="glass-card rounded-[2.5rem] p-10 relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-purple-900/5 h-fit mt-2">
  <h3 className="text-2xl font-bold mb-8 relative z-10">
    Skills & Expertise
  </h3>

  <div className="space-y-8 relative z-10">

    {/* CORE STACK */}
    <div>
      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
        Core Stack
      </div>
      <div className="flex flex-wrap gap-2">
        {[
          "React",
          "Next.js",
          "Node.js",
          "Express",
          "MongoDB",
          "Mongoose"
        ].map(skill => (
          <SkillPill key={skill} label={skill} />
        ))}
      </div>
    </div>

    {/* STATE, REALTIME & DATA */}
    <div>
      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
        State, Realtime & Data
      </div>
      <div className="flex flex-wrap gap-2">
        {[
          "Zustand",
          "TanStack Query",
          "Socket.IO",
          "Stream.io",
          "Redis"
        ].map(skill => (
          <SkillPill key={skill} label={skill} />
        ))}
      </div>
    </div>

    {/* AUTH, INFRA & CLOUD */}
    <div>
      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
        Auth, Infra & Cloud
      </div>
      <div className="flex flex-wrap gap-2">
        {[
          "OAuth / OpenID",
          "Clerk",
          "Inngest",
          "AWS",
          "Vercel",
          "Render",
          "Supabase"
        ].map(skill => (
          <SkillPill key={skill} label={skill} />
        ))}
      </div>
    </div>

    {/* LANGUAGES & AI */}
    <div>
      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
        Languages & AI
      </div>
      <div className="flex flex-wrap gap-2">
        {[
          "JavaScript",
          "TypeScript",
          "Python",
          "Java",
          "Gen AI"
        ].map(skill => (
          <SkillPill key={skill} label={skill} />
        ))}
      </div>
    </div>

  </div>
</div>

        </div>
      </section>

      {/* --- ACTIVITY SECTION --- */}
      <section
  id="activity"
  className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-32"
>
  <div className="text-center mb-20">
    <h2 className="text-4xl font-bold text-slate-900 mb-4">
      Code Activity
    </h2>
    <p className="text-slate-500 max-w-md mx-auto">
      My daily contributions across platforms.
    </p>
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
    {/* GitHub */}
    <div className="glass-card p-10 rounded-[2.5rem]">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-purple-50 rounded-lg">
            <GitCommit className="w-5 h-5 text-purple-600" />
          </div>
          <span className="font-semibold text-slate-800">
            GitHub
          </span>
        </div>
        <span className="text-xs font-bold tracking-widest text-slate-400">
          COMMITS
        </span>
      </div>

      <div className="overflow-x-auto">
        <GitHubCalendar
          username={githubUsername}
          blockSize={12}
          blockMargin={4}
          fontSize={12}
          theme={gitHubTheme}
        />
      </div>
    </div>

    {/* LeetCode */}
    <div className="glass-card p-10 rounded-[2.5rem]">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-teal-50 rounded-lg">
            <Terminal className="w-5 h-5 text-teal-600" />
          </div>
          <span className="font-semibold text-slate-800">
            LeetCode
          </span>
        </div>
        <span className="text-xs font-bold tracking-widest text-slate-400">
          SUBMISSIONS
        </span>
      </div>

      <LeetCodeCalendar username={leetcodeUsername} />
    </div>
  </div>
</section>


      {/* --- PROJECTS SECTION --- */}
{/* --- PROJECTS SECTION --- */}
<section id="projects" className="py-24 px-6 bg-slate-50/50 relative z-10 overflow-hidden">
  <div className="max-w-7xl mx-auto flex flex-col items-center">
    <div className="text-center mb-12">
      <div className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-4">
        Projects
      </div>
      <h2 className="text-4xl font-bold text-slate-900">Selected work</h2>
    </div>

    {/* Carousel */}
    <div className="relative w-full h-[400px] flex items-center justify-center">
      {projects.map((project, index) => {
        const styleClass = getCardStyle(index);
        const isCenter = index === currentIndex;

        return (
          <div
            key={index}
            onClick={() =>
              isCenter
                ? setExpandedProject(project)
                : setCurrentIndex(index)
            }
            className={`absolute w-full bg-white rounded-[2.5rem] overflow-hidden transition-all duration-700 border border-white/40 ${styleClass}`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
              {/* IMAGE */}
              <div className="relative h-[200px] lg:h-full bg-slate-100 overflow-hidden">
                {!isCenter && <div className="absolute inset-0 bg-white/40 z-10" />}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="p-8 flex flex-col justify-center bg-white/60 backdrop-blur-sm">
                <div
                  className={`transition-opacity duration-300 ${
                    isCenter ? "opacity-100" : "opacity-0 lg:opacity-30"
                  }`}
                >
                  <h3 className="text-3xl font-bold text-slate-900 mb-2">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-2 text-slate-400 text-sm mb-4">
                    <Calendar className="w-4 h-4" />
                    {project.date}
                  </div>

                  <p className="text-slate-600 text-base mb-6 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.live && (
                      <span className="px-5 py-2 rounded-full bg-black text-white text-sm font-bold">
                        Click to expand
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>

    {/* Controls */}
    <div className="flex items-center gap-6 mt-6 z-20">
  {/* LEFT ARROW */}
  <button
    onClick={prevProject}
    className="p-4 rounded-full bg-white border border-slate-200 text-slate-600
               hover:bg-black hover:text-white hover:border-black
               transition-all shadow-md active:scale-95"
  >
    <ChevronLeft className="w-6 h-6" />
  </button>

  {/* DOT INDICATORS */}
  <div className="flex items-center gap-2">
    {projects.map((_, idx) => (
      <button
        key={idx}
        onClick={() => setCurrentIndex(idx)}
        aria-label={`Go to project ${idx + 1}`}
        className={`
          h-2.5 rounded-full transition-all duration-300
          ${idx === currentIndex
            ? "w-8 bg-black"
            : "w-2.5 bg-slate-300 hover:bg-slate-400"}
        `}
      />
    ))}
  </div>

  {/* RIGHT ARROW */}
  <button
    onClick={nextProject}
    className="p-4 rounded-full bg-white border border-slate-200 text-slate-600
               hover:bg-black hover:text-white hover:border-black
               transition-all shadow-md active:scale-95"
  >
    <ChevronRight className="w-6 h-6" />
  </button>
</div>

  </div>

  {/* -------- EXPANDED PROJECT MODAL -------- */}
  {expandedProject && (
    <div
      className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center px-6"
      onClick={() => setExpandedProject(null)}
    >
      <div
        className="relative bg-white max-w-5xl w-full rounded-[2.5rem] overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={() => setExpandedProject(null)}
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 hover:bg-black hover:text-white transition"
        >
          <X />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <img
            src={expandedProject.image}
            alt={expandedProject.title}
            className="w-full h-full object-cover"
          />

          <div className="p-10 flex flex-col">
            <h3 className="text-4xl font-bold mb-4">
              {expandedProject.title}
            </h3>

            <div className="text-slate-400 mb-6 flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {expandedProject.date}
            </div>

            <p className="text-slate-700 text-lg leading-relaxed mb-8">
              {expandedProject.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {expandedProject.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-slate-100 rounded-full text-sm font-semibold"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-auto">
              {expandedProject.live && (
                <a
                  href={expandedProject.live}
                  target="_blank"
                  className="px-6 py-3 bg-black text-white rounded-full font-bold flex items-center gap-2"
                >
                  <Globe className="w-4 h-4" /> Live Site
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )}
</section>

      {/* --- CONTACT SECTION (FULL SCREEN) --- */}
      <section id="contact" className="min-h-screen py-24 px-6 relative z-10 max-w-7xl mx-auto flex flex-col justify-center">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-grow">
            <div className="space-y-8">
               <div className="text-sm font-bold tracking-widest text-slate-500 uppercase">Get in touch</div>
               <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Let's work together</h2>
               <p className="text-lg text-slate-600 leading-relaxed max-w-md">I'm currently available for freelance work and collaborations.</p>
               <div className="space-y-6 pt-4">
                  <div className="flex items-center gap-4 group cursor-none">
                     <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300"><Mail className="w-5 h-5" /></div>
                     <div><div className="text-sm font-medium text-slate-500">Email</div><a href="mailto:jeffreythomas10566x@gmail.com" className="text-lg font-semibold text-slate-900 cursor-none">jeffreythomas10566x@gmail.com</a></div>
                  </div>
               </div>
            </div>
            <div className="glass-card p-8 sm:p-10 rounded-[2.5rem] relative overflow-hidden group transition-all duration-500 hover:-translate-y-2 hover:shadow-purple-900/10">
               <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-100/50 rounded-full blur-[50px] pointer-events-none group-hover:bg-purple-100/50 transition-colors duration-500" />
               <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Ready to start a project?</h3>
                  <p className="text-slate-500 mb-8 text-sm">Fill out the form below and I'll get back to you within 24 hours.</p>
                  <form ref={form} onSubmit={sendEmail} className="space-y-4">
                     <div><input type="text" name="user_name" placeholder="Your Name" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 cursor-none focus:border-black focus:ring-0 transition-colors" /></div>
                     <div><input type="email" name="user_email" placeholder="Your Email" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 cursor-none focus:border-black focus:ring-0 transition-colors" /></div>
                     <div><textarea name="message" rows="4" placeholder="Tell me about your project..." required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 resize-none cursor-none focus:border-black focus:ring-0 transition-colors" /></div>
                     {errorMessage && <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-600 text-xs font-medium"><AlertCircle className="w-4 h-4 flex-shrink-0" />{errorMessage}</div>}
                     <button type="submit" disabled={isSubmitting || submitStatus === 'success'} className={`w-full py-4 rounded-full font-bold text-white transition-all duration-300 flex items-center justify-center gap-2 cursor-none hover:scale-[1.02] active:scale-[0.98] ${submitStatus === 'success' ? 'bg-emerald-500' : 'bg-black hover:bg-slate-800'}`}>
                       {isSubmitting ? <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</> : submitStatus === 'success' ? "Message Sent!" : <><Send className="w-4 h-4" /> Send Message</>}
                     </button>
                  </form>
               </div>
            </div>
         </div>
         {/* Footer integrated inside the Full Screen Contact section */}
         <div className="w-full text-center pb-8 pt-12">
             <div className="text-xl font-bold tracking-tight text-slate-900 mb-2">jeffrey.dev</div>
             <p className="text-slate-500 text-sm">© 2026 Jeffrey Thomas. All rights reserved.</p>
         </div>
      </section>
    </div>
  );
};

export default App;

