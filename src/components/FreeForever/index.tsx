import Image from "next/image";
import { IOSDownload, PlaystoreDownload } from "../DownloadApp";

export function FreeForever() {
  return (
    <section className="w-full bg-[url(/get-bg.svg)] py-40 px-4 mt-20">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 place-items-center">
        <div className="self-center z-10 bg-transparent">
          <h2 data-aos="fade-up" className="font-bold lg:mt-0">
            Free forever for your{" "}
            <span className="text-red-600">salary payment</span>
          </h2>

          <div className="z-10 mt-10">
            <h5 data-aos="fade-up">Subscribe to the Eazilife today</h5>
            <div className="flex gap-5 mt-2 mb-6" data-aos="fade-up">
              <IOSDownload />
              <PlaystoreDownload />
            </div>
          </div>
        </div>

        <Image
          data-aos="fade-up"
          src="/get-image.svg"
          height={800}
          width={800}
          className=""
          alt="hero"
          priority
        />
      </div>
    </section>
  );
}
