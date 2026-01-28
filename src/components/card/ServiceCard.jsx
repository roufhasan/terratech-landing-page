import { ArrowRight } from "lucide-react";
import * as motion from "motion/react-client";

export default function ServiceCard({ service, index }) {
  const { titleBefore, highlight, titleAfter, image, description, tags } =
    service;

  return (
    <motion.div
      className="border-dark-soil flex origin-top flex-col gap-6 border-y px-5 py-8 first:border-b-0 last:border-t-0 md:flex-row md:items-center md:gap-8 md:py-10 lg:gap-15 lg:py-12"
      initial={{ scaleY: 1.5 }}
      whileInView={{ scaleY: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: "easeOut",
      }}
    >
      <div className="relative flex shrink-0 items-center gap-4 lg:gap-15">
        <motion.button
          className="bg-popping shrink-0 rounded-full p-3 md:px-6 md:py-3.5 lg:px-7.5 lg:py-4"
          whileHover={{ scale: 1.1, rotate: 45 }}
          transition={{ duration: 0.3 }}
        >
          <ArrowRight strokeWidth={1} className="size-5 lg:size-6" />
        </motion.button>

        <h3 className="w-full max-w-66 shrink-0 text-xl md:text-2xl">
          {titleBefore} <span className="text-light-soil">{highlight}</span>{" "}
          {titleAfter}
        </h3>
      </div>

      <div>
        <p className="font-neue-haas text-sm leading-relaxed tracking-widest md:text-base lg:leading-normal">
          {description}
        </p>
        <p className="mt-2 text-xs leading-relaxed font-medium uppercase md:text-base lg:leading-normal">
          {tags}
        </p>
      </div>
    </motion.div>
  );
}
