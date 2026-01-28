import { socialLinks } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="container-narrow lg:pt-16lg:px-0 px-5 pt-12 pb-6 md:pt-14">
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

      <div className="mt-4.5 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
        <p className="paragraph w-full max-w-81">
          Developing control networks that serve as a basis for mapping and
          surveying within a specific project area
        </p>

        <div className="space-y-2.5">
          <p className="paragraph">
            Elm street <br /> 10000 Zagreb
          </p>

          <a
            href="mailto:info@terratech.hr"
            className="text-popping inline-block"
          >
            info@terratech.hr
          </a>
        </div>

        <div className="flex flex-col gap-7">
          <div className="flex items-center gap-10 lg:justify-evenly lg:gap-0">
            {socialLinks.map((social, i) => (
              <Link
                key={i}
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
            ))}
          </div>

          <Link
            href="/"
            className="bg-popping text-dark-soil w-fit rounded-full px-6 py-4 font-medium uppercase"
          >
            Contact us
          </Link>
        </div>
      </div>

      <div className="bg-light-soil/10 mt-15 mb-10 h-px w-full"></div>

      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <h2 className="text-4xl leading-none md:text-5xl lg:text-[80px]">
          Where gravity <br /> meets{" "}
          <span className="text-light-soil font-medium">innovation</span>.
        </h2>

        <div className="space-x-6 text-center">
          <Link href="/" className="paragraph text-foggy inline-block">
            Privacy Policy
          </Link>

          <Link href="/" className="paragraph text-foggy inline-block">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
