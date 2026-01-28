import { socialLinks } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";

export default function HeroSocialLinks({ className = "" }) {
  return (
    <div className={className}>
      <motion.div
        className="flex justify-center gap-9 md:absolute md:top-1/2 md:right-8 md:-translate-y-1/2 md:flex-col"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.div
          className="relative h-9"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <Image
            src="/images/icons/line.svg"
            alt="line"
            fill
            className="object-contain"
          />
        </motion.div>

        {socialLinks.map((social, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.3 + i * 0.1 }}
            whileHover={{ scale: 1.2, x: -5 }}
          >
            <Link
              href={social.url}
              target="_blank"
              className="relative inline-block size-4"
            >
              <Image
                src={`/images/icons/${social.icon}.svg`}
                alt={social.label}
                fill
                className="object-contain"
              />
            </Link>
          </motion.div>
        ))}

        <motion.div
          className="relative h-9"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <Image
            src="/images/icons/line.svg"
            alt="line"
            fill
            className="object-contain"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
