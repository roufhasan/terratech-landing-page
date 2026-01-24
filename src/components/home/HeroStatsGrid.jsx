import Image from "next/image";
import StatCard from "../card/StatCard";

const stats = [
  {
    number: "83",
    description: "topographic maps",
    highlight: "finished",
  },
  {
    number: "100",
    hasPercentage: true,
    description:
      "meeting client's specific needs, providing customized and effective geospatial services",
  },
  {
    number: "13",
    description: "historical and architectural heritage sites",
    highlight: "preserved",
  },
  {
    number: "8",
    description: "geodetic and spatial solutions for the oil and gas industry",
  },
];

export default function HeroStatsGrid() {
  return (
    <div className="container-narrow relative">
      {/* divider line */}
      <div className="bg-light-soil/50 mt-20 mb-6 h-px"></div>

      {/* stats grid container */}
      <div className="border-light-soil/50 grid grid-cols-4 border">
        {stats.map((stat, i) => (
          <StatCard key={i} stat={stat} />
        ))}
      </div>

      {/* divider line */}
      <div className="bg-light-soil/50 mt-6 h-px"></div>

      {/* stone image */}
      <div className="absolute -bottom-[16%] left-[7%]">
        <div className="relative size-33">
          <Image
            src="/images/icons/stone-5.svg"
            alt="stone"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
