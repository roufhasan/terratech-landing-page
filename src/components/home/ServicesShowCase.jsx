import { ArrowRight } from "lucide-react";
import Image from "next/image";
import ServiceCard from "../card/ServiceCard";
import Link from "next/link";

const services = [
  {
    titleBefore: "Uncovering wonders with",
    highlight: "gravimetric",
    titleAfter: "precisions",
    image: "/images/icons/stone-6.svg",
    description:
      "Gravimetry is a part of physical geodesy that deals with determining the gravity field of the Earth and others of celestial bodies as a function of position and time. The acceleration of gravity and the gradient of the Earth's field are measured surface or close to it. Knowledge of the Earth's gravitational field is important in many fields of science and techniques: geodesy (calculation of the shape of the geoid), geophysics (mass distribution in the Earth's crust), geology (discovery of ore deposits and water bodies), geodynamics (recent tectonics, earthquakes, volcanic activity), astronomy and others.",
    tags: "non-invasiveness / comprehensiveness / expertise / ecology",
  },
  {
    titleBefore: "Highly accurate measurements with",
    highlight: "engineering geodesy",
    titleAfter: null,
    description:
      "Engineering geodesy is a part of geodesy that deals with practical application geodetic methods in engineering, especially in the design and construction of buildings and their monitoring deformation.",
    tags: "precision / availability / experience / expertise",
  },
  {
    titleBefore: "Highly precise",
    highlight: "3D terrestrial laser scanning",
    titleAfter: null,
    description:
      "Terrestrial laser scanning when collecting spatial data stands out as one of the most precise techniques for collecting a large amount of information in a very short time period of time. Compared to conventional methods, 3D terrestrial laser scanning enables the collection of large the amount of precise and accurate data in the form of 3D coordinates of points and records of reflected intensity of laser beams for each recorded point. The output product is a cloud of points (point cloud) which enables detailed drawing and modeling of objects and areas.",
    tags: "economy / comprehensiveness / experience / expertise",
  },
];

export default function ServicesShowCase() {
  return (
    <section className="bg-warm-light text-dark-soil relative px-5 py-12 md:py-16 lg:px-0 lg:py-25">
      {/* stone images */}
      <div className="absolute -top-[5%] right-0 hidden lg:block">
        <div className="relative size-36">
          <Image
            src="/images/icons/stone-7.svg"
            alt="stone"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="absolute top-[5%] right-[4%] hidden lg:block">
        <div className="relative size-30">
          <Image
            src="/images/icons/stone-8.svg"
            alt="stone"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="absolute top-[15%] right-[2%] hidden lg:block">
        <div className="relative size-11">
          <Image
            src="/images/icons/stone-9.svg"
            alt="stone"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* services container */}
      <div className="container-narrow">
        <div className="relative">
          <h2 className="text-4xl leading-none md:text-5xl lg:text-[80px]">
            <span className="block">Navigating</span>
            <span>the world with</span>{" "}
            <span className="text-light-soil font-medium">unmatched</span>
            <span className="block text-right">accuracy.</span>
          </h2>

          <div className="absolute top-[70%] left-[5%] z-10 md:left-[20%]">
            <div className="relative size-36 rotate-35 lg:size-57">
              <Image
                src="/images/icons/stone-6.svg"
                alt="stone"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* services card */}
        <div className="mt-20">
          {services.map((service, i) => (
            <ServiceCard key={i} service={service} />
          ))}
        </div>

        <div className="mt-16 flex items-center justify-center">
          <Link
            href="/services"
            className="text-popping bg-dark-soil inline-block rounded-full px-10 py-4 text-sm font-medium tracking-wider uppercase"
          >
            All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
