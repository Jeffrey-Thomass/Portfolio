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


// import React, { useState, useEffect } from 'react';
// import { 
//   Menu, 
//   X, 
//   Github, 
//   Linkedin, 
//   ArrowRight, 
//   Download, 
//   ExternalLink,
//   ChevronUp,
//   Layers,
//   Mail,
//   MapPin
// } from 'lucide-react';

// const App = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState('All');
//   const [activeSection, setActiveSection] = useState('home');

//   // Handle scroll to update active section
//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = ['home', 'about', 'projects', 'faq', 'contact'];
//       const scrollPosition = window.scrollY + 200;

//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
//           setActiveSection(section);
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const marqueeItems = [
//     "AI Engineering", "UI/UX Design", "TypeScript", "Next.js", 
//     "Product Design", "JavaScript", "React", "Node.js", 
//     "AI Engineering", "UI/UX Design", "TypeScript", "Next.js"
//   ];

//   const projects = [
//     {
//       title: "RestOS",
//       description: "A modern Restaurant POS (Point Of Sale) system designed to streamline operations.",
//       tags: ["React", "Tailwind CSS", "Node.js", "Vanilla JS"],
//       type: "web",
//       image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800"
//     },
//     {
//       title: "Food Data Browser",
//       description: "A modern web application for browsing and searching food product data.",
//       tags: ["React", "React Query", "Tailwind CSS", "API"],
//       type: "web",
//       image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800"
//     },
//     {
//       title: "Carbon Credits Dash",
//       description: "This is a frontend application built with React, TypeScript, Vite, and shadcn/ui.",
//       tags: ["React", "Node.js", "Tailwind CSS", "shadcn/ui"],
//       type: "web",
//       image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-purple-100 selection:text-purple-900 relative overflow-x-hidden">
      
//       {/* CSS for Marquee Animation */}
//       <style>{`
//         @keyframes scroll {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         .animate-scroll {
//           animation: scroll 30s linear infinite;
//         }
//         .glass-card {
//           background: rgba(255, 255, 255, 0.7);
//           backdrop-filter: blur(10px);
//           -webkit-backdrop-filter: blur(10px);
//         }
//       `}</style>

//       {/* --- Background Elements --- */}
//       <div className="fixed inset-0 z-0 h-full w-full pointer-events-none">
//          {/* Grid Pattern */}
//          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
         
//          {/* Soft Blue/Purple Gradient Orbs */}
//          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-200/30 rounded-full blur-[120px]" />
//          <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-blue-200/30 rounded-full blur-[100px]" />
//          <div className="absolute bottom-[10%] left-[10%] w-[30vw] h-[30vw] bg-indigo-200/30 rounded-full blur-[100px]" />
//       </div>

//       {/* --- Floating Navbar --- */}
//       <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl">
//         <div className="bg-white/80 backdrop-blur-xl border border-white/40 shadow-xl shadow-slate-200/40 rounded-full px-2 py-2 flex items-center justify-between transition-all duration-300">
          
//           {/* Logo */}
//           <div className="pl-6 text-xl font-bold tracking-tight text-slate-900">
//             jeffrey.dev
//           </div>

//           {/* Desktop Links - Centered */}
//           <div className="hidden md:flex items-center gap-1">
//             {['Home', 'About', 'Projects', 'FAQ'].map((item) => {
//               const isActive = activeSection === item.toLowerCase();
//               return (
//                 <a 
//                   key={item} 
//                   href={`#${item.toLowerCase()}`} 
//                   onClick={() => setActiveSection(item.toLowerCase())}
//                   className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
//                     isActive 
//                       ? 'bg-black text-white shadow-md' 
//                       : 'text-slate-600 hover:text-black hover:bg-slate-100/50'
//                   }`}
//                 >
//                   {item}
//                 </a>
//               );
//             })}
//           </div>

//           {/* CTA Button */}
//           <div className="hidden md:flex pr-1">
//             <a 
//               href="#contact"
//               onClick={() => setActiveSection('contact')}
//               className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
//                   activeSection === 'contact'
//                   ? 'bg-black text-white shadow-lg'
//                   : 'bg-black text-white hover:bg-slate-800 shadow-lg shadow-purple-900/10'
//               }`}
//             >
//               Let's talk
//               <ArrowRight className="w-4 h-4" />
//             </a>
//           </div>

//           {/* Mobile Menu Toggle */}
//           <button 
//             className="md:hidden p-3 rounded-full hover:bg-slate-100 mr-1" 
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Menu Overlay */}
//       {isMenuOpen && (
//         <div className="fixed inset-0 bg-white/95 backdrop-blur-xl z-40 pt-32 px-6 md:hidden">
//           <div className="flex flex-col items-center gap-6">
//             {['Home', 'About', 'Projects', 'FAQ'].map((item) => (
//               <a 
//                 key={item} 
//                 href={`#${item.toLowerCase()}`}
//                 className="text-2xl font-medium text-slate-900 hover:text-purple-600 transition-colors"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {item}
//               </a>
//             ))}
//              <a 
//               href="#contact"
//               className="mt-4 bg-black text-white px-8 py-4 rounded-full text-lg font-medium w-full text-center"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Let's talk
//             </a>
//           </div>
//         </div>
//       )}

//       {/* --- Hero Section --- */}
//       <section id="home" className="relative z-10 pt-48 lg:pt-60 px-6 overflow-hidden">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          
//           <div className="space-y-8 animate-fade-in-up">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100/80 border border-slate-200 backdrop-blur-sm text-xs font-bold tracking-wide uppercase text-slate-700">
//               Full Stack Developer & Designer
//             </div>
            
//             <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
//               Building digital experiences that <br className="hidden lg:block" />
//               make an <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">impact</span>
//             </h1>
            
//             <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
//               I'm a full-stack developer specializing in JavaScript, creating AI-enhanced solutions and crafting thoughtful user experiences for the modern web.
//             </p>

//             <div className="flex flex-wrap gap-4 pt-2">
//               <button className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-slate-800 transition-all flex items-center gap-2 group shadow-xl shadow-purple-900/10">
//                 View my work
//                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//               </button>
              
//               <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-medium hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm">
//                 Download Resume
//                 <Download className="w-4 h-4" />
//               </button>
//             </div>
//           </div>

//           {/* Hero Image */}
//           <div className="relative group perspective-1000">
//              <div className="absolute inset-0 bg-gradient-to-tr from-purple-200 to-blue-200 rounded-[2.5rem] rotate-3 scale-95 group-hover:rotate-1 transition-transform duration-500 blur-2xl opacity-40" />
//              <div className="relative h-[500px] w-full bg-slate-100 rounded-[2rem] overflow-hidden shadow-2xl border border-white/50 transform transition-transform duration-500 hover:scale-[1.01]">
//                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Jeffrey Thomas" className="w-full h-full object-cover" />
//                <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-lg">
//                  <div className="text-xs font-bold text-white/80 uppercase tracking-wider mb-1">Available for work</div>
//                  <div className="text-xl font-semibold text-white">Let's collaborate</div>
//                </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- Scrolling Ticker (Marquee) --- */}
//       <div className="w-full border-y border-slate-100 bg-white/50 backdrop-blur-sm py-8 overflow-hidden relative z-10">
//         <div className="whitespace-nowrap flex animate-scroll">
//           {[...marqueeItems, ...marqueeItems].map((item, i) => (
//              <div key={i} className="flex items-center gap-4 mx-8 text-xl font-medium text-slate-400">
//                <span className="w-2 h-2 rounded-full bg-slate-300"></span>
//                {item}
//              </div>
//           ))}
//         </div>
//       </div>

//       {/* --- About Section --- */}
//       <section id="about" className="py-32 px-6 relative z-10 max-w-7xl mx-auto">
//         <div className="mb-16">
//            <div className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-4">About Me</div>
//            <h2 className="text-4xl font-bold text-slate-900">My background</h2>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
//            {/* Text Content */}
//            <div className="space-y-8 text-lg text-slate-600 leading-relaxed">
//               <p>
//                 I'm a creative, independent, and passionate developer with extensive experience creating impactful digital experiences and solutions.
//               </p>
//               <p>
//                 With a strong background in both development and design, I bring a unique perspective to every project I work on. I believe in creating solutions that not only look great but also solve real problems for users.
//               </p>
//               <p>
//                 My journey in tech started with UI design, which naturally evolved into frontend development, and eventually full-stack skills. Today, I specialize in building modern web applications with a focus on performance, accessibility, and user experience.
//               </p>
//               <div className="pt-4">
//                  <a href="#projects" className="inline-flex items-center gap-2 font-semibold text-black hover:text-purple-600 transition-colors">
//                     <span className="h-px w-8 bg-current"></span>
//                     See my work
//                  </a>
//               </div>
//            </div>

//            {/* Skills Card */}
//            <div className="bg-white rounded-[2rem] p-8 sm:p-12 shadow-xl border border-slate-100 relative overflow-hidden">
//               <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-100/50 rounded-full blur-[80px] pointer-events-none" />
              
//               <h3 className="text-2xl font-bold mb-8 relative z-10">Skills & Expertise</h3>
              
//               <div className="space-y-8 relative z-10">
//                  <div>
//                     <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Development</div>
//                     <div className="flex flex-wrap gap-2">
//                        {['JavaScript', 'React', 'Node.js', 'TypeScript', 'Next.js', 'TanStack', 'Fast API', 'MongoDB'].map(skill => (
//                           <span key={skill} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm font-medium text-slate-700 hover:bg-white hover:border-slate-300 transition-colors cursor-default">
//                              {skill}
//                           </span>
//                        ))}
//                     </div>
//                  </div>

//                  <div>
//                     <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Design</div>
//                     <div className="flex flex-wrap gap-2">
//                        {['UI/UX', 'Figma', 'Adobe Suite', 'Prototyping', 'Motion Design'].map(skill => (
//                           <span key={skill} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm font-medium text-slate-700 hover:bg-white hover:border-slate-300 transition-colors cursor-default">
//                              {skill}
//                           </span>
//                        ))}
//                     </div>
//                  </div>

//                  <div>
//                     <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Tools</div>
//                     <div className="flex flex-wrap gap-2">
//                        {['Git', 'AWS', 'Firebase', 'Docker', 'Vercel', 'Linux'].map(skill => (
//                           <span key={skill} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm font-medium text-slate-700 hover:bg-white hover:border-slate-300 transition-colors cursor-default">
//                              {skill}
//                           </span>
//                        ))}
//                     </div>
//                  </div>
//               </div>
//            </div>
//         </div>
//       </section>

//       {/* --- Projects Section --- */}
//       <section id="projects" className="py-32 px-6 bg-slate-50/30 relative z-10">
//          <div className="max-w-7xl mx-auto">
//             <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
//                <div>
//                   <div className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-4">Projects</div>
//                   <h2 className="text-4xl font-bold text-slate-900">Selected work</h2>
//                </div>
               
//                {/* Filter Pills */}
//                <div className="bg-white p-1 rounded-full border border-slate-200 flex shadow-sm">
//                   {['All', 'Web'].map(tab => (
//                      <button
//                         key={tab}
//                         onClick={() => setActiveTab(tab)}
//                         className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
//                            activeTab === tab 
//                               ? 'bg-black text-white shadow-md' 
//                               : 'text-slate-600 hover:text-black'
//                         }`}
//                      >
//                         {tab}
//                      </button>
//                   ))}
//                </div>
//             </div>

//             {/* Project Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                {projects.map((project, idx) => (
//                   <div key={idx} className="group bg-white rounded-[2rem] overflow-hidden border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
//                      {/* Card Image Area */}
//                      <div className="h-64 overflow-hidden relative">
//                         <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-slate-900/0 transition-colors z-10" />
//                         <img 
//                            src={project.image} 
//                            alt={project.title} 
//                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
//                         />
//                         <div className="absolute top-4 left-4 z-20">
//                            <span className="px-3 py-1 bg-white/90 backdrop-blur rounded-full text-xs font-bold uppercase tracking-wider border border-white/20">
//                               {project.type}
//                            </span>
//                         </div>
//                      </div>

//                      {/* Card Content */}
//                      <div className="p-8">
//                         <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
//                         <p className="text-slate-600 mb-6 line-clamp-2 text-sm leading-relaxed">
//                            {project.description}
//                         </p>
                        
//                         <div className="flex items-center gap-2 mb-6">
//                            <Layers className="w-4 h-4 text-slate-400" />
//                            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Tech Stack</span>
//                         </div>
                        
//                         <div className="flex flex-wrap gap-2">
//                            {project.tags.map((tag, i) => (
//                               <span key={i} className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-600 border border-slate-200">
//                                  {tag}
//                               </span>
//                            ))}
//                            {project.tags.length > 3 && (
//                                <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-600 border border-slate-200">
//                                  +2
//                               </span>
//                            )}
//                         </div>
//                      </div>
//                   </div>
//                ))}
//             </div>
//          </div>
//       </section>

//       {/* --- Contact Section --- */}
//       <section id="contact" className="py-32 px-6 relative z-10 max-w-7xl mx-auto">
//          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
//             {/* Left Column */}
//             <div className="space-y-8">
//                <div className="text-sm font-bold tracking-widest text-slate-500 uppercase">Get in touch</div>
//                <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Let's work together</h2>
//                <p className="text-lg text-slate-600 leading-relaxed max-w-md">
//                   I'm currently available for freelance work and collaborations. If you have a project you'd like to discuss, please get in touch!
//                </p>
               
//                <div className="space-y-6 pt-4">
//                   <div className="flex items-center gap-4">
//                      <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
//                         <Mail className="w-5 h-5 text-slate-700" />
//                      </div>
//                      <div>
//                         <div className="text-sm font-medium text-slate-500">Email</div>
//                         <a href="mailto:jeffrey.thomas@gmail.com" className="text-lg font-semibold text-slate-900 hover:text-purple-600 transition-colors">
//                            jeffrey.thomas@gmail.com
//                         </a>
//                      </div>
//                   </div>
                  
//                   <div className="flex items-center gap-4">
//                      <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
//                         <MapPin className="w-5 h-5 text-slate-700" />
//                      </div>
//                      <div>
//                         <div className="text-sm font-medium text-slate-500">Location</div>
//                         <div className="text-lg font-semibold text-slate-900">Pune, India</div>
//                      </div>
//                   </div>
//                </div>
//             </div>

