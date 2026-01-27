"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { navLinks } from "@/utils/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <header className="relative top-6 z-50 px-5 lg:px-0">
      <nav className="bg-warm-light/20 container-navbar flex items-center justify-between rounded-full p-2 backdrop-blur sm:p-2.5 xl:p-3">
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

      {/* Mobile Menu */}
      {isOpen && <MobileMenu onClose={handleClose} />}
    </header>
  );
}
