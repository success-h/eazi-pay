import Image from "next/image";

export function HowItWorks() {
  return (
    <section className="py-10" id="how-it-works">
      <h2 data-aos="fade-up" className="text-primary text-center">
        How Eazipay Works
      </h2>
      <p data-aos="fade-up" className="text-center text-3xl mt-4">
        Get started in 3 simple steps.
      </p>
      <Image
        data-aos="fade-up"
        src="/how-it-works.svg"
        height={1099}
        width={1099}
        className="mx-auto my-20"
        alt="hero"
      />
    </section>
  );
}
