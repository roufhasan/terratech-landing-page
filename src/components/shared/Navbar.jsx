"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { navLinks } from "@/utils/constants";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <motion.header
      className="fixed top-6 right-0 left-0 z-50 px-5 lg:px-0"
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -200 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <nav className="bg-dark-soil/90 text-warm-light container-navbar mx-auto flex items-center justify-between rounded-full p-2 backdrop-blur sm:p-2.5 xl:p-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative size-10 sm:size-12 xl:size-14">
            <Image
              src="/images/logo/logo.svg"
              alt="Terratech logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-xs font-medium tracking-widest uppercase sm:text-sm">
            Terratech
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-6 lg:flex xl:gap-9">
          {navLinks.map((nav) => (
            <Link
              key={nav.title}
              href={nav.url}
              className={`font-medium uppercase transition-colors ease-linear ${
                nav?.highlight
                  ? "bg-popping hover:bg-popping/90 text-dark-soil rounded-full px-5 py-3 xl:px-6 xl:py-4"
                  : "hover:text-popping"
              }`}
            >
              {nav.title}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={handleToggle}
          className="text-warm-light hover:text-popping p-2 transition-colors lg:hidden"
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile Menu with AnimatePresence for exit animation */}
      <AnimatePresence>
        {isOpen && <MobileMenu onClose={handleClose} />}
      </AnimatePresence>
    </motion.header>
  );
}
