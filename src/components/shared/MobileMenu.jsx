import Link from "next/link";
import { X } from "lucide-react";
import { navLinks } from "@/utils/constants";
import * as motion from "motion/react-client";

export default function MobileMenu({ onClose }) {
  return (
    <motion.div
      className="bg-dark-soil/95 fixed top-0 left-0 z-40 h-dvh w-full px-7 pt-8 backdrop-blur-md lg:hidden"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <motion.div
        className="flex items-center justify-end"
        initial={{ x: 50 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <button
          onClick={onClose}
          className="text-warm-light hover:text-popping p-2 transition-colors lg:hidden"
          aria-label="Toggle menu"
        >
          <X size={24} />
        </button>
      </motion.div>

      <motion.nav
        className="mt-6 flex flex-col"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.08, delayChildren: 0.2 }}
      >
        {navLinks.map((nav, i) => (
          <motion.div
            key={nav.title}
            variants={{
              hidden: { x: 50 },
              visible: { x: 0 },
            }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href={nav.url}
              onClick={onClose}
              className={`border-light-soil/50 block border-b py-4 text-lg font-medium tracking-wider uppercase ${
                nav?.highlight
                  ? "bg-popping text-dark-soil hover:bg-popping/90 mt-4 w-fit rounded-full px-6"
                  : "hover:text-popping"
              }`}
            >
              {nav.title}
            </Link>
          </motion.div>
        ))}
      </motion.nav>
    </motion.div>
  );
}
