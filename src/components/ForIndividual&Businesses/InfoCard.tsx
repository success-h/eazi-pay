"use client";
import Slider from "react-slick";

const data = [
  {
    title: "Tamper-proof Payroll for LIfe",
    id: 1,
    desc: "Your staff payroll history is kept in one place forever. No more excel sheet or manual records. Download your payroll history anytime you need it.",
  },
  {
    title: "All Payroll, Anytime Anywhere",
    id: 2,
    desc: "Your staff payroll history is kept in one place forever. No more excel sheet or manual records. Download your payroll history anytime you need it.",
  },
  {
    title: "Payroll in Seconds",
    id: 3,
    desc: "Your staff payroll history is kept in one place forever. No more excel sheet or manual records. Download your payroll history anytime you need it.",
  },
];
export function InfoCard() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section
      data-aos="fade-up"
      className="content-center mx-auto max-w-screen-xl md:px-5"
    >
      <div className="max-w-2xl mx-auto p-3 my-7">
        <Slider
          {...settings}
          autoplay
          // fade
          vertical={false}
          arrows={false}
          verticalSwiping
          dots
        >
          {data.map((item) => (
            <div
              key={item.id}
              className="w-[512px] h-[320px] card bg-primary p-10 lg:p-20 text-white"
            >
              <h4>{item.title}</h4>
              <p className="lg:text-lg leading-loose mt-5">{item.desc}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
