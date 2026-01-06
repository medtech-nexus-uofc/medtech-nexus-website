import Image from "next/image";

export default function Events() {
  return (
    <div className="flex flex-col items-center">
      {/* TIMELINE */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-funnel-display text-deep-ice-blue text-6xl font-bold text-shadow-sm">
          Events
        </h1>
        <div className="flex">
          <Image
            src="/svgs/assets/eventTimeline.svg"
            alt="Events"
            width={0}
            height={0}
            sizes="90vw"
            className="mx-[5vw] my-15 h-auto w-[90vw]"
          />
        </div>
      </div>
      {/* CATEGORIES */}
      <div className="bg-pale-blue flex w-[90vw] flex-col items-center justify-center rounded-md border">
        <h1 className="font-funnel-display text-deep-ice-blue text-shadow-s mt-5 text-4xl font-bold">
          EVENT CATEGORIES
        </h1>
        <Image
          src="/svgs/assets/longHeartbeat.svg"
          alt="Accent"
          width={0}
          height={0}
          sizes="85vw"
          className="my-5 h-auto w-[85vw]"
        />
        <h1 className="font-funnel-display text-deep-ice-blue text-shadow-s mt-5 text-3xl font-bold">
          CASE NIGHTS
        </h1>
        <div className="font-funnel-display flex flex-row">
          <div className="flex flex-1 justify-center">
            <Image
              src="/svgs/assets/bandaid.svg"
              alt="Bandaid"
              width={100}
              height={100}
              className="m-5"
            />
          </div>
          <p className="flex-6 p-10">
            MedTech Case Night invites students to become ‘medical detectives’
            for an evening. In small groups, participants examine real-world
            patient stories, use clues and guiding questions to deduce the
            condition, and predict the innovative technology used to solve it.
            The event blends research, teamwork, and competition in a game-style
            format featuring points, hints, and creative presentations.{" "}
          </p>
        </div>
        <h1 className="font-funnel-display text-deep-ice-blue text-shadow-s mt-5 text-3xl font-bold">
          VOLUNTEERING
        </h1>
        <div className="font-funnel-display flex flex-row">
          <p className="flex-6 p-10">
            Through partnerships with hospitals and medical charities, our club
            provides opportunities for members to volunteer as a team. These
            experiences foster leadership, compassion, and firsthand insight
            into how healthcare operates behind the scenes-bridging classroom
            learning with real impact.
          </p>
          <div className="flex flex-1 justify-center">
            <Image
              src="/svgs/assets/stethoscope1.svg"
              alt="Accent"
              width={150}
              height={100}
              className="m-5"
            />
          </div>
        </div>
        <h1 className="font-funnel-display text-deep-ice-blue text-shadow-s mt-5 text-3xl font-bold">
          FUNDRAISERS
        </h1>
        <div className="font-funnel-display flex flex-row">
          <div className="flex flex-1 justify-center">
            <Image
              src="/svgs/assets/pinkClipboard.svg"
              alt="Clipboard"
              width={100}
              height={100}
              className="m-5"
            />
          </div>
          <p className="flex-6 p-4 md:p-10">
            MedTech Nexus organizes fundraisers to support local hospitals and
            medical charities across Alberta. From donation drives to
            interactive charity events, our members help raise funds for
            hospitals and organizations that improve patient care and medical
            innovation in Alberta. These events strengthen community ties and
            remind us of the real-world impact of technology in medicine.
          </p>
        </div>
        <h1 className="font-funnel-display text-deep-ice-blue text-shadow-s mt-5 text-3xl font-bold">
          NETWORKING SERIES
        </h1>
        <div className="font-funnel-display flex flex-row">
          <p className="flex-6 p-10">
            MedTech Nexus organizes fundraisers to support local hospitals and
            medical charities across Alberta. From donation drives to
            interactive charity events, our members help raise funds for
            hospitals and organizations that improve patient care and medical
            innovation in Alberta. These events strengthen community ties and
            remind us of the real-world impact of technology in medicine.
          </p>
          <div className="flex flex-1 justify-center">
            <Image
              src="/svgs/assets/navyBluePeople.svg"
              alt="People Asset"
              width={194}
              height={87}
              className="m-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
