import Image from "next/image";

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center gap-12">
      <div className="relative inline-block">
        <h1 className="font-funnel-display text-sea-green text-4xl font-bold text-shadow-sm sm:text-6xl">
          Join Us!
        </h1>
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
            width={22}
            height={22}
          />
        </div>
      </div>

      <div className="bg-pistachio mt-2 flex w-4/5 flex-col rounded-2xl drop-shadow-md md:w-3/4 lg:w-9/10 lg:flex-row">
        <div className="divide-sea-green mx-8 flex flex-col divide-y-2 lg:mx-12 lg:my-5 lg:flex-row lg:divide-x-4 lg:divide-y-0">
          <div className="flex flex-1 flex-col gap-5 py-8 lg:pr-12">
            <h2 className="font-funnel-display text-deep-ice-blue text-center text-[22px] font-bold text-shadow-xs md:text-3xl">
              Why You Should Join!
            </h2>
            <p className="text-navy-blue text-justify text-sm font-semibold md:text-base">
              Join The Medicine and Technology (MedTech) Nexus to explore the
              intersection of medicine, technology, and community impact.
              Through hands-on collaborative events such as case nights,
              volunteering, fundraiser projects, and networking coffee chats,
              you will gain real-world experience while contributing to our
              community as a team. Build lasting connections, develop
              career-ready skills, and be part of a community where innovation
              meets compassion.
            </p>
          </div>
          <div className="flex flex-1 flex-col gap-5 py-8 lg:pl-12">
            <h2 className="font-funnel-display text-deep-ice-blue text-center text-[22px] font-bold text-shadow-xs md:text-3xl">
              Who Can Join?
            </h2>
            <p className="text-navy-blue text-justify text-sm font-semibold md:text-base">
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
