import Image from "next/image";

import backgroundImage from "#/images/decoration/beams-home.jpg";

export function SectionBackgroundBeams() {
  return (
    <div className="absolute -z-10 h-full w-full select-none overflow-hidden">
      <Image
        className="absolute -top-[8rem] left-1/2 -ml-[60rem] w-[160rem] max-w-none opacity-40"
        src={backgroundImage}
        alt="Background Image"
        width={2347}
        height={1244}
        priority
      />
    </div>
  );
}

export function SectionBackgroundOne({ withHighlight = false }: { withHighlight?: boolean }) {
  return (
    <svg className="absolute inset-0 -z-10 h-full w-full stroke-blue-100 opacity-50">
      <defs>
        <pattern
          id="pattern-main-1"
          width={200}
          height={200}
          x="50%"
          y={0}
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M.5 200V.5H200"
            fill="none"
          />
        </pattern>
      </defs>
      {withHighlight && (
        <svg
          x="50%"
          y={0}
          className="overflow-visible fill-blue-50 opacity-70"
        >
          <path
            d="M-200.5 0h201v201h-201Z M599.5 0h201v201h-201Z M399.5 400h201v201h-201Z M-400.5 600h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
      )}
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill="url(#pattern-main-1)"
      />
    </svg>
  );
}
