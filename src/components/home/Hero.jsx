import Image from "next/image";
import * as motion from "motion/react-client";
import HeroSocialLinks from "./HeroSocialLinks";
import HeroContent from "./HeroContent";
import HeroStatsGrid from "./HeroStatsGrid";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-5 py-25 lg:px-0 lg:pt-36">
      <div className="flex flex-col justify-center">
        {/* stone images */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -30 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
            delay: 0.5,
          }}
          whileInView={{
            y: [0, -10, 0],
            transition: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="absolute top-[6%] left-[1%] hidden lg:top-[8%] lg:block"
        >
          <div className="relative size-25.5">
            <Image
              src="/images/icons/stone-4.svg"
              alt="stone-4"
              fill
              priority
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -30, rotate: 15 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            rotate: 0,
          }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
            delay: 0.7,
          }}
          whileInView={{
            y: [0, -15, 0],
            rotate: [0, 5, 0],
            transition: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="absolute top-[4%] left-[30%] hidden lg:top-[8%] lg:block"
        >
          <div className="relative size-33">
            <Image
              src="/images/icons/stone-3.svg"
              alt="stone-3"
              fill
              priority
              className="object-cover"
            />
          </div>
        </motion.div>

        <div className="relative">
          <HeroSocialLinks className="hidden md:block" />

          <HeroContent />
        </div>

        <HeroStatsGrid />
      </div>
    </section>
  );
}
