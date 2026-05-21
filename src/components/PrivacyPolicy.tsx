import { motion } from 'motion/react';
import { ArrowLeft, Shield, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export default function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
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
            Legal & Trust
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            Privacy Policy
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
              Your privacy is our priority. At <span className="font-bold text-white">Zilora AI Labs</span> (&quot;we,&quot; &quot;our,&quot; &quot;us&quot;), we are committed to protecting your personal data through transparent privacy practices and a strong commitment to security. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our AI-driven services, including AI Automation, Chatbots, and Custom AI Applications.
            </p>
            <p className="mt-4">
              By accessing our services or contacting us, you consent to the terms outlined in this policy.
            </p>
          </div>

          <hr className="border-white/10" />

          {/* 1. Information We Collect */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-lime/10 flex items-center justify-center text-lime font-bold">1</div>
              <h2 className="text-xl md:text-2xl font-bold">Information We Collect</h2>
            </div>
            <p className="text-white/60 text-sm md:text-base leading-relaxed">
              We may collect several types of information to provide you with high-quality AI solutions:
            </p>
            <ul className="space-y-4 pl-4 mt-4">
              <li className="flex items-start gap-3">
                <CheckCircle size={16} className="text-lime mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-white font-semibold">Personal Information:</strong>
                  <span className="text-white/60 block mt-1">When you fill out our contact form or inquire about a service (such as RAG Systems or Lead Generation), we collect your <span className="text-white">name, email address</span>, and any details you provide in your message.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={16} className="text-lime mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-white font-semibold">Usage Data:</strong>
                  <span className="text-white/60 block mt-1">We automatically collect technical information about how you interact with our site, including your <span className="text-white">IP address, browser type, and pages viewed</span>.</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle size={16} className="text-lime mt-1 flex-shrink-0" />
                <div>
                  <strong className="text-white font-semibold">Cookies and Tracking:</strong>
                  <span className="text-white/60 block mt-1">We use cookies to enhance your experience and understand your preferences. You can manage these settings through your individual browser preferences.</span>
                </div>
              </li>
            </ul>
          </section>

          {/* 2. How We Use Your Information */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-lime/10 flex items-center justify-center text-lime font-bold">2</div>
              <h2 className="text-xl md:text-2xl font-bold">How We Use Your Information</h2>
            </div>
            <p className="text-white/60 text-sm md:text-base leading-relaxed">
              Zilora AI Labs uses the information collected to:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                <h3 className="font-bold text-white mb-2">Operate & Maintain Services</h3>
                <p className="text-xs md:text-sm text-white/50 leading-relaxed">To build and deploy your custom AI systems, such as analytic dashboards or web integrations.</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                <h3 className="font-bold text-white mb-2">Communication</h3>
                <p className="text-xs md:text-sm text-white/50 leading-relaxed">To respond to your inquiries within 24 hours and provide service-related updates.</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                <h3 className="font-bold text-white mb-2">Personalization</h3>
                <p className="text-xs md:text-sm text-white/50 leading-relaxed">To tailor our AI models and recommendations to fit your specific business workflows.</p>
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                <h3 className="font-bold text-white mb-2">Security</h3>
                <p className="text-xs md:text-sm text-white/50 leading-relaxed">To protect our website, our technical infrastructure, and our users.</p>
              </div>
            </div>
          </section>

          {/* 3. Sharing Your Information */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-lime/10 flex items-center justify-center text-lime font-bold">3</div>
              <h2 className="text-xl md:text-2xl font-bold">Sharing Your Information</h2>
            </div>
            <p className="text-white/60 text-sm md:text-base leading-relaxed">
              We do not sell your data. We may share information only in the following scenarios:
            </p>
            <ul className="space-y-3 pl-4">
              <li className="flex items-start gap-2.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-lime mt-2"></span>
                <span className="text-white/70 text-sm md:text-base"><strong className="text-white">Service Providers:</strong> With trusted vendors who assist us in strategy, deployment, or maintenance.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-lime mt-2"></span>
                <span className="text-white/70 text-sm md:text-base"><strong className="text-white">Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-lime mt-2"></span>
                <span className="text-white/70 text-sm md:text-base"><strong className="text-white">Legal Requirements:</strong> To comply with legal obligations or valid requests from public authorities.</span>
              </li>
            </ul>
          </section>

          {/* 4. Security of Your Information */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-lime/10 flex items-center justify-center text-lime font-bold">4</div>
              <h2 className="text-xl md:text-2xl font-bold">Security of Your Information</h2>
            </div>
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              We prioritize the security of your data by implementing <span className="text-white font-semibold">industry-standard security measures</span>. While we strive for absolute protection, please note that no system is 100% secure, and we cannot guarantee complete protection against unauthorized access.
            </p>
          </section>

          {/* 5. Your Privacy Rights */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-lime/10 flex items-center justify-center text-lime font-bold">5</div>
              <h2 className="text-xl md:text-2xl font-bold">Your Privacy Rights</h2>
            </div>
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              Depending on your location, you may have the following rights regarding your data:
            </p>
            <ul className="space-y-2 pl-4">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-lime"></span>
                <span className="text-white/70 text-sm md:text-base">The right to <strong className="text-white">access and update</strong> your personal information.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-lime"></span>
                <span className="text-white/70 text-sm md:text-base">The right to <strong className="text-white">request deletion</strong> of your data (subject to legal exceptions).</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-lime"></span>
                <span className="text-white/70 text-sm md:text-base">The right to <strong className="text-white">data portability</strong>.</span>
              </li>
            </ul>
            <p className="text-white/60 text-sm md:text-base pt-2">
              To exercise these rights, please contact us at <a href="mailto:ziloraailabs@gmail.com" className="text-lime hover:underline font-bold">ziloraailabs@gmail.com</a>.
            </p>
          </section>

          {/* 6. Third-Party Links */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-lime/10 flex items-center justify-center text-lime font-bold">6</div>
              <h2 className="text-xl md:text-2xl font-bold">Third-Party Links</h2>
            </div>
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              Our website may contain links to external sites or integrations (such as CRMs or ERPs). Zilora AI Labs is not responsible for the privacy practices of these third-party sites, and we recommend reviewing their policies separately.
            </p>
          </section>

          {/* 7. Children's Privacy */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-lime/10 flex items-center justify-center text-lime font-bold">7</div>
              <h2 className="text-xl md:text-2xl font-bold">Children&apos;s Privacy</h2>
            </div>
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              We do not knowingly collect information from children under the age of 13. If you believe such data has been collected, please notify us immediately so we can take steps to delete it.
            </p>
          </section>

          {/* 8. Changes to This Policy */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-lime/10 flex items-center justify-center text-lime font-bold">8</div>
              <h2 className="text-xl md:text-2xl font-bold">Changes to This Policy</h2>
            </div>
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              We may update this Privacy Policy periodically to reflect changes in our AI services or legal requirements. We encourage you to review this page regularly to stay informed.
            </p>
          </section>

          <hr className="border-white/10" />

          {/* 9. Contact Us */}
          <section className="space-y-5 pt-4">
            <div className="flex items-center gap-3">
              <Shield className="text-lime" size={24} />
              <h2 className="text-xl md:text-2xl font-bold">Contact Us</h2>
            </div>
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
              If you have any questions about this Privacy Policy or how we handle your data, please reach out to us:
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
                  <div className="text-[11px] font-bold tracking-widest text-white/30 uppercase">Address</div>
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
