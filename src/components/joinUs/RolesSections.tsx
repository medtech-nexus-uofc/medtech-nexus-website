"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const ROLES = ["Events", "Marketing", "Finance", "Developer"];

export function RolesSection() {
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
    <section className="flex flex-col items-center space-y-5">
      <div className="text-center">
        <h2 className="font-funnel-display text-navy-blue text-5xl font-bold uppercase">
          Roles
        </h2>
        <div className="mx-auto mt-2">
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
        <div className="relative flex h-80 w-full max-w-lg flex-col items-center justify-center overflow-hidden rounded-2xl bg-white shadow-inner drop-shadow-md">
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
              <button className="bg-rose-pink pointer-events-none rounded-lg px-6 py-2 text-lg font-bold text-white shadow-md transition-colors">
                Applications closed!
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
      <div className="flex gap-1.5 rounded-lg bg-[#D9D9D9] p-2 md:gap-2">
        {ROLES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              const dir = idx > activeIndex ? 1 : -1;
              setActiveIndex([idx, dir]);
            }}
            className="group relative size-1.5 md:h-2 md:w-2"
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
