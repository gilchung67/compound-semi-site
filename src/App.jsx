import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Cpu, Activity, Search, Mail, BookOpen } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const services = [
    {
      title: "Compound Material Growth and Processing",
      icon: <Cpu className="w-10 h-10 text-blue-600" />,
      description: "Expert guidance on bulk growth, epitaxy, and processing steps for SiC and GaN. Optimization of growth and processing parameters for reduced defect density and better device yields."
    },
    {
      title: "Defect Analysis & Metrology",
      icon: <Search className="w-10 h-10 text-blue-600" />,
      description: "Consulting on advanced material and device characterization strategies using SEM, TEM, XRT, XRD, PL, EL, surface laser scan, dark and bright field microscopy, TXRF, XPS, AES, SIMS, AFM, chemical etching, X-pol scan, FT-IR, ellipsometry, I-V & C-V device testing, Hall testing, and DLTS."
    },
    {
      title: "Failure Mechanism Analysis",
      icon: <Activity className="w-10 h-10 text-blue-600" />,
      description: "Root cause analysis of device failure. Linking material imperfections to electrical degradation and reliability issues. Includes statistical correlation of material defects to device performance metrics."
    },
    {
      title: "AI Enhanced Technical Survey & Solution Finding",
      icon: <BookOpen className="w-10 h-10 text-blue-600" />,
      description: "Comprehensive AI-driven surveying of technical literature and patent databases. Rapid identification of prior art and emerging technology trends using advanced AI tools. Verification of AI-driven reports backed by three decades of hands-on experience."
    }
  ];

  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              {/* Logo Image Logic - Using logo2.png to ensure fresh load */}
              <img 
                src="/logo2.png" 
                alt="CompoundSemi.ai Logo" 
                className="h-20 w-auto mr-3 object-contain" 
                onError={(e) => {
                  e.target.style.display = 'none'; // Safely hide if missing
                }}
              />
              <div className="text-2xl font-bold text-blue-900 tracking-tight">
                Compound<span className="text-blue-600">Semi</span>.ai
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-600 hover:text-blue-600 font-medium transition">Expertise</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 font-medium transition">About</a>
              <a href="#contact" className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition shadow-lg hover:shadow-xl">
                Contact Firm
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg border-t border-gray-100">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <a href="#services" onClick={toggleMenu} className="block px-3 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md">Expertise</a>
              <a href="#about" onClick={toggleMenu} className="block px-3 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md">About</a>
              <a href="#contact" onClick={toggleMenu} className="block px-3 py-3 text-blue-600 font-bold">Contact Firm</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-white opacity-90"></div>
          {/* Abstract background pattern representing crystal lattice */}
          <svg className="absolute right-0 top-0 h-full w-1/2 opacity-5 text-blue-500" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0 0 L100 0 L100 100 Z" />
          </svg>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              Advanced Solutions for <br />
              <span className="text-blue-600">Compound Semiconductors</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              Specialized consulting in material growth, defect metrology, and device yield for the next generation of power and RF electronics. <br className="hidden md:block" />
              <span className="font-semibold text-blue-800">The fusion of Semiconductor Physics (First Principles) with Artificial Intelligence (Data-Driven Insights).</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#contact" className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:text-lg transition shadow-md">
                Schedule Consultation
              </a>
              <a href="#services" className="flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 md:text-lg transition">
                View Capabilities
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm">Core Competencies</h2>
            <h3 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Technical Specializations
            </h3>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Bridging the gap between crystal growth defects and final device performance with 30 years hands on experience and advanced AI tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col p-8 bg-slate-50 rounded-2xl hover:shadow-lg transition duration-300 border border-slate-100">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    {service.icon}
                  </div>
                  <h4 className="ml-4 text-xl font-bold text-gray-900">{service.title}</h4>
                </div>
                <p className="text-gray-600 leading-relaxed flex-grow">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us / Approach */}
      <section id="about" className="py-20 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-10 lg:mb-0">
              <h2 className="text-3xl font-extrabold mb-6">
                Data-Driven Semiconductor Intelligence
              </h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                As a specialized Michigan-based firm, we operate at the intersection of materials science and device physics. We don't just identify defects; we build the correlation models that tell you which defects matter to your yield.
              </p>
              <ul className="space-y-4">
                {[
                  "Michigan-based, serving Global Clients",
                  "Expertise in compound semiconductors including SiC and GaN material systems",
                  "Defect Investigation and Customized Metrology Development",
                  "Fast turnaround on Root Cause Analysis"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <ChevronRight className="h-6 w-6 text-blue-400 mr-2 flex-shrink-0" />
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-xl p-8 shadow-2xl transform rotate-1 hover:rotate-0 transition duration-500">
                <h3 className="text-2xl font-bold mb-4">Lead Consultant</h3>
                
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center text-blue-600 font-bold text-xl">
                    GC
                  </div>
                  <div>
                    <p className="font-bold">Gil Chung</p>
                    <p className="text-blue-200 text-sm">Founder & Lead Consultant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-2xl p-8 md:p-12 shadow-sm border border-blue-100">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900">Let's solve your yield challenges</h2>
              <p className="mt-4 text-lg text-gray-600">
                Based in Michigan. Available for remote analysis and on-site consulting.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center justify-center p-6 bg-white rounded-xl shadow-sm border border-blue-100 hover:shadow-md transition">
                 <Mail className="h-8 w-8 text-blue-600 mr-4" />
                 <div className="flex flex-col text-left">
                   <span className="text-gray-900 font-bold text-lg">General Inquiries</span>
                   <a href="mailto:gil.chung@compoundsemi.ai" className="text-blue-600 text-lg hover:underline">gil.chung@compoundsemi.ai</a>
                 </div>
              </div>
              
              <div className="flex items-center justify-center p-6 bg-white rounded-xl shadow-sm border border-blue-100 hover:shadow-md transition">
                 <Activity className="h-8 w-8 text-blue-600 mr-4" />
                 <div className="flex flex-col text-left">
                   <span className="text-gray-900 font-bold text-lg">Lead Consultant</span>
                   <a href="mailto:gil.chung@compoundsemi.ai" className="text-blue-600 text-lg hover:underline">gil.chung@compoundsemi.ai</a>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-8 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} CompoundSemi.ai. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-gray-500">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-gray-500">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;