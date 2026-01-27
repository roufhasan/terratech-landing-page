import Image from "next/image";
import Link from "next/link";

export default function HeroContent() {
  return (
    <div className="container-narrow bg-[url('/images/home/hero-bg.png')] bg-contain bg-right bg-no-repeat">
      <h1 className="text-6xl leading-none md:text-7xl lg:text-[130px]">
        <span className="block font-light">Where</span>
        <span className="text-popping block font-semibold">precision</span>
      </h1>

      <div className="flex flex-col-reverse gap-4 lg:flex-row lg:items-center">
        <div className="space-y-6">
          <p className="font-neue-haas max-w-65 tracking-wider">
            Creating detailed topographic maps that accurately represent the
            natural and man-made features of the Earth&apos;s surface.
          </p>
          <Link
            href="/services"
            className="hover:border-popping hover:bg-popping/10 inline-block rounded-full border border-white/20 bg-transparent px-6 py-2.5 text-xs font-medium tracking-wider uppercase transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_12px_rgba(139,233,56,0.3)] md:px-8 md:py-3.75 md:text-base xl:px-10 xl:py-4"
          >
            Our services
          </Link>
        </div>

        <h1 className="text-6xl leading-none md:text-7xl lg:text-[130px]">
          <span className="block font-light">meets</span>
          <span className="block font-semibold">progress</span>
        </h1>
      </div>

      <div className="mt-7 flex items-center gap-16">
        <div className="relative size-33.5">
          <Image
            src="/images/icons/stone-2.svg"
            alt="stone-2"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex items-center gap-3">
          <div className="relative size-10">
            <Image
              src="/images/icons/stone-1.svg"
              alt="stone-1"
              fill
              className="object-cover"
            />
          </div>

          <p className="font-neue-haas max-w-61 tracking-wider">
            Providing precise surveying services during the construction phase
          </p>
        </div>
      </div>
    </div>
  );
}
