import Image from "next/image";
import Link from "next/link";

export default function Industries() {
  return (
    <section className="relative px-5 lg:px-0">
      <div className="absolute -top-[5%] left-0 -rotate-45">
        <div className="relative size-29.25">
          <Image
            src="/images/icons/stone-3.svg"
            alt="stone-3"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="container-narrow flex flex-col gap-7 py-16 md:py-24 lg:flex-row lg:py-37.5">
        {/* left content section */}
        <div className="w-full lg:w-1/2">
          <h2 className="w-full max-w-xl text-4xl leading-none md:text-5xl lg:text-[80px] lg:leading-21">
            Pioneering the fusion of gravimetry and drone{" "}
            <span className="text-light-soil font-medium">technology</span>
          </h2>

          <div className="flex lg:justify-end">
            <div>
              <p className="paragraph mt-9 w-full max-w-md">
                The science of measuring gravitational forces, unveils hidden
                insights into Earth&apos;s subsurface structures and mass
                distribution, unlocking secrets that shape our understanding of
                the planet&apos;s dynamic geophysical processes.
              </p>

              <Link
                href="/"
                className="bg-popping text-dark-soil mt-5 inline-block rounded-full px-6 py-4 text-sm font-medium tracking-wider uppercase"
              >
                Industries
              </Link>
            </div>
          </div>
        </div>

        {/* right media section */}
        <div className="grid h-100 w-full grid-cols-2 grid-rows-3 gap-5 md:h-125 lg:h-auto lg:w-1/2">
          <div className="row-span-1">
            <div className="relative ml-auto h-full w-[85%] overflow-hidden rounded-[10px]">
              <Image
                src="/images/home/city.png"
                alt="city"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="relative row-span-3 overflow-hidden rounded-[10px]">
            <Image
              src="/images/home/drone-shot.png"
              alt="dront-shot-sample"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative row-span-2 overflow-hidden rounded-[10px]">
            <Image
              src="/images/home/drone.png"
              alt="city"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
