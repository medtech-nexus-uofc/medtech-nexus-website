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
            className="m-15 h-auto w-[90vw]"
          />
        </div>
      </div>
      {/* CATEGORIES */}
      <div className="bg-pale-blue flex w-[90vw] flex-col items-center justify-center rounded-md border">
        <h1 className="font-funnel-display text-deep-ice-blue text-shadow-s mt-5 text-4xl font-bold">
          EVENT CATEGORIES
        </h1>
        <svg
          width="85vw"
          height="130"
          viewBox="0 0 1410 130"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.5 72.6616H799.035C799.907 72.6616 800.679 72.0965 800.942 71.2651L821.49 6.34955C822.089 4.45851 824.778 4.49839 825.321 6.40635L858.614 123.551C859.153 125.447 861.82 125.502 862.437 123.63L886.55 50.4194C887.159 48.5721 889.779 48.5922 890.359 50.4485L904.39 95.3495C904.944 97.1206 907.402 97.2486 908.136 95.5446L917.479 73.8699C917.795 73.1366 918.517 72.6616 919.316 72.6616H1225.06H1405.46"
            stroke="#F67280"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <path
            d="M1391.84 57.5C1401.14 57.5 1408.68 65.039 1408.68 74.3389C1408.68 83.6389 1401.14 91.1787 1391.84 91.1787C1382.54 91.1786 1375 83.6388 1375 74.3389C1375 65.0391 1382.54 57.5001 1391.84 57.5Z"
            fill="#F67280"
            stroke="#F67280"
          />
        </svg>
        <h1 className="font-funnel-display text-deep-ice-blue text-shadow-s mt-5 text-3xl font-bold">
          CASE NIGHTS
        </h1>
        <div className="font-funnel-display flex flex-row">
          <svg
            width="150"
            height="150"
            viewBox="0 0 182 189"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-1"
          >
            <rect
              x="-0.316039"
              y="1.37845"
              width="54"
              height="151"
              rx="17"
              transform="matrix(-0.847244 0.531205 0.531205 0.847244 71.5415 16.106)"
              fill="#DDC9BC"
              stroke="black"
              strokeWidth="2"
            />
            <circle
              cx="1.5"
              cy="1.5"
              r="1.5"
              transform="matrix(-0.994728 -0.10255 -0.10255 0.994728 127.771 132.627)"
              fill="#B09F94"
            />
            <circle
              cx="1.5"
              cy="1.5"
              r="1.5"
              transform="matrix(-0.994728 -0.10255 -0.10255 0.994728 113.157 128.105)"
              fill="#B09F94"
            />
            <circle
              cx="1.5"
              cy="1.5"
              r="1.5"
              transform="matrix(-0.994728 -0.10255 -0.10255 0.994728 140.189 138.934)"
              fill="#B09F94"
            />
            <circle
              cx="1.5"
              cy="1.5"
              r="1.5"
              transform="matrix(-0.994728 -0.10255 -0.10255 0.994728 129.104 119.696)"
              fill="#B09F94"
            />
            <circle
              cx="1.5"
              cy="1.5"
              r="1.5"
              transform="matrix(-0.994728 -0.10255 -0.10255 0.994728 126.233 147.548)"
              fill="#B09F94"
            />
            <circle
              cx="1.5"
              cy="1.5"
              r="1.5"
              transform="matrix(-0.994728 -0.10255 -0.10255 0.994728 111.824 141.036)"
              fill="#B09F94"
            />
            <circle
              cx="1.5"
              cy="1.5"
              r="1.5"
              transform="matrix(-0.994728 -0.10255 -0.10255 0.994728 97.8981 139.6)"
              fill="#B09F94"
            />
            <circle
              cx="1.5"
              cy="1.5"
              r="1.5"
              transform="matrix(-0.994728 -0.10255 -0.10255 0.994728 112.07 158.152)"
              fill="#B09F94"
            />
            <circle
              cx="1.5"
              cy="1.5"
              r="1.5"
              transform="matrix(-0.090583 0.995889 0.995889 0.090583 53.9579 57.6536)"
              fill="#B09F94"
            />
            <circle
              cx="1.5"
              cy="1.5"
              r="1.5"
              transform="matrix(-0.090583 0.995889 0.995889 0.090583 68.6244 62)"
              fill="#B09F94"
            />
            <circle
              cx="1.5"
              cy="1.5"
              r="1.5"
              transform="matrix(-0.090583 0.995889 0.995889 0.090583 41.4642 51.4966)"
              fill="#B09F94"
            />
            <circle
              cx="1.5"
              cy="1.5"
              r="1.5"
              transform="matrix(-0.090583 0.995889 0.995889 0.090583 52.7801 70.6001)"
              fill="#B09F94"
            />
            <circle
              cx="1.5"
              cy="1.5"
              r="1.5"
              transform="matrix(-0.090583 0.995889 0.995889 0.090583 55.3165 42.7153)"
              fill="#B09F94"
            />
            <circle
              cx="1.5"
              cy="1.5"
              r="1.5"
              transform="matrix(-0.090583 0.995889 0.995889 0.090583 69.8019 49.0535)"
              fill="#B09F94"
            />
            <circle
              cx="1.5"
              cy="1.5"
              r="1.5"
              transform="matrix(-0.090583 0.995889 0.995889 0.090583 83.7445 50.3218)"
              fill="#B09F94"
            />
            <circle
              cx="1.5"
              cy="1.5"
              r="1.5"
              transform="matrix(-0.090583 0.995889 0.995889 0.090583 69.3502 31.9421)"
              fill="#B09F94"
            />
            <rect
              x="138.233"
              y="29.995"
              width="54"
              height="151"
              rx="17"
              transform="rotate(56.1784 138.233 29.995)"
              fill="#DDC9BC"
              stroke="black"
              strokeWidth="2"
            />
            <rect
              x="100.965"
              y="69.1439"
              width="30.9635"
              height="47.1344"
              rx="9.5"
              transform="rotate(56.1784 100.965 69.1439)"
              fill="#E7DBD3"
              stroke="black"
            />
            <circle
              cx="40.7046"
              cy="116.242"
              r="1.5"
              transform="rotate(15.772 40.7046 116.242)"
              fill="#B09F94"
            />
            <circle
              cx="55.9553"
              cy="117.432"
              r="1.5"
              transform="rotate(15.772 55.9553 117.432)"
              fill="#B09F94"
            />
            <circle
              cx="59.4888"
              cy="104.921"
              r="1.5"
              transform="rotate(15.772 59.4888 104.921)"
              fill="#B09F94"
            />
            <circle
              cx="26.835"
              cy="117.52"
              r="1.5"
              transform="rotate(15.772 26.835 117.52)"
              fill="#B09F94"
            />
            <circle
              cx="44.2381"
              cy="103.731"
              r="1.5"
              transform="rotate(15.772 44.2381 103.731)"
              fill="#B09F94"
            />
            <circle
              cx="70.2437"
              cy="118.35"
              r="1.5"
              transform="rotate(15.772 70.2437 118.35)"
              fill="#B09F94"
            />
            <circle
              cx="36.6275"
              cy="130.677"
              r="1.5"
              transform="rotate(15.772 36.6275 130.677)"
              fill="#B09F94"
            />
            <circle
              cx="52.4217"
              cy="129.942"
              r="1.5"
              transform="rotate(15.772 52.4217 129.942)"
              fill="#B09F94"
            />
            <circle
              cx="65.8946"
              cy="133.748"
              r="1.5"
              transform="rotate(15.772 65.8946 133.748)"
              fill="#B09F94"
            />
            <circle
              cx="45.8762"
              cy="145.759"
              r="1.5"
              transform="rotate(15.772 45.8762 145.759)"
              fill="#B09F94"
            />
            <circle
              cx="139.414"
              cy="73.1344"
              r="1.5"
              transform="rotate(105.772 139.414 73.1344)"
              fill="#B09F94"
            />
            <circle
              cx="124.164"
              cy="71.9443"
              r="1.5"
              transform="rotate(105.772 124.164 71.9443)"
              fill="#B09F94"
            />
            <circle
              cx="120.63"
              cy="84.4548"
              r="1.5"
              transform="rotate(105.772 120.63 84.4548)"
              fill="#B09F94"
            />
            <circle
              cx="153.284"
              cy="71.8561"
              r="1.5"
              transform="rotate(105.772 153.284 71.8561)"
              fill="#B09F94"
            />
            <circle
              cx="135.881"
              cy="85.6449"
              r="1.5"
              transform="rotate(105.772 135.881 85.6449)"
              fill="#B09F94"
            />
            <circle
              cx="109.875"
              cy="71.026"
              r="1.5"
              transform="rotate(105.772 109.875 71.026)"
              fill="#B09F94"
            />
            <circle
              cx="143.492"
              cy="58.6991"
              r="1.5"
              transform="rotate(105.772 143.492 58.6991)"
              fill="#B09F94"
            />
            <circle
              cx="127.697"
              cy="59.4338"
              r="1.5"
              transform="rotate(105.772 127.697 59.4338)"
              fill="#B09F94"
            />
            <circle
              cx="114.225"
              cy="55.6283"
              r="1.5"
              transform="rotate(105.772 114.225 55.6283)"
              fill="#B09F94"
            />
            <circle
              cx="134.243"
              cy="43.6174"
              r="1.5"
              transform="rotate(105.772 134.243 43.6174)"
              fill="#B09F94"
            />
          </svg>
          <p className="flex-3 p-10">
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
          <p className="flex-3 p-10">
            Through partnerships with hospitals and medical charities, our club
            provides opportunities for members to volunteer as a team. These
            experiences foster leadership, compassion, and firsthand insight
            into how healthcare operates behind the scenes-bridging classroom
            learning with real impact.
          </p>
          <div className="flex-1">
            <Image
              src="/images/assets/stethescope.png"
              alt="Accent"
              width={150}
              height={100}
            />
          </div>
        </div>
        <h1 className="font-funnel-display text-deep-ice-blue text-shadow-s mt-5 text-3xl font-bold">
          FUNDRAISERS
        </h1>
        <div className="font-funnel-display flex flex-row">
          <svg
            width="162"
            height="203"
            viewBox="0 0 162 203"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-1"
          >
            <g filter="url(#filter0_d_314_483)">
              <rect
                x="3.73473"
                y="30.6266"
                width="139"
                height="164.499"
                rx="14"
                transform="rotate(-5.44909 3.73473 30.6266)"
                fill="#FEBBCC"
                stroke="black"
                stroke-strokeWidth="2"
              />
              <rect
                x="23.1615"
                y="53.5189"
                width="104.67"
                height="125.189"
                rx="14"
                transform="rotate(-5.44909 23.1615 53.5189)"
                fill="white"
                stroke="black"
                strokeWidth="2"
              />
              <mask id="path-3-inside-1_314_483" fill="white">
                <path d="M70.6357 0.0734723C78.0433 -0.633155 84.6996 3.83284 86.7236 10.4049L104.148 8.74273L106.207 30.3206L41.4247 36.5003L39.3664 14.9224L56.7912 13.2603C57.5361 6.42403 63.2281 0.7801 70.6357 0.0734723Z" />
              </mask>
              <path
                d="M70.6357 0.0734723C78.0433 -0.633155 84.6996 3.83284 86.7236 10.4049L104.148 8.74273L106.207 30.3206L41.4247 36.5003L39.3664 14.9224L56.7912 13.2603C57.5361 6.42403 63.2281 0.7801 70.6357 0.0734723Z"
                fill="#E6CCCC"
              />
              <path
                d="M70.6357 0.0734723L70.4458 -1.91749L70.6357 0.0734723ZM86.7236 10.4049L84.8122 10.9936L85.2918 12.5506L86.9136 12.3959L86.7236 10.4049ZM104.148 8.74273L106.139 8.55281L105.949 6.56185L103.959 6.75177L104.148 8.74273ZM106.207 30.3206L106.397 32.3115L108.388 32.1216L108.198 30.1306L106.207 30.3206ZM41.4247 36.5003L39.4338 36.6902L39.6237 38.6812L41.6146 38.4912L41.4247 36.5003ZM39.3664 14.9224L39.1764 12.9315L37.1855 13.1214L37.3754 15.1124L39.3664 14.9224ZM56.7912 13.2603L56.9811 15.2512L58.6029 15.0965L58.7794 13.4769L56.7912 13.2603ZM70.6357 0.0734723L70.8256 2.06443C77.3291 1.44405 83.0792 5.36623 84.8122 10.9936L86.7236 10.4049L88.6351 9.81627C86.3201 2.29945 78.7575 -2.71036 70.4458 -1.91749L70.6357 0.0734723ZM86.7236 10.4049L86.9136 12.3959L104.338 10.7337L104.148 8.74273L103.959 6.75177L86.5337 8.41396L86.7236 10.4049ZM104.148 8.74273L102.157 8.93266L104.216 30.5105L106.207 30.3206L108.198 30.1306L106.139 8.55281L104.148 8.74273ZM106.207 30.3206L106.017 28.3296L41.2348 34.5093L41.4247 36.5003L41.6146 38.4912L106.397 32.3115L106.207 30.3206ZM41.4247 36.5003L43.4157 36.3104L41.3573 14.7325L39.3664 14.9224L37.3754 15.1124L39.4338 36.6902L41.4247 36.5003ZM39.3664 14.9224L39.5563 16.9134L56.9811 15.2512L56.7912 13.2603L56.6012 11.2693L39.1764 12.9315L39.3664 14.9224ZM56.7912 13.2603L58.7794 13.4769C59.4173 7.6234 64.3221 2.68482 70.8256 2.06443L70.6357 0.0734723L70.4458 -1.91749C62.134 -1.12461 55.655 5.22466 54.8029 13.0436L56.7912 13.2603Z"
                fill="black"
                mask="url(#path-3-inside-1_314_483)"
              />
              <path
                d="M72.2222 10.2523C75.9931 9.89258 79.3385 12.65 79.697 16.4082C80.0555 20.1663 77.2917 23.5066 73.5209 23.8663C69.7501 24.2259 66.4046 21.4685 66.0461 17.7104C65.6876 13.9522 68.4514 10.612 72.2222 10.2523Z"
                fill="#FFF4EC"
                stroke="black"
              />
              <path
                d="M99.4739 78.5207C98.1372 77.4431 96.5951 76.6342 94.9355 76.1402C93.2759 75.6463 91.5315 75.477 89.8019 75.642C88.0722 75.807 86.3912 76.303 84.855 77.1018C83.3187 77.9006 82.5188 79.4314 81.4099 80.7423L78.7447 85.0878L75.3072 81.3245C72.6073 79.1489 69.5942 77.5709 66.1012 77.9041C62.6083 78.2373 59.3876 79.9115 57.1477 82.5583C54.9078 85.2051 53.8322 88.6078 54.1575 92.0178C54.4828 95.4278 56.1823 98.5658 58.8822 100.741L61.6562 102.977L82.0162 119.383L98.9071 99.4232L101.208 96.7038C102.318 95.3934 103.153 93.8835 103.666 92.2604C104.18 90.6372 104.361 88.9327 104.2 87.2441C104.039 85.5556 103.539 83.9161 102.728 82.4193C101.917 80.9225 100.811 79.5977 99.4739 78.5207Z"
                fill="#F67280"
              />
              <path
                d="M124.472 144.818L102.502 146.913L99.8854 158.22L90.4717 137.004L87.8553 148.311L46.3567 152.269"
                stroke="#D81827"
                strokeWidth="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_314_483"
                x="-2.73291"
                y="0"
                width="165.551"
                height="203.472"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_314_483"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_314_483"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <p className="flex-3 p-10">
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
          <p className="flex-3 p-10">
            MedTech Nexus organizes fundraisers to support local hospitals and
            medical charities across Alberta. From donation drives to
            interactive charity events, our members help raise funds for
            hospitals and organizations that improve patient care and medical
            innovation in Alberta. These events strengthen community ties and
            remind us of the real-world impact of technology in medicine.
          </p>
          <svg
            width="194"
            height="87"
            viewBox="0 0 194 87"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-1"
          >
            <path
              d="M58.8535 51.0239C62.5965 52.9414 66.0246 55.4323 69.0078 58.4155C72.7614 62.1692 75.739 66.6254 77.7705 71.5298C79.8019 76.4342 80.8476 81.691 80.8477 86.9995H0C5.10907e-05 81.691 1.04571 76.4342 3.07715 71.5298C5.10864 66.6254 8.08623 62.1692 11.8398 58.4155C14.5018 55.7535 17.518 53.4834 20.7959 51.6626C26.1848 54.9836 32.5306 56.9018 39.3252 56.9019C46.5443 56.9019 53.2572 54.7369 58.8535 51.0239Z"
              fill="#51738E"
            />
            <ellipse
              cx="39.1058"
              cy="25.2653"
              rx="25.2649"
              ry="25.2653"
              fill="#51738E"
            />
            <path
              d="M171.854 51.0239C175.596 52.9414 179.025 55.4323 182.008 58.4155C185.761 62.1692 188.739 66.6254 190.771 71.5298C192.802 76.4342 193.848 81.691 193.848 86.9995H113C113 81.691 114.046 76.4342 116.077 71.5298C118.109 66.6254 121.086 62.1692 124.84 58.4155C127.502 55.7535 130.518 53.4834 133.796 51.6626C139.185 54.9836 145.531 56.9018 152.325 56.9019C159.544 56.9019 166.257 54.7369 171.854 51.0239Z"
              fill="#51738E"
            />
            <ellipse
              cx="152.106"
              cy="25.2653"
              rx="25.2649"
              ry="25.2653"
              fill="#51738E"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
