import Image from "next/image";
export default function Footer() {
  return (
    <div className="bg-baby-blue flex flex-col items-center justify-center gap-1 py-3">
      <div className="flex flex-row items-center justify-center gap-2 lg:gap-5">
        <a href="https://www.instagram.com/uofcmedtech_nexus/">
          <Image
            src="/svgs/icons/instagram.png"
            alt="Instagram Logo"
            width={50}
            height={50}
            className="scale-50 hover:scale-[55%] lg:scale-75 lg:hover:scale-[80%]"
          />
        </a>

        <Image
          src="/svgs/icons/discord.png"
          alt="Discord Logo"
          width={45}
          height={30}
          className="scale-50 hover:scale-[55%] lg:scale-75 lg:hover:scale-[80%]"
        />
        <Image
          src="/svgs/icons/linkedin.png"
          alt="LinkedIn Logo"
          width={50}
          height={50}
          className="scale-[35%] hover:scale-[40%] lg:scale-[55%] lg:hover:scale-[60%]"
        />
        <Image
          src="/svgs/icons/linktree.png"
          alt="Linktree Logo"
          width={50}
          height={50}
          className="scale-[35%] hover:scale-[40%] lg:scale-[55%] lg:hover:scale-[60%]"
        />
        <Image
          src="/svgs/icons/github.png"
          alt="Github Logo"
          width={50}
          height={50}
          className="scale-50 hover:scale-[55%] lg:scale-75 lg:hover:scale-[80%]"
        />
      </div>
      <h1 className="text-navy-blue/40 text-sm md:text-base lg:text-lg">
        Copyright @ The Medicine and Technology Nexus
      </h1>
    </div>
  );
}
