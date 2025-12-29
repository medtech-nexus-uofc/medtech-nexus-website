"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";

// --- Constants ---
const ROLES = ["Events Team", "Social Media Team", "Web Development Team"];

export default function JoinUsPage() {
  return (
    <div className="bg-bone-white font-assistant min-h-screen pb-10">
      <main className="container mx-auto max-w-5xl space-y-20 px-4 pt-10">
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
    <section className="space-y-12 text-center">
      {/* Title with decorative elements */}
      <div className="relative inline-block">
        <h1 className="font-funnel-display text-sea-green text-6xl font-bold text-shadow-sm">
          Join Us!
        </h1>
        {/* Simple decorative splashes similar to image */}
        <div className="absolute -top-4 -right-6 rotate-107">
          <Image
            src="/svgs/accents/paleBlueAccent1.svg"
            alt="Accent"
            width={25}
            height={25}
          />
        </div>
        <div className="absolute -bottom-4 -left-7 scale-x-[-1] rotate-[-173]">
          <Image
            src="/svgs/accents/paleBlueAccent2.svg"
            alt="Accent"
            width={25}
            height={25}
          />
        </div>
      </div>

      {/* Info Card Container */}
      <div className="bg-pistachio rounded-xl p-8 shadow-sm md:p-12">
        <div className="md:divide-sea-green grid gap-8 md:grid-cols-2 md:divide-x-4">
          {/* Column 1 */}
          <div className="space-y-4 text-left md:pr-14">
            <h2 className="text-deep-ice-blue text-center text-3xl font-bold">
              Why You Should Join!
            </h2>
            <p className="text-justify leading-relaxed text-[#012E55] lg:text-lg">
              Join MedTech Nexus to explore the intersection of medicine,
              technology, and community impact. Through hands-on collaborative
              events such as case nights, volunteering, fundraiser projects, and
              networking coffee chats, you will gain real-world experience while
              contributing to our community as a team. Build lasting
              connections, develop career-ready skills, and be part of a
              community where innovation meets compassion.
            </p>
          </div>

          {/* Column 2 */}
          <div className="space-y-4 text-left md:pl-6">
            <h2 className="text-deep-ice-blue text-center text-3xl font-bold">
              Who Can Join?
            </h2>
            <p className="text-justify leading-relaxed text-[#012E55] lg:text-lg">
              As our signature events are case nights and collaborative
              opportunities, we prioritize saving spots for members who are
              students at the University of Calgary to inspire and build a
              strong community of young innovative minds. However, we are always
              open to have partnerships and guest speakers who are alumni,
              professionals and individuals who have interests in sharing their
              knowledge and journey in biotechnology and healthcare to the
              UCalgary community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function RolesSection() {
  const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    let nextIndex = activeIndex + newDirection;
    if (nextIndex < 0) nextIndex = ROLES.length - 1;
    if (nextIndex >= ROLES.length) nextIndex = 0;
    setActiveIndex([nextIndex, newDirection]);
  };

  // Animation variants for the sliding effect
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  return (
    <section className="flex flex-col items-center space-y-6">
      <div className="text-center">
        <h2 className="font-funnel-display text-6xl font-bold tracking-wider text-black uppercase">
          Roles
        </h2>
        <div className="mx-auto text-[#D81827]">
          <Image
            src="/svgs/accents/ecgLong.svg"
            alt="Heartbeat"
            width={350}
            height={150}
          />
        </div>
      </div>

      {/* Carousel Component */}
      <div className="flex w-full items-center justify-center gap-4 md:gap-8">
        <button
          className="text-sea-green transition-transform hover:scale-110 active:scale-90"
          onClick={() => paginate(-1)}
        >
          <ChevronLeft size={48} strokeWidth={2.5} />
        </button>

        {/* Animated Container */}
        <div className="relative flex h-64 w-full max-w-lg flex-col items-center justify-center overflow-hidden rounded-2xl bg-[#EBEBEB] shadow-inner">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute flex flex-col items-center justify-center px-8 text-center"
            >
              <h3 className="mb-6 text-2xl font-medium text-gray-700">
                {ROLES[activeIndex]}
              </h3>
              <button className="bg-sea-green rounded-lg px-6 py-2 font-bold text-white shadow-md transition-colors hover:bg-[#4a8a8b]">
                Apply Now!
              </button>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          className="text-sea-green transition-transform hover:scale-110 active:scale-90"
          onClick={() => paginate(1)}
        >
          <ChevronRight size={48} strokeWidth={2.5} />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex gap-2 rounded-sm bg-[#D9D9D9] p-1.5">
        {ROLES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              const dir = idx > activeIndex ? 1 : -1;
              setActiveIndex([idx, dir]);
            }}
            className="group relative h-3 w-3"
          >
            <motion.div
              animate={{
                backgroundColor: idx === activeIndex ? "#707070" : "#999999",
                scale: idx === activeIndex ? 1.2 : 1,
              }}
              className="h-full w-full rounded-full transition-colors"
            />
          </button>
        ))}
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(3); // Default open to match image

  const faqs = [
    { question: "How long has the team been around?", answer: "Placeholder" },
    { question: "How do I get involved?", answer: "Placeholder" },
    { question: "What does a case night look like?", answer: "Placeholder" },
    {
      question: "What are some other activities usually hosted?",
      answer:
        "Besides our bake sales and fundraisers, during Holiday and year-end seasons we often host fun relaxing cards making events where you can design cards and write letters for your loved ones/donating to Hospitals and Health organizations; as well as other healing activities such as movie nights or socials events for UCalgary students and members to wind down.",
    },
  ];

  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col items-center space-y-6">
      <div className="mb-4 text-center">
        <h2 className="font-funnel-display text-6xl font-bold tracking-wider text-black uppercase">
          FAQ
        </h2>
        {/* Custom Heartbeat SVG */}
        <div className="mx-auto text-[#D32F2F]">
          <Image
            src="/svgs/accents/ecgShort.svg"
            alt="Heartbeat"
            width={250}
            height={150}
          />
        </div>
      </div>

      <div className="w-full space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-pistachio overflow-hidden rounded-xl">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="text-deep-ice-blue flex w-full items-center justify-between px-6 py-4 text-left font-bold"
            >
              <span className="text-lg">{faq.question}</span>
              {/* Animate the icon rotation */}
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="text-deep-ice-blue" />
              </motion.div>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-sm leading-relaxed text-[#012E55]">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
