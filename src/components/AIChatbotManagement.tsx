import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, MessageSquare, Mail, Phone, Maximize2, ToggleLeft, ShieldAlert, Cpu, Sparkles, MessageCircle } from 'lucide-react';

interface AIChatbotManagementProps {
  onBack: () => void;
  onContactClick: () => void;
}

export default function AIChatbotManagement({ onBack, onContactClick }: AIChatbotManagementProps) {
  return (
    <div className="min-h-screen bg-darker text-white font-sans selection:bg-cyan-400 selection:text-dark">
      {/* Fixed Sticky Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-darker/80 backdrop-blur-md border-b border-white/10 px-6 md:px-16 py-5">
        <div className="container mx-auto flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-[15px] font-medium text-white/70 hover:text-cyan-400 transition-all group"
          >
            <ArrowLeft size={18} className="transform group-hover:-translate-x-1 transition-transform" />
            <span>Back to Labs</span>
          </button>
          <div className="font-sans font-extrabold text-xl text-white tracking-tight">Zilora AI Labs</div>
        </div>
      </header>

      {/* Hero Showcase Area */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        {/* Subtle decorative cyan/blue backdrops */}
        <div className="absolute top-[-100px] left-[5%] w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-sky-400/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-cyan-400/10 text-cyan-400 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6"
            >
              <Cpu size={12} />
              <span>Hybrid Conversational System</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-sans font-extrabold tracking-tight mb-6 leading-tight bg-gradient-to-r from-white via-white to-cyan-200 bg-clip-text text-transparent"
            >
              AI Chatbot Management
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/70 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-light"
            >
              An intelligent customer communication system designed to help businesses manage AI-powered and manual conversations across WhatsApp and other messaging platforms through a centralized dashboard.
            </motion.p>
          </div>

          {/* Core Showcase for AI Chatbot Management */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="group bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 rounded-[2.5rem] overflow-hidden backdrop-blur-sm shadow-2xl hover:border-cyan-400/20 transition-all duration-300 flex flex-col md:flex-row items-stretch"
            >
              {/* Product Visual */}
              <div className="relative md:w-1/2 p-6 bg-neutral-900/40 border-b md:border-b-0 md:border-r border-white/5 flex items-center justify-center min-h-[320px]">
                <img 
                  src="/Omnichat.png" 
                  alt="AI Chatbot Management Central Dashboard" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full max-h-[380px] object-contain p-6 transition-transform duration-500 group-hover:scale-[1.03]"
                />
                
                {/* Visual indicator overlay */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center pointer-events-none">
                  <div className="p-3.5 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 mb-2 shadow-lg backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <Maximize2 size={18} />
                  </div>
                  <span className="text-[10px] tracking-wider uppercase opacity-40 group-hover:opacity-75 transition-opacity font-bold font-sans">
                    Universal Inbox Panel
                  </span>
                </div>
              </div>

              {/* Product Specifications */}
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold tracking-widest text-cyan-400 uppercase bg-cyan-400/15 px-3.5 py-1.5 rounded-full">
                      Omnichannel Routing
                    </span>
                    <span className="text-white/30 text-xs font-mono">INTELLIGENCE-V26</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">Seamless AI-Human Handoff</h3>
                  
                  <p className="text-white/65 text-sm sm:text-base leading-relaxed font-light">
                    Monitor active conversations from messaging networks in real time. Maintain supreme operational control to toggle AI interactions instantly or resume manual support whenever custom guidance is required.
                  </p>

                  <ul className="space-y-2.5 text-sm text-white/85 pt-2">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                      <span>Live monitoring of active dialogues across unified message queues.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                      <span>Granular toggle mechanism to turn AI context handling on/off per chat session.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                      <span>Integrated templates, structured quick-replies, and history logs.</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-8 border-t border-white/5 mt-8 flex items-center gap-4 text-xs font-mono text-white/40">
                  <span>CHANNELS: WHATSAPP / TELEGRAM / WEB CHAT</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Core Features & Descriptions */}
      <section className="py-20 bg-[#0c0c0e] border-y border-white/10 relative">
        <div className="container mx-auto px-6 md:px-16 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            
            {/* Left explanation block */}
            <div className="md:col-span-7 space-y-6">
              <span className="inline-block bg-cyan-400 text-dark text-[10px] font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full">
                Unified Dialogues
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
                Achieve outstanding communication efficiency.
              </h2>
              <div className="prose prose-invert text-white/70 text-base md:text-[17px] leading-relaxed space-y-4 font-light">
                <p>
                  The platform allows businesses to monitor active customer conversations in real time while giving staff full control to instantly switch between automated AI responses and manual human support whenever needed. Operators can enable or disable AI handling for individual chats, ensuring customers receive the right balance of automation and personal assistance based on the situation.
                </p>
                <p>
                  By optimizing support workflows, AI Chatbot Management helps businesses improve response times, streamline customer support, reduce daily administrative workload, and maintain high-fidelity engagement—all while guaranteeing that human operators can step in immediately for personalized touches.
                </p>
              </div>
            </div>

            {/* Right key-points grid */}
            <div className="md:col-span-5 space-y-4">
              <div className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl">
                <div className="w-10 h-10 rounded-lg bg-cyan-400/10 flex items-center justify-center text-cyan-400 mb-4">
                  <ToggleLeft size={20} />
                </div>
                <h4 className="font-bold text-lg mb-1.5">Instant AI Override</h4>
                <p className="text-white/50 text-xs md:text-sm leading-relaxed">
                  Support staff can claim conversations with a single tap, instantly silencing the AI model for custom human triage.
                </p>
              </div>

              <div className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl">
                <div className="w-10 h-10 rounded-lg bg-cyan-400/10 flex items-center justify-center text-cyan-400 mb-4">
                  <MessageCircle size={20} />
                </div>
                <h4 className="font-bold text-lg mb-1.5">WhatsApp Integration</h4>
                <p className="text-white/50 text-xs md:text-sm leading-relaxed">
                  Direct compatibility with Official WhatsApp Business API pipelines for reliable message dispatch and state persistence.
                </p>
              </div>

              <div className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl">
                <div className="w-10 h-10 rounded-lg bg-cyan-400/10 flex items-center justify-center text-cyan-400 mb-4">
                  <Sparkles size={20} />
                </div>
                <h4 className="font-bold text-lg mb-1.5">Intelligent Summaries</h4>
                <p className="text-white/50 text-xs md:text-sm leading-relaxed">
                  AI scans legacy messages and creates a crisp context summary for human agents, speeding up fallback handoffs.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-20 pl-6 pr-6 md:px-16 container mx-auto max-w-4xl text-center">
        <div className="bg-gradient-to-tr from-cyan-400/5 to-transparent border border-white/10 rounded-[2.5rem] p-8 md:p-14 relative overflow-hidden">
          <div className="absolute -bottom-8 -right-8 w-44 h-44 bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" />
          
          <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Scale Your Conversations Securely</h3>
          <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-light mb-8">
            AI Chatbot Management modernizes customer service operations by combining elite automation intelligence with real-world human hospitality safeguards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onContactClick}
              className="px-8 py-4 rounded-full bg-cyan-400 text-dark font-sans font-bold text-sm tracking-wide hover:scale-105 active:scale-95 transition-transform shadow-xl shadow-cyan-400/5 cursor-pointer"
            >
              Consult On This Product
            </button>
            <button 
              onClick={onBack}
              className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-sans font-bold text-sm tracking-wide hover:bg-white/10 transition-colors cursor-pointer"
            >
              See Other Labs Services
            </button>
          </div>
        </div>
      </section>

      {/* Footer Details */}
      <footer className="bg-[#09090b] border-t border-white/10 py-16">
        <div className="container mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl">
          <div className="text-left">
            <h5 className="font-extrabold text-xl text-white">Zilora AI Labs</h5>
            <p className="text-white/30 text-xs mt-1">Innovative human-centric AI solutions deployed globally.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 text-sm text-white/55">
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-cyan-400" />
              <span>ziloraailabs@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-cyan-400" />
              <span>+94 77 769 6177</span>
            </div>
          </div>
          <div className="text-white/20 text-xs uppercase tracking-widest font-bold">
            © 2026 Zilora AI Labs
          </div>
        </div>
      </footer>
    </div>
  );
}
