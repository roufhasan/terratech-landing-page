import Image from "next/image";
import Link from "next/link";

export default function Industries() {
  return (
    <section className="relative">
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

      <div className="container-narrow flex gap-7 py-37.5">
        {/* left content section */}
        <div className="w-full md:w-1/2">
          <h2 className="w-full max-w-xl text-[80px] leading-21">
            Pioneering the fusion of gravimetry and drone{" "}
            <span className="text-light-soil font-medium">technology</span>
          </h2>

          <div className="flex justify-end">
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
        <div className="grid w-full grid-cols-2 grid-rows-3 gap-5 md:w-1/2">
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
