"use client";

import Image from "next/image";

export const Hero = () => {
  return (
    <main className="grid-cols-2 gap-6 pt-60 px-4 mx-auto max-w-7xl min-h-screen md:px-8 lg:grid xl:px-0">
      <Image
        src="/map.png"
        height={1000}
        width={1000}
        className="absolute right-0 bottom-20 -z-10"
        alt="map"
      />

      <div>
        <h1 className="mt-28 font-bold lg:mt-0">
          Run your <span className="text-primary">payroll</span>{" "}
          <span className="text-[#B4A572]">easily</span> in{" "}
          <span className="text-red-600">seconds</span>
        </h1>
        <p className="mt-8 prose-lg">
          Give your customers the most convenient payment option and enjoy up to
          10x lower transaction fees.
        </p>
        <h4 className="mt-8 mb-10 lg:mb-0"></h4>
      </div>
    </main>
  );
};