//             {/* Right Column - Card */}
//             <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-slate-100 relative overflow-hidden text-center group">
//                {/* Card Glow */}
//                <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-100/50 rounded-full blur-[60px] pointer-events-none group-hover:bg-yellow-200/50 transition-colors" />
               
//                <div className="relative z-10 flex flex-col items-center justify-center py-8">
//                   <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6 shadow-lg shadow-black/20">
//                      <Mail className="w-7 h-7 text-white" />
//                   </div>
                  
//                   <h3 className="text-3xl font-bold text-slate-900 mb-4">Ready to start a project?</h3>
//                   <p className="text-slate-500 mb-10 max-w-sm mx-auto">
//                      Fill out our contact form and I'll get back to you within 24 hours to discuss your project.
//                   </p>
                  
//                   <a 
//                      href="mailto:jeffrey.thomas@gmail.com"
//                      className="bg-black text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-800 transition-all flex items-center gap-2 shadow-xl shadow-purple-900/10 hover:-translate-y-1"
//                   >
//                      Get in Touch
//                      <ArrowRight className="w-5 h-5" />
//                   </a>
                  
//                   <div className="mt-6 text-sm text-slate-400 font-medium">
//                      Opens in a new tab
//                   </div>
//                </div>
//             </div>

//          </div>
//       </section>

//       {/* --- Footer --- */}
//       <footer className="bg-white border-t border-slate-100 pt-20 pb-10 relative overflow-hidden z-10">
//           <div className="max-w-7xl mx-auto px-6">
//              <div className="flex flex-col md:flex-row justify-between items-center gap-8">
//                 <div className="text-center md:text-left">
//                    <div className="text-xl font-bold tracking-tight text-slate-900 mb-2">jeffrey.dev</div>
//                    <p className="text-slate-500 text-sm">© 2026 Jeffrey Thomas. All rights reserved.</p>
//                 </div>
                
//                 <div className="flex gap-6">
//                    <a href="#" className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-black hover:text-white hover:border-black transition-all">
//                       <Github className="w-4 h-4" />
//                    </a>
//                    <a href="#" className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all">
//                       <Linkedin className="w-4 h-4" />
//                    </a>
//                    <button 
//                       onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
//                       className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-black hover:text-white hover:border-black transition-all"
//                    >
//                       <ChevronUp className="w-4 h-4" />
//                    </button>
//                 </div>
//              </div>
             
//              <div className="mt-12 text-center">
//                <p className="text-xs text-slate-400 flex items-center justify-center gap-1">
//                  Made with <span className="text-red-500">♥</span> in Pune, India
//                </p>
//              </div>
//           </div>
//       </footer>
//     </div>
//   );
// };

// export default App;

// import React, { useState, useEffect, useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import { 
//   Menu, 
//   X, 
//   Github, 
//   Linkedin, 
//   ArrowRight, 
//   Download, 
//   ExternalLink,
//   ChevronUp,
//   Layers,
//   Mail,
//   MapPin,
//   Send,
//   Loader2
// } from 'lucide-react';

// const App = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState('All');
//   const [activeSection, setActiveSection] = useState('home');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState('idle'); // idle, success, error

//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // YOUR EMAILJS CONFIGURATION
//     emailjs.sendForm(
//       import.meta.env.VITE_SERVICE_ID,     // This loads from .env
//       import.meta.env.VITE_TEMPLATE_ID,    // This loads from .env
//       form.current,
//       import.meta.env.VITE_PUBLIC_KEY      // This loads from .env
//     )
//     .then((result) => {
//         console.log(result.text);
//         setSubmitStatus('success');
//         setIsSubmitting(false);
//         e.target.reset();
        
//         // Reset success message after 5 seconds
//         setTimeout(() => setSubmitStatus('idle'), 5000);
//     }, (error) => {
//         console.log(error.text);
//         setSubmitStatus('error');
//         setIsSubmitting(false);
//     });
//   };

//   // Handle scroll to update active section
//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = ['home', 'about', 'projects', 'faq', 'contact'];
//       const scrollPosition = window.scrollY + 200;

//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
//           setActiveSection(section);
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const marqueeItems = [
//     "AI Engineering", "UI/UX Design", "TypeScript", "Next.js", 
//     "Product Design", "JavaScript", "React", "Node.js", 
//     "AI Engineering", "UI/UX Design", "TypeScript", "Next.js"
//   ];

//   const projects = [
//     {
//       title: "RestOS",
//       description: "A modern Restaurant POS (Point Of Sale) system designed to streamline operations.",
//       tags: ["React", "Tailwind CSS", "Node.js", "Vanilla JS"],
//       type: "web",
//       image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800"
//     },
//     {
//       title: "Food Data Browser",
//       description: "A modern web application for browsing and searching food product data.",
//       tags: ["React", "React Query", "Tailwind CSS", "API"],
//       type: "web",
//       image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800"
//     },
//     {
//       title: "Carbon Credits Dash",
//       description: "This is a frontend application built with React, TypeScript, Vite, and shadcn/ui.",
//       tags: ["React", "Node.js", "Tailwind CSS", "shadcn/ui"],
//       type: "web",
//       image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-purple-100 selection:text-purple-900 relative overflow-x-hidden">
      
//       {/* CSS for Marquee Animation */}
//       <style>{`
//         @keyframes scroll {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         .animate-scroll {
//           animation: scroll 30s linear infinite;
//         }
//       `}</style>

//       {/* --- Background Elements --- */}
//       <div className="fixed inset-0 z-0 h-full w-full pointer-events-none">
//          {/* Grid Pattern */}
//          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
         
//          {/* Soft Blue/Purple Gradient Orbs */}
//          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-200/30 rounded-full blur-[120px]" />
//          <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-blue-200/30 rounded-full blur-[100px]" />
//          <div className="absolute bottom-[10%] left-[10%] w-[30vw] h-[30vw] bg-indigo-200/30 rounded-full blur-[100px]" />
//       </div>

//       {/* --- Floating Navbar --- */}
//       <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl">
//         <div className="bg-white/80 backdrop-blur-xl border border-white/40 shadow-xl shadow-slate-200/40 rounded-full px-2 py-2 flex items-center justify-between transition-all duration-300">
          
//           {/* Logo */}
//           <div className="pl-6 text-xl font-bold tracking-tight text-slate-900">
//             jeffrey.dev
//           </div>

//           {/* Desktop Links - Centered */}
//           <div className="hidden md:flex items-center gap-1">
//             {['Home', 'About', 'Projects', 'FAQ'].map((item) => {
//               const isActive = activeSection === item.toLowerCase();
//               return (
//                 <a 
//                   key={item} 
//                   href={`#${item.toLowerCase()}`} 
//                   onClick={() => setActiveSection(item.toLowerCase())}
//                   className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
//                     isActive 
//                       ? 'bg-black text-white shadow-md' 
//                       : 'text-slate-600 hover:text-black hover:bg-slate-100/50'
//                   }`}
//                 >
//                   {item}
//                 </a>
//               );
//             })}
//           </div>

//           {/* CTA Button */}
//           <div className="hidden md:flex pr-1">
//             <a 
//               href="#contact"
//               onClick={() => setActiveSection('contact')}
//               className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
//                   activeSection === 'contact'
//                   ? 'bg-black text-white shadow-lg'
//                   : 'bg-black text-white hover:bg-slate-800 shadow-lg shadow-purple-900/10'
//               }`}
//             >
//               Let's talk
//               <ArrowRight className="w-4 h-4" />
//             </a>
//           </div>

//           {/* Mobile Menu Toggle */}
//           <button 
//             className="md:hidden p-3 rounded-full hover:bg-slate-100 mr-1" 
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Menu Overlay */}
//       {isMenuOpen && (
//         <div className="fixed inset-0 bg-white/95 backdrop-blur-xl z-40 pt-32 px-6 md:hidden">
//           <div className="flex flex-col items-center gap-6">
//             {['Home', 'About', 'Projects', 'FAQ'].map((item) => (
//               <a 
//                 key={item} 
//                 href={`#${item.toLowerCase()}`}
//                 className="text-2xl font-medium text-slate-900 hover:text-purple-600 transition-colors"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {item}
//               </a>
//             ))}
//              <a 
//               href="#contact"
//               className="mt-4 bg-black text-white px-8 py-4 rounded-full text-lg font-medium w-full text-center"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Let's talk
//             </a>
//           </div>
//         </div>
//       )}

//       {/* --- Hero Section --- */}
//       <section id="home" className="relative z-10 pt-48 lg:pt-60 px-6 overflow-hidden">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          
//           <div className="space-y-8 animate-fade-in-up">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100/80 border border-slate-200 backdrop-blur-sm text-xs font-bold tracking-wide uppercase text-slate-700">
//               Full Stack Developer & Designer
//             </div>
            
//             <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
//               Building digital experiences that <br className="hidden lg:block" />
//               make an <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">impact</span>
//             </h1>
            
//             <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
//               I'm a full-stack developer specializing in JavaScript, creating AI-enhanced solutions and crafting thoughtful user experiences for the modern web.
//             </p>

//             <div className="flex flex-wrap gap-4 pt-2">
//               <button className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-slate-800 transition-all flex items-center gap-2 group shadow-xl shadow-purple-900/10">
//                 View my work
//                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//               </button>
              
//               <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-medium hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm">
//                 Download Resume
//                 <Download className="w-4 h-4" />
//               </button>
//             </div>
//           </div>

//           {/* Hero Image */}
//           <div className="relative group perspective-1000">
//              <div className="absolute inset-0 bg-gradient-to-tr from-purple-200 to-blue-200 rounded-[2.5rem] rotate-3 scale-95 group-hover:rotate-1 transition-transform duration-500 blur-2xl opacity-40" />
//              <div className="relative h-[500px] w-full bg-slate-100 rounded-[2rem] overflow-hidden shadow-2xl border border-white/50 transform transition-transform duration-500 hover:scale-[1.01]">
//                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Jeffrey Thomas" className="w-full h-full object-cover" />
//                <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-lg">
//                  <div className="text-xs font-bold text-white/80 uppercase tracking-wider mb-1">Available for work</div>
//                  <div className="text-xl font-semibold text-white">Let's collaborate</div>
//                </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- Scrolling Ticker (Marquee) --- */}
//       <div className="w-full border-y border-slate-100 bg-white/50 backdrop-blur-sm py-8 overflow-hidden relative z-10">
//         <div className="whitespace-nowrap flex animate-scroll">
//           {[...marqueeItems, ...marqueeItems].map((item, i) => (
//              <div key={i} className="flex items-center gap-4 mx-8 text-xl font-medium text-slate-400">
//                <span className="w-2 h-2 rounded-full bg-slate-300"></span>
//                {item}
//              </div>
//           ))}
//         </div>
//       </div>

//       {/* --- About Section --- */}
//       <section id="about" className="py-32 px-6 relative z-10 max-w-7xl mx-auto">
//         <div className="mb-16">
//            <div className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-4">About Me</div>
//            <h2 className="text-4xl font-bold text-slate-900">My background</h2>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
//            {/* Text Content */}
//            <div className="space-y-8 text-lg text-slate-600 leading-relaxed">
//               <p>
//                 I'm a creative, independent, and passionate developer with extensive experience creating impactful digital experiences and solutions.
//               </p>
//               <p>
//                 With a strong background in both development and design, I bring a unique perspective to every project I work on. I believe in creating solutions that not only look great but also solve real problems for users.
//               </p>
//               <p>
//                 My journey in tech started with UI design, which naturally evolved into frontend development, and eventually full-stack skills. Today, I specialize in building modern web applications with a focus on performance, accessibility, and user experience.
//               </p>
//               <div className="pt-4">
//                  <a href="#projects" className="inline-flex items-center gap-2 font-semibold text-black hover:text-purple-600 transition-colors">
//                     <span className="h-px w-8 bg-current"></span>
//                     See my work
//                  </a>
//               </div>
//            </div>

//            {/* Skills Card */}
//            <div className="bg-white rounded-[2rem] p-8 sm:p-12 shadow-xl border border-slate-100 relative overflow-hidden">
//               <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-100/50 rounded-full blur-[80px] pointer-events-none" />
              
//               <h3 className="text-2xl font-bold mb-8 relative z-10">Skills & Expertise</h3>
              
//               <div className="space-y-8 relative z-10">
//                  <div>
//                     <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Development</div>
//                     <div className="flex flex-wrap gap-2">
//                        {['JavaScript', 'React', 'Node.js', 'TypeScript', 'Next.js', 'TanStack', 'Fast API', 'MongoDB'].map(skill => (
//                           <span key={skill} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm font-medium text-slate-700 hover:bg-white hover:border-slate-300 transition-colors cursor-default">
//                              {skill}
//                           </span>
//                        ))}
//                     </div>
//                  </div>

//                  <div>
//                     <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Design</div>
//                     <div className="flex flex-wrap gap-2">
//                        {['UI/UX', 'Figma', 'Adobe Suite', 'Prototyping', 'Motion Design'].map(skill => (
//                           <span key={skill} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm font-medium text-slate-700 hover:bg-white hover:border-slate-300 transition-colors cursor-default">
//                              {skill}
//                           </span>
//                        ))}
//                     </div>
//                  </div>

//                  <div>
//                     <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Tools</div>
//                     <div className="flex flex-wrap gap-2">
//                        {['Git', 'AWS', 'Firebase', 'Docker', 'Vercel', 'Linux'].map(skill => (
//                           <span key={skill} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm font-medium text-slate-700 hover:bg-white hover:border-slate-300 transition-colors cursor-default">
//                              {skill}
//                           </span>
//                        ))}
//                     </div>
//                  </div>
//               </div>
//            </div>
//         </div>
//       </section>

//       {/* --- Projects Section --- */}
//       <section id="projects" className="py-32 px-6 bg-slate-50/30 relative z-10">
//          <div className="max-w-7xl mx-auto">
//             <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
//                <div>
//                   <div className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-4">Projects</div>
//                   <h2 className="text-4xl font-bold text-slate-900">Selected work</h2>
//                </div>
               
//                {/* Filter Pills */}
//                <div className="bg-white p-1 rounded-full border border-slate-200 flex shadow-sm">
//                   {['All', 'Web'].map(tab => (
//                      <button
//                         key={tab}
//                         onClick={() => setActiveTab(tab)}
//                         className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
//                            activeTab === tab 
//                               ? 'bg-black text-white shadow-md' 
//                               : 'text-slate-600 hover:text-black'
//                         }`}
//                      >
//                         {tab}
//                      </button>
//                   ))}
//                </div>
//             </div>

