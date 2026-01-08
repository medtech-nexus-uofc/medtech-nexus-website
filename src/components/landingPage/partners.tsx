import Image from "next/image";

export default function Partners() {
  return (
    <div className="relative mb-10 flex w-3/4 flex-col items-center gap-2 2xl:w-1/2">
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
      <div className="grid grid-cols-3 gap-2"></div>
    </div>
  );
}
