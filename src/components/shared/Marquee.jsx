import Image from "next/image";

export default function Marquee({
  items,
  speed = 20,
  direction = "left",
  className = "",
}) {
  return (
    <div className={`flex overflow-hidden ${className}`}>
      {Array.from({ length: 2 }).map((_, i) => (
        <div
          key={i}
          aria-hidden={i === 1}
          className={`flex gap-5 pr-5 ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}
          style={{ animationDuration: `${speed}s` }}
        >
          {items.map((project, i) => (
            <div
              key={i}
              className="relative flex h-30 w-64 shrink-0 items-center justify-center rounded-[10px] bg-[#D4C1AB]/10 md:h-34 md:w-69"
            >
              <Image
                src={project.src}
                alt={project.alt}
                width={221}
                height={55}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
