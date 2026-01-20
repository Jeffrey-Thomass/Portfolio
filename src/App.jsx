// import React from 'react'
// import { InteractiveGridPattern } from './components/ui/interactive-grid-pattern.jsx'

// export default function App() {
//   return (
//   <div className="relative h-[500px] w-full overflow-hidden">
//   <InteractiveGridPattern />
//   </div>
//   )
// }
// import React, { useState } from 'react';


import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  ArrowRight, 
  Download, 
  ExternalLink,
  ChevronUp,
  Layers,
  Mail,
  MapPin
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('All');
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const marqueeItems = [
    "AI Engineering", "UI/UX Design", "TypeScript", "Next.js", 
    "Product Design", "JavaScript", "React", "Node.js", 
    "AI Engineering", "UI/UX Design", "TypeScript", "Next.js"
  ];

  const projects = [
    {
      title: "RestOS",
      description: "A modern Restaurant POS (Point Of Sale) system designed to streamline operations.",
      tags: ["React", "Tailwind CSS", "Node.js", "Vanilla JS"],
      type: "web",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Food Data Browser",
      description: "A modern web application for browsing and searching food product data.",
      tags: ["React", "React Query", "Tailwind CSS", "API"],
      type: "web",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Carbon Credits Dash",
      description: "This is a frontend application built with React, TypeScript, Vite, and shadcn/ui.",
      tags: ["React", "Node.js", "Tailwind CSS", "shadcn/ui"],
      type: "web",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-purple-100 selection:text-purple-900 relative overflow-x-hidden">
      
      {/* CSS for Marquee Animation */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .glass-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
      `}</style>

      {/* --- Background Elements --- */}
      <div className="fixed inset-0 z-0 h-full w-full pointer-events-none">
         {/* Grid Pattern */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
         
         {/* Soft Blue/Purple Gradient Orbs */}
         <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-200/30 rounded-full blur-[120px]" />
         <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-blue-200/30 rounded-full blur-[100px]" />
         <div className="absolute bottom-[10%] left-[10%] w-[30vw] h-[30vw] bg-indigo-200/30 rounded-full blur-[100px]" />
      </div>

      {/* --- Floating Navbar --- */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl">
        <div className="bg-white/80 backdrop-blur-xl border border-white/40 shadow-xl shadow-slate-200/40 rounded-full px-2 py-2 flex items-center justify-between transition-all duration-300">
          
          {/* Logo */}
          <div className="pl-6 text-xl font-bold tracking-tight text-slate-900">
            jeffrey.dev
          </div>

          {/* Desktop Links - Centered */}
          <div className="hidden md:flex items-center gap-1">
            {['Home', 'About', 'Projects', 'FAQ'].map((item) => {
              const isActive = activeSection === item.toLowerCase();
              return (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive 
                      ? 'bg-black text-white shadow-md' 
                      : 'text-slate-600 hover:text-black hover:bg-slate-100/50'
                  }`}
                >
                  {item}
                </a>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex pr-1">
            <a 
              href="#contact"
              onClick={() => setActiveSection('contact')}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                  activeSection === 'contact'
                  ? 'bg-black text-white shadow-lg'
                  : 'bg-black text-white hover:bg-slate-800 shadow-lg shadow-purple-900/10'
              }`}
            >
              Let's talk
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-3 rounded-full hover:bg-slate-100 mr-1" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white/95 backdrop-blur-xl z-40 pt-32 px-6 md:hidden">
          <div className="flex flex-col items-center gap-6">
            {['Home', 'About', 'Projects', 'FAQ'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-2xl font-medium text-slate-900 hover:text-purple-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
             <a 
              href="#contact"
              className="mt-4 bg-black text-white px-8 py-4 rounded-full text-lg font-medium w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Let's talk
            </a>
          </div>
        </div>
      )}

      {/* --- Hero Section --- */}
      <section id="home" className="relative z-10 pt-48 lg:pt-60 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100/80 border border-slate-200 backdrop-blur-sm text-xs font-bold tracking-wide uppercase text-slate-700">
              Full Stack Developer & Designer
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
              Building digital experiences that <br className="hidden lg:block" />
              make an <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">impact</span>
            </h1>
            
            <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
              I'm a full-stack developer specializing in JavaScript, creating AI-enhanced solutions and crafting thoughtful user experiences for the modern web.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-slate-800 transition-all flex items-center gap-2 group shadow-xl shadow-purple-900/10">
                View my work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-medium hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm">
                Download Resume
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative group perspective-1000">
             <div className="absolute inset-0 bg-gradient-to-tr from-purple-200 to-blue-200 rounded-[2.5rem] rotate-3 scale-95 group-hover:rotate-1 transition-transform duration-500 blur-2xl opacity-40" />
             <div className="relative h-[500px] w-full bg-slate-100 rounded-[2rem] overflow-hidden shadow-2xl border border-white/50 transform transition-transform duration-500 hover:scale-[1.01]">
               <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Jeffrey Thomas" className="w-full h-full object-cover" />
               <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-lg">
                 <div className="text-xs font-bold text-white/80 uppercase tracking-wider mb-1">Available for work</div>
                 <div className="text-xl font-semibold text-white">Let's collaborate</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Scrolling Ticker (Marquee) --- */}
      <div className="w-full border-y border-slate-100 bg-white/50 backdrop-blur-sm py-8 overflow-hidden relative z-10">
        <div className="whitespace-nowrap flex animate-scroll">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
             <div key={i} className="flex items-center gap-4 mx-8 text-xl font-medium text-slate-400">
               <span className="w-2 h-2 rounded-full bg-slate-300"></span>
               {item}
             </div>
          ))}
        </div>
      </div>

      {/* --- About Section --- */}
      <section id="about" className="py-32 px-6 relative z-10 max-w-7xl mx-auto">
        <div className="mb-16">
           <div className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-4">About Me</div>
           <h2 className="text-4xl font-bold text-slate-900">My background</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
           {/* Text Content */}
           <div className="space-y-8 text-lg text-slate-600 leading-relaxed">
              <p>
                I'm a creative, independent, and passionate developer with extensive experience creating impactful digital experiences and solutions.
              </p>
              <p>
                With a strong background in both development and design, I bring a unique perspective to every project I work on. I believe in creating solutions that not only look great but also solve real problems for users.
              </p>
              <p>
                My journey in tech started with UI design, which naturally evolved into frontend development, and eventually full-stack skills. Today, I specialize in building modern web applications with a focus on performance, accessibility, and user experience.
              </p>
              <div className="pt-4">
                 <a href="#projects" className="inline-flex items-center gap-2 font-semibold text-black hover:text-purple-600 transition-colors">
                    <span className="h-px w-8 bg-current"></span>
                    See my work
                 </a>
              </div>
           </div>

           {/* Skills Card */}
           <div className="bg-white rounded-[2rem] p-8 sm:p-12 shadow-xl border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-100/50 rounded-full blur-[80px] pointer-events-none" />
              
              <h3 className="text-2xl font-bold mb-8 relative z-10">Skills & Expertise</h3>
              
              <div className="space-y-8 relative z-10">
                 <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Development</div>
                    <div className="flex flex-wrap gap-2">
                       {['JavaScript', 'React', 'Node.js', 'TypeScript', 'Next.js', 'TanStack', 'Fast API', 'MongoDB'].map(skill => (
                          <span key={skill} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm font-medium text-slate-700 hover:bg-white hover:border-slate-300 transition-colors cursor-default">
                             {skill}
                          </span>
                       ))}
                    </div>
                 </div>

                 <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Design</div>
                    <div className="flex flex-wrap gap-2">
                       {['UI/UX', 'Figma', 'Adobe Suite', 'Prototyping', 'Motion Design'].map(skill => (
                          <span key={skill} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm font-medium text-slate-700 hover:bg-white hover:border-slate-300 transition-colors cursor-default">
                             {skill}
                          </span>
                       ))}
                    </div>
                 </div>

                 <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Tools</div>
                    <div className="flex flex-wrap gap-2">
                       {['Git', 'AWS', 'Firebase', 'Docker', 'Vercel', 'Linux'].map(skill => (
                          <span key={skill} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm font-medium text-slate-700 hover:bg-white hover:border-slate-300 transition-colors cursor-default">
                             {skill}
                          </span>
                       ))}
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* --- Projects Section --- */}
      <section id="projects" className="py-32 px-6 bg-slate-50/30 relative z-10">
         <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
               <div>
                  <div className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-4">Projects</div>
                  <h2 className="text-4xl font-bold text-slate-900">Selected work</h2>
               </div>
               
               {/* Filter Pills */}
               <div className="bg-white p-1 rounded-full border border-slate-200 flex shadow-sm">
                  {['All', 'Web'].map(tab => (
                     <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                           activeTab === tab 
                              ? 'bg-black text-white shadow-md' 
                              : 'text-slate-600 hover:text-black'
                        }`}
                     >
                        {tab}
                     </button>
                  ))}
               </div>
            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {projects.map((project, idx) => (
                  <div key={idx} className="group bg-white rounded-[2rem] overflow-hidden border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                     {/* Card Image Area */}
                     <div className="h-64 overflow-hidden relative">
                        <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-slate-900/0 transition-colors z-10" />
                        <img 
                           src={project.image} 
                           alt={project.title} 
                           className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4 z-20">
                           <span className="px-3 py-1 bg-white/90 backdrop-blur rounded-full text-xs font-bold uppercase tracking-wider border border-white/20">
                              {project.type}
                           </span>
                        </div>
                     </div>

                     {/* Card Content */}
                     <div className="p-8">
                        <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
                        <p className="text-slate-600 mb-6 line-clamp-2 text-sm leading-relaxed">
                           {project.description}
                        </p>
                        
                        <div className="flex items-center gap-2 mb-6">
                           <Layers className="w-4 h-4 text-slate-400" />
                           <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Tech Stack</span>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                           {project.tags.map((tag, i) => (
                              <span key={i} className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-600 border border-slate-200">
                                 {tag}
                              </span>
                           ))}
                           {project.tags.length > 3 && (
                               <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-600 border border-slate-200">
                                 +2
                              </span>
                           )}
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- Contact Section --- */}
      <section id="contact" className="py-32 px-6 relative z-10 max-w-7xl mx-auto">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column */}
            <div className="space-y-8">
               <div className="text-sm font-bold tracking-widest text-slate-500 uppercase">Get in touch</div>
               <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Let's work together</h2>
               <p className="text-lg text-slate-600 leading-relaxed max-w-md">
                  I'm currently available for freelance work and collaborations. If you have a project you'd like to discuss, please get in touch!
               </p>
               
               <div className="space-y-6 pt-4">
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-slate-700" />
                     </div>
                     <div>
                        <div className="text-sm font-medium text-slate-500">Email</div>
                        <a href="mailto:jeffrey.thomas@gmail.com" className="text-lg font-semibold text-slate-900 hover:text-purple-600 transition-colors">
                           jeffrey.thomas@gmail.com
                        </a>
                     </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-slate-700" />
                     </div>
                     <div>
                        <div className="text-sm font-medium text-slate-500">Location</div>
                        <div className="text-lg font-semibold text-slate-900">Pune, India</div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Right Column - Card */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-slate-100 relative overflow-hidden text-center group">
               {/* Card Glow */}
               <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-100/50 rounded-full blur-[60px] pointer-events-none group-hover:bg-yellow-200/50 transition-colors" />
               
               <div className="relative z-10 flex flex-col items-center justify-center py-8">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6 shadow-lg shadow-black/20">
                     <Mail className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">Ready to start a project?</h3>
                  <p className="text-slate-500 mb-10 max-w-sm mx-auto">
                     Fill out our contact form and I'll get back to you within 24 hours to discuss your project.
                  </p>
                  
                  <a 
                     href="mailto:jeffrey.thomas@gmail.com"
                     className="bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-800 transition-all flex items-center gap-2 shadow-xl shadow-purple-900/10 hover:-translate-y-1"
                  >
                     Get in Touch
                     <ArrowRight className="w-5 h-5" />
                  </a>
                  
                  <div className="mt-6 text-sm text-slate-400 font-medium">
                     Opens in a new tab
                  </div>
               </div>
            </div>

         </div>
      </section>

      {/* --- Footer --- */}
      <footer className="bg-white border-t border-slate-100 pt-20 pb-10 relative overflow-hidden z-10">
          <div className="max-w-7xl mx-auto px-6">
             <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center md:text-left">
                   <div className="text-xl font-bold tracking-tight text-slate-900 mb-2">jeffrey.dev</div>
                   <p className="text-slate-500 text-sm">© 2026 Jeffrey Thomas. All rights reserved.</p>
                </div>
                
                <div className="flex gap-6">
                   <a href="#" className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-black hover:text-white hover:border-black transition-all">
                      <Github className="w-4 h-4" />
                   </a>
                   <a href="#" className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all">
                      <Linkedin className="w-4 h-4" />
                   </a>
                   <button 
                      onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                      className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-black hover:text-white hover:border-black transition-all"
                   >
                      <ChevronUp className="w-4 h-4" />
                   </button>
                </div>
             </div>
             
             <div className="mt-12 text-center">
               <p className="text-xs text-slate-400 flex items-center justify-center gap-1">
                 Made with <span className="text-red-500">♥</span> in Pune, India
               </p>
             </div>
          </div>
      </footer>
    </div>
  );
};

export default App;