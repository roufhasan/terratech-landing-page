import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";

export default function HeroContent() {
  return (
    <div className="container-narrow relative">
      <div className="absolute inset-0 -z-10 h-full w-full">
        <Image
          src="/images/home/hero-bg.png"
          alt=""
          fill
          priority
          className="object-contain object-right"
        />
      </div>

      {/* Headline - staggered entrance */}
      <motion.h1
        className="text-6xl leading-none md:text-7xl lg:text-[130px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.span
          className="block font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Where
        </motion.span>
        <motion.span
          className="text-popping block font-semibold"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          precision
        </motion.span>
      </motion.h1>

      <div className="flex flex-col-reverse gap-4 lg:flex-row lg:items-center">
        {/* Description and CTA */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="font-neue-haas max-w-65 tracking-wider">
            Creating detailed topographic maps that accurately represent the
            natural and man-made features of the Earth&apos;s surface.
          </p>
          <Link
            href="#services"
            className="hover:border-popping hover:bg-popping/10 inline-block rounded-full border border-white/20 bg-transparent px-6 py-2.5 text-xs font-medium tracking-wider uppercase transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_12px_rgba(139,233,56,0.3)] md:px-8 md:py-3.75 md:text-base xl:px-10 xl:py-4"
          >
            Our services
          </Link>
        </motion.div>

        {/* Second part of headline */}
        <motion.h1
          className="text-6xl leading-none md:text-7xl lg:text-[130px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="block font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            meets
          </motion.span>
          <motion.span
            className="block font-semibold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            progress
          </motion.span>
        </motion.h1>
      </div>

      {/* Bottom section - keep static (grounding elements) */}
      <div className="mt-7 flex items-center gap-16">
        <div className="relative size-33.5">
          <Image
            src="/images/icons/stone-2.svg"
            alt="stone-2"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex items-center gap-3">
          <div className="relative size-10">
            <Image
              src="/images/icons/stone-1.svg"
              alt="stone-1"
              fill
              className="object-cover"
            />
          </div>

          <p className="font-neue-haas max-w-61 tracking-wider">
            Providing precise surveying services during the construction phase
          </p>
        </div>
      </div>
    </div>
  );
}
