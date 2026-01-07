import Image from "next/image";

export type RoleProps = {
  team: string;
  description: string;
  note: string | null;
  graphicURL: string;
  bgColor: string;
  isOpen: boolean;
  formLink: string | null;
};

export default function RoleDescCards({
  team,
  description,
  note,
  graphicURL,
  bgColor,
  isOpen,
  formLink,
}: RoleProps) {
  return (
    <div className="relative flex w-full flex-col items-center justify-center gap-2 rounded-2xl bg-white p-6 shadow-lg md:gap-5 md:p-12">
      <h1 className="font-funnel-display text-navy-blue text-2xl font-bold md:text-4xl">
        {team}
      </h1>
      <div className="grid w-full grid-cols-1 items-center gap-2 md:grid-cols-5 md:items-start md:gap-10">
        <div className="flex flex-col items-center gap-2 md:col-span-2 md:gap-3">
          <div
            className={`relative h-28 w-28 overflow-hidden rounded-3xl md:h-52 md:w-52 ${bgColor} shadow-sm`}
          >
            <Image
              src={graphicURL}
              alt={team}
              fill
              className={`pointer-events-none object-contain p-5`}
            />
          </div>

          {isOpen && formLink ? (
            <a
              href={formLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sea-green rounded-lg px-3 py-1 text-xs font-bold text-white shadow-sm transition-transform hover:scale-105 md:text-sm lg:text-base"
            >
              Apply Now!
            </a>
          ) : (
            <button className="bg-rose-pink cursor-not-allowed rounded-lg px-3 py-1 text-xs font-bold text-white shadow-sm md:text-sm lg:text-base">
              Applications Closed!
            </button>
          )}
        </div>

        <div className="flex flex-col items-center justify-center gap-3 text-sm font-semibold md:col-span-3 md:ml-5 md:h-full md:text-base lg:ml-0">
          <p className="text-navy-blue text-justify">{description}</p>
          {note && <p className="text-red-600 italic">{note}</p>}
        </div>
      </div>
    </div>
  );
}
