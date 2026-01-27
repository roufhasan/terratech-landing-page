import { socialLinks } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";

export default function HeroSocialLinks({ className = "" }) {
  return (
    <div className={className}>
      <div className="flex justify-center gap-9 md:absolute md:top-1/2 md:right-8 md:-translate-y-1/2 md:flex-col">
        <div className="relative h-9">
          <Image
            src="/images/icons/line.svg"
            alt="line"
            fill
            className="object-contain"
          />
        </div>

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

        <div className="relative h-9">
          <Image
            src="/images/icons/line.svg"
            alt="line"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
