/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from 'react';
import { ArrowRight, ArrowDownRight, MoveUpRight } from 'lucide-react';

export default function App() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.currentTime >= 5) {
        video.pause();
        video.currentTime = 5;
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#8ee900] text-[#1c1c1c] font-sans overflow-hidden relative selection:bg-black selection:text-[#8ee900]">
      {/* Navbar */}
      <nav className="flex justify-between items-center w-full px-6 py-6 lg:px-12 relative z-50">
        {/* Logo */}
        <div className="flex items-center gap-2 font-black text-2xl tracking-tighter">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
             <path d="M4 4h6l4 8H8z" />
             <path d="M14 4h6l-4 8h-6z" />
             <path d="M4 12h6l4 8H8z" />
             <path d="M14 12h6l-4 8h-6z" />
          </svg>
          ZILORA
        </div>

        {/* Links */}
        <div className="hidden lg:flex items-center gap-10 text-sm font-bold tracking-widest uppercase">
          <a href="#" className="hover:opacity-60 transition-opacity">Labs</a>
          <a href="#" className="hover:opacity-60 transition-opacity">Models</a>
          <a href="#" className="hover:opacity-60 transition-opacity">Compute</a>
          <a href="#" className="hover:opacity-60 transition-opacity">Docs</a>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-6">
          <a href="#" className="hidden sm:block text-sm font-bold uppercase tracking-widest hover:opacity-60 transition-opacity">Sign In</a>
          <button className="bg-white text-black px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-neutral-100 transition-colors shadow-sm">
            Launch Project
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="relative w-full h-[calc(100vh-96px)] flex justify-center items-center">

        {/* Huge White Text Background (Split Left/Right to avoid the video box in middle) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-between px-4 lg:px-12 z-0 pointer-events-none">
          <h1 className="text-white text-[25vw] lg:text-[22vw] font-black leading-none tracking-tighter select-none">AI</h1>
          <h1 className="text-white text-[25vw] lg:text-[22vw] font-black leading-none tracking-tighter select-none">SYS</h1>
        </div>

        {/* Center Video (The Robot) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] sm:w-full max-w-[700px] lg:max-w-[900px] h-[95vh] z-20 pointer-events-none flex items-center justify-center mix-blend-darken">
          <video
            ref={videoRef}
            src="/animation.mp4"
            autoPlay
            muted
            playsInline
            className="w-full h-full object-contain object-bottom scale-100 lg:scale-[1.15] transform-gpu"
          />
        </div>

        {/* Top Left Text */}
        <div className="absolute top-2 lg:top-8 left-6 lg:left-12 z-30 max-w-sm">
          <h2 className="text-[#1c1c1c] font-black text-xl lg:text-2xl uppercase tracking-tighter leading-[1.1]">
            Build Systems for Reality.<br />
            Scale for Impact.
          </h2>
          <ArrowDownRight className="mt-4 w-8 h-8 opacity-60 flex-shrink-0" />
        </div>

        {/* Top Right Users / Avatars */}
        <div className="absolute top-2 lg:top-8 right-6 lg:right-12 z-30 flex flex-col items-end">
          <div className="flex -space-x-3 mb-3">
            <img src="https://i.pravatar.cc/100?img=12" alt="User 1" className="w-[42px] h-[42px] rounded-full border-2 border-[#8ee900] object-cover" />
            <img src="https://i.pravatar.cc/100?img=33" alt="User 2" className="w-[42px] h-[42px] rounded-full border-2 border-[#8ee900] object-cover" />
            <img src="https://i.pravatar.cc/100?img=47" alt="User 3" className="w-[42px] h-[42px] rounded-full border-2 border-[#8ee900] object-cover" />
          </div>
          <p className="text-xs font-bold uppercase tracking-widest text-[#1c1c1c] text-right leading-tight">
            Trusted by Builders<br />
            <span className="opacity-70">— Scale with confidence</span>
          </p>
        </div>

        {/* Bottom Left Panel (Waveform) */}
        <div className="absolute bottom-6 lg:bottom-10 left-6 lg:left-12 z-40 bg-[#a2fa00]/70 lg:bg-[#a2fa00]/40 backdrop-blur-3xl rounded-[2rem] p-5 lg:p-6 shadow-[0_8px_32px_rgba(0,0,0,0.1)] border border-white/30 w-[calc(100%-48px)] sm:w-96">
          <div className="flex items-center gap-4 mb-6 mt-1 px-2">
            <div className="w-5 h-5 rounded-full border-[3px] border-black flex items-center justify-center shrink-0">
              <div className="w-1.5 h-1.5 bg-black rounded-full" />
            </div>
            {/* Fake Waveform */}
            <div className="flex-1 flex items-center gap-1.5 h-8">
              {[4, 8, 5, 10, 6, 9, 3, 7, 5, 12, 8, 4, 6, 2, 5, 8, 4].map((h, i) => (
                <div key={i} className="w-[2.5px] bg-black/80 rounded-full" style={{ height: `${h * 10}%` }} />
              ))}
            </div>
          </div>
          <button className="bg-transparent border-[2px] border-black text-black w-full py-4 rounded-xl font-black uppercase tracking-widest text-[11px] lg:text-xs hover:bg-black hover:text-[#8ee900] transition-colors flex items-center justify-between px-6">
            Read Whitepaper - It's Free
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Right Tags */}
        <div className="absolute bottom-6 lg:bottom-10 right-6 lg:right-12 z-40 max-w-[280px] lg:max-w-[420px] flex flex-wrap gap-2 lg:gap-3 justify-end items-end">
          {/* Decorative Arrow element */}
          <div className="hidden lg:flex absolute -top-16 -right-6 bg-[#a2fa00]/40 backdrop-blur-3xl w-28 h-28 rounded-[2rem] items-center justify-center border border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.1)] pointer-events-none">
             <MoveUpRight className="w-12 h-12 stroke-[1.5] text-black" />
          </div>
          
          {['Models', 'Compute', 'Labs', 'Vision', 'Voice', 'Docs', 'Enterprise'].map((tag, i) => (
            <span 
              key={tag}
              className={`px-4 py-2 lg:px-5 lg:py-2.5 rounded-full text-[10px] lg:text-xs font-black uppercase tracking-[0.15em] cursor-pointer transition-colors border-[2px] border-black shadow-sm
                ${i === 0 ? 'bg-black text-[#8ee900]' : 'bg-transparent text-black hover:bg-black hover:text-[#8ee900]'}`}
            >
              {tag}
            </span>
          ))}
        </div>

      </main>
    </div>
  );
}