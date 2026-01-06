import Image from "next/image";
import { type TeamMember } from "@/data/teamData";

interface ClipboardCardProps {
  member: TeamMember;
}

export default function ClipboardCard({ member }: { member: TeamMember }) {
  return (
    <div
      className={`relative z-0 h-[300px] w-56 ${member.clipboardColor} rounded-4xl p-2.5 pb-3 shadow-md`}
    >
      {/* The "Clip" Mechanism */}
      <div className="absolute -top-2.5 left-1/2 z-0 h-5 w-16 -translate-x-1/2 rounded-t-lg bg-[#D1C4C4]"></div>
      <div className="absolute -top-2 left-1/2 z-20 flex h-8 w-20 -translate-x-1/2 flex-col items-center justify-center rounded-lg bg-[#ECCFCF] shadow-sm">
        <div className="bg-bone-white mt-0.5 h-2.5 w-2.5 rounded-full border border-gray-300 shadow-inner"></div>
      </div>

      {/* The Paper */}
      <div className="relative z-10 flex h-full w-full flex-col items-center rounded-3xl bg-white px-3 pt-10 pb-5 text-center">
        <div className="relative mb-3 h-[120px] w-[120px] overflow-hidden rounded-full bg-gray-100 shadow-inner">
          <Image
            src={member.pfp}
            alt={member.name}
            fill
            className="pointer-events-none object-cover"
          />
        </div>

        {/* Name & Title */}
        <div className="flex grow flex-col items-center justify-start">
          <h3 className={`${member.textColor} mb-1 text-xl font-bold`}>
            {member.name}
          </h3>
          <p className="text-sm font-semibold tracking-wider text-gray-400">
            {member.role}
          </p>
        </div>

        <div className="mt-auto pt-2">
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform duration-200 hover:scale-110"
            >
              <Image
                src="/svgs/icons/linkedin.png"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