//             {/* Project Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                {projects.map((project, idx) => (
//                   <div key={idx} className="group bg-white rounded-[2rem] overflow-hidden border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
//                      {/* Card Image Area */}
//                      <div className="h-64 overflow-hidden relative">
//                         <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-slate-900/0 transition-colors z-10" />
//                         <img 
//                            src={project.image} 
//                            alt={project.title} 
//                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
//                         />
//                         <div className="absolute top-4 left-4 z-20">
//                            <span className="px-3 py-1 bg-white/90 backdrop-blur rounded-full text-xs font-bold uppercase tracking-wider border border-white/20">
//                               {project.type}
//                            </span>
//                         </div>
//                      </div>

//                      {/* Card Content */}
//                      <div className="p-8">
//                         <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
//                         <p className="text-slate-600 mb-6 line-clamp-2 text-sm leading-relaxed">
//                            {project.description}
//                         </p>
                        
//                         <div className="flex items-center gap-2 mb-6">
//                            <Layers className="w-4 h-4 text-slate-400" />
//                            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Tech Stack</span>
//                         </div>
                        
//                         <div className="flex flex-wrap gap-2">
//                            {project.tags.map((tag, i) => (
//                               <span key={i} className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-600 border border-slate-200">
//                                  {tag}
//                               </span>
//                            ))}
//                            {project.tags.length > 3 && (
//                                <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-600 border border-slate-200">
//                                  +2
//                               </span>
//                            )}
//                         </div>
//                      </div>
//                   </div>
//                ))}
//             </div>
//          </div>
//       </section>

//       {/* --- Contact Section --- */}
//       <section id="contact" className="py-32 px-6 relative z-10 max-w-7xl mx-auto">
//          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
//             {/* Left Column - Contact Info */}
//             <div className="space-y-8">
//                <div className="text-sm font-bold tracking-widest text-slate-500 uppercase">Get in touch</div>
//                <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Let's work together</h2>
//                <p className="text-lg text-slate-600 leading-relaxed max-w-md">
//                   I'm currently available for freelance work and collaborations. If you have a project you'd like to discuss, please get in touch!
//                </p>
               
//                <div className="space-y-6 pt-4">
//                   <div className="flex items-center gap-4">
//                      <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
//                         <Mail className="w-5 h-5 text-slate-700" />
//                      </div>
//                      <div>
//                         <div className="text-sm font-medium text-slate-500">Email</div>
//                         <a href="mailto:jeffrey.thomas@gmail.com" className="text-lg font-semibold text-slate-900 hover:text-purple-600 transition-colors">
//                            jeffrey.thomas@gmail.com
//                         </a>
//                      </div>
//                   </div>
                  
//                   <div className="flex items-center gap-4">
//                      <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
//                         <MapPin className="w-5 h-5 text-slate-700" />
//                      </div>
//                      <div>
//                         <div className="text-sm font-medium text-slate-500">Location</div>
//                         <div className="text-lg font-semibold text-slate-900">Pune, India</div>
//                      </div>
//                   </div>
//                </div>
//             </div>

//             {/* Right Column - Contact Form */}
//             <div className="bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-2xl border border-slate-100 relative overflow-hidden group">
//                {/* Card Glow */}
//                <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-100/50 rounded-full blur-[50px] pointer-events-none" />
               
//                <div className="relative z-10">
//                   <h3 className="text-2xl font-bold text-slate-900 mb-2">Ready to start a project?</h3>
//                   <p className="text-slate-500 mb-8 text-sm">Fill out the form below and I'll get back to you within 24 hours.</p>

//                   <form ref={form} onSubmit={sendEmail} className="space-y-4">
//                      <div>
//                        <label htmlFor="user_name" className="sr-only">Name</label>
//                        <input 
//                           type="text" 
//                           name="user_name" 
//                           id="user_name"
//                           placeholder="Your Name" 
//                           required 
//                           className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-black focus:ring-0 transition-colors"
//                        />
//                      </div>
                     
//                      <div>
//                        <label htmlFor="user_email" className="sr-only">Email</label>
//                        <input 
//                           type="email" 
//                           name="user_email" 
//                           id="user_email"
//                           placeholder="Your Email" 
//                           required 
//                           className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-black focus:ring-0 transition-colors"
//                        />
//                      </div>
                     
//                      <div>
//                        <label htmlFor="message" className="sr-only">Message</label>
//                        <textarea 
//                           name="message" 
//                           id="message"
//                           rows="4"
//                           placeholder="Tell me about your project..." 
//                           required 
//                           className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-black focus:ring-0 transition-colors resize-none"
//                        />
//                      </div>

//                      <button 
//                        type="submit" 
//                        disabled={isSubmitting || submitStatus === 'success'}
//                        className={`w-full py-4 rounded-full font-bold text-white transition-all duration-300 flex items-center justify-center gap-2
//                          ${submitStatus === 'success' 
//                            ? 'bg-emerald-500' 
//                            : 'bg-black hover:bg-slate-800 shadow-xl shadow-purple-900/10 hover:-translate-y-0.5'
//                          }
//                          ${isSubmitting ? 'opacity-80 cursor-wait' : ''}
//                        `}
//                      >
//                        {isSubmitting ? (
//                           <>
//                             <Loader2 className="w-5 h-5 animate-spin" />
//                             Sending...
//                           </>
//                        ) : submitStatus === 'success' ? (
//                           <>
//                              Message Sent!
//                           </>
//                        ) : (
//                           <>
//                              Send Message
//                              <Send className="w-4 h-4" />
//                           </>
//                        )}
//                      </button>

//                      {submitStatus === 'error' && (
//                        <p className="text-red-500 text-xs text-center mt-2">
//                          Something went wrong. Please try again later.
//                        </p>
//                      )}
//                   </form>
//                </div>
//             </div>

//          </div>
//       </section>

//       {/* --- Footer --- */}
//       <footer className="bg-white border-t border-slate-100 pt-20 pb-10 relative overflow-hidden z-10">
//           <div className="max-w-7xl mx-auto px-6">
//              <div className="flex flex-col md:flex-row justify-between items-center gap-8">
//                 <div className="text-center md:text-left">
//                    <div className="text-xl font-bold tracking-tight text-slate-900 mb-2">jeffrey.dev</div>
//                    <p className="text-slate-500 text-sm">© 2026 Jeffrey Thomas. All rights reserved.</p>
//                 </div>
                
//                 <div className="flex gap-6">
//                    <a href="#" className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-black hover:text-white hover:border-black transition-all">
//                       <Github className="w-4 h-4" />
//                    </a>
//                    <a href="#" className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all">
//                       <Linkedin className="w-4 h-4" />
//                    </a>
//                    <button 
//                       onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
//                       className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-black hover:text-white hover:border-black transition-all"
//                    >
//                       <ChevronUp className="w-4 h-4" />
//                    </button>
//                 </div>
//              </div>
             
//              <div className="mt-12 text-center">
//                <p className="text-xs text-slate-400 flex items-center justify-center gap-1">
//                  Made with <span className="text-red-500">♥</span> in Pune, India
//                </p>
//              </div>
//           </div>
//       </footer>
//     </div>
//   );
// };

// export default App;





// import React, { useState, useEffect, useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import { 
//   Menu, 
//   X, 
//   Github, 
//   Linkedin, 
//   ArrowRight, 
//   Download, 
//   ExternalLink,
//   ChevronUp,
//   Layers,
//   Mail,
//   MapPin,
//   Send,
//   Loader2,
//   AlertCircle // Added for error icon
// } from 'lucide-react';

// const App = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState('All');
//   const [activeSection, setActiveSection] = useState('home');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState('idle'); // idle, success, error
//   const [errorMessage, setErrorMessage] = useState(""); // New state for spam/error messages

//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setErrorMessage(""); // Clear previous errors
    
//     // --- SPAM PROTECTION LOGIC START ---
//     const lastSentTime = localStorage.getItem("lastEmailSentTime");
//     const twelveHoursInMs = 12 * 60 * 60 * 1000; // 12 hours
//     const now = new Date().getTime();

//     if (lastSentTime) {
//       const timePassed = now - parseInt(lastSentTime);
//       if (timePassed < twelveHoursInMs) {
//         const hoursLeft = Math.ceil((twelveHoursInMs - timePassed) / (1000 * 60 * 60));
//         setErrorMessage(`Please wait ${hoursLeft} hours before sending another message.`);
//         return; // STOP execution
//       }
//     }
//     // --- SPAM PROTECTION LOGIC END ---

//     setIsSubmitting(true);

//     // YOUR EMAILJS CONFIGURATION
//     emailjs.sendForm(
//       import.meta.env.VITE_SERVICE_ID,
//       import.meta.env.VITE_TEMPLATE_ID,
//       form.current,
//       import.meta.env.VITE_PUBLIC_KEY
//     )
//     .then((result) => {
//         console.log(result.text);
//         setSubmitStatus('success');
//         setIsSubmitting(false);
//         e.target.reset();
        
//         // Save the timestamp of success
//         localStorage.setItem("lastEmailSentTime", new Date().getTime().toString());
        
//         // Reset success message after 5 seconds
//         setTimeout(() => setSubmitStatus('idle'), 5000);
//     }, (error) => {
//         console.log(error.text);
//         setSubmitStatus('error');
//         setErrorMessage("Something went wrong. Please try again.");
//         setIsSubmitting(false);
//     });
//   };

//   // Handle scroll to update active section
//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = ['home', 'about', 'projects', 'faq', 'contact'];
//       const scrollPosition = window.scrollY + 200;

//       for (const section of sections) {
//         const element = document.getElementById(section);
//         if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
//           setActiveSection(section);
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const marqueeItems = [
//     "AI Engineering", "UI/UX Design", "TypeScript", "Next.js", 
//     "Product Design", "JavaScript", "React", "Node.js", 
//     "AI Engineering", "UI/UX Design", "TypeScript", "Next.js"
//   ];

//   const projects = [
//     {
//       title: "RestOS",
//       description: "A modern Restaurant POS (Point Of Sale) system designed to streamline operations.",
//       tags: ["React", "Tailwind CSS", "Node.js", "Vanilla JS"],
//       type: "web",
//       image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800"
//     },
//     {
//       title: "Food Data Browser",
//       description: "A modern web application for browsing and searching food product data.",
//       tags: ["React", "React Query", "Tailwind CSS", "API"],
//       type: "web",
//       image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800"
//     },
//     {
//       title: "Carbon Credits Dash",
//       description: "This is a frontend application built with React, TypeScript, Vite, and shadcn/ui.",
//       tags: ["React", "Node.js", "Tailwind CSS", "shadcn/ui"],
//       type: "web",
//       image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-purple-100 selection:text-purple-900 relative overflow-x-hidden">
      
//       {/* CSS for Marquee Animation */}
//       <style>{`
//         @keyframes scroll {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(-50%); }
//         }
//         .animate-scroll {
//           animation: scroll 30s linear infinite;
//         }
//       `}</style>

//       {/* --- Background Elements --- */}
//       <div className="fixed inset-0 z-0 h-full w-full pointer-events-none">
//          {/* Grid Pattern */}
//          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
         
//          {/* Soft Blue/Purple Gradient Orbs */}
//          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-200/30 rounded-full blur-[120px]" />
//          <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-blue-200/30 rounded-full blur-[100px]" />
//          <div className="absolute bottom-[10%] left-[10%] w-[30vw] h-[30vw] bg-indigo-200/30 rounded-full blur-[100px]" />
//       </div>

//       {/* --- Floating Navbar --- */}
//       <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl">
//         <div className="bg-white/80 backdrop-blur-xl border border-white/40 shadow-xl shadow-slate-200/40 rounded-full px-2 py-2 flex items-center justify-between transition-all duration-300">
          
//           {/* Logo */}
//           <div className="pl-6 text-xl font-bold tracking-tight text-slate-900">
//             jeffrey.dev
//           </div>

//           {/* Desktop Links - Centered */}
//           <div className="hidden md:flex items-center gap-1">
//             {['Home', 'About', 'Projects', 'FAQ'].map((item) => {
//               const isActive = activeSection === item.toLowerCase();
//               return (
//                 <a 
//                   key={item} 
//                   href={`#${item.toLowerCase()}`} 
//                   onClick={() => setActiveSection(item.toLowerCase())}
//                   className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
//                     isActive 
//                       ? 'bg-black text-white shadow-md' 
//                       : 'text-slate-600 hover:text-black hover:bg-slate-100/50'
//                   }`}
//                 >
//                   {item}
//                 </a>
//               );
//             })}
//           </div>

//           {/* CTA Button */}
//           <div className="hidden md:flex pr-1">
//             <a 
//               href="#contact"
//               onClick={() => setActiveSection('contact')}
//               className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
//                   activeSection === 'contact'
//                   ? 'bg-black text-white shadow-lg'
//                   : 'bg-black text-white hover:bg-slate-800 shadow-lg shadow-purple-900/10'
//               }`}
//             >
//               Let's talk
//               <ArrowRight className="w-4 h-4" />
//             </a>
//           </div>

//           {/* Mobile Menu Toggle */}
//           <button 
//             className="md:hidden p-3 rounded-full hover:bg-slate-100 mr-1" 
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Menu Overlay */}
//       {isMenuOpen && (
//         <div className="fixed inset-0 bg-white/95 backdrop-blur-xl z-40 pt-32 px-6 md:hidden">
//           <div className="flex flex-col items-center gap-6">
//             {['Home', 'About', 'Projects', 'FAQ'].map((item) => (
//               <a 
//                 key={item} 
//                 href={`#${item.toLowerCase()}`}
//                 className="text-2xl font-medium text-slate-900 hover:text-purple-600 transition-colors"
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {item}
//               </a>
//             ))}
//              <a 
//               href="#contact"
//               className="mt-4 bg-black text-white px-8 py-4 rounded-full text-lg font-medium w-full text-center"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Let's talk
//             </a>
//           </div>
//         </div>
//       )}

//       {/* --- Hero Section --- */}
//       <section id="home" className="relative z-10 pt-48 lg:pt-60 px-6 overflow-hidden">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          
//           <div className="space-y-8 animate-fade-in-up">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100/80 border border-slate-200 backdrop-blur-sm text-xs font-bold tracking-wide uppercase text-slate-700">
//               Full Stack Developer & Designer
//             </div>
            
