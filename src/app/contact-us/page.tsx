"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Contact() {
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
  const [status, setStatus] = useState<
    "IDLE" | "SUBMITTING" | "SUCCESS" | "ERROR"
  >("IDLE");

  useEffect(() => {
    if (status === "SUCCESS" || status === "ERROR") {
      const timer = setTimeout(() => {
        setStatus("IDLE");
      }, 15000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("SUBMITTING");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setStatus("SUCCESS");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      console.log(error);
      setStatus("ERROR");
    }
  };

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-[#FFF5ED] p-4">
      <div className="relative w-full max-w-2xl px-4 pt-8 pb-24 sm:px-8">
        <div className="pointer-events-none absolute top-15 right-10 hidden h-full w-full lg:block">
          <Image
            src="/svgs/assets/largePinkArrow.svg"
            alt="Arrow"
            width={700}
            height={700}
            className="scale-x-108 scale-y-108"
          />
        </div>

        <div className="relative flex w-full flex-col items-center">
          <div className="relative mb-6">
            <h1 className="font-funnel-display text-rose-pink text-4xl font-bold text-shadow-sm sm:text-6xl">
              Contact Us!
            </h1>
            <div className="absolute -right-8 -bottom-4">
              <Image
                src="/svgs/accents/royalPurpleAccent1.svg"
                alt="Purple Accent"
                width={25}
                height={25}
                className="pointer-events-none"
              />
            </div>
          </div>

          <div className="group relative mb-6 flex w-full max-w-lg">
            <div className="bg-lavender rounded-lg px-4 py-2 text-center text-base font-bold text-white shadow-sm drop-shadow-md">
              <span>Email inquries to medtech.nexus.uofc@gmail.com</span>
            </div>
            <div className="absolute top-1/2 right-0 hidden -translate-y-1/2 sm:block">
              <Image
                src="/svgs/assets/stethoscope1.svg"
                alt="Stethoscope"
                width={50}
                height={50}
                className="pointer-events-none scale-150 rotate-30"
              />
            </div>
          </div>

          <form
            className="z-10 w-full max-w-lg space-y-5"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="border-royal-purple placeholder-lavender w-full rounded-xl border-2 bg-white px-4 py-3 text-gray-700 drop-shadow-md transition-colors focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] focus:outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="border-royal-purple placeholder-lavender w-full rounded-xl border-2 bg-white px-4 py-3 text-gray-700 drop-shadow-md transition-colors focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] focus:outline-none"
            />

            <textarea
              rows={6}
              name="message"
              placeholder="Message..."
              required
              className="border-royal-purple placeholder-lavender w-full resize-none rounded-xl border-2 bg-white px-4 py-3 text-gray-700 drop-shadow-md transition-colors focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] focus:outline-none"
            />

            <div className="relative flex w-full justify-center lg:justify-end">
              <button
                type="submit"
                disabled={status === "SUBMITTING"}
                className="bg-royal-purple z-20 rounded-2xl border-4 border-white px-10 py-2.5 font-bold text-white shadow-[4px_4px_0_0_rgba(0,0,0,0.2)] transition-all hover:bg-[#8B5CF6] active:translate-y-1 active:shadow-none disabled:opacity-50 lg:mt-1 lg:mr-8"
              >
                {status === "SUBMITTING" ? "Sending..." : "Submit"}
              </button>
            </div>

            <div className="pointer-events-none fixed top-20 right-0 z-100 flex w-full max-w-xs flex-col gap-4">
              {status === "SUCCESS" && (
                <div className="animate-in fade-in slide-in-from-right-8 bg-pistachio text-sea-green pointer-events-auto rounded-xl border-2 border-white p-4 text-sm font-bold shadow-lg duration-500">
                  <div className="flex items-center justify-between">
                    <span>Message sent! We&apos;ll get back to you soon.</span>
                    <button
                      onClick={() => setStatus("IDLE")}
                      className="ml-2 opacity-50 hover:opacity-100"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              )}

              {status === "ERROR" && (
                <div className="animate-in fade-in slide-in-from-right-8 bg-rose-pink pointer-events-auto rounded-xl border-2 border-white p-4 font-bold text-red-900 shadow-lg duration-500">
                  <div className="flex items-center justify-between">
                    <span>Oops! Something went wrong. Please try again.</span>
                    <button
                      onClick={() => setStatus("IDLE")}
                      className="ml-2 opacity-50 hover:opacity-100"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
