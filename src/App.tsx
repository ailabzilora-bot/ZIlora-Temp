/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, ChevronRight, MessageCircle, X, Menu } from 'lucide-react';

// --- Components ---

const Navbar = ({ activeSection, isScrolled }: { activeSection: string; isScrolled: boolean }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Labs' },
    { id: 'why', label: 'Why Us' },
    { id: 'services', label: 'Services' },
    { id: 'how', label: 'How It Works' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-16 py-5 transition-all duration-300 ${
        isScrolled ? 'bg-darker border-white/10' : 'bg-transparent border-black/5'
      } border-bottom`}
      id="navbar"
    >
      <a 
        href="#home" 
        onClick={(e) => { e.preventDefault(); scrollTo('home'); }}
        className={`font-sans font-bold text-xl tracking-tight transition-colors ${
          isScrolled ? 'text-white' : 'text-dark'
        }`}
      >
        Zilora AI Labs
      </a>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-10 list-none">
        {navLinks.map((link) => (
          <li key={link.id}>
            <a 
              href={`#${link.id}`}
              onClick={(e) => { e.preventDefault(); scrollTo(link.id); }}
              className={`text-[15px] font-medium transition-colors relative pb-1 ${
                isScrolled 
                  ? (activeSection === link.id ? 'text-white after:bg-white' : 'text-white/60 hover:text-white')
                  : (activeSection === link.id ? 'text-dark after:bg-dark' : 'text-dark/60 hover:text-dark')
              } ${activeSection === link.id ? 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:rounded-full' : ''}`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <div className="flex items-center gap-4">
        <button 
          onClick={() => scrollTo('contact')}
          className={`hidden sm:block px-6 py-2.5 rounded-full font-medium text-[14px] transition-all hover:scale-105 active:scale-95 ${
            isScrolled ? 'bg-lime text-dark' : 'bg-dark text-white'
          }`}
        >
          Get Started
        </button>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-white' : 'text-dark'} />
          ) : (
            <Menu className={isScrolled ? 'text-white' : 'text-dark'} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-darker border-t border-white/10 p-8 flex flex-col gap-6 md:hidden shadow-2xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => { e.preventDefault(); scrollTo(link.id); }}
                className={`text-lg font-medium ${activeSection === link.id ? 'text-lime' : 'text-white/70'}`}
              >
                {link.label}
              </a>
            ))}
            <button 
              onClick={() => scrollTo('contact')}
              className="bg-lime text-dark px-6 py-4 rounded-xl font-bold text-center"
            >
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionReveal = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div 
      className={`bg-white rounded-2xl p-6 md:p-8 border border-black/5 cursor-pointer transition-all duration-300 ${
        isOpen ? 'border-lime ring-2 ring-lime/20' : 'hover:border-lime/40'
      }`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-start gap-4">
        <h3 className="font-sans font-bold text-[15px] md:text-[17px] text-dark leading-tight">{question}</h3>
        <span className={`text-2xl transition-transform duration-300 flex-shrink-0 leading-none ${isOpen ? 'rotate-45' : ''}`}>+</span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-[14px] md:text-[15px] text-muted leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const colorSampled = useRef(false);
  const [bgColor, setBgColor] = useState('#BFFF00');
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formResult, setFormResult] = useState("");

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormResult("Sending....");
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "c36ae74e-a819-4fd1-8f6a-54cbc4c5e0eb");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setFormResult("Form Submitted Successfully");
        (event.target as HTMLFormElement).reset();
      } else {
        setFormResult("Error: " + (data.message || "Failed to submit"));
      }
    } catch (error) {
      setFormResult("Error connecting to server");
      console.error(error);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let attempts = 0;
    const extractColor = () => {
      if (colorSampled.current) return;

      try {
        const canvas = document.createElement('canvas');
        canvas.width = 1;
        canvas.height = 1;
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        if (ctx) {
          // Sample from top-left corner
          ctx.drawImage(video, 0, 0, 20, 20, 0, 0, 1, 1);
          const [r, g, b, a] = ctx.getImageData(0, 0, 1, 1).data;
          
          const isWhite = r > 240 && g > 240 && b > 240;
          const isBlack = r < 10 && g < 10 && b < 10;

          if (a > 0 && !isWhite && !isBlack) {
            setBgColor(`rgb(${r}, ${g}, ${b})`);
            colorSampled.current = true;
          } else if (attempts < 50) {
            attempts++;
            requestAnimationFrame(extractColor);
          }
        }
      } catch (e) {
        console.error("Could not extract video color", e);
      }
    };

    video.addEventListener('loadeddata', extractColor);
    video.addEventListener('play', extractColor);
    
    if (video.readyState >= 2) {
      extractColor();
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
      
      const sections = ['home', 'why', 'services', 'how', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 300) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      video.removeEventListener('loadeddata', extractColor);
      video.removeEventListener('play', extractColor);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-dark selection:text-lime">
      
      <Navbar activeSection={activeSection} isScrolled={isScrolled} />

      {/* Hero Section */}
      <section 
        id="home"
        className="min-h-screen md:min-h-[105vh] relative flex items-center overflow-hidden pb-24 md:pb-32"
        style={{ backgroundColor: bgColor }}
      >
        {/* robot video wrapper */}
        <div className="absolute top-[45%] left-1/2 -translate-x-1/2 lg:-translate-x-[35%] xl:-translate-x-[30%] -translate-y-1/2 w-[140%] sm:w-full max-w-[800px] lg:max-w-[1000px] pointer-events-none z-10">
          <video
            ref={videoRef}
            src="/animation.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto object-contain transform-gpu scale-110 lg:scale-[1.15]"
            style={{ clipPath: 'inset(0 0 8% 0)' }}
          />
        </div>

        <div className="container mx-auto px-6 md:px-16 pt-24 relative z-20">
          <div className="max-w-[900px]">
            <h1 className="font-sans font-extrabold text-[3.5rem] sm:text-[5rem] lg:text-[7.5rem] leading-[1.05] tracking-tight text-dark">
              AI Systems<br />
              Built for<br />
              Reality. Scaled<br />
              for Impact.
            </h1>
            
            <p className="mt-8 text-lg sm:text-xl lg:text-[1.375rem] leading-[1.5] text-dark/70 max-w-[550px] mb-12">
              We design human-centric systems that understand the capabilities and limitations of current AI. Our technology handles the efficiency so your people can make the decisions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-dark text-white px-9 py-4 rounded-full font-bold text-[15px] hover:translate-y-[-2px] transition-all shadow-lg active:scale-95"
              >
                Launch Project
              </button>
              <button 
                onClick={() => document.getElementById('how')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-transparent border-2 border-dark text-dark px-9 py-3.5 rounded-full font-bold text-[15px] hover:translate-y-[-2px] transition-all active:scale-95"
              >
                See How It Works
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why" className="py-16 md:py-24 bg-darker text-white min-h-screen flex items-center">
        <div className="container mx-auto px-6 md:px-16 w-full">
          <SectionReveal>
            <span className="inline-block bg-lime/15 text-lime text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
              Why Us
            </span>
            <h2 className="font-sans font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4 leading-tight">
              AI that actually<br />works for your business.
            </h2>
            <p className="text-white/50 max-w-lg text-lg mb-10">
              We don't sell hype. We build systems that slot into your workflows and deliver real results.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
            {[
              { icon: '🇱🇰', title: 'Built for Sri Lanka', desc: 'We understand the local business landscape. We build solutions that fit your market, not a foreign template.' },
              { icon: '⚡', title: 'Fast Deployment', desc: 'No months-long projects. We move fast, iterate often, and get your system live before you lose momentum.' },
              { icon: '🧠', title: 'Human-First Thinking', desc: 'AI handles the repetitive. Your team handles the decisions. We design with that balance in mind.' },
              { icon: '🔧', title: 'End-to-End Ownership', desc: 'From strategy to deployment to maintenance — we stay with you, not just hand off and disappear.' },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="px-8 py-12 md:px-10 bg-darker hover:bg-lime/5 transition-colors group cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-lime/10 flex items-center justify-center text-xl mb-6 group-hover:bg-lime/20 transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-sans font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 bg-gray min-h-screen flex items-center">
        <div className="container mx-auto px-6 md:px-16 w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <SectionReveal>
              <span className="inline-block bg-lime text-dark text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
                Services
              </span>
              <h2 className="font-sans font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight text-dark leading-tight">
                What we build.
              </h2>
            </SectionReveal>
            <SectionReveal className="md:max-w-md">
              <p className="text-muted text-lg leading-snug">
                Every service is built around your specific business problems — not generic software.
              </p>
            </SectionReveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { num: '01', icon: '⚙️', title: 'AI Automation', desc: 'Eliminate repetitive tasks. We automate your internal workflows.' },
              { num: '02', icon: '💬', title: 'AI Chatbots', desc: 'Smart, context-aware chatbots for sales and support — 24/7.' },
              { num: '03', icon: '📈', title: 'Lead Generation', desc: 'AI systems that find and qualify leads while you close deals.' },
              { num: '04', icon: '🛠️', title: 'Custom AI Apps', desc: 'Unique AI-powered applications tailored exactly to your needs.' },
              { num: '05', icon: '🔗', title: 'AI Integration', desc: 'We plug AI into your existing tools — CRMs, ERPs, and more.' },
              { num: '06', icon: '🗄️', title: 'RAG Systems', desc: 'Give AI access to your data. Smart answers from your own knowledge base.' },
              { num: '07', icon: '🌐', title: 'AI Web Systems', desc: 'Websites with smart search, personalisation, and live assistants.' },
              { num: '08', icon: '📊', title: 'Analytic Dashboards', desc: 'Turn raw data into actionable insights with real-time dashboards.' },
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-[1.5rem] p-6 pb-8 border border-black/5 hover:translate-y-[-4px] hover:shadow-xl hover:shadow-black/5 transition-all duration-300 overflow-hidden relative group"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-lime transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                <div className="font-sans font-bold text-[10px] text-dark/20 mb-4 tracking-widest">{service.num}</div>
                <div className="text-2xl mb-3">{service.icon}</div>
                <h3 className="font-sans font-bold text-[17px] mb-2 text-dark leading-tight">{service.title}</h3>
                <p className="text-[13px] text-muted leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how" className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-16 text-center">
          <SectionReveal>
            <span className="inline-block bg-lime text-dark text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
              How It Works
            </span>
            <h2 className="font-sans font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight text-dark leading-tight mb-16">
              From idea to live in three steps.
            </h2>
          </SectionReveal>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 mt-20">
            {/* Dotted Line connector */}
            <div className="hidden md:absolute md:block top-10 left-[15%] right-[15%] h-[1px] border-t-2 border-dashed border-dark/10 z-0" />

            {[
              { num: '01', title: 'Discover', desc: 'We deep-dive into your business, understand your pain points, and map out exactly where AI adds value.' },
              { num: '02', title: 'Build', desc: 'We design and develop your system with regular check-ins. You see progress every step of the way.' },
              { num: '03', title: 'Deploy', desc: 'We launch, train your team, and stick around to optimize. You\'re never left to figure it out alone.' },
            ].map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative z-10 px-8"
              >
                <div className="w-20 h-20 rounded-full bg-lime text-dark font-sans font-extrabold text-2xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-lime/20">
                  {step.num}
                </div>
                <h3 className="font-sans font-bold text-xl mb-4 text-dark">{step.title}</h3>
                <p className="text-muted leading-relaxed text-[15px]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 md:py-32 bg-gray">
        <div className="container mx-auto px-6 md:px-16">
          <div className="text-center mb-16">
            <SectionReveal>
              <span className="inline-block bg-lime text-dark text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
                FAQ
              </span>
              <h2 className="font-sans font-extrabold text-4xl md:text-5xl tracking-tight text-dark">
                Common questions.
              </h2>
            </SectionReveal>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            <FaqItem 
              question="Is AI expensive to implement?" 
              answer="Not necessarily. We offer solutions scaled to your budget. Many automations pay for themselves within months through time and cost savings."
            />
            <FaqItem 
              question="Do I need a technical background?" 
              answer="Not at all. We handle all the technical complexity. You just need to understand your business — we'll handle the rest."
            />
            <FaqItem 
              question="How long does a project take?" 
              answer="Simple automations can be live in 1–2 weeks. More complex custom applications typically take 4–8 weeks depending on scope."
            />
            <FaqItem 
              question="Will this work with my existing tools?" 
              answer="Almost certainly. We integrate with most major platforms — WhatsApp, Google Workspace, CRMs, ERPs, and custom software."
            />
            <FaqItem 
              question="Is my data safe?" 
              answer="Yes. We follow strict data handling practices and never store sensitive customer data beyond what's required to run your system."
            />
            <FaqItem 
              question="What if it doesn't work as expected?" 
              answer="We stay with you post-launch. If something isn't performing, we fix it. We're invested in your success, not just the delivery."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 bg-darker text-white overflow-hidden relative">
        {/* Animated background blob */}
        <div className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] bg-lime/5 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <SectionReveal>
              <span className="inline-block bg-lime/10 text-lime text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
                Contact Us
              </span>
              <h2 className="font-sans font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight mb-8 leading-tight">
                Let's build something<br />together.
              </h2>
              <p className="text-white/50 text-lg mb-12 max-w-md">
                Tell us what you're working on. We'll get back to you within 24 hours.
              </p>
              
              <div className="space-y-6">
                <a href="mailto:hello@zilorailabs.com" className="flex items-center gap-4 text-white/60 hover:text-lime transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-xl group-hover:bg-lime/20 transition-all">
                    <Mail size={20} />
                  </div>
                  <span className="text-[17px]">ziloraailabs@gmail.com</span>
                </a>
                <a href="tel:+94777696177" className="flex items-center gap-4 text-white/60 hover:text-lime transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-xl group-hover:bg-lime/20 transition-all">
                    <Phone size={20} />
                  </div>
                  <span className="text-[17px]">+94 77 769 6177</span>
                </a>
                <div className="flex items-center gap-4 text-white/60 group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-xl transition-all">
                    <MapPin size={20} />
                  </div>
                  <span className="text-[17px]">Kurunegala, Sri Lanka</span>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal className="bg-white/5 p-8 md:p-12 rounded-[2.5rem] border border-white/10 backdrop-blur-sm">
              <form className="space-y-6" onSubmit={handleFormSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold tracking-widest text-white/30 uppercase pl-1">Name</label>
                    <input name="name" type="text" placeholder="Your name" required className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-lime transition-colors placeholder:text-white/20" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold tracking-widest text-white/30 uppercase pl-1">Email</label>
                    <input name="email" type="email" placeholder="you@company.com" required className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-lime transition-colors placeholder:text-white/20" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-widest text-white/30 uppercase pl-1">Service</label>
                  <select name="service" required className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-lime transition-colors appearance-none text-white/50">
                    <option value="" className="bg-darker">Select a service</option>
                    <option value="AI Automation" className="bg-darker">AI Automation</option>
                    <option value="AI Chatbots" className="bg-darker">AI Chatbots</option>
                    <option value="Lead Generation" className="bg-darker">Lead Generation</option>
                    <option value="Custom AI Application" className="bg-darker">Custom AI Application</option>
                    <option value="Business AI Integration" className="bg-darker">Business AI Integration</option>
                    <option value="RAG Systems" className="bg-darker">RAG Systems</option>
                    <option value="AI Integrated Websites" className="bg-darker">AI Integrated Websites</option>
                    <option value="Analytic Dashboards" className="bg-darker">Analytic Dashboards</option>
                    <option value="Not sure yet" className="bg-darker">Not sure yet</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold tracking-widest text-white/30 uppercase pl-1">Message</label>
                  <textarea name="message" rows={4} placeholder="Tell us about your business..." required className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-lime transition-colors placeholder:text-white/20 resize-none"></textarea>
                </div>
                
                <div className="pt-4 space-y-4">
                  <button type="submit" className="w-full bg-lime text-dark font-sans font-bold py-5 rounded-full flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-lime/20">
                    Send Message <ChevronRight size={20} />
                  </button>
                  {formResult && (
                    <p className={`text-center text-sm font-bold ${formResult.includes('Error') ? 'text-red-400' : 'text-lime'}`}>
                      {formResult}
                    </p>
                  )}
                  <a href="https://wa.me/94777696177" target="_blank" rel="noreferrer" className="w-full block text-center py-4 rounded-full border border-white/10 hover:bg-white/5 transition-all text-[#25d366] font-medium flex items-center justify-center gap-2">
                    <MessageCircle size={20} /> Chat on WhatsApp instead
                  </a>
                </div>
              </form>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111] py-16">
        <div className="container mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="font-sans font-extrabold text-2xl text-white">Zilora AI Labs</div>
          <p className="text-white/30 text-sm">© 2025 Zilora AI Labs. Kurunegala, Sri Lanka.</p>
          <p className="text-white/10 text-xs tracking-widest uppercase font-bold">AI for Real Business</p>
        </div>
      </footer>

    </div>
  );
}
