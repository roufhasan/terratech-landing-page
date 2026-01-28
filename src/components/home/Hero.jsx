import Image from "next/image";
import HeroSocialLinks from "./HeroSocialLinks";
import HeroContent from "./HeroContent";
import HeroStatsGrid from "./HeroStatsGrid";

export default function Hero() {
  return (
    <section className="relative px-5 py-25 lg:px-0">
      <div className="flex flex-col justify-center">
        {/* stone images */}
        <div className="absolute top-[6%] left-[1%] hidden lg:block">
          <div className="relative size-25.5">
            <Image
              src="/images/icons/stone-4.svg"
              alt="stone-4"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="absolute top-[4%] left-[30%] hidden lg:block">
          <div className="relative size-33">
            <Image
              src="/images/icons/stone-3.svg"
              alt="stone-3"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="relative">
          <HeroSocialLinks className="hidden md:block" />

          <HeroContent />
        </div>

        <HeroStatsGrid />
      </div>
    </section>
  );
}
