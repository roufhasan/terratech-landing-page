import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({ service }) {
  const { titleBefore, highlight, titleAfter, image, description, tags } =
    service;

  return (
    <div className="border-dark-soil relative flex items-center gap-15 border-y px-5 py-12 first:border-b-0 last:border-t-0">
      <button className="bg-popping rounded-full px-7.5 py-4">
        <ArrowRight strokeWidth={1} className="h-6 w-6" />
      </button>

      <h3 className="w-full max-w-66 text-2xl">
        {titleBefore} <span className="text-light-soil">{highlight}</span>{" "}
        {titleAfter}
      </h3>

      {image && (
        <div className="absolute left-[21%] z-10">
          <div className="relative size-57">
            <Image
              src="/images/icons/stone-6.svg"
              alt="stone"
              fill
              className="object-cover"
            />
          </div>
        </div>
      )}

      <div>
        <p className="font-neue-haas tracking-widest">{description}</p>

        <p className="mt-2 font-medium uppercase">{tags}</p>
      </div>
    </div>
  );
}
