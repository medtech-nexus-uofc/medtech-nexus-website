import Image from "next/image";
export default function Highlights() {
  return (
    // Need to add info
    <div className="relative flex w-3/4 flex-col items-center gap-2 2xl:w-1/2">
      <h1 className="text-navy-blue font-funnel-display text-4xl font-bold uppercase text-shadow-sm">
        highlights
      </h1>
      <div className="flex w-3/10 items-center justify-center">
        <Image
          src="/svgs/accents/ecgShort.svg"
          alt="ECG line"
          width={0}
          height={0}
          sizes="100vw"
          className="pointer-events-none h-auto w-full object-contain"
        />
      </div>
    </div>
  );
}
