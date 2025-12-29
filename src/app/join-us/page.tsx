"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp, Instagram, Linkedin, Github, Globe, Activity } from 'lucide-react';

export default function JoinUsPage() {
  return (
    <div className="min-h-screen bg-[#FFF4EC] font-sans text-gray-700 pb-10">
      <main className="container mx-auto px-4 pt-10 max-w-5xl space-y-20">
        <HeroSection />
        <RolesSection />
        <FAQSection />
      </main>
    </div>
  );
}

// --- Components ---

function HeroSection() {
  return (
    <section className="text-center space-y-8">
      {/* Title with decorative elements */}
      <div className="relative inline-block">
        <h1 className="text-5xl font-bold text-[#5BA4A5] relative z-10">Join Us!</h1>
        {/* Simple decorative splashes similar to image */}
        <div className="absolute -top-4 -right-6 text-[#A0CED9] opacity-70">
           <span className="text-3xl">✦</span>
        </div>
        <div className="absolute -bottom-2 -left-6 text-[#A0CED9] opacity-70">
           <span className="text-2xl">✦</span>
        </div>
      </div>

      {/* Info Card Container */}
      <div className="bg-[#CDE6E1] rounded-3xl p-8 md:p-12 shadow-sm">
        <div className="grid md:grid-cols-2 gap-8 md:divide-x-2 md:divide-[#5BA4A5]/30">
          
          {/* Column 1 */}
          <div className="text-left md:pr-6 space-y-4">
            <h2 className="text-xl font-bold text-[#2D7A7B] text-center md:text-left">Why You Should Join!</h2>
            <p className="text-sm leading-relaxed text-[#1a4a4b]">
              Join MedTech Nexus to explore the intersection of medicine, technology, and community impact. Through hands-on collaborative events such as case nights, volunteering, fundraiser projects, and networking coffee chats, you will gain real-world experience while contributing to our community as a team. Build lasting connections, develop career-ready skills, and be part of a community where innovation meets compassion.
            </p>
          </div>

          {/* Column 2 */}
          <div className="text-left md:pl-6 space-y-4">
            <h2 className="text-xl font-bold text-[#2D7A7B] text-center md:text-left">Who Can Join?</h2>
            <p className="text-sm leading-relaxed text-[#1a4a4b]">
              As our signature events are case nights and collaborative opportunities, we prioritize saving spots for members who are students at the University of Calgary to inspire and build a strong community of young innovative minds. However, we are always open to have partnerships and guest speakers who are alumni, professionals and individuals who have interests in sharing their knowledge and journey in biotechnology and healthcare to the UCalgary community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function RolesSection() {
  return (
    <section className="flex flex-col items-center space-y-6">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-black uppercase tracking-wider">Roles</h2>
        {/* Custom Heartbeat SVG */}
        <div className="w-64 h-12 mx-auto text-[#D32F2F]">
          <svg viewBox="0 0 200 50" fill="none" stroke="currentColor" strokeWidth="3" className="w-full h-full">
             <path d="M0 25 L80 25 L90 5 L100 45 L110 15 L120 25 L200 25" strokeLinecap="round" strokeLinejoin="round"/>
             <circle cx="200" cy="25" r="3" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* Carousel Component */}
      <div className="flex items-center gap-4 md:gap-8 w-full justify-center">
        <button className="p-2 text-[#5BA4A5] hover:scale-110 transition-transform">
          <ChevronLeft size={48} strokeWidth={2.5} />
        </button>

        <div className="bg-[#EBEBEB] w-full max-w-lg h-64 rounded-2xl flex flex-col items-center justify-center shadow-inner relative px-8">
           <h3 className="text-2xl font-medium text-gray-700 mb-6">[Role Description]</h3>
           <button className="bg-[#5BA4A5] text-white px-6 py-2 rounded-lg font-bold shadow-md hover:bg-[#4a8a8b] transition-colors">
             Apply Now!
           </button>
        </div>

        <button className="p-2 text-[#5BA4A5] hover:scale-110 transition-transform">
          <ChevronRight size={48} strokeWidth={2.5} />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex gap-2 mt-4">
        {[0,1,2,3,4,5].map((dot, idx) => (
          <div key={idx} className={`w-3 h-3 rounded-full ${idx === 2 ? 'bg-gray-600' : 'bg-gray-300'}`}></div>
        ))}
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(3); // Default open to match image

  const faqs = [
    { question: "How long has the team been around?", answer: "We have been operating for roughly 3 years." },
    { question: "How do I get involved?", answer: "Follow our socials and attend our kickoff events!" },
    { question: "What does a case night look like?", answer: "Teams compete to solve real-world medtech problems." },
    { 
      question: "What are some other activities usually hosted?", 
      answer: "Besides our bake sales and fundraisers, during Holiday and year-end seasons we often host fun relaxing cards making events where you can design cards and write letters for your loved ones/donating to Hospitals and Health organizations; as well as other healing activities such as movie nights or socials events for Ucalgary students and members to wind down." 
    },
  ];

  return (
    <section className="flex flex-col items-center w-full max-w-3xl mx-auto space-y-6">
      <div className="text-center mb-4">
        <h2 className="text-4xl font-bold text-black uppercase tracking-wider">FAQ</h2>
         {/* Custom Heartbeat SVG */}
         <div className="w-48 h-12 mx-auto text-[#D32F2F]">
          <svg viewBox="0 0 200 50" fill="none" stroke="currentColor" strokeWidth="3" className="w-full h-full">
             <path d="M0 25 L80 25 L90 5 L100 45 L110 15 L120 25 L200 25" strokeLinecap="round" strokeLinejoin="round"/>
             <circle cx="200" cy="25" r="3" fill="currentColor" />
          </svg>
        </div>
      </div>

      <div className="w-full space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="overflow-hidden rounded-xl">
            <button 
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className={`w-full flex justify-between items-center px-6 py-4 text-left font-bold text-[#2D7A7B] bg-[#CDE6E1] transition-all
              ${openIndex === index ? 'rounded-t-xl' : 'rounded-xl'}`}
            >
              <span className="text-lg">{faq.question}</span>
              {openIndex === index ? <ChevronUp className="text-[#2D7A7B]" /> : <ChevronDown className="text-[#2D7A7B]" />}
            </button>
            
            {openIndex === index && (
              <div className="bg-[#CDE6E1] px-6 pb-6 text-[#1a4a4b] text-sm leading-relaxed rounded-b-xl border-t border-[#5BA4A5]/20">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}