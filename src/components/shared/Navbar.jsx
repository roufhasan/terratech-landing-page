import Link from "next/link";
import Image from "next/image";

const navLinks = [
  {
    title: "services",
    url: "/services",
  },
  {
    title: "inustries",
    url: "/inustries",
  },
  {
    title: "projects",
    url: "/projects",
  },
  {
    title: "about us",
    url: "/about",
  },
  {
    title: "contact us",
    url: "/contact",
    highlight: true,
  },
];

export default function Navbar() {
  return (
    <nav className="bg-warm-light/20 container-narrow flex items-center justify-between rounded-full p-3 backdrop-blur">
      {/* logo */}
      <Link href="/" className="flex items-center gap-2">
        <Image src="/images/logo/logo.svg" alt="logo" width={55} height={55} />

        <span className="text-sm font-medium tracking-widest uppercase">
          Terratech
        </span>
      </Link>

      <div className="flex items-center gap-9">
        {navLinks.map((link) => (
          <Link
            key={link.title}
            href={link.url}
            className={`font-medium uppercase ${
              link?.highlight
                ? "bg-popping text-dark-soil rounded-full px-6 py-4"
                : ""
            }`}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </nav>
  );
}
