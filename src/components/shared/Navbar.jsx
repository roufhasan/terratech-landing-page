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
    <nav className="bg-warm-light/20 backdrop-blur flex items-center justify-between container-narrow p-3 rounded-full">
      <div className="flex items-center gap-2">
        <Image src="/images/logo/logo.svg" alt="logo" width={55} height={55} />

        <Link href="/" className="uppercase text-sm font-medium">
          Terratech
        </Link>
      </div>

      <div className="flex items-center gap-9">
        {navLinks.map((link) => (
          <Link
            key={link.title}
            href={link.url}
            className={`uppercase font-medium ${
              link?.highlight
                ? "bg-popping text-dark-soil py-4 px-6 rounded-full"
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