//             <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]">
//               Building digital experiences that <br className="hidden lg:block" />
//               make an <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">impact</span>
//             </h1>
            
//             <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
//               I'm a full-stack developer specializing in JavaScript, creating AI-enhanced solutions and crafting thoughtful user experiences for the modern web.
//             </p>

//             <div className="flex flex-wrap gap-4 pt-2">
//               <button className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-slate-800 transition-all flex items-center gap-2 group shadow-xl shadow-purple-900/10">
//                 View my work
//                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//               </button>
              
//               <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-medium hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm">
//                 Download Resume
//                 <Download className="w-4 h-4" />
//               </button>
//             </div>
//           </div>

//           {/* Hero Image */}
//           <div className="relative group perspective-1000">
//              <div className="absolute inset-0 bg-gradient-to-tr from-purple-200 to-blue-200 rounded-[2.5rem] rotate-3 scale-95 group-hover:rotate-1 transition-transform duration-500 blur-2xl opacity-40" />
//              <div className="relative h-[500px] w-full bg-slate-100 rounded-[2rem] overflow-hidden shadow-2xl border border-white/50 transform transition-transform duration-500 hover:scale-[1.01]">
//                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Jeffrey Thomas" className="w-full h-full object-cover" />
//                <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-lg">
//                  <div className="text-xs font-bold text-white/80 uppercase tracking-wider mb-1">Available for work</div>
//                  <div className="text-xl font-semibold text-white">Let's collaborate</div>
//                </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- Scrolling Ticker (Marquee) --- */}
//       <div className="w-full border-y border-slate-100 bg-white/50 backdrop-blur-sm py-8 overflow-hidden relative z-10">
//         <div className="whitespace-nowrap flex animate-scroll">
//           {[...marqueeItems, ...marqueeItems].map((item, i) => (
//              <div key={i} className="flex items-center gap-4 mx-8 text-xl font-medium text-slate-400">
//                <span className="w-2 h-2 rounded-full bg-slate-300"></span>
//                {item}
//              </div>
//           ))}
//         </div>
//       </div>

//       {/* --- About Section --- */}
//       <section id="about" className="py-32 px-6 relative z-10 max-w-7xl mx-auto">
//         <div className="mb-16">
//            <div className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-4">About Me</div>
//            <h2 className="text-4xl font-bold text-slate-900">My background</h2>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
//            {/* Text Content */}
//            <div className="space-y-8 text-lg text-slate-600 leading-relaxed">
//               <p>
//                 I'm a creative, independent, and passionate developer with extensive experience creating impactful digital experiences and solutions.
//               </p>
//               <p>
//                 With a strong background in both development and design, I bring a unique perspective to every project I work on. I believe in creating solutions that not only look great but also solve real problems for users.
//               </p>
//               <p>
//                 My journey in tech started with UI design, which naturally evolved into frontend development, and eventually full-stack skills. Today, I specialize in building modern web applications with a focus on performance, accessibility, and user experience.
//               </p>
//               <div className="pt-4">
//                  <a href="#projects" className="inline-flex items-center gap-2 font-semibold text-black hover:text-purple-600 transition-colors">
//                     <span className="h-px w-8 bg-current"></span>
//                     See my work
//                  </a>
//               </div>
//            </div>

//            {/* Skills Card */}
//            <div className="bg-white rounded-[2rem] p-8 sm:p-12 shadow-xl border border-slate-100 relative overflow-hidden">
//               <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-100/50 rounded-full blur-[80px] pointer-events-none" />
              
//               <h3 className="text-2xl font-bold mb-8 relative z-10">Skills & Expertise</h3>
              
//               <div className="space-y-8 relative z-10">
//                  <div>
//                     <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Development</div>
//                     <div className="flex flex-wrap gap-2">
//                        {['JavaScript', 'React', 'Node.js', 'TypeScript', 'Next.js', 'TanStack', 'Fast API', 'MongoDB'].map(skill => (
//                           <span key={skill} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm font-medium text-slate-700 hover:bg-white hover:border-slate-300 transition-colors cursor-default">
//                              {skill}
//                           </span>
//                        ))}
//                     </div>
//                  </div>

//                  <div>
//                     <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Design</div>
//                     <div className="flex flex-wrap gap-2">
//                        {['UI/UX', 'Figma', 'Adobe Suite', 'Prototyping', 'Motion Design'].map(skill => (
//                           <span key={skill} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm font-medium text-slate-700 hover:bg-white hover:border-slate-300 transition-colors cursor-default">
//                              {skill}
//                           </span>
//                        ))}
//                     </div>
//                  </div>

//                  <div>
//                     <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Tools</div>
//                     <div className="flex flex-wrap gap-2">
//                        {['Git', 'AWS', 'Firebase', 'Docker', 'Vercel', 'Linux'].map(skill => (
//                           <span key={skill} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm font-medium text-slate-700 hover:bg-white hover:border-slate-300 transition-colors cursor-default">
//                              {skill}
//                           </span>
//                        ))}
//                     </div>
//                  </div>
//               </div>
//            </div>
//         </div>
//       </section>

//       {/* --- Projects Section --- */}
//       <section id="projects" className="py-32 px-6 bg-slate-50/30 relative z-10">
//          <div className="max-w-7xl mx-auto">
//             <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
//                <div>
//                   <div className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-4">Projects</div>
//                   <h2 className="text-4xl font-bold text-slate-900">Selected work</h2>
//                </div>
               
//                {/* Filter Pills */}
//                <div className="bg-white p-1 rounded-full border border-slate-200 flex shadow-sm">
//                   {['All', 'Web'].map(tab => (
//                      <button
//                         key={tab}
//                         onClick={() => setActiveTab(tab)}
//                         className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
//                            activeTab === tab 
//                               ? 'bg-black text-white shadow-md' 
//                               : 'text-slate-600 hover:text-black'
//                         }`}
//                      >
//                         {tab}
//                      </button>
//                   ))}
//                </div>
//             </div>

//             {/* Project Grid */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                {projects.map((project, idx) => (
//                   <div key={idx} className="group bg-white rounded-[2rem] overflow-hidden border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
//                      {/* Card Image Area */}
//                      <div className="h-64 overflow-hidden relative">
//                         <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-slate-900/0 transition-colors z-10" />
//                         <img 
//                            src={project.image} 
//                            alt={project.title} 
//                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
//                         />
//                         <div className="absolute top-4 left-4 z-20">
//                            <span className="px-3 py-1 bg-white/90 backdrop-blur rounded-full text-xs font-bold uppercase tracking-wider border border-white/20">
//                               {project.type}
//                            </span>
//                         </div>
//                      </div>

//                      {/* Card Content */}
//                      <div className="p-8">
//                         <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
//                         <p className="text-slate-600 mb-6 line-clamp-2 text-sm leading-relaxed">
//                            {project.description}
//                         </p>
                        
//                         <div className="flex items-center gap-2 mb-6">
//                            <Layers className="w-4 h-4 text-slate-400" />
//                            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Tech Stack</span>
//                         </div>
                        
//                         <div className="flex flex-wrap gap-2">
//                            {project.tags.map((tag, i) => (
//                               <span key={i} className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-600 border border-slate-200">
//                                  {tag}
//                               </span>
//                            ))}
//                            {project.tags.length > 3 && (
//                                <span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-600 border border-slate-200">
//                                  +2
//                               </span>
//                            )}
//                         </div>
//                      </div>
//                   </div>
//                ))}
//             </div>
//          </div>
//       </section>

//       {/* --- Contact Section --- */}
//       <section id="contact" className="py-32 px-6 relative z-10 max-w-7xl mx-auto">
//          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
//             {/* Left Column - Contact Info */}
//             <div className="space-y-8">
//                <div className="text-sm font-bold tracking-widest text-slate-500 uppercase">Get in touch</div>
//                <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Let's work together</h2>
//                <p className="text-lg text-slate-600 leading-relaxed max-w-md">
//                   I'm currently available for freelance work and collaborations. If you have a project you'd like to discuss, please get in touch!
//                </p>
               
//                <div className="space-y-6 pt-4">
//                   <div className="flex items-center gap-4">
//                      <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
//                         <Mail className="w-5 h-5 text-slate-700" />
//                      </div>
//                      <div>
//                         <div className="text-sm font-medium text-slate-500">Email</div>
//                         <a href="mailto:jeffrey.thomas@gmail.com" className="text-lg font-semibold text-slate-900 hover:text-purple-600 transition-colors">
//                            jeffrey.thomas@gmail.com
//                         </a>
//                      </div>
//                   </div>
                  
//                   <div className="flex items-center gap-4">
//                      <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
//                         <MapPin className="w-5 h-5 text-slate-700" />
//                      </div>
//                      <div>
//                         <div className="text-sm font-medium text-slate-500">Location</div>
//                         <div className="text-lg font-semibold text-slate-900">Pune, India</div>
//                      </div>
//                   </div>
//                </div>
//             </div>

//             {/* Right Column - Contact Form */}
//             <div className="bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-2xl border border-slate-100 relative overflow-hidden group">
//                {/* Card Glow */}
//                <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-100/50 rounded-full blur-[50px] pointer-events-none" />
               
//                <div className="relative z-10">
//                   <h3 className="text-2xl font-bold text-slate-900 mb-2">Ready to start a project?</h3>
//                   <p className="text-slate-500 mb-8 text-sm">Fill out the form below and I'll get back to you within 24 hours.</p>

//                   <form ref={form} onSubmit={sendEmail} className="space-y-4">
//                      <div>
//                        <label htmlFor="user_name" className="sr-only">Name</label>
//                        <input 
//                           type="text" 
//                           name="user_name" 
//                           id="user_name"
//                           placeholder="Your Name" 
//                           required 
//                           className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-black focus:ring-0 transition-colors"
//                        />
//                      </div>
                     
//                      <div>
//                        <label htmlFor="user_email" className="sr-only">Email</label>
//                        <input 
//                           type="email" 
//                           name="user_email" 
//                           id="user_email"
//                           placeholder="Your Email" 
//                           required 
//                           className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-black focus:ring-0 transition-colors"
//                        />
//                      </div>
                     
//                      <div>
//                        <label htmlFor="message" className="sr-only">Message</label>
//                        <textarea 
//                           name="message" 
//                           id="message"
//                           rows="4"
//                           placeholder="Tell me about your project..." 
//                           required 
//                           className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-black focus:ring-0 transition-colors resize-none"
//                        />
//                      </div>

//                     {/* Error Message Display */}
//                     {errorMessage && (
//                         <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-600 text-xs font-medium">
//                         <AlertCircle className="w-4 h-4 flex-shrink-0" />
//                         {errorMessage}
//                         </div>
//                     )}

//                      <button 
//                        type="submit" 
//                        disabled={isSubmitting || submitStatus === 'success'}
//                        className={`w-full py-4 rounded-full font-bold text-white transition-all duration-300 flex items-center justify-center gap-2
//                          ${submitStatus === 'success' 
//                            ? 'bg-emerald-500' 
//                            : 'bg-black hover:bg-slate-800 shadow-xl shadow-purple-900/10 hover:-translate-y-0.5'
//                          }
//                          ${isSubmitting ? 'opacity-80 cursor-wait' : ''}
//                        `}
//                      >
//                        {isSubmitting ? (
//                           <>
//                             <Loader2 className="w-5 h-5 animate-spin" />
//                             Sending...
//                           </>
//                        ) : submitStatus === 'success' ? (
//                           <>
//                              Message Sent!
//                           </>
//                        ) : (
//                           <>
//                              Send Message
//                              <Send className="w-4 h-4" />
//                           </>
//                        )}
//                      </button>

//                      {submitStatus === 'error' && !errorMessage && (
//                        <p className="text-red-500 text-xs text-center mt-2">
//                          Something went wrong. Please try again later.
//                        </p>
//                      )}
//                   </form>
//                </div>
//             </div>

//          </div>
//       </section>

//       {/* --- Footer --- */}
//       <footer className="bg-white border-t border-slate-100 pt-20 pb-10 relative overflow-hidden z-10">
//           <div className="max-w-7xl mx-auto px-6">
//              <div className="flex flex-col md:flex-row justify-between items-center gap-8">
//                 <div className="text-center md:text-left">
//                    <div className="text-xl font-bold tracking-tight text-slate-900 mb-2">jeffrey.dev</div>
//                    <p className="text-slate-500 text-sm">© 2026 Jeffrey Thomas. All rights reserved.</p>
//                 </div>
                
//                 <div className="flex gap-6">
//                    <a href="#" className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-black hover:text-white hover:border-black transition-all">
//                       <Github className="w-4 h-4" />
//                    </a>
//                    <a href="#" className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all">
//                       <Linkedin className="w-4 h-4" />
//                    </a>
//                    <button 
//                       onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
//                       className="w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-black hover:text-white hover:border-black transition-all"
//                    >
//                       <ChevronUp className="w-4 h-4" />
//                    </button>
//                 </div>
//              </div>
             
//              <div className="mt-12 text-center">
//                <p className="text-xs text-slate-400 flex items-center justify-center gap-1">
//                  Made with <span className="text-red-500">♥</span> in Pune, India
//                </p>
//              </div>
//           </div>
//       </footer>
//     </div>
//   );
// };

// export default App;






// import React, { useState, useEffect, useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import { 
//   Menu, X, ArrowRight, Download, Calendar, Layers, 
//   Mail, MapPin, Send, Loader2, AlertCircle, 
//   Code, Globe, Play, ChevronLeft, ChevronRight,
//   Target, Briefcase, GraduationCap, Star
// } from 'lucide-react';

// // --- CUSTOM CURSOR ---
// const CustomCursor = () => {
//   const cursorRef = useRef(null);
//   const ringRef = useRef(null);

//   useEffect(() => {
//     const cursor = cursorRef.current;
//     const ring = ringRef.current;
    
//     let mouseX = -100, mouseY = -100;
//     let ringX = -100, ringY = -100;

//     const moveCursor = (e) => {
//       mouseX = e.clientX;
//       mouseY = e.clientY;
//       if (cursor) cursor.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0)`;
//     };

