import Image from "next/image";
import Stats from "./stats";

export default function WhatWeDo() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-10 lg:mb-5 lg:w-9/10 lg:flex-row xl:mt-10 xl:w-3/4 2xl:w-3/5">
      <div className="bg-bocchi-pink relative my-5 flex h-full w-4/5 flex-col items-center justify-center gap-4 rounded-2xl p-4 drop-shadow-md lg:w-2/3 2xl:gap-4">
        <h1 className="text-rose-pink font-funnel-display text-center text-3xl font-bold uppercase text-shadow-sm md:text-5xl">
          what we do
        </h1>
        <h2 className="px-4 text-lg font-bold text-white italic md:px-0 md:text-xl">
          Connecting students with real-world opportunities.
        </h2>
        <div className="flex w-full items-center justify-center">
          <Image
            src="/svgs/accents/ecgLong.svg"
            alt="ECG line"
            width={0}
            height={0}
            sizes="100vw"
            className="pointer-events-none h-auto w-full scale-90 object-contain"
          />
        </div>
        <p className="-mt-5 p-5 text-justify text-lg font-semibold text-white md:text-xl">
          MedTech Nexus is a student-led initiative bridging medicine, biology,
          and technology. We unite passionate students to explore how innovation
          can transform healthcare through education, collaboration, and
          hands-on experience. Through collaborative research events,
          partnerships with local hospitals and biotech organizations, case
          nights, volunteer initiatives, fundraisers, and speaker series, we
          provide practical experiences that help students build skills, expand
          their networks, and make a meaningful impact in the community.
        </p>
      </div>
      <Stats />
    </div>
  );
}
