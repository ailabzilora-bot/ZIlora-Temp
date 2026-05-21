import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Sparkles, Scissors, Users, Eye, CheckCircle, Mail, Phone, MapPin, Smile, Zap } from 'lucide-react';

interface HairSaloonAIProps {
  onBack: () => void;
  onContactClick: () => void;
}

export default function HairSaloonAI({ onBack, onContactClick }: HairSaloonAIProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'men' | 'women'>('all');

  return (
    <div className="min-h-screen bg-darker text-white font-sans selection:bg-lime selection:text-dark">
      {/* Fixed Sticky Header for Products */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-darker/80 backdrop-blur-md border-b border-white/10 px-6 md:px-16 py-5">
        <div className="container mx-auto flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-[15px] font-medium text-white/70 hover:text-lime transition-all group"
          >
            <ArrowLeft size={18} className="transform group-hover:-translate-x-1 transition-transform" />
            <span>Back to Labs</span>
          </button>
          <div className="font-sans font-extrabold text-xl text-white tracking-tight">Zilora AI Labs</div>
        </div>
      </header>

      {/* Hero Showcase Area */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        {/* Subtle decorative backdrops */}
        <div className="absolute top-[-100px] left-[5%] w-[400px] h-[400px] bg-lime/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-lime/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-lime/10 text-lime text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6"
            >
              <Sparkles size={12} />
              <span>Proprietary AI Product</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-sans font-extrabold tracking-tight mb-6 leading-tight"
            >
              Hair Saloon AI
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/70 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-light"
            >
              An AI-powered virtual styling system designed for both men’s and women’s salons. 
              Customers can upload a photo and instantly preview different hairstyles, hair colors, 
              beard styles, and beauty looks before making a real styling decision.
            </motion.p>
          </div>

          {/* Interactive Showcase: Hair Style Men & Women */}
          <div className="max-w-5xl mx-auto">
            {/* Showcase Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Women's Showcase Card */}
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="group bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden backdrop-blur-sm shadow-xl hover:border-lime/25 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="p-8 pb-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-bold tracking-widest text-lime uppercase bg-lime/15 px-3 py-1 rounded-full">
                      Female Custom Lookbook
                    </span>
                    <p className="text-white/30 text-xs font-mono">MODEL-W04</p>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 tracking-tight">Female Trends & Aesthetics</h3>
                  <p className="text-white/65 text-sm leading-relaxed mb-6">
                    From sleek bobs and curtain bangs to bold highlights and creative coloring. Provide an interactive beauty layout where female clients can explore diverse length adjustments and shade transitions seamlessly.
                  </p>
                </div>

                {/* Image Area */}
                <div className="relative h-[280px] sm:h-[340px] bg-neutral-900/40 border-t border-white/5 overflow-hidden flex items-center justify-center">
                  <img 
                    src="/Hair Style Women.png" 
                    alt="Hair Style Women" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  {/* Stylized Overlay in case the image is an empty file / fails to load */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-80 pointer-events-none" />
                  
                  {/* Stylized placeholder elements in case image is completely empty/blank (visual decoration) */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center pointer-events-none">
                    <div className="p-3.5 rounded-full bg-lime/10 border border-lime/30 text-lime mb-2 shadow-lg backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <Eye size={20} />
                    </div>
                    <span className="text-xs tracking-wider uppercase opacity-40 group-hover:opacity-80 transition-opacity font-bold font-sans">
                      Lookbook Showcase
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Men's Showcase Card */}
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
                className="group bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden backdrop-blur-sm shadow-xl hover:border-lime/25 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="p-8 pb-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-bold tracking-widest text-lime uppercase bg-lime/15 px-3 py-1 rounded-full">
                      Male Style Engine
                    </span>
                    <p className="text-white/30 text-xs font-mono">MODEL-M10</p>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 tracking-tight">Male Hair & Beard Configurator</h3>
                  <p className="text-white/65 text-sm leading-relaxed mb-6">
                    A customizable lookbook containing the latest male hairstyles, precision beard trims, fades, and hair color options. Allow your clients to try iconic styles on their own face before picking up the scissors.
                  </p>
                </div>

                {/* Image Area */}
                <div className="relative h-[280px] sm:h-[340px] bg-neutral-900/40 border-t border-white/5 overflow-hidden flex items-center justify-center">
                  <img 
                    src="/Hair Style Men.png" 
                    alt="Hair Style Men" 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  {/* Stylized Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-80 pointer-events-none" />
                  
                  {/* Stylized placeholder elements */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center pointer-events-none">
                    <div className="p-3.5 rounded-full bg-lime/10 border border-lime/30 text-lime mb-2 shadow-lg backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <Eye size={20} />
                    </div>
                    <span className="text-xs tracking-wider uppercase opacity-40 group-hover:opacity-80 transition-opacity font-bold font-sans">
                      Lookbook Showcase
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Core Features & Descriptions */}
      <section className="py-20 bg-[#0e0e11] border-y border-white/10 relative">
        <div className="container mx-auto px-6 md:px-16 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            
            {/* Left explanation block */}
            <div className="md:col-span-7 space-y-6">
              <span className="inline-block bg-lime text-dark text-[10px] font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full">
                Core Methodology
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
                Modernizing the hair styling and makeup experience.
              </h2>
              <div className="prose prose-invert text-white/70 text-base md:text-[17px] leading-relaxed space-y-4 font-light">
                <p>
                  The platform includes customizable style libraries for male and female trends, allowing salons to offer personalized previews based on customer preferences. Using advanced AI image generation, the system creates realistic transformations within seconds, helping clients confidently choose the styles that suit them best.
                </p>
                <p>
                  By taking the suspense out of hair coloring and shearing cuts, we introduce a powerful customer touchpoint that converts general style anxiety into dynamic confidence.
                </p>
              </div>
            </div>

            {/* Right key-points grid */}
            <div className="md:col-span-5 space-y-4">
              <div className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl">
                <div className="w-10 h-10 rounded-lg bg-lime/10 flex items-center justify-center text-lime mb-4">
                  <Scissors size={20} />
                </div>
                <h4 className="font-bold text-lg mb-1.5">No Styling Regrets</h4>
                <p className="text-white/50 text-xs md:text-sm leading-relaxed">
                  Reduces customer anxiety and eliminates uncertainty before the cut begins.
                </p>
              </div>

              <div className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl">
                <div className="w-10 h-10 rounded-lg bg-lime/10 flex items-center justify-center text-lime mb-4">
                  <Users size={20} />
                </div>
                <h4 className="font-bold text-lg mb-1.5">Deep Client Satisfaction</h4>
                <p className="text-white/50 text-xs md:text-sm leading-relaxed">
                  Empowers clients with customized visualization matching their direct requests.
                </p>
              </div>

              <div className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl">
                <div className="w-10 h-10 rounded-lg bg-lime/10 flex items-center justify-center text-lime mb-4">
                  <Zap size={20} />
                </div>
                <h4 className="font-bold text-lg mb-1.5">Interactive Tech Solution</h4>
                <p className="text-white/50 text-xs md:text-sm leading-relaxed">
                  Places your salon ahead of competition by providing state-of-the-art AI previews.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-20 pl-6 pr-6 md:px-16 container mx-auto max-w-4xl text-center">
        <div className="bg-gradient-to-tr from-lime/5 to-transparent border border-white/10 rounded-[2.5rem] p-8 md:p-14 relative overflow-hidden">
          <div className="absolute -bottom-8 -right-8 w-44 h-44 bg-lime/5 rounded-full blur-3xl pointer-events-none" />
          
          <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">confidently choose the styles that suit you best</h3>
          <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-light mb-8">
            Hair Saloon AI modernizes the salon experience by reducing uncertainty, improving customer satisfaction, and giving salons a more interactive and technology-driven service experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onContactClick}
              className="px-8 py-4 rounded-full bg-lime text-dark font-sans font-bold text-sm tracking-wide hover:scale-105 active:scale-95 transition-transform shadow-xl shadow-lime/5 cursor-pointer"
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
      <footer className="bg-[#0b0b0d] border-t border-white/10 py-16">
        <div className="container mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl">
          <div className="text-left">
            <h5 className="font-extrabold text-xl text-white">Zilora AI Labs</h5>
            <p className="text-white/30 text-xs mt-1">Innovative human-centric AI solutions deployed globally.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 text-sm text-white/55">
            <div className="flex items-center gap-2">
              <Mail size={14} className="text-lime" />
              <span>ziloraailabs@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={14} className="text-lime" />
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
