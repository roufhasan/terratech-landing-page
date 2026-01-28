import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";

export default function Industries() {
  return (
    <section id="industries" className="relative px-5 lg:px-0">
      <motion.div
        className="absolute -top-[5%] left-0 -rotate-45"
        initial={{ y: 100, x: -100, scale: 0.8 }}
        whileInView={{ y: 0, x: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.5,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="relative size-29.25">
          <Image
            src="/images/icons/stone-3.svg"
            alt="stone-3"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>

      <motion.div
        className="container-narrow flex flex-col gap-7 py-16 md:py-24 lg:flex-row lg:py-37.5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.15 }}
      >
        {/* left content section */}
        <div className="w-full lg:w-1/2">
          <motion.h2
            className="w-full max-w-xl text-4xl leading-none md:text-5xl lg:text-[80px] lg:leading-21"
            variants={{
              hidden: { y: 50 },
              visible: { y: 0 },
            }}
            transition={{ duration: 0.8 }}
          >
            Pioneering the fusion of gravimetry and drone{" "}
            <span className="text-light-soil font-medium">technology</span>
          </motion.h2>

          <div className="flex lg:justify-end">
            <motion.div
              variants={{
                hidden: { y: 50 },
                visible: { y: 0 },
              }}
              transition={{ duration: 0.8 }}
            >
              <p className="paragraph mt-9 w-full max-w-md">
                The science of measuring gravitational forces, unveils hidden
                insights into Earth&apos;s subsurface structures and mass
                distribution, unlocking secrets that shape our understanding of
                the planet&apos;s dynamic geophysical processes.
              </p>

              <Link
                href="#contact"
                className="bg-popping text-dark-soil mt-5 inline-block rounded-full px-6 py-4 text-sm font-medium tracking-wider uppercase transition-transform hover:scale-105"
              >
                Industries
              </Link>
            </motion.div>
          </div>
        </div>

        {/* right media section - staggered images */}
        <div className="grid h-100 w-full grid-cols-2 grid-rows-3 gap-5 md:h-125 lg:h-auto lg:w-1/2">
          <motion.div
            className="row-span-1"
            variants={{
              hidden: { scale: 0.85, rotateZ: -5 },
              visible: { scale: 1, rotateZ: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative ml-auto h-full w-[85%] overflow-hidden rounded-[10px]">
              <Image
                src="/images/home/city.png"
                alt="city"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            className="relative row-span-3 overflow-hidden rounded-[10px]"
            variants={{
              hidden: { scale: 0.85, rotateZ: 3 },
              visible: { scale: 1, rotateZ: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/images/home/drone-shot.png"
              alt="dront-shot-sample"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            className="relative row-span-2 overflow-hidden rounded-[10px]"
            variants={{
              hidden: { scale: 0.85, rotateZ: 5 },
              visible: { scale: 1, rotateZ: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/images/home/drone.png"
              alt="city"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
