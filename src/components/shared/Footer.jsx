import { socialLinks } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="container-narrow px-5 pt-12 pb-6 md:pt-14 lg:px-0 lg:pt-16"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.1 }}
      >
        <motion.div
          variants={{
            hidden: { y: 30 },
            visible: { y: 0 },
          }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/" className="flex items-center gap-2">
            <div className="relative size-12 md:size-13 lg:size-14">
              <Image
                src="/images/logo/logo.svg"
                alt="logo"
                fill
                className="object-contain"
              />
            </div>

            <span className="text-sm font-medium tracking-widest uppercase">
              Terratech
            </span>
          </Link>
        </motion.div>

        <div className="mt-4.5 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
          <motion.p
            className="paragraph w-full max-w-81"
            variants={{
              hidden: { y: 30 },
              visible: { y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            Developing control networks that serve as a basis for mapping and
            surveying within a specific project area
          </motion.p>

          <motion.div
            className="space-y-2.5"
            variants={{
              hidden: { y: 30 },
              visible: { y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <p className="paragraph">
              Elm street <br /> 10000 Zagreb
            </p>

            <a
              href="mailto:info@terratech.hr"
              className="text-popping inline-block"
            >
              info@terratech.hr
            </a>
          </motion.div>

          <motion.div
            className="flex flex-col gap-7"
            variants={{
              hidden: { y: 30 },
              visible: { y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-10 lg:justify-evenly lg:gap-0">
              {socialLinks.map((social, i) => (
                <Link
                  key={i}
                  href={social.url}
                  target="_blank"
                  className="relative inline-block size-4 transition-transform hover:scale-110"
                >
                  <Image
                    src={`/images/icons/${social.icon}.svg`}
                    alt={social.label}
                    fill
                    className="object-contain"
                  />
                </Link>
              ))}
            </div>

            <Link
              href="mailto:info@terratech.hr"
              className="bg-popping text-dark-soil w-fit rounded-full px-6 py-4 font-medium uppercase transition-transform hover:scale-105"
            >
              Contact us
            </Link>
          </motion.div>
        </div>
      </motion.div>

      <div className="bg-light-soil/10 mt-15 mb-10 h-px w-full"></div>

      <h2 className="text-4xl leading-none md:text-5xl lg:text-[80px]">
        Where gravity <br /> meets{" "}
        <span className="text-light-soil font-medium">innovation</span>.
      </h2>
    </footer>
  );
}
