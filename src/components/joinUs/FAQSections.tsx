"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long has the team been around?",
      answer:
        "The Medicine and Technology Nexus is a newly established organization, founded in 2025 and is aiming towards building a collaborative and educational space for everyone to learn, have fun and network.",
    },
    {
      question: "How do I get involved?",
      answer:
        "Our organization goes through normal membership registration once each semester during Clubs Week due to a high volume of applicants. There are two main application streams: with a formal interview, and the other one without interviews. Applicants who wish to become a general member by just joining our event to support us will not be interviewed. However, individuals applying for executive roles will receive an interview from the Medtech Nexus team.",
    },
    {
      question: "What does a case night look like?",
      answer:
        "Case nights are one of MedTech’s signature events, where we will bring up two patients’ cases that involved technology in treatments and diagnosing; in groups, students will do a mini research through our hints and questions regarding the cases, to figure out which technology was used to treat those patients and present their answers + reasoning at the end. The top two teams from each patient’s case who got the closest answers to the answers of the said cases will win prizes and earn certifications.",
    },
    {
      question: "What are some other activities usually hosted?",
      answer:
        "Besides our bake sales and fundraisers, during Holiday and year-end seasons we often host fun relaxing cards making events where you can design cards and write letters for your loved ones/donating to Hospitals and Health organizations; as well as other healing activities such as movie nights or socials events for UCalgary students and members to wind down.",
    },
  ];

  return (
    <section className="mx-auto mb-10 flex w-4/5 flex-col items-center space-y-6 md:w-3/4 lg:w-9/10">
      <div className="mb-4 text-center">
        <h2 className="font-funnel-display text-navy-blue text-5xl font-bold tracking-wider uppercase">
          FAQ
        </h2>
        <div className="mx-auto mt-2">
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
              <span className="md:text-lg lg:text-xl">{faq.question}</span>
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
                  <div className="text-navy-blue px-6 pb-6 text-sm leading-relaxed font-semibold md:text-base">
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
