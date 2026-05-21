import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Gauge, Fuel, TrendingUp, CheckCircle, Mail, Phone, Maximize2, Layers, AlertTriangle } from 'lucide-react';

interface FillingStationAIProps {
  onBack: () => void;
  onContactClick: () => void;
}

export default function FillingStationAI({ onBack, onContactClick }: FillingStationAIProps) {
  return (
    <div className="min-h-screen bg-darker text-white font-sans selection:bg-emerald-400 selection:text-dark">
      {/* Fixed Sticky Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-darker/80 backdrop-blur-md border-b border-white/10 px-6 md:px-16 py-5">
        <div className="container mx-auto flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-[15px] font-medium text-white/70 hover:text-emerald-400 transition-all group"
          >
            <ArrowLeft size={18} className="transform group-hover:-translate-x-1 transition-transform" />
            <span>Back to Labs</span>
          </button>
          <div className="font-sans font-extrabold text-xl text-white tracking-tight">Zilora AI Labs</div>
        </div>
      </header>

      {/* Hero Showcase Area */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        {/* Subtle decorative emerald backdrops */}
        <div className="absolute top-[-100px] left-[5%] w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-emerald-400/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-emerald-400/10 text-emerald-400 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6"
            >
              <Fuel size={12} />
              <span>Centralized Smart Stations</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-sans font-extrabold tracking-tight mb-6 leading-tight bg-gradient-to-r from-white via-white to-emerald-200 bg-clip-text text-transparent"
            >
              Filling Station Management
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/70 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-light"
            >
              A smart fuel station management system designed to help filling stations monitor fuel inventory, track income, manage operations, and improve daily efficiency through a centralized digital dashboard.
            </motion.p>
          </div>

          {/* Core Showcase for Filling Station Management */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="group bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 rounded-[2.5rem] overflow-hidden backdrop-blur-sm shadow-2xl hover:border-emerald-400/20 transition-all duration-300 flex flex-col md:flex-row items-stretch"
            >
              {/* Product Visual */}
              <div className="relative md:w-1/2 p-6 bg-neutral-900/40 border-b md:border-b-0 md:border-r border-white/5 flex items-center justify-center min-h-[320px]">
                <img 
                  src="/Fuel Station.png" 
                  alt="Filling Station Management Dashboard" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full max-h-[380px] object-contain p-6 transition-transform duration-500 group-hover:scale-[1.03]"
                />
                
                {/* Visual indicator overlay */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center pointer-events-none">
                  <div className="p-3.5 rounded-full bg-emerald-400/10 border border-emerald-400/30 text-emerald-400 mb-2 shadow-lg backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <Maximize2 size={18} />
                  </div>
                  <span className="text-[10px] tracking-wider uppercase opacity-40 group-hover:opacity-75 transition-opacity font-bold font-sans">
                    Core Control Interface
                  </span>
                </div>
              </div>

              {/* Product Specifications */}
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold tracking-widest text-emerald-400 uppercase bg-emerald-400/15 px-3.5 py-1.5 rounded-full">
                      Real-time Analytics
                    </span>
                    <span className="text-white/30 text-xs font-mono">STATION-OPS-v3</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">Complete Station Visibility</h3>
                  
                  <p className="text-white/65 text-sm sm:text-base leading-relaxed font-light">
                    Establish live data pipelines connecting physical nozzle flows, underground storage volumes, cashier shifts, and direct credit ledger entries into a unified, lightweight administrative control console.
                  </p>

                  <ul className="space-y-2.5 text-sm text-white/85 pt-2">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                      <span>Live monitoring of fuel tank levels & stock variance reports.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                      <span>Configurable pricing tiers, fuel dispatch rates, and delivery logs.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                      <span>Direct handling of credit client records, ledgers, and payments.</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-8 border-t border-white/5 mt-8 flex items-center gap-4 text-xs font-mono text-white/40">
                  <span>COMPATIBILITY: INTEGRATED FLOW METERS / CLOUD STORAGE</span>
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
              <span className="inline-block bg-emerald-400 text-dark text-[10px] font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full">
                Operational Transparency
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
                Modernizing filling station operations globally.
              </h2>
              <div className="prose prose-invert text-white/70 text-base md:text-[17px] leading-relaxed space-y-4 font-light">
                <p>
                  The platform provides real-time monitoring of fuel tank levels, stock availability, fuel pricing, delivery management, payroll tracking, financial records, and credit client handling. Station operators can instantly view fuel status, receive low-stock alerts, manage service operations, and maintain accurate business records from a single interface.
                </p>
                <p>
                  By taking the manual guesswork out of daily audits, Filling Station Management improves stock control, reduces manual workload, increases operational transparency, and helps energy business owners make faster, more profitable decisions through real-time telemetry and clean accounting.
                </p>
              </div>
            </div>

            {/* Right key-points grid */}
            <div className="md:col-span-5 space-y-4">
              <div className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl">
                <div className="w-10 h-10 rounded-lg bg-emerald-400/10 flex items-center justify-center text-emerald-400 mb-4">
                  <Gauge size={20} />
                </div>
                <h4 className="font-bold text-lg mb-1.5">Intelligent Loss Detection</h4>
                <p className="text-white/50 text-xs md:text-sm leading-relaxed">
                  Avoid fuel shrinkage or delivery variances with active volume calculations mapped against recorded sales receipts.
                </p>
              </div>

              <div className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl">
                <div className="w-10 h-10 rounded-lg bg-emerald-400/10 flex items-center justify-center text-emerald-400 mb-4">
                  <TrendingUp size={20} />
                </div>
                <h4 className="font-bold text-lg mb-1.5">Streamlined Balance Sheets</h4>
                <p className="text-white/50 text-xs md:text-sm leading-relaxed">
                  Automate the calculation of daily profits, employee payroll tabs, fuel tax metrics, and outstanding client debts.
                </p>
              </div>

              <div className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl">
                <div className="w-10 h-10 rounded-lg bg-emerald-400/10 flex items-center justify-center text-emerald-400 mb-4">
                  <Layers size={20} />
                </div>
                <h4 className="font-bold text-lg mb-1.5">Low Stock Bulletins</h4>
                <p className="text-white/50 text-xs md:text-sm leading-relaxed">
                  Receive pre-emptive notifications when underground compartments cross custom minimum thresholds—preventing dry pump outs.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-20 pl-6 pr-6 md:px-16 container mx-auto max-w-4xl text-center">
        <div className="bg-gradient-to-tr from-emerald-400/5 to-transparent border border-white/10 rounded-[2.5rem] p-8 md:p-14 relative overflow-hidden">
          <div className="absolute -bottom-8 -right-8 w-44 h-44 bg-emerald-400/5 rounded-full blur-3xl pointer-events-none" />
          
          <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Deploy Smart Fuel Mechanics</h3>
          <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-light mb-8">
            Filling Station Management modernizes fuel station operations by improving stock control, reducing manual workload, increasing operational transparency, and helping businesses make faster and more informed decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onContactClick}
              className="px-8 py-4 rounded-full bg-emerald-400 text-dark font-sans font-bold text-sm tracking-wide hover:scale-105 active:scale-95 transition-transform shadow-xl shadow-emerald-400/5 cursor-pointer"
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
              <Mail size={14} className="text-emerald-400" />
              <span>ziloraailabs@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-emerald-400" />
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
