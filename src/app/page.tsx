import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-row items-center gap-2 md:flex-col">
      <h1 className="font-assistant text-3xl">abcdefghijklmnopqrstuvwxyz</h1>
      <h1 className="font-funnel-display text-3xl">
        abcdefghijklmnopqrstuvwxyz
      </h1>
      <p className="text-3xl">abcdefghijklmnopqrstuvwxyz</p>
    </div>
  );
}
