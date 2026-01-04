import Image from "next/image";

export default function Home() {
  return (
    <div className="-my-8 flex flex-col items-center justify-center gap-5 md:gap-10">
      <div className="animate-gradient flex max-h-[50vh] min-h-[50vh] w-full flex-col items-center justify-center gap-5 bg-[linear-gradient(to_bottom_right,var(--color-pistachio),var(--color-pale-blue),var(--color-lavender))] xl:h-screen">
        <div className="relative flex h-48 max-h-64 w-3/4 items-center justify-center">
          <Image
            src="/svgs/medtech_horizontal_logo.svg"
            alt="MedTech Logo"
            fill
            className="pointer-events-none object-contain"
          />
        </div>
        <p className="w-2/3 text-justify text-xl font-semibold text-white lg:w-4/5 lg:text-3xl">
          A hub for interdisciplinary learning and collaboration to enhance your
          skills while contributing to our community.
        </p>
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-10 lg:mb-10 lg:w-9/10 lg:flex-row xl:mt-10 xl:w-3/4 2xl:w-3/5">
        <div className="bg-bocchi-pink relative my-5 flex h-full w-4/5 flex-col items-center justify-center gap-4 rounded-xl p-4 lg:w-2/3 2xl:gap-4">
          <h1 className="text-rose-pink font-funnel-display text-center text-3xl font-bold text-shadow-sm md:text-5xl">
            WHAT WE DO
          </h1>
          <h2 className="px-4 text-lg font-bold text-white md:px-0 md:text-xl">
            Connecting students with real-world opportunities.
          </h2>
          <div className="flex w-full items-center justify-center">
            <Image
              src="/svgs/accents/ecgLong.svg"
              alt="ECG line"
              width={0}
              height={0}
              sizes="100vw"
              className="pointer-events-none h-auto w-full scale-90 object-contain"
            />
          </div>
          <p className="-mt-5 p-5 text-justify text-lg text-white md:text-xl">
            MedTech Nexus is a student-led initiative bridging medicine,
            biology, and technology. We unite passionate students to explore how
            innovation can transform healthcare through education,
            collaboration, and hands-on experience. Through collaborative
            research events, partnerships with local hospitals and biotech
            organizations, case nights, volunteer initiatives, fundraisers, and
            speaker series, we provide practical experiences that help students
            build skills, expand their networks, and make a meaningful impact in
            the community.
          </p>
        </div>

        {/* Connect to contentful */}
        <div className="mb-14 flex w-full flex-col items-center justify-center gap-10 md:mb-16 md:w-4/5 md:flex-row lg:mb-0 lg:w-1/3 lg:flex-col lg:gap-16 xl:mb-0 xl:gap-10">
          <div className="bg-lavender flex h-32 w-4/5 flex-row items-center justify-between rounded-xl px-8 md:px-2 lg:px-8">
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

          <div className="bg-lavender flex h-32 w-4/5 flex-row items-center justify-between rounded-xl px-8 md:px-2 lg:px-8">
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

          <div className="bg-lavender flex h-32 w-4/5 flex-row items-center justify-between rounded-xl px-8 md:px-2 lg:px-8">
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
      </div>

      {/* Uncomment when theres actually stuff to put in here */}
      {/* <div className="relative flex w-3/4 flex-col items-center gap-2 2xl:w-1/2">
        <h1 className="text-navy-blue font-funnel-display text-4xl font-bold text-shadow-sm">
          HIGHLIGHTS
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

      <div className="relative mb-10 flex w-3/4 flex-col items-center gap-2 2xl:w-1/2">
        <h1 className="text-navy-blue font-funnel-display text-4xl font-bold text-shadow-sm">
          OUR SPONSORS
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
        <div className="grid grid-cols-3 gap-2">
          // maybe make a component for this
        </div>
      </div> */}
    </div>
  );
}
