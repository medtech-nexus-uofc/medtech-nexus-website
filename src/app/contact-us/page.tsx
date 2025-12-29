import Image from "next/image";

export default function Contact() {
  return (
    // <div className="flex flex-row items-center justify-center">
    //   <h1 className="font-funnel-display text-rose-pink text-2xl font-bold text-shadow-sm md:text-3xl lg:text-4xl">
    //     Contact Us!
    //   </h1>
    // </div>

    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#FFF5ED] p-4 font-sans">
      {/* Main Container */}
      <div className="relative w-full max-w-2xl px-4 pt-10 pb-24 sm:px-8">
        {/* --- Background Arrow SVG --- 
            Positioned absolutely to wrap around the content. 
        */}
        <div className="pointer-events-none absolute top-13 right-10 hidden h-full w-full md:block">
          <Image
            src="/svgs/assets/largePinkArrow.svg"
            alt="Arrow"
            width={700}
            height={700}
            className="scale-x-108 scale-y-102"
          />
        </div>

        {/* --- Content Wrapper --- */}
        <div className="relative flex w-full flex-col items-center">
          {/* Header Section */}
          <div className="relative mb-6">
            <h1 className="font-funnel-display text-rose-pink text-6xl font-bold text-shadow-sm">
              Contact Us!
            </h1>
            {/* Purple Accent Icon */}
            <div className="absolute -right-8 -bottom-4">
              <Image
                src="/svgs/accents/royalPurpleAccent1.svg"
                alt="Purple Accent"
                width={25}
                height={25}
              />
            </div>
          </div>

          {/* Email Info Bar */}
          <div className="group relative mb-6 flex w-full max-w-lg">
            <div className="bg-lavender rounded-lg px-4 py-2 text-center text-base font-bold text-white shadow-sm">
              <span>Email inquries to medtech.nexus.uofc@gmail.com</span>
            </div>
            {/* Stethoscope Icon (Positioned absolutely to the right of the bar) */}
            <div className="absolute top-1/2 right-0 hidden -translate-y-1/2 sm:block">
              <Image
                src="/svgs/assets/stethoscope1.svg"
                alt="Stethoscope"
                width={50}
                height={50}
                className="scale-150"
              />
            </div>
          </div>

          {/* Form */}
          <form className="w-full max-w-lg space-y-4">
            {/* Name Input */}
            <input
              type="text"
              placeholder="Name"
              className="border-royal-purple placeholder-lavender w-full rounded-xl border-2 bg-white px-4 py-3 text-gray-700 transition-colors focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] focus:outline-none"
            />

            {/* Email Input */}
            <input
              type="email"
              placeholder="Email"
              className="border-royal-purple placeholder-lavender w-full rounded-xl border-2 bg-white px-4 py-3 text-gray-700 transition-colors focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] focus:outline-none"
            />

            {/* Message Textarea */}
            <textarea
              rows={6}
              placeholder="Message..."
              className="border-royal-purple placeholder-lavender w-full resize-none rounded-xl border-2 bg-white px-4 py-3 text-gray-700 transition-colors focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] focus:outline-none"
            />

            {/* Submit Button Container (Align right) */}
            <div className="relative flex justify-center md:justify-end">
              {/* The button needs to visually sit on top of the arrow 
                 and have that 3D 'pressed' look style 
               */}
              <button
                type="submit"
                className="bg-royal-purple z-1 rounded-2xl border-5 border-white px-8 py-2 font-bold text-white shadow-[0_4px_0_0_rgba(0,0,0,0.2)] transition-all hover:bg-[#8B5CF6] active:translate-y-1 active:shadow-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
