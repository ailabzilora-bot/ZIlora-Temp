/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from 'react';

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
    <div className="min-h-screen bg-[#8ee900] text-[#4a494c] font-sans flex flex-col font-medium overflow-hidden relative">

      {/* Navbar */}
      <nav className="flex justify-between items-center w-full px-8 md:px-16 lg:px-24 py-8 relative z-20">
        {/* Left: Logo */}
        <div className="text-[19px] font-bold tracking-tight text-[#4a494c] flex-1">
          Zilora AI Labs
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center gap-10 text-[15px] font-medium text-[#7a787f] flex-1 justify-center">
          <a href="#" className="relative text-[#4a494c] hover:text-[#4a494c] transition-colors">
            Labs
            <span className="absolute -bottom-1.5 left-0 w-full h-[1.5px] bg-[#4a494c]"></span>
          </a>
          <a href="#" className="hover:text-[#4a494c] transition-colors">Models</a>
          <a href="#" className="hover:text-[#4a494c] transition-colors">Compute</a>
          <a href="#" className="hover:text-[#4a494c] transition-colors">Docs</a>
        </div>

        {/* Right: Get Started button — video hangs below it via absolute positioning */}
        <div className="flex-1 flex justify-end">
          <div className="relative">
            {/* Button */}
            <button className="relative z-20 bg-[#5c5b61] text-white px-7 py-2.5 rounded-full text-[14px] font-medium hover:bg-[#4a494c] transition-colors">
              Get Started
            </button>

            {/* Video — absolutely positioned below the button, right-aligned to it */}
            <div
              className="absolute right-0 pointer-events-none"
              style={{ top: 'calc(100% - 10px)' }}
            >
              <video
                ref={videoRef}
                src="/animation.mp4"
                autoPlay
                muted
                playsInline
                className="w-auto object-contain"
                style={{
                  /* Width scales with viewport; height locked to span roughly
                     the headline block: 3 lines × ~7.5rem × 1.05 leading ≈ use clamp */
                  width: 'clamp(320px, 36vw, 640px)',
                  height: 'clamp(70080px, 38vw, 900px)',
                  objectPosition: 'top center',
                }}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 w-full relative z-10">
        <div className="flex flex-col w-full max-w-[1600px] mx-auto">

          {/* Text Content — left side only */}
          <div className="max-w-[800px] xl:max-w-[850px] pb-16">
            <h1 className="text-[3.5rem] sm:text-[5rem] lg:text-[7.5rem] leading-[1.05] tracking-[-0.04em] font-bold text-[#4a494c]">
              AI Systems Built for<br />
              Reality. Scaled for<br />
              Impact.
            </h1>

            <p className="mt-8 text-lg sm:text-xl lg:text-[1.375rem] leading-[1.4] text-[#656469] max-w-[800px] mb-12">
              We design human-centric systems that understand the capabilities<br className="hidden lg:block" />
              and limitations of current AI. Our technology handles the efficiency<br className="hidden lg:block" />
              so your people can make the decisions.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <button className="bg-[#5c5b61] text-[#ffffff] px-9 py-4 rounded-full font-medium text-[15px] hover:bg-[#4a494c] transition-colors shadow-sm">
                Launch Project
              </button>
              <button className="bg-white text-[#4a494c] px-9 py-4 rounded-full font-medium text-[15px] hover:bg-neutral-50 transition-colors shadow-sm">
                Read Whitepaper
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
