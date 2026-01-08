import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="animate-gradient flex max-h-[50vh] min-h-[50vh] w-full flex-col items-center justify-center gap-5 bg-[linear-gradient(to_bottom_right,var(--color-pistachio),var(--color-pale-blue),var(--color-lavender))] xl:h-screen">
      <div className="relative flex h-48 max-h-64 w-3/4 items-center justify-center">
        <Image
          src="/svgs/medtech_horizontal_logo.svg"
          alt="MedTech Logo"
          fill
          className="pointer-events-none object-contain"
        />
      </div>
      <p className="w-2/3 pb-10 text-justify text-xl font-semibold text-white md:pb-0 lg:w-7/10 lg:text-3xl 2xl:w-1/2">
        A hub for interdisciplinary learning and collaboration to enhance your
        skills while contributing to our community.
      </p>
    </div>
  );
}
