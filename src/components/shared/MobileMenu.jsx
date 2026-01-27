import Link from "next/link";
import { X } from "lucide-react";
import { navLinks } from "@/utils/constants";

export default function MobileMenu({ onClose }) {
  return (
    <div className="fixed top-0 left-0 z-40 h-dvh w-full bg-[#494744] px-7 pt-8 lg:hidden">
      <div className="flex items-center justify-end">
        <button
          onClick={onClose}
          className="text-warm-light hover:text-popping p-2 transition-colors lg:hidden"
          aria-label="Toggle menu"
        >
          <X size={24} />
        </button>
      </div>

      <nav className="mt-6 flex flex-col">
        {navLinks.map((nav) => (
          <Link
            key={nav.title}
            href={nav.url}
            onClick={onClose}
            className={`border-light-soil/50 border-b py-4 text-lg font-medium tracking-wider uppercase ${
              nav?.highlight
                ? "bg-popping text-dark-soil hover:bg-popping/90 mt-4 w-fit px-6"
                : "hover:text-popping"
            }`}
          >
            {nav.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
