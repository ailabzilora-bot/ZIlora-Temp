import { motion } from 'motion/react';
import { ArrowLeft, Scale, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';

interface TermsAndConditionsProps {
  onBack: () => void;
}

export default function TermsAndConditions({ onBack }: TermsAndConditionsProps) {
  return (
    <div className="min-h-screen bg-darker text-white font-sans selection:bg-lime selection:text-dark">
      {/* Mini Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-darker/80 backdrop-blur-md border-b border-white/10 px-6 md:px-16 py-5">
        <div className="container mx-auto flex items-center justify-between">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-[15px] font-medium text-white/70 hover:text-lime transition-all group"
          >
            <ArrowLeft size={18} className="transform group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button>
          <div className="font-sans font-extrabold text-xl text-white">Zilora AI Labs</div>
        </div>
      </header>

      {/* Hero Banner / Title */}
      <div className="relative pt-32 pb-16 overflow-hidden">
        {/* Decorative ambient subtle lime blur */}
        <div className="absolute top-[-100px] left-[50%] -translate-x-1/2 w-[500px] h-[500px] bg-lime/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-6 md:px-16 relative z-10 text-center max-w-4xl">
          <span className="inline-block bg-lime/10 text-lime text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
            Agreement
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            Terms & Conditions
          </h1>
          <p className="text-white/40 text-[14px] md:text-base font-medium">
            Last updated: May 20, 2026
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="container mx-auto px-6 md:px-16 pb-24 max-w-4xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-12 backdrop-blur-sm space-y-12 shadow-2xl"
        >
          {/* Introductory Paragraph */}
          <div className="prose prose-invert max-w-none text-white/70 text-base md:text-[17px] leading-relaxed">
            <p>
              Welcome to <span className="font-bold text-white">Zilora AI Labs</span>. These Terms and Conditions govern your use of our website and our professional AI services. By accessing our site or engaging with our services, you represent that you have read, understood, and agree to be bound by these terms.
            </p>
          </div>

          <hr className="border-white/10" />

          {/* 1. Acceptance of Terms */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-lime/10 flex items-center justify-center text-lime font-bold">1</div>
              <h2 className="text-xl md:text-2xl font-bold">Acceptance of Terms</h2>
            </div>
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              By using the Zilora AI Labs website or services, you agree to comply with these Terms and Conditions and our Privacy Policy. If you do not agree with any part of these terms, you must refrain from using our services or accessing our technical resources.
            </p>
          </section>

          {/* 2. Description of Services */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-lime/10 flex items-center justify-center text-lime font-bold">2</div>
              <h2 className="text-xl md:text-2xl font-bold">Description of Services</h2>
            </div>
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              Zilora AI Labs provides human-centric AI systems designed for real-world impact. Our services include, but are not limited to:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                <h3 className="font-bold text-white mb-2">AI Automation & Integration</h3>
                <p className="text-xs md:text-sm text-white/50 leading-relaxed">Automating internal workflows and plugging AI into existing tools like CRMs and ERPs.</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                <h3 className="font-bold text-white mb-2">Conversational AI</h3>
                <p className="text-xs md:text-sm text-white/50 leading-relaxed">24/7 smart chatbots for sales and support.</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                <h3 className="font-bold text-white mb-2">Data Systems</h3>
                <p className="text-xs md:text-sm text-white/50 leading-relaxed">RAG (Retrieval-Augmented Generation) systems, Lead Generation, and Analytic Dashboards.</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                <h3 className="font-bold text-white mb-2">Custom Development</h3>
                <p className="text-xs md:text-sm text-white/50 leading-relaxed">Custom AI applications and AI-integrated web systems.</p>
              </div>
            </div>
            <p className="text-white/60 text-sm md:text-base pt-2">
              We follow a <span className="text-white font-semibold">&quot;Discover, Build, Deploy&quot;</span> methodology, providing end-to-end ownership from strategy to maintenance. We reserve the right to modify or discontinue any service at our discretion.
            </p>
          </section>

          {/* 3. Intellectual Property Rights */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-lime/10 flex items-center justify-center text-lime font-bold">3</div>
              <h2 className="text-xl md:text-2xl font-bold">Intellectual Property Rights</h2>
            </div>
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              All content, branding, code, and AI architectures developed by Zilora AI Labs are protected by intellectual property laws. You may not reproduce, distribute, or display any part of our proprietary technology or website content without our express written consent.
            </p>
          </section>

          {/* 4. User Conduct */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-lime/10 flex items-center justify-center text-lime font-bold">4</div>
              <h2 className="text-xl md:text-2xl font-bold">User Conduct</h2>
            </div>
            <p className="text-white/60 text-sm md:text-base leading-relaxed">
              When interacting with our website or AI systems, you agree <strong className="text-white">not to</strong>:
            </p>
            <ul className="space-y-3 pl-4">
              <li className="flex items-start gap-3">
                <CheckCircle size={16} className="text-lime mt-1 flex-shrink-0" />
                <span className="text-white/70 text-sm md:text-base">Use our AI solutions for any illegal, harmful, or unauthorized activities.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={16} className="text-lime mt-1 flex-shrink-0" />
                <span className="text-white/70 text-sm md:text-base">Attempt to disrupt our network or interfere with the security of our services.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={16} className="text-lime mt-1 flex-shrink-0" />
                <span className="text-white/70 text-sm md:text-base">Collect or store personal data about other users without consent.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={16} className="text-lime mt-1 flex-shrink-0" />
                <span className="text-white/70 text-sm md:text-base">Misrepresent your affiliation with any person or entity when using our contact forms.</span>
              </li>
            </ul>
          </section>

          {/* 5. Disclaimer of Warranties */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-lime/10 flex items-center justify-center text-lime font-bold">5</div>
              <h2 className="text-xl md:text-2xl font-bold">Disclaimer of Warranties</h2>
            </div>
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              Our services are provided on an <span className="text-white font-semibold">&quot;as-is&quot;</span> and <span className="text-white font-semibold">&quot;as-available&quot;</span> basis. While we build systems designed for reality and reliability, we make no warranties regarding the absolute accuracy or completeness of AI-generated insights. Your use of our AI tools is at your own risk.
            </p>
          </section>

          {/* 6. Limitation of Liability */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-lime/10 flex items-center justify-center text-lime font-bold">6</div>
              <h2 className="text-xl md:text-2xl font-bold">Limitation of Liability</h2>
            </div>
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              To the maximum extent permitted by law, Zilora AI Labs and its affiliates shall not be liable for any indirect, incidental, or consequential damages resulting from your use of our services. Our total liability is limited to the amount paid for the specific service in question, if applicable.
            </p>
          </section>

          {/* 7. Termination of Service */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-lime/10 flex items-center justify-center text-lime font-bold">7</div>
              <h2 className="text-xl md:text-2xl font-bold">Termination of Service</h2>
            </div>
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              We reserve the right to suspend or terminate your access to our services at any time, without prior notice, for reasons including a violation of these terms. Upon termination, you must cease all use of Zilora AI Labs’ proprietary content.
            </p>
          </section>

          {/* 8. Governing Law */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-lime/10 flex items-center justify-center text-lime font-bold">8</div>
              <h2 className="text-xl md:text-2xl font-bold">Governing Law</h2>
            </div>
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              These Terms are governed by and construed in accordance with the laws of <span className="text-white font-semibold">Sri Lanka</span>. Any legal disputes related to these terms will be handled exclusively within the courts of Sri Lanka.
            </p>
          </section>

          {/* 9. Modifications */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-lime/10 flex items-center justify-center text-lime font-bold">9</div>
              <h2 className="text-xl md:text-2xl font-bold">Modifications</h2>
            </div>
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              We may update these Terms and Conditions periodically to reflect changes in our technology or business practices. Your continued use of the site following updates constitutes your acceptance of the revised terms.
            </p>
          </section>

          <hr className="border-white/10" />

          {/* 10. Contact Information */}
          <section className="space-y-5 pt-4">
            <div className="flex items-center gap-3">
              <Scale className="text-lime" size={24} />
              <h2 className="text-xl md:text-2xl font-bold">Contact Information</h2>
            </div>
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              If you have questions regarding these Terms, please contact us:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="flex items-center gap-4 text-white/70">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-lime">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-[11px] font-bold tracking-widest text-white/30 uppercase">Email</div>
                  <a href="mailto:ziloraailabs@gmail.com" className="text-sm font-medium hover:text-lime transition-colors">ziloraailabs@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white/70">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-lime">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-[11px] font-bold tracking-widest text-white/30 uppercase">Phone</div>
                  <a href="tel:+94777696177" className="text-sm font-medium hover:text-lime transition-colors">+94 77 769 6177</a>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white/70">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-lime">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-[11px] font-bold tracking-widest text-white/30 uppercase">Location</div>
                  <div className="text-sm font-medium">Kurunegala, Sri Lanka</div>
                </div>
              </div>
            </div>
          </section>
        </motion.div>

        {/* Bottom Back Button */}
        <div className="text-center mt-12">
          <button 
            onClick={onBack}
            className="inline-flex items-center gap-2 bg-lime text-dark font-sans font-bold px-8 py-4 rounded-full hover:scale-105 active:scale-95 transition-all shadow-xl shadow-lime/10"
          >
            <ArrowLeft size={18} />
            <span>Return to Home</span>
          </button>
        </div>
      </main>

      {/* Mini Footer */}
      <footer className="border-t border-white/10 bg-[#0c0c0c] py-8 text-center text-white/30 text-xs">
        <div className="container mx-auto px-6">
          © 2026 Zilora AI Labs. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