//     const animateRing = () => {
//       ringX += (mouseX - ringX) * 0.15;
//       ringY += (mouseY - ringY) * 0.15;
//       if (ring) ring.style.transform = `translate3d(${ringX - 16}px, ${ringY - 16}px, 0)`;
//       requestAnimationFrame(animateRing);
//     };

//     window.addEventListener('mousemove', moveCursor);
//     const animationId = requestAnimationFrame(animateRing);
//     return () => {
//       window.removeEventListener('mousemove', moveCursor);
//       cancelAnimationFrame(animationId);
//     };
//   }, []);

//   return (
//     <>
//       <div ref={cursorRef} className="fixed top-0 left-0 w-2 h-2 bg-black rounded-full pointer-events-none z-[9999]" />
//       <div ref={ringRef} className="fixed top-0 left-0 w-8 h-8 border border-black/30 rounded-full pointer-events-none z-[9998] transition-all duration-100 ease-out" />
//     </>
//   );
// };

// const App = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState('idle');
//   const [errorMessage, setErrorMessage] = useState("");
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const form = useRef();

//   // --- DATA ---
//   const projects = [
//     {
//       title: "RestOS",
//       date: "Jan 2026",
//       description: "A modern Restaurant POS (Point Of Sale) system designed to streamline operations. Features real-time order tracking, inventory management, and comprehensive analytics dashboard.",
//       tags: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
//       type: "Web App",
//       image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800",
//     },
//     {
//       title: "Food Data Browser",
//       date: "Nov 2025",
//       description: "A comprehensive web application for browsing and searching food product data. Built with performance in mind using React Query for caching and optimistic updates.",
//       tags: ["React", "React Query", "Tailwind CSS", "API"],
//       type: "Web App",
//       image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800",
//     },
//     {
//       title: "Carbon Credits Dash",
//       date: "Oct 2025",
//       description: "This is a frontend application built with React, TypeScript, Vite, and shadcn/ui. It visualizes complex environmental data helping companies track their carbon footprint.",
//       tags: ["React", "Node.js", "Tailwind CSS", "shadcn/ui"],
//       type: "Dashboard",
//       image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
//     }
//   ];

//   const experience = [
//     {
//       role: "Full Stack Developer",
//       company: "Freelance",
//       date: "2024 - Present",
//       desc: "Building modern web applications for various clients using the MERN stack.",
//       icon: <Briefcase className="w-4 h-4 text-purple-600" />
//     },
//     {
//       role: "Computer Science Student",
//       company: "University of Pune",
//       date: "2023 - 2027",
//       desc: "Specializing in Data Structures, Algorithms, and Web Technologies.",
//       icon: <GraduationCap className="w-4 h-4 text-blue-600" />
//     }
//   ];

//   // --- LOGIC ---
//   const nextProject = () => setCurrentIndex((prev) => (prev + 1) % projects.length);
//   const prevProject = () => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

//   const getCardStyle = (index) => {
//     if (index === currentIndex) return "z-20 scale-100 opacity-100 translate-x-0 cursor-default shadow-2xl shadow-purple-900/10 border-slate-200/60";
//     const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
//     const nextIndex = (currentIndex + 1) % projects.length;
//     if (index === prevIndex) return "z-10 scale-90 opacity-40 -translate-x-[20%] lg:-translate-x-[60%] cursor-pointer hover:opacity-60 blur-[2px] border-transparent";
//     if (index === nextIndex) return "z-10 scale-90 opacity-40 translate-x-[20%] lg:translate-x-[60%] cursor-pointer hover:opacity-60 blur-[2px] border-transparent";
//     return "z-0 scale-75 opacity-0 hidden";
//   };

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setErrorMessage("");
//     const lastSentTime = localStorage.getItem("lastEmailSentTime");
//     const twelveHoursInMs = 12 * 60 * 60 * 1000;
//     const now = new Date().getTime();

//     if (lastSentTime && (now - parseInt(lastSentTime) < twelveHoursInMs)) {
//       const hoursLeft = Math.ceil((twelveHoursInMs - (now - parseInt(lastSentTime))) / (1000 * 60 * 60));
//       setErrorMessage(`Please wait ${hoursLeft} hours before sending another message.`);
//       return;
//     }

//     setIsSubmitting(true);
//     emailjs.sendForm(
//       import.meta.env.VITE_SERVICE_ID,
//       import.meta.env.VITE_TEMPLATE_ID,
//       form.current,
//       import.meta.env.VITE_PUBLIC_KEY
//     ).then(() => {
//         setSubmitStatus('success');
//         setIsSubmitting(false);
//         e.target.reset();
//         localStorage.setItem("lastEmailSentTime", new Date().getTime().toString());
//         setTimeout(() => setSubmitStatus('idle'), 5000);
//     }, () => {
//         setSubmitStatus('error');
//         setErrorMessage("Something went wrong. Please try again.");
//         setIsSubmitting(false);
//     });
//   };

//   const marqueeItems = [
//     "AI Engineering", "UI/UX Design", "TypeScript", "Next.js", 
//     "Product Design", "JavaScript", "React", "Node.js", 
//     "AI Engineering", "UI/UX Design", "TypeScript", "Next.js"
//   ];

//   return (
//     <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-purple-100 selection:text-purple-900 relative overflow-x-hidden cursor-none scroll-smooth">
//       <CustomCursor />

//       {/* --- STYLES --- */}
//       <style>{`
//         @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
//         .animate-scroll { animation: scroll 30s linear infinite; }
//         @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
//         @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-15px); } 100% { transform: translateY(0px); } }
//         .animate-float { animation: float 6s ease-in-out infinite; }
//         .reveal-1 { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
//         .reveal-2 { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards; opacity: 0; }
//         .reveal-3 { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards; opacity: 0; }
//         .glass-card { background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.5); box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07); }
//       `}</style>

//       {/* --- BACKGROUND --- */}
//       <div className="fixed inset-0 z-0 h-full w-full pointer-events-none">
//          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
//          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-200/30 rounded-full blur-[120px]" />
//          <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-blue-200/30 rounded-full blur-[100px]" />
//          <div className="absolute bottom-[10%] left-[10%] w-[30vw] h-[30vw] bg-indigo-200/30 rounded-full blur-[100px]" />
//       </div>

//       {/* --- NAVBAR --- */}
//       <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl">
//         <div className="glass-card rounded-full px-2 py-2 flex items-center justify-between transition-all duration-300 hover:scale-[1.01]">
//           <div className="pl-6 text-xl font-bold tracking-tight text-slate-900">jeffrey.dev</div>
//           <div className="hidden md:flex items-center gap-1">
//             {['Home', 'About', 'Journey', 'Projects', 'Contact'].map((item) => (
//               <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setActiveSection(item.toLowerCase())}
//                 className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-none ${activeSection === item.toLowerCase() ? 'bg-black text-white shadow-md' : 'text-slate-600 hover:text-black hover:bg-slate-100/50'}`}>
//                 {item}
//               </a>
//             ))}
//           </div>
//           <button className="md:hidden p-3 rounded-full hover:bg-slate-100 mr-1 cursor-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//             {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="fixed inset-0 bg-white/95 backdrop-blur-xl z-40 pt-32 px-6 md:hidden">
//           <div className="flex flex-col items-center gap-6">
//             {['Home', 'About', 'Journey', 'Projects', 'Contact'].map((item) => (
//               <a key={item} href={`#${item.toLowerCase()}`} className="text-2xl font-medium text-slate-900 cursor-none" onClick={() => setIsMenuOpen(false)}>{item}</a>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* --- HERO SECTION --- */}
//       <section id="home" className="relative z-10 pt-48 lg:pt-60 px-6 overflow-hidden">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24 relative z-10">
          
//           <div className="space-y-8">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100/80 border border-slate-200 backdrop-blur-sm text-xs font-bold tracking-wide uppercase text-slate-700 reveal-1">
//               <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
//               Full Stack Developer & Designer
//             </div>
//             <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] reveal-2">
//               Building digital experiences that <br className="hidden lg:block" />
//               make an <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">impact</span>
//             </h1>
//             <p className="text-lg text-slate-600 max-w-lg leading-relaxed reveal-3">
//               I'm a full-stack developer specializing in JavaScript, creating AI-enhanced solutions and crafting thoughtful user experiences.
//             </p>
//             <div className="flex flex-wrap gap-4 pt-2 reveal-4">
//               <button className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-slate-800 transition-all flex items-center gap-2 group shadow-xl shadow-purple-900/10 cursor-none hover:scale-105 active:scale-95 duration-300">
//                 View my work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//               </button>
//               <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-medium hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm cursor-none hover:scale-105 active:scale-95 duration-300">
//                 Download Resume <Download className="w-4 h-4" />
//               </button>
//             </div>
//           </div>
          
//           {/* Hero Image */}
//           <div className="relative group perspective-1000 reveal-4">
//              <div className="animate-float" style={{ animationDelay: '1s' }}>
//                  {/* Glow Effect */}
//                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-[3rem] blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                 
//                  <div className="relative h-[500px] w-full bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/50 transition-transform duration-500 hover:scale-[1.01]">
//                    <img 
//                     src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" 
//                     alt="Jeffrey Thomas" 
//                     className="w-full h-full object-cover" 
//                    />
                   
//                    {/* OPEN TO WORK TAG (Straight, Overlay) */}
//                    <div className="absolute bottom-6 right-6 flex items-center gap-3 bg-white/95 backdrop-blur-md px-5 py-3 rounded-full shadow-lg border border-slate-100 hover:scale-105 transition-transform duration-300 cursor-default group/tag">
//                       <div className="relative flex h-3 w-3">
//                         <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
//                         <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
//                       </div>
//                       <span className="text-sm font-bold text-slate-900 tracking-wide group-hover/tag:text-purple-600 transition-colors">
//                         OPEN TO WORK
//                       </span>
//                    </div>
//                 </div>
//              </div>
//           </div>
//         </div>
//       </section>

//       {/* --- MARQUEE --- */}
//       <div className="w-full border-y border-slate-100 bg-white/50 backdrop-blur-sm py-10 overflow-hidden relative z-10 hover:bg-white/80 transition-colors duration-500">
//         <div className="whitespace-nowrap flex animate-scroll">
//           {[...marqueeItems, ...marqueeItems].map((item, i) => (
//              <div key={i} className="flex items-center gap-4 mx-8 text-2xl font-bold text-slate-300 uppercase tracking-widest hover:text-slate-900 transition-colors duration-300 cursor-default">
//                <Star className="w-4 h-4 text-purple-500 fill-current" />
//                {item}
//              </div>
//           ))}
//         </div>
//       </div>

//       {/* --- ABOUT SECTION --- */}
//       <section id="about" className="py-32 px-6 relative z-10 max-w-7xl mx-auto">
//         <div className="mb-16">
//            <div className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-4">About Me</div>
//            <h2 className="text-4xl font-bold text-slate-900">Digital Craftsman</h2>
//         </div>
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
//            <div className="space-y-8 text-lg text-slate-600 leading-relaxed font-medium">
//               <p>I'm a creative, independent, and passionate developer with extensive experience creating impactful digital experiences.</p>
//               <p>With a strong background in both development and design, I bring a unique perspective to every project I work on. I don't just write code; I build solutions.</p>
//               <div className="pt-4">
//                  <a href="#projects" className="inline-flex items-center gap-2 font-bold text-black hover:text-purple-600 transition-colors cursor-none hover:translate-x-2 duration-300">
//                     <span className="h-px w-8 bg-current"></span> See my work
//                  </a>
//               </div>
//            </div>
           
//            <div className="glass-card rounded-[2.5rem] p-10 relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-purple-900/5">
//               <h3 className="text-2xl font-bold mb-8 relative z-10">Skills & Expertise</h3>
//               <div className="space-y-8 relative z-10">
//                  {['Development', 'Design', 'Tools'].map((category) => (
//                      <div key={category}>
//                         <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">{category}</div>
//                         <div className="flex flex-wrap gap-2">
//                            {['JavaScript', 'React', 'Node.js', 'TypeScript', 'Next.js'].map(skill => (
//                               <span key={skill} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm font-medium text-slate-700 hover:bg-black hover:text-white hover:border-black transition-all duration-300 cursor-none hover:scale-110">
//                                  {skill}
//                               </span>
//                            ))}
//                         </div>
//                      </div>
//                  ))}
//               </div>
//            </div>
//         </div>
//       </section>

//       {/* --- NEW JOURNEY SECTION (TIMELINE) --- */}
//       <section id="journey" className="py-20 px-6 relative z-10 max-w-4xl mx-auto">
//          <div className="text-center mb-16">
//             <h2 className="text-3xl font-bold text-slate-900">My Journey</h2>
//          </div>
//          <div className="relative border-l-2 border-slate-100 ml-4 md:ml-0 md:pl-0 space-y-12">
//             {experience.map((item, idx) => (
//                <div key={idx} className="relative pl-8 md:pl-0 flex flex-col md:flex-row md:items-center gap-6 group">
//                   {/* Dot */}
//                   <div className="absolute -left-[5px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-white border-4 border-slate-200 rounded-full group-hover:border-purple-500 group-hover:scale-125 transition-all duration-300 z-10" />
                  
//                   {/* Content (Alternating logic could be added here for L/R split) */}
//                   <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
//                      <div className="glass-card p-6 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
//                         <div className={`flex items-center gap-3 mb-2 ${idx % 2 === 0 ? 'md:justify-end' : ''}`}>
//                            <div className="p-2 bg-slate-50 rounded-lg">{item.icon}</div>
//                            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">{item.date}</span>
//                         </div>
//                         <h3 className="text-xl font-bold text-slate-900">{item.role}</h3>
//                         <p className="text-purple-600 font-medium text-sm mb-2">{item.company}</p>
//                         <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
//                      </div>
//                   </div>
//                </div>
//             ))}
//          </div>
//       </section>

