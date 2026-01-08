import Image from "next/image";

export default function Stats() {
  return (
    <div className="mb-14 flex w-full flex-col items-center justify-center gap-10 md:mb-16 md:w-4/5 md:flex-row lg:mb-0 lg:w-1/3 lg:flex-col lg:gap-10 xl:mb-0 xl:gap-9.5 2xl:gap-10">
      <div className="bg-lavender flex h-32 w-4/5 flex-row items-center justify-between rounded-2xl px-8 drop-shadow-md md:px-2 lg:px-8">
        <div className="flex flex-col">
          <p className="font-funnel-display text-center text-5xl font-bold text-white">
            26
          </p>
          <p className="font-funnel-display text-xl font-bold text-white md:text-lg lg:text-2xl">
            Members
          </p>
        </div>
        <Image
          src="/svgs/assets/royalPurplePerson.svg"
          alt="Person Icon"
          width={65}
          height={65}
          className="pointer-events-none"
        />
      </div>

      <div className="bg-lavender flex h-32 w-4/5 flex-row items-center justify-between rounded-2xl px-8 drop-shadow-md md:px-2 lg:px-8">
        <div className="flex flex-col">
          <p className="font-funnel-display text-center text-5xl font-bold text-white">
            1
          </p>
          <p className="font-funnel-display text-xl font-bold text-white md:text-lg lg:text-2xl">
            Events
          </p>
        </div>
        <Image
          src="/svgs/assets/pinkClipboard.svg"
          alt="Clipboard Icon"
          width={70}
          height={70}
          className="pointer-events-none"
        />
      </div>

      <div className="bg-lavender flex h-32 w-4/5 flex-row items-center justify-between rounded-2xl px-8 drop-shadow-md md:px-2 lg:px-8">
        <div className="flex flex-col">
          <p className="font-funnel-display text-5xl font-bold text-white">
            20
          </p>
          <p className="font-funnel-display mr-3 text-xl font-bold text-white md:text-lg lg:text-2xl">
            Event Attendees
          </p>
        </div>
        <Image
          src="/svgs/assets/blueMicroscope.svg"
          alt="Microscope Icon"
          width={65}
          height={65}
          className="pointer-events-none"
        />
      </div>
    </div>
  );
}
