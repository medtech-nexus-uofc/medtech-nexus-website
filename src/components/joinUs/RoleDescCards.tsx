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
    <div className="relative flex w-full flex-col items-center justify-center gap-5 rounded-2xl bg-white p-10 shadow-lg md:p-12">
      <h1 className="font-funnel-display text-navy-blue text-4xl font-bold">
        {team}
      </h1>
      <div className="grid w-full grid-cols-5 items-start gap-10">
        <div className="col-span-2 flex flex-col items-center gap-3">
          <div
            className={`relative h-52 w-52 overflow-hidden rounded-3xl ${bgColor} shadow-sm`}
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
              className="bg-sea-green rounded-lg px-3 py-1 font-bold text-white shadow-sm transition-transform hover:scale-105"
            >
              Apply Now!
            </a>
          ) : (
            <button className="bg-rose-pink cursor-not-allowed rounded-lg px-3 py-1 font-bold text-white shadow-sm">
              Applications Closed!
            </button>
          )}
        </div>

        <div className="col-span-3 flex h-full flex-col items-center justify-center gap-3 font-semibold">
          <p className="text-navy-blue">{description}</p>
          {note && <p className="text-red-600 italic">{note}</p>}
        </div>
      </div>
    </div>
  );
}