//       {/* --- PROJECTS SECTION --- */}
//       <section id="projects" className="py-32 px-6 bg-slate-50/50 relative z-10 overflow-hidden">
//          <div className="max-w-7xl mx-auto flex flex-col items-center">
//             <div className="text-center mb-20">
//                <div className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-4">Projects</div>
//                <h2 className="text-4xl font-bold text-slate-900">Selected work</h2>
//             </div>
//             <div className="relative w-full max-w-6xl h-[600px] flex items-center justify-center">
//                {projects.map((project, index) => {
//                  const styleClass = getCardStyle(index);
//                  const isCenter = index === currentIndex;
//                  return (
//                    <div key={index} onClick={() => !isCenter && setCurrentIndex(index)}
//                       className={`absolute w-full max-w-4xl bg-white rounded-[2.5rem] overflow-hidden transition-all duration-700 cubic-bezier(0.25, 0.8, 0.25, 1) border border-white/40 ${styleClass}`}
//                       style={{ transformOrigin: 'center center' }}>
//                       <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
//                          <div className="relative h-[250px] lg:h-[500px] bg-slate-100 overflow-hidden group">
//                              {!isCenter && <div className="absolute inset-0 bg-white/40 z-10" />}
//                              <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
//                          </div>
//                          <div className="p-8 lg:p-12 flex flex-col justify-center bg-white/50 backdrop-blur-sm relative">
//                              <div className={`transition-opacity duration-300 ${isCenter ? 'opacity-100' : 'opacity-0 lg:opacity-30'}`}>
//                                 <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">{project.title}</h3>
//                                 <div className="flex items-center gap-2 text-slate-400 text-sm font-medium mb-6"><Calendar className="w-4 h-4" />{project.date}</div>
//                                 <p className="text-slate-600 text-base lg:text-lg leading-relaxed mb-8 line-clamp-3 lg:line-clamp-none">{project.description}</p>
//                                 <div className="flex flex-wrap gap-2 mb-10">
//                                    {project.tags.map((tag, i) => (<span key={i} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600">{tag}</span>))}
//                                 </div>
//                                 <div className="flex flex-wrap gap-3 mt-auto">
//                                    <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white text-sm font-bold hover:bg-slate-700 transition-colors cursor-none"><Code className="w-4 h-4" /> Source</button>
//                                    <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-900 text-sm font-bold hover:bg-slate-50 transition-colors cursor-none"><Globe className="w-4 h-4" /> Live Site</button>
//                                 </div>
//                              </div>
//                          </div>
//                       </div>
//                    </div>
//                  );
//                })}
//             </div>
//             <div className="flex items-center gap-8 mt-12 z-20">
//                <button onClick={prevProject} className="p-4 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-black hover:text-white hover:border-black transition-all shadow-lg active:scale-95 cursor-none hover:shadow-xl"><ChevronLeft className="w-6 h-6" /></button>
//                <div className="flex gap-2">{projects.map((_, idx) => (<button key={idx} onClick={() => setCurrentIndex(idx)} className={`w-2.5 h-2.5 rounded-full transition-all cursor-none ${idx === currentIndex ? 'bg-black w-8' : 'bg-slate-300 hover:bg-slate-400'}`} />))}</div>
//                <button onClick={nextProject} className="p-4 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-black hover:text-white hover:border-black transition-all shadow-lg active:scale-95 cursor-none hover:shadow-xl"><ChevronRight className="w-6 h-6" /></button>
//             </div>
//          </div>
//       </section>

//       {/* --- CONTACT SECTION --- */}
//       <section id="contact" className="py-32 px-6 relative z-10 max-w-7xl mx-auto">
//          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
//             <div className="space-y-8">
//                <div className="text-sm font-bold tracking-widest text-slate-500 uppercase">Get in touch</div>
//                <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Let's work together</h2>
//                <p className="text-lg text-slate-600 leading-relaxed max-w-md">I'm currently available for freelance work and collaborations.</p>
//                <div className="space-y-6 pt-4">
//                   <div className="flex items-center gap-4 group cursor-none">
//                      <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300"><Mail className="w-5 h-5" /></div>
//                      <div><div className="text-sm font-medium text-slate-500">Email</div><a href="mailto:jeffrey.thomas@gmail.com" className="text-lg font-semibold text-slate-900 cursor-none">jeffrey.thomas@gmail.com</a></div>
//                   </div>
//                </div>
//             </div>
//             <div className="glass-card p-8 sm:p-10 rounded-[2.5rem] relative overflow-hidden group transition-all duration-500 hover:-translate-y-2 hover:shadow-purple-900/10">
//                <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-100/50 rounded-full blur-[50px] pointer-events-none group-hover:bg-purple-100/50 transition-colors duration-500" />
//                <div className="relative z-10">
//                   <h3 className="text-2xl font-bold text-slate-900 mb-2">Ready to start a project?</h3>
//                   <p className="text-slate-500 mb-8 text-sm">Fill out the form below and I'll get back to you within 24 hours.</p>
//                   <form ref={form} onSubmit={sendEmail} className="space-y-4">
//                      <div><input type="text" name="user_name" placeholder="Your Name" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 cursor-none focus:border-black focus:ring-0 transition-colors" /></div>
//                      <div><input type="email" name="user_email" placeholder="Your Email" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 cursor-none focus:border-black focus:ring-0 transition-colors" /></div>
//                      <div><textarea name="message" rows="4" placeholder="Tell me about your project..." required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 resize-none cursor-none focus:border-black focus:ring-0 transition-colors" /></div>
//                      {errorMessage && <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-600 text-xs font-medium"><AlertCircle className="w-4 h-4 flex-shrink-0" />{errorMessage}</div>}
//                      <button type="submit" disabled={isSubmitting || submitStatus === 'success'} className={`w-full py-4 rounded-full font-bold text-white transition-all duration-300 flex items-center justify-center gap-2 cursor-none hover:scale-[1.02] active:scale-[0.98] ${submitStatus === 'success' ? 'bg-emerald-500' : 'bg-black hover:bg-slate-800'}`}>
//                        {isSubmitting ? <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</> : submitStatus === 'success' ? "Message Sent!" : <><Send className="w-4 h-4" /> Send Message</>}
//                      </button>
//                   </form>
//                </div>
//             </div>
//          </div>
//       </section>

//       {/* --- FOOTER --- */}
//       <footer className="bg-white border-t border-slate-100 pt-20 pb-10 relative overflow-hidden z-10">
//           <div className="max-w-7xl mx-auto px-6 text-center">
//              <div className="text-xl font-bold tracking-tight text-slate-900 mb-2">jeffrey.dev</div>
//              <p className="text-slate-500 text-sm">© 2026 Jeffrey Thomas. All rights reserved.</p>
//           </div>
//       </footer>
//     </div>
//   );
// };

// export default App;




// import React, { useState, useEffect, useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import { GitHubCalendar } from 'react-github-calendar';
// import { 
//   Menu, X, ArrowRight, Download, Calendar, Layers, 
//   Mail, MapPin, Send, Loader2, AlertCircle, 
//   Code, Globe, Play, ChevronLeft, ChevronRight,
//   Target, Star, GitCommit, Cpu
// } from 'lucide-react';

// // --- CUSTOM CURSOR ---
// const CustomCursor = () => {
//   const cursorRef = useRef(null);
//   const ringRef = useRef(null);

//   useEffect(() => {
//     const cursor = cursorRef.current;
//     const ring = ringRef.current;
    
//     let mouseX = -100, mouseY = -100;
//     let ringX = -100, ringY = -100;

//     const moveCursor = (e) => {
//       mouseX = e.clientX;
//       mouseY = e.clientY;
//       if (cursor) cursor.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0)`;
//     };

//     const animateRing = () => {
//       ringX += (mouseX - ringX) * 0.15;
//       ringY += (mouseY - ringY) * 0.15;
//       if (ring) ring.style.transform = `translate3d(${ringX - 16}px, ${ringY - 16}px, 0)`;
//       requestAnimationFrame(animateRing);
//     };

//     window.addEventListener('mousemove', moveCursor);
//     const animationId = requestAnimationFrame(animateRing);
//     return () => {
//       window.removeEventListener('mousemove', moveCursor);
//       cancelAnimationFrame(animationId);
//     };
//   }, []);

//   return (
//     <>
//       <div ref={cursorRef} className="fixed top-0 left-0 w-2 h-2 bg-black rounded-full pointer-events-none z-[9999]" />
//       <div ref={ringRef} className="fixed top-0 left-0 w-8 h-8 border border-black/30 rounded-full pointer-events-none z-[9998] transition-all duration-100 ease-out" />
//     </>
//   );
// };

// const App = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState('idle');
//   const [errorMessage, setErrorMessage] = useState("");
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const form = useRef();

//   // --- CONFIGURATION ---
//   const githubUsername = "Jeffrey-Thomass"; // <--- CHANGE THIS TO YOUR GITHUB USERNAME

//   // --- DATA ---
//   const projects = [
//     {
//       title: "RestOS",
//       date: "Jan 2026",
//       description: "A modern Restaurant POS (Point Of Sale) system designed to streamline operations. Features real-time order tracking, inventory management, and comprehensive analytics dashboard.",
//       tags: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
//       type: "Web App",
//       image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800",
//     },
//     {
//       title: "Food Data Browser",
//       date: "Nov 2025",
//       description: "A comprehensive web application for browsing and searching food product data. Built with performance in mind using React Query for caching and optimistic updates.",
//       tags: ["React", "React Query", "Tailwind CSS", "API"],
//       type: "Web App",
//       image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800",
//     },
//     {
//       title: "Carbon Credits Dash",
//       date: "Oct 2025",
//       description: "This is a frontend application built with React, TypeScript, Vite, and shadcn/ui. It visualizes complex environmental data helping companies track their carbon footprint.",
//       tags: ["React", "Node.js", "Tailwind CSS", "shadcn/ui"],
//       type: "Dashboard",
//       image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
//     }
//   ];

//   // --- LOGIC ---
//   const nextProject = () => setCurrentIndex((prev) => (prev + 1) % projects.length);
//   const prevProject = () => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);

//   const getCardStyle = (index) => {
//     if (index === currentIndex) return "z-20 scale-100 opacity-100 translate-x-0 cursor-default shadow-2xl shadow-purple-900/10 border-slate-200/60";
//     const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
//     const nextIndex = (currentIndex + 1) % projects.length;
//     if (index === prevIndex) return "z-10 scale-90 opacity-40 -translate-x-[20%] lg:-translate-x-[60%] cursor-pointer hover:opacity-60 blur-[2px] border-transparent";
//     if (index === nextIndex) return "z-10 scale-90 opacity-40 translate-x-[20%] lg:translate-x-[60%] cursor-pointer hover:opacity-60 blur-[2px] border-transparent";
//     return "z-0 scale-75 opacity-0 hidden";
//   };

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setErrorMessage("");
//     const lastSentTime = localStorage.getItem("lastEmailSentTime");
//     const twelveHoursInMs = 12 * 60 * 60 * 1000;
//     const now = new Date().getTime();

//     if (lastSentTime && (now - parseInt(lastSentTime) < twelveHoursInMs)) {
//       const hoursLeft = Math.ceil((twelveHoursInMs - (now - parseInt(lastSentTime))) / (1000 * 60 * 60));
//       setErrorMessage(`Please wait ${hoursLeft} hours before sending another message.`);
//       return;
//     }

//     setIsSubmitting(true);
//     emailjs.sendForm(
//       import.meta.env.VITE_SERVICE_ID,
//       import.meta.env.VITE_TEMPLATE_ID,
//       form.current,
//       import.meta.env.VITE_PUBLIC_KEY
//     ).then(() => {
//         setSubmitStatus('success');
//         setIsSubmitting(false);
//         e.target.reset();
//         localStorage.setItem("lastEmailSentTime", new Date().getTime().toString());
//         setTimeout(() => setSubmitStatus('idle'), 5000);
//     }, () => {
//         setSubmitStatus('error');
//         setErrorMessage("Something went wrong. Please try again.");
//         setIsSubmitting(false);
//     });
//   };

//   const marqueeItems = [
//     "AI Engineering", "UI/UX Design", "TypeScript", "Next.js", 
//     "Product Design", "JavaScript", "React", "Node.js", 
//     "AI Engineering", "UI/UX Design", "TypeScript", "Next.js"
//   ];

//   // Custom Theme for GitHub Calendar to match your purple aesthetic
//   const calendarTheme = {
//     light: ['#f1f5f9', '#e9d5ff', '#c084fc', '#9333ea', '#581c87'],
//     dark: ['#f1f5f9', '#e9d5ff', '#c084fc', '#9333ea', '#581c87'],
//   };

//   return (
//     <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-purple-100 selection:text-purple-900 relative overflow-x-hidden cursor-none scroll-smooth">
//       <CustomCursor />

//       {/* --- STYLES --- */}
//       <style>{`
//         @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
//         .animate-scroll { animation: scroll 30s linear infinite; }
//         @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
//         @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-15px); } 100% { transform: translateY(0px); } }
//         .animate-float { animation: float 6s ease-in-out infinite; }
//         .reveal-1 { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; opacity: 0; }
//         .reveal-2 { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards; opacity: 0; }
//         .reveal-3 { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards; opacity: 0; }
//         .glass-card { background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.5); box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07); }
//       `}</style>

//       {/* --- BACKGROUND --- */}
//       <div className="fixed inset-0 z-0 h-full w-full pointer-events-none">
//          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
//          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-200/30 rounded-full blur-[120px]" />
//          <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-blue-200/30 rounded-full blur-[100px]" />
//          <div className="absolute bottom-[10%] left-[10%] w-[30vw] h-[30vw] bg-indigo-200/30 rounded-full blur-[100px]" />
//       </div>

//       {/* --- NAVBAR --- */}
//       <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl">
//         <div className="glass-card rounded-full px-2 py-2 flex items-center justify-between transition-all duration-300 hover:scale-[1.01]">
//           <div className="pl-6 text-xl font-bold tracking-tight text-slate-900">jeffrey.dev</div>
//           <div className="hidden md:flex items-center gap-1">
//             {['Home', 'About', 'Activity', 'Projects', 'Contact'].map((item) => (
//               <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setActiveSection(item.toLowerCase())}
//                 className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-none ${activeSection === item.toLowerCase() ? 'bg-black text-white shadow-md' : 'text-slate-600 hover:text-black hover:bg-slate-100/50'}`}>
//                 {item}
//               </a>
//             ))}
//           </div>
//           <button className="md:hidden p-3 rounded-full hover:bg-slate-100 mr-1 cursor-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//             {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="fixed inset-0 bg-white/95 backdrop-blur-xl z-40 pt-32 px-6 md:hidden">
//           <div className="flex flex-col items-center gap-6">
//             {['Home', 'About', 'Activity', 'Projects', 'Contact'].map((item) => (
//               <a key={item} href={`#${item.toLowerCase()}`} className="text-2xl font-medium text-slate-900 cursor-none" onClick={() => setIsMenuOpen(false)}>{item}</a>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* --- HERO SECTION --- */}
//       <section id="home" className="relative z-10 pt-48 lg:pt-60 px-6 overflow-hidden">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24 relative z-10">
          
