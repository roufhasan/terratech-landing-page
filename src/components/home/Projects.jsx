import Image from "next/image";
import Link from "next/link";
import Marquee from "../shared/Marquee";

const projects = [
  {
    src: "/images/home/projects/project-1.svg",
    alt: "Project 1",
  },
  {
    src: "/images/home/projects/project-2.svg",
    alt: "Project 2",
  },
  {
    src: "/images/home/projects/project-3.svg",
    alt: "Project 3",
  },
  {
    src: "/images/home/projects/project-4.svg",
    alt: "Project 4",
  },
  {
    src: "/images/home/projects/project-5.svg",
    alt: "Project 5",
  },
  {
    src: "/images/home/projects/project-6.svg",
    alt: "Project 6",
  },
];

export default function Projects() {
  return (
    <section className="bg-warm-light text-dark-soil relative py-37.5">
      {/* stone images */}
      <div className="absolute -top-[10%] right-[5%]">
        <div className="relative size-51">
          <Image
            src="/images/icons/stone-2.svg"
            alt="stone-2"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="absolute top-[15%] right-[1%]">
        <div className="relative size-30">
          <Image
            src="/images/icons/stone-8.svg"
            alt="stone-8"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* container */}
      <div className="container-narrow flex items-end justify-between">
        <h2 className="w-full max-w-250 text-[80px] leading-none">
          Do you need more proof of our{" "}
          <span className="text-light-soil font-medium">excellence</span>?
        </h2>

        <Link
          href="/"
          className="bg-dark-soil text-popping mt-5 inline-block rounded-full px-6 py-4 text-sm font-medium tracking-wider uppercase"
        >
          Projects
        </Link>
      </div>

      <Marquee className="mt-20" items={projects} />
      <Marquee className="mt-5" direction="right" items={projects} />
    </section>
  );
}
