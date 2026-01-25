import { socialLinks } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";

export default function HeroSocialLinks() {
  return (
    <div className="absolute top-1/2 right-8 flex -translate-y-1/2 flex-col gap-9">
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
  );
}