//           <div className="space-y-8">
//             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100/80 border border-slate-200 backdrop-blur-sm text-xs font-bold tracking-wide uppercase text-slate-700 reveal-1">
//               <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
//               Full Stack Developer & Designer
//             </div>
//             <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] reveal-2">
//               Building digital experiences that <br className="hidden lg:block" />
//               make an <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">impact</span>
//             </h1>
//             <p className="text-lg text-slate-600 max-w-lg leading-relaxed reveal-3">
//               I'm a full-stack developer specializing in JavaScript, creating AI-enhanced solutions and crafting thoughtful user experiences.
//             </p>
//             <div className="flex flex-wrap gap-4 pt-2 reveal-4">
//               <button className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-slate-800 transition-all flex items-center gap-2 group shadow-xl shadow-purple-900/10 cursor-none hover:scale-105 active:scale-95 duration-300">
//                 View my work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//               </button>
//               <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-medium hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm cursor-none hover:scale-105 active:scale-95 duration-300">
//                 Download Resume <Download className="w-4 h-4" />
//               </button>
//             </div>
//           </div>
          
//           {/* Hero Image */}
//           <div className="relative group perspective-1000 reveal-4">
//              <div className="animate-float" style={{ animationDelay: '1s' }}>
//                  {/* Glow Effect */}
//                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-[3rem] blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                 
//                  <div className="relative h-[500px] w-full bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/50 transition-transform duration-500 hover:scale-[1.01]">
//                    <img 
//                     src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" 
//                     alt="Jeffrey Thomas" 
//                     className="w-full h-full object-cover" 
//                    />
                   
//                    {/* OPEN TO WORK TAG (Straight, Overlay) */}
//                    <div className="absolute bottom-6 right-6 flex items-center gap-3 bg-white/95 backdrop-blur-md px-5 py-3 rounded-full shadow-lg border border-slate-100 hover:scale-105 transition-transform duration-300 cursor-default group/tag">
//                       <div className="relative flex h-3 w-3">
//                         <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
//                         <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
//                       </div>
//                       <span className="text-sm font-bold text-slate-900 tracking-wide group-hover/tag:text-purple-600 transition-colors">
//                         OPEN TO WORK
//                       </span>
//                    </div>
//                 </div>
//              </div>
//           </div>
//         </div>
//       </section>

//       {/* --- MARQUEE --- */}
//       <div className="w-full border-y border-slate-100 bg-white/50 backdrop-blur-sm py-10 overflow-hidden relative z-10 hover:bg-white/80 transition-colors duration-500">
//         <div className="whitespace-nowrap flex animate-scroll">
//           {[...marqueeItems, ...marqueeItems].map((item, i) => (
//              <div key={i} className="flex items-center gap-4 mx-8 text-2xl font-bold text-slate-300 uppercase tracking-widest hover:text-slate-900 transition-colors duration-300 cursor-default">
//                <Star className="w-4 h-4 text-purple-500 fill-current" />
//                {item}
//              </div>
//           ))}
//         </div>
//       </div>

//       {/* --- ABOUT SECTION --- */}
//       <section id="about" className="py-32 px-6 relative z-10 max-w-7xl mx-auto">
//         <div className="mb-16">
//            <div className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-4">About Me</div>
//            <h2 className="text-4xl font-bold text-slate-900">Digital Craftsman</h2>
//         </div>
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
//            <div className="space-y-8 text-lg text-slate-600 leading-relaxed font-medium">
//               <p>I'm a creative, independent, and passionate developer with extensive experience creating impactful digital experiences.</p>
//               <p>With a strong background in both development and design, I bring a unique perspective to every project I work on. I don't just write code; I build solutions.</p>
//               <div className="pt-4">
//                  <a href="#projects" className="inline-flex items-center gap-2 font-bold text-black hover:text-purple-600 transition-colors cursor-none hover:translate-x-2 duration-300">
//                     <span className="h-px w-8 bg-current"></span> See my work
//                  </a>
//               </div>
//            </div>
           
//            <div className="glass-card rounded-[2.5rem] p-10 relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-purple-900/5">
//               <h3 className="text-2xl font-bold mb-8 relative z-10">Skills & Expertise</h3>
//               <div className="space-y-8 relative z-10">
//                  {['Development', 'Design', 'Tools'].map((category) => (
//                      <div key={category}>
//                         <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">{category}</div>
//                         <div className="flex flex-wrap gap-2">
//                            {['JavaScript', 'React', 'Node.js', 'TypeScript', 'Next.js'].map(skill => (
//                               <span key={skill} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm font-medium text-slate-700 hover:bg-black hover:text-white hover:border-black transition-all duration-300 cursor-none hover:scale-110">
//                                  {skill}
//                               </span>
//                            ))}
//                         </div>
//                      </div>
//                  ))}
//               </div>
//            </div>
//         </div>
//       </section>

//       {/* --- ACTIVITY SECTION (REPLACED JOURNEY) --- */}
//       <section id="activity" className="py-20 px-6 relative z-10 max-w-5xl mx-auto">
//          <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-slate-900 mb-4">Code Activity</h2>
//             <p className="text-slate-500">A visual record of my daily contributions and commitment to code.</p>
//          </div>
         
//          <div className="glass-card p-8 rounded-[2.5rem] flex flex-col items-center justify-center transform transition-all duration-500 hover:rotate-1 hover:scale-[1.01] hover:shadow-2xl hover:shadow-purple-900/10">
//             <div className="flex items-center gap-3 mb-8 w-full justify-between">
//                 <div className="flex items-center gap-2">
//                     <div className="p-2 bg-slate-100 rounded-lg">
//                         <GitCommit className="w-5 h-5 text-purple-600" />
//                     </div>
//                     <span className="font-bold text-slate-700">@jeffreythomas</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400">
//                     <Cpu className="w-4 h-4" />
//                     2025 - 2026
//                 </div>
//             </div>
            
//             {/* Calendar Component */}
//             <div className="w-full overflow-x-auto pb-4 flex justify-center">
//                 <GitHubCalendar 
//                     username={githubUsername}
//                     colorScheme="light"
//                     blockSize={14}
//                     blockMargin={4}
//                     fontSize={12}
//                     theme={calendarTheme}
//                     style={{ color: '#475569' }}
//                 />
//             </div>
//          </div>
//       </section>

//       {/* --- PROJECTS SECTION --- */}
//       <section id="projects" className="py-32 px-6 bg-slate-50/50 relative z-10 overflow-hidden">
//          <div className="max-w-7xl mx-auto flex flex-col items-center">
//             <div className="text-center mb-20">
//                <div className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-4">Projects</div>
//                <h2 className="text-4xl font-bold text-slate-900">Selected work</h2>
//             </div>
//             <div className="relative w-full max-w-6xl h-[600px] flex items-center justify-center">
//                {projects.map((project, index) => {
//                  const styleClass = getCardStyle(index);
//                  const isCenter = index === currentIndex;
//                  return (
//                    <div key={index} onClick={() => !isCenter && setCurrentIndex(index)}
//                       className={`absolute w-full max-w-4xl bg-white rounded-[2.5rem] overflow-hidden transition-all duration-700 cubic-bezier(0.25, 0.8, 0.25, 1) border border-white/40 ${styleClass}`}
//                       style={{ transformOrigin: 'center center' }}>
//                       <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
//                          <div className="relative h-[250px] lg:h-[500px] bg-slate-100 overflow-hidden group">
//                              {!isCenter && <div className="absolute inset-0 bg-white/40 z-10" />}
//                              <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
//                          </div>
//                          <div className="p-8 lg:p-12 flex flex-col justify-center bg-white/50 backdrop-blur-sm relative">
//                              <div className={`transition-opacity duration-300 ${isCenter ? 'opacity-100' : 'opacity-0 lg:opacity-30'}`}>
//                                 <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">{project.title}</h3>
//                                 <div className="flex items-center gap-2 text-slate-400 text-sm font-medium mb-6"><Calendar className="w-4 h-4" />{project.date}</div>
//                                 <p className="text-slate-600 text-base lg:text-lg leading-relaxed mb-8 line-clamp-3 lg:line-clamp-none">{project.description}</p>
//                                 <div className="flex flex-wrap gap-2 mb-10">
//                                    {project.tags.map((tag, i) => (<span key={i} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600">{tag}</span>))}
//                                 </div>
//                                 <div className="flex flex-wrap gap-3 mt-auto">
//                                    <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white text-sm font-bold hover:bg-slate-700 transition-colors cursor-none"><Code className="w-4 h-4" /> Source</button>
//                                    <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-900 text-sm font-bold hover:bg-slate-50 transition-colors cursor-none"><Globe className="w-4 h-4" /> Live Site</button>
//                                 </div>
//                              </div>
//                          </div>
//                       </div>
//                    </div>
//                  );
//                })}
//             </div>
//             <div className="flex items-center gap-8 mt-12 z-20">
//                <button onClick={prevProject} className="p-4 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-black hover:text-white hover:border-black transition-all shadow-lg active:scale-95 cursor-none hover:shadow-xl"><ChevronLeft className="w-6 h-6" /></button>
//                <div className="flex gap-2">{projects.map((_, idx) => (<button key={idx} onClick={() => setCurrentIndex(idx)} className={`w-2.5 h-2.5 rounded-full transition-all cursor-none ${idx === currentIndex ? 'bg-black w-8' : 'bg-slate-300 hover:bg-slate-400'}`} />))}</div>
//                <button onClick={nextProject} className="p-4 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-black hover:text-white hover:border-black transition-all shadow-lg active:scale-95 cursor-none hover:shadow-xl"><ChevronRight className="w-6 h-6" /></button>
//             </div>
//          </div>
//       </section>

//       {/* --- CONTACT SECTION --- */}
//       <section id="contact" className="py-32 px-6 relative z-10 max-w-7xl mx-auto">
//          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
//             <div className="space-y-8">
//                <div className="text-sm font-bold tracking-widest text-slate-500 uppercase">Get in touch</div>
//                <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Let's work together</h2>
//                <p className="text-lg text-slate-600 leading-relaxed max-w-md">I'm currently available for freelance work and collaborations.</p>
//                <div className="space-y-6 pt-4">
//                   <div className="flex items-center gap-4 group cursor-none">
//                      <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300"><Mail className="w-5 h-5" /></div>
//                      <div><div className="text-sm font-medium text-slate-500">Email</div><a href="mailto:jeffrey.thomas@gmail.com" className="text-lg font-semibold text-slate-900 cursor-none">jeffrey.thomas@gmail.com</a></div>
//                   </div>
//                </div>
//             </div>
//             <div className="glass-card p-8 sm:p-10 rounded-[2.5rem] relative overflow-hidden group transition-all duration-500 hover:-translate-y-2 hover:shadow-purple-900/10">
//                <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-100/50 rounded-full blur-[50px] pointer-events-none group-hover:bg-purple-100/50 transition-colors duration-500" />
//                <div className="relative z-10">
//                   <h3 className="text-2xl font-bold text-slate-900 mb-2">Ready to start a project?</h3>
//                   <p className="text-slate-500 mb-8 text-sm">Fill out the form below and I'll get back to you within 24 hours.</p>
//                   <form ref={form} onSubmit={sendEmail} className="space-y-4">
//                      <div><input type="text" name="user_name" placeholder="Your Name" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 cursor-none focus:border-black focus:ring-0 transition-colors" /></div>
//                      <div><input type="email" name="user_email" placeholder="Your Email" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 cursor-none focus:border-black focus:ring-0 transition-colors" /></div>
//                      <div><textarea name="message" rows="4" placeholder="Tell me about your project..." required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 resize-none cursor-none focus:border-black focus:ring-0 transition-colors" /></div>
//                      {errorMessage && <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-600 text-xs font-medium"><AlertCircle className="w-4 h-4 flex-shrink-0" />{errorMessage}</div>}
//                      <button type="submit" disabled={isSubmitting || submitStatus === 'success'} className={`w-full py-4 rounded-full font-bold text-white transition-all duration-300 flex items-center justify-center gap-2 cursor-none hover:scale-[1.02] active:scale-[0.98] ${submitStatus === 'success' ? 'bg-emerald-500' : 'bg-black hover:bg-slate-800'}`}>
//                        {isSubmitting ? <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</> : submitStatus === 'success' ? "Message Sent!" : <><Send className="w-4 h-4" /> Send Message</>}
//                      </button>
//                   </form>
//                </div>
//             </div>
//          </div>
//       </section>

//       {/* --- FOOTER --- */}
//       <footer className="bg-white border-t border-slate-100 pt-20 pb-10 relative overflow-hidden z-10">
//           <div className="max-w-7xl mx-auto px-6 text-center">
//              <div className="text-xl font-bold tracking-tight text-slate-900 mb-2">jeffrey.dev</div>
//              <p className="text-slate-500 text-sm">© 2026 Jeffrey Thomas. All rights reserved.</p>
//           </div>
//       </footer>
//     </div>
//   );
// };

// export default App;


