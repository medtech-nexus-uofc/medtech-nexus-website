"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import RoleDescCards from "./RoleDescCards";
import { roleData } from "@/data/rolesData";

export function RolesSection() {
  const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    let nextIndex = activeIndex + newDirection;
    if (nextIndex < 0) nextIndex = roleData.length - 1;
    if (nextIndex >= roleData.length) nextIndex = 0;
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
    <section className="flex flex-col items-center gap-2">
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

      <div className="flex w-full items-center justify-center gap-2 md:gap-8">
        <button
          className="text-sea-green shrink-0 transition-transform hover:scale-110 active:scale-90"
          onClick={() => paginate(-1)}
        >
          <ChevronLeft size={48} strokeWidth={2.5} />
        </button>

        <div className="relative flex min-h-[450px] w-4/5 items-center justify-center overflow-hidden rounded-2xl md:w-3/4 lg:w-9/10">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 200, damping: 25 },
                opacity: { duration: 0.3 },
              }}
              className="absolute flex w-full justify-center"
            >
              <RoleDescCards {...roleData[activeIndex]} />
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          className="text-sea-green shrink-0 transition-transform hover:scale-110 active:scale-90"
          onClick={() => paginate(1)}
        >
          <ChevronRight size={48} strokeWidth={2.5} />
        </button>
      </div>

      <div className="bg-royal-purple/20 flex gap-1.5 rounded-lg px-2 py-1.5 md:gap-1.5">
        {roleData.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              const dir = idx > activeIndex ? 1 : -1;
              setActiveIndex([idx, dir]);
            }}
            className="group relative size-1.5 md:size-2"
          >
            <motion.div
              animate={{
                backgroundColor: idx === activeIndex ? "#A481F5" : "#C0ACE1",
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
