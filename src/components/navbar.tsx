import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-baby-blue sticky top-0 z-10 flex flex-row justify-between py-1 drop-shadow-md">
      <Link href="/">
        <Image
          src="/favicon.ico"
          alt="MedTech Logo"
          width={75}
          height={40}
          className="ml-2 hover:scale-105"
        />
      </Link>

      <div className="font-funnel-display text-deep-ice-blue/70 mr-5 flex flex-row items-center gap-8 text-lg font-bold lg:mr-10 lg:gap-12 lg:text-xl">
        <Link href="our-team">
          <h1 className="hover:scale-105">Our Team</h1>
        </Link>

        <Link href="events">
          <h1 className="hover:scale-105">Events</h1>
        </Link>

        <Link href="contact-us">
          <h1 className="hover:scale-105">Contact</h1>
        </Link>

        <Link href="join-us">
          <h1 className="hover:scale-105">Join</h1>
        </Link>
      </div>
    </div>
  );
}