import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import {GitHubCalendar} from 'react-github-calendar';
import {ActivityCalendar} from 'react-activity-calendar'; // Import the generic calendar
import { 
  Menu, X, ArrowRight, Download, Calendar, Layers, 
  Mail, MapPin, Send, Loader2, AlertCircle, 
  Code, Globe, Play, ChevronLeft, ChevronRight,
  Target, Briefcase, GraduationCap, Star, GitCommit, Cpu, Terminal
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

// --- LEETCODE COMPONENT ---
const LeetCodeCalendar = ({ username }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Fetch data from a proxy API to avoid CORS issues
    fetch(`https://leetcode-stats-api.herokuapp.com/${username}`)
      .then(res => res.json())
      .then(apiData => {
        if (apiData.status === 'error') throw new Error('User not found');
        
        // Transform the dictionary { "12345678": 1 } into Array for the calendar
        const calendarData = Object.entries(apiData.submissionCalendar).map(([timestamp, count]) => {
          const date = new Date(parseInt(timestamp) * 1000).toISOString().split('T')[0];
          return {
            date,
            count,
            level: count > 5 ? 4 : count > 3 ? 3 : count > 1 ? 2 : 1 
          };
        });
        
        // Fill in the rest of the year (simplified for this demo, usually the lib handles some)
        setData(calendarData);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [username]);

  // Cyan/Teal Theme for LeetCode
  const theme = {
    light: ['#f1f5f9', '#ccfbf1', '#5eead4', '#14b8a6', '#0f766e'],
    dark: ['#f1f5f9', '#ccfbf1', '#5eead4', '#14b8a6', '#0f766e'],
  };

  if (loading) return <div className="h-32 flex items-center justify-center text-slate-400"><Loader2 className="animate-spin w-6 h-6" /></div>;
  if (error) return <div className="text-xs text-red-400">Could not load LeetCode data.</div>;

  return (
    <div className="w-full flex justify-center overflow-x-auto">
      <ActivityCalendar 
        data={data} 
        theme={theme}
        blockSize={14}
        blockMargin={4}
        fontSize={12}
        colorScheme="light"
        labels={{ legend: { less: 'Less', more: 'More' }, months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] }}
      />
    </div>
  );
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const form = useRef();

  // --- CONFIGURATION ---
  const githubUsername = "Jeffrey-Thomass"; 
  const leetcodeUsername = "JeffreyThomas"; // <--- CHANGE THIS

  // --- DATA ---
  const projects = [
    {
      title: "RestOS",
      date: "Jan 2026",
      description: "A modern Restaurant POS (Point Of Sale) system designed to streamline operations. Features real-time order tracking, inventory management, and comprehensive analytics dashboard.",
      tags: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
      type: "Web App",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Food Data Browser",
      date: "Nov 2025",
      description: "A comprehensive web application for browsing and searching food product data. Built with performance in mind using React Query for caching and optimistic updates.",
      tags: ["React", "React Query", "Tailwind CSS", "API"],
      type: "Web App",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Carbon Credits Dash",
      date: "Oct 2025",
      description: "This is a frontend application built with React, TypeScript, Vite, and shadcn/ui. It visualizes complex environmental data helping companies track their carbon footprint.",
      tags: ["React", "Node.js", "Tailwind CSS", "shadcn/ui"],
      type: "Dashboard",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    }
  ];

  // --- LOGIC ---
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
    "AI Engineering", "UI/UX Design", "TypeScript", "Next.js", 
    "Product Design", "JavaScript", "React", "Node.js", 
    "AI Engineering", "UI/UX Design", "TypeScript", "Next.js"
  ];

  // GitHub Theme (Purple)
  const gitHubTheme = {
    light: ['#f1f5f9', '#e9d5ff', '#c084fc', '#9333ea', '#581c87'],
    dark: ['#f1f5f9', '#e9d5ff', '#c084fc', '#9333ea', '#581c87'],
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-purple-100 selection:text-purple-900 relative overflow-x-hidden cursor-none scroll-smooth">
      <CustomCursor />

      {/* --- STYLES --- */}
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
      `}</style>

      {/* --- BACKGROUND --- */}
      <div className="fixed inset-0 z-0 h-full w-full pointer-events-none">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
         <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-200/30 rounded-full blur-[120px]" />
         <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-blue-200/30 rounded-full blur-[100px]" />
         <div className="absolute bottom-[10%] left-[10%] w-[30vw] h-[30vw] bg-indigo-200/30 rounded-full blur-[100px]" />
      </div>

      {/* --- NAVBAR --- */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl">
        <div className="glass-card rounded-full px-2 py-2 flex items-center justify-between transition-all duration-300 hover:scale-[1.01]">
          <div className="pl-6 text-xl font-bold tracking-tight text-slate-900">jeffrey.dev</div>
          <div className="hidden md:flex items-center gap-1">
            {['Home', 'About', 'Activity', 'Projects', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setActiveSection(item.toLowerCase())}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-none ${activeSection === item.toLowerCase() ? 'bg-black text-white shadow-md' : 'text-slate-600 hover:text-black hover:bg-slate-100/50'}`}>
                {item}
              </a>
            ))}
          </div>
          <button className="md:hidden p-3 rounded-full hover:bg-slate-100 mr-1 cursor-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
          
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100/80 border border-slate-200 backdrop-blur-sm text-xs font-bold tracking-wide uppercase text-slate-700 reveal-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Full Stack Developer & Designer
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] reveal-2">
              Building digital experiences that <br className="hidden lg:block" />
              make an <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">impact</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-lg leading-relaxed reveal-3">
              I'm a full-stack developer specializing in JavaScript, creating AI-enhanced solutions and crafting thoughtful user experiences.
            </p>
            <div className="flex flex-wrap gap-4 pt-2 reveal-4">
              <button className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-slate-800 transition-all flex items-center gap-2 group shadow-xl shadow-purple-900/10 cursor-none hover:scale-105 active:scale-95 duration-300">
                View my work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full font-medium hover:bg-slate-50 transition-all flex items-center gap-2 shadow-sm cursor-none hover:scale-105 active:scale-95 duration-300">
                Download Resume <Download className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative group perspective-1000 reveal-4">
             <div className="animate-float" style={{ animationDelay: '1s' }}>
                 {/* Glow Effect */}
                 <div className="absolute -inset-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-[3rem] blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                 
                 <div className="relative h-[500px] w-full bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/50 transition-transform duration-500 hover:scale-[1.01]">
                   <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" 
                    alt="Jeffrey Thomas" 
                    className="w-full h-full object-cover" 
                   />
                   
                   {/* OPEN TO WORK TAG (Straight, Overlay) */}
                   <div className="absolute bottom-6 right-6 flex items-center gap-3 bg-white/95 backdrop-blur-md px-5 py-3 rounded-full shadow-lg border border-slate-100 hover:scale-105 transition-transform duration-300 cursor-default group/tag">
                      <div className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                      </div>
                      <span className="text-sm font-bold text-slate-900 tracking-wide group-hover/tag:text-purple-600 transition-colors">
                        OPEN TO WORK
                      </span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* --- MARQUEE --- */}
      <div className="w-full border-y border-slate-100 bg-white/50 backdrop-blur-sm py-10 overflow-hidden relative z-10 hover:bg-white/80 transition-colors duration-500">
        <div className="whitespace-nowrap flex animate-scroll">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
             <div key={i} className="flex items-center gap-4 mx-8 text-2xl font-bold text-slate-300 uppercase tracking-widest hover:text-slate-900 transition-colors duration-300 cursor-default">
               <Star className="w-4 h-4 text-purple-500 fill-current" />
               {item}
             </div>
          ))}
        </div>
      </div>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="py-32 px-6 relative z-10 max-w-7xl mx-auto">
        <div className="mb-16">
           <div className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-4">About Me</div>
           <h2 className="text-4xl font-bold text-slate-900">Digital Craftsman</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
           <div className="space-y-8 text-lg text-slate-600 leading-relaxed font-medium">
              <p>I'm a creative, independent, and passionate developer with extensive experience creating impactful digital experiences.</p>
              <p>With a strong background in both development and design, I bring a unique perspective to every project I work on. I don't just write code; I build solutions.</p>
              <div className="pt-4">
                 <a href="#projects" className="inline-flex items-center gap-2 font-bold text-black hover:text-purple-600 transition-colors cursor-none hover:translate-x-2 duration-300">
                    <span className="h-px w-8 bg-current"></span> See my work
                 </a>
              </div>
           </div>
           
           <div className="glass-card rounded-[2.5rem] p-10 relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-purple-900/5">
              <h3 className="text-2xl font-bold mb-8 relative z-10">Skills & Expertise</h3>
              <div className="space-y-8 relative z-10">
                 {['Development', 'Design', 'Tools'].map((category) => (
                     <div key={category}>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">{category}</div>
                        <div className="flex flex-wrap gap-2">
                           {['JavaScript', 'React', 'Node.js', 'TypeScript', 'Next.js'].map(skill => (
                              <span key={skill} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-full text-sm font-medium text-slate-700 hover:bg-black hover:text-white hover:border-black transition-all duration-300 cursor-none hover:scale-110">
                                 {skill}
                              </span>
                           ))}
                        </div>
                     </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      {/* --- ACTIVITY SECTION (Double Graphs) --- */}
      <section id="activity" className="py-20 px-6 relative z-10 max-w-6xl mx-auto">
         <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Code Activity</h2>
            <p className="text-slate-500">My daily contributions across platforms.</p>
         </div>
         
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* GitHub Card */}
            <div className="glass-card p-8 rounded-[2.5rem] flex flex-col items-center justify-center transition-all duration-500 hover:shadow-2xl hover:shadow-purple-900/10">
                <div className="flex items-center gap-3 mb-6 w-full justify-between">
                    <div className="flex items-center gap-2">
                        <div className="p-2 bg-purple-50 rounded-lg"><GitCommit className="w-5 h-5 text-purple-600" /></div>
                        <span className="font-bold text-slate-700">GitHub</span>
                    </div>
                    <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Commits</div>
                </div>
                <div className="w-full flex justify-center overflow-x-auto">
                    <GitHubCalendar 
                        username={githubUsername}
                        colorScheme="light"
                        blockSize={12}
                        blockMargin={4}
                        fontSize={12}
                        theme={gitHubTheme}
                    />
                </div>
            </div>

            {/* LeetCode Card */}
            <div className="glass-card p-8 rounded-[2.5rem] flex flex-col items-center justify-center transition-all duration-500 hover:shadow-2xl hover:shadow-teal-900/10">
                <div className="flex items-center gap-3 mb-6 w-full justify-between">
                    <div className="flex items-center gap-2">
                        <div className="p-2 bg-teal-50 rounded-lg"><Terminal className="w-5 h-5 text-teal-600" /></div>
                        <span className="font-bold text-slate-700">LeetCode</span>
                    </div>
                    <div className="text-xs font-bold uppercase tracking-widest text-slate-400">Submissions</div>
                </div>
                <div className="w-full flex justify-center overflow-x-auto">
                    <LeetCodeCalendar username={leetcodeUsername} />
                </div>
            </div>
         </div>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section id="projects" className="py-32 px-6 bg-slate-50/50 relative z-10 overflow-hidden">
         <div className="max-w-7xl mx-auto flex flex-col items-center">
            <div className="text-center mb-20">
               <div className="text-sm font-bold tracking-widest text-slate-500 uppercase mb-4">Projects</div>
               <h2 className="text-4xl font-bold text-slate-900">Selected work</h2>
            </div>
            <div className="relative w-full max-w-6xl h-[600px] flex items-center justify-center">
               {projects.map((project, index) => {
                 const styleClass = getCardStyle(index);
                 const isCenter = index === currentIndex;
                 return (
                   <div key={index} onClick={() => !isCenter && setCurrentIndex(index)}
                      className={`absolute w-full max-w-4xl bg-white rounded-[2.5rem] overflow-hidden transition-all duration-700 cubic-bezier(0.25, 0.8, 0.25, 1) border border-white/40 ${styleClass}`}
                      style={{ transformOrigin: 'center center' }}>
                      <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                         <div className="relative h-[250px] lg:h-[500px] bg-slate-100 overflow-hidden group">
                             {!isCenter && <div className="absolute inset-0 bg-white/40 z-10" />}
                             <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                         </div>
                         <div className="p-8 lg:p-12 flex flex-col justify-center bg-white/50 backdrop-blur-sm relative">
                             <div className={`transition-opacity duration-300 ${isCenter ? 'opacity-100' : 'opacity-0 lg:opacity-30'}`}>
                                <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">{project.title}</h3>
                                <div className="flex items-center gap-2 text-slate-400 text-sm font-medium mb-6"><Calendar className="w-4 h-4" />{project.date}</div>
                                <p className="text-slate-600 text-base lg:text-lg leading-relaxed mb-8 line-clamp-3 lg:line-clamp-none">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-10">
                                   {project.tags.map((tag, i) => (<span key={i} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-600">{tag}</span>))}
                                </div>
                                <div className="flex flex-wrap gap-3 mt-auto">
                                   <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white text-sm font-bold hover:bg-slate-700 transition-colors cursor-none"><Code className="w-4 h-4" /> Source</button>
                                   <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-900 text-sm font-bold hover:bg-slate-50 transition-colors cursor-none"><Globe className="w-4 h-4" /> Live Site</button>
                                </div>
                             </div>
                         </div>
                      </div>
                   </div>
                 );
               })}
            </div>
            <div className="flex items-center gap-8 mt-12 z-20">
               <button onClick={prevProject} className="p-4 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-black hover:text-white hover:border-black transition-all shadow-lg active:scale-95 cursor-none hover:shadow-xl"><ChevronLeft className="w-6 h-6" /></button>
               <div className="flex gap-2">{projects.map((_, idx) => (<button key={idx} onClick={() => setCurrentIndex(idx)} className={`w-2.5 h-2.5 rounded-full transition-all cursor-none ${idx === currentIndex ? 'bg-black w-8' : 'bg-slate-300 hover:bg-slate-400'}`} />))}</div>
               <button onClick={nextProject} className="p-4 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-black hover:text-white hover:border-black transition-all shadow-lg active:scale-95 cursor-none hover:shadow-xl"><ChevronRight className="w-6 h-6" /></button>
            </div>
         </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-32 px-6 relative z-10 max-w-7xl mx-auto">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
               <div className="text-sm font-bold tracking-widest text-slate-500 uppercase">Get in touch</div>
               <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Let's work together</h2>
               <p className="text-lg text-slate-600 leading-relaxed max-w-md">I'm currently available for freelance work and collaborations.</p>
               <div className="space-y-6 pt-4">
                  <div className="flex items-center gap-4 group cursor-none">
                     <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300"><Mail className="w-5 h-5" /></div>
                     <div><div className="text-sm font-medium text-slate-500">Email</div><a href="mailto:jeffrey.thomas@gmail.com" className="text-lg font-semibold text-slate-900 cursor-none">jeffrey.thomas@gmail.com</a></div>
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
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-white border-t border-slate-100 pt-20 pb-10 relative overflow-hidden z-10">
          <div className="max-w-7xl mx-auto px-6 text-center">
             <div className="text-xl font-bold tracking-tight text-slate-900 mb-2">jeffrey.dev</div>
             <p className="text-slate-500 text-sm">© 2026 Jeffrey Thomas. All rights reserved.</p>
          </div>
      </footer>
    </div>
  );
};

export default App;