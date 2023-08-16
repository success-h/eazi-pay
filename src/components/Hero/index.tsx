import Image from "next/image";
import { IOSDownload, PlaystoreDownload } from "../DownloadApp";

export const Hero = () => {
  return (
    <section className="min-h-screen pt-40 lg:pt-0 grid-cols-2 gap-6 lg:px-4 content-center mx-auto max-w-screen-2xl md:px-8 lg:grid 2xl:px-0">
      <Image
        src="/gradients.svg"
        height={2000}
        width={2000}
        className="absolute top-0 bottom-0 right-0 left-0"
        alt="map"
        priority
      />
      <div
        data-aos="fade-up"
        className="self-center z-10 bg-transparent max-lg:px-4"
      >
        <h1 className="font-bold lg:mt-0">
          Run your <span className="text-primary">payroll</span>{" "}
          <span className="text-[#B4A572]">easily</span> in{" "}
          <span className="text-red-600">seconds</span>
        </h1>
        <p className="mt-8 w-4/5">
          We have built an all-inclusive simple solution for individual and
          businesses to manage staff, pay salaries, bills, and relevant taxes
          all at once.
        </p>
        <button className="btn my-4 bg-primary rounded-full text-white">
          Start Using Free, Forever
        </button>
        <div className="z-10 mt-10">
          <h5>Download the Eazipay App</h5>
          <div className="flex gap-5 mt-2">
            <IOSDownload />
            <PlaystoreDownload />
          </div>
        </div>
      </div>

      <Image
        src="/hero-image.svg"
        data-aos="fade-up"
        height={800}
        width={800}
        className="lg:right-0 lg:bottom-20 lg:absolute mt-20 lg:mt-0"
        alt="hero"
      />
    </section>
  );
};
