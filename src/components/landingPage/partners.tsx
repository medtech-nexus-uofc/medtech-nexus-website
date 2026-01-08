import Image from "next/image";
import { partnersData } from "@/data/partnersData";

export default function Partners() {
  return (
    <div className="relative flex w-3/4 flex-col items-center gap-2 2xl:w-1/2">
      <h1 className="text-navy-blue font-funnel-display text-4xl font-bold uppercase text-shadow-sm">
        our partners
      </h1>
      <div className="flex w-3/10 items-center justify-center">
        <Image
          src="/svgs/accents/ecgLong.svg"
          alt="ECG line"
          width={0}
          height={0}
          sizes="100vw"
          className="pointer-events-none h-auto w-full scale-150 object-contain"
        />
      </div>
      <div className="mt-10 grid grid-cols-1 items-center justify-center gap-5 md:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-20">
        {partnersData.map((partner) => (
          <a
            key={partner.id}
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative h-32 w-60 overflow-hidden rounded-xl bg-white px-5 drop-shadow-md hover:scale-105 lg:-ml-5"
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              fill
              className="object-contain"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
