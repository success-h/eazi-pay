import { InfoCard } from "./InfoCard";

export function ForWho() {
  return (
    <section className="w-full bg-[url(/wave.svg)] py-40 px-4">
      <h2 data-aos="fade-up" className="text-primary text-center">
        For Individuals and Businesses
      </h2>
      <p data-aos="fade-up" className="text-center text-lg">
        Join 200+ businesses using Eazipay&apos;s easy solution.
      </p>
      <InfoCard />
      <p data-aos="fade-up" className="text-center text-lg max-w-lg mx-auto">
        We are happy to answer your queries. Please, reach us at{" "}
        <a className="text-rose-700" href="mailto:hello@myeazipay.com">
          hello@myeazipay.com
        </a>{" "}
        and expect our response shortly after.
      </p>
    </section>
  );
}
