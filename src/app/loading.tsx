import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <Image
        src="/favicon.ico"
        alt="MedTech Logo"
        width={200}
        height={200}
        className="animate-pulse"
      />
      <h1 className="text-navy-blue animate-pulse text-xl font-bold md:text-3xl">
        Loading...
      </h1>
    </div>
  );
}
