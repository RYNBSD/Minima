import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const trusted = [
  "/asset/google-logo.png",
  "/asset/microsoft-logo.png",
  "/asset/OYO-logo.png",
];

export default function Hero() {
  return (
    <section className="bg-black section center" id="home">
      <div className="container grid grid-cols-2 place-items-center gap-y-5">
        <div className="flex flex-col justify-center items-start gap-10 p-16">
          <div className="w-full h-full">
            <h1 className="font-bold text-5xl text-white leading-[64px]">
              Authentic content for your{" "}
              <span className="text-black bg-[#FDEC57]">social media</span>{" "}
              presence?
            </h1>
            <p className="text-white text-base font-normal pt-5">
              We have made it our business to offer unique solutions in the
              field of social media, authentic content productions, e-commerce
              and brand building.
            </p>
          </div>
          <button
            type="button"
            className="text-black py-4 px-12 bg-white rounded-lg"
          >
            Get Started
          </button>
          <div>
            <div className="flex gap-2 items-center pb-5">
              <h3 className="font-normal text-base text-white">
                Also trusted by
              </h3>
              <IoIosArrowRoundForward color="#fff" size={24} />
            </div>
            <div className="flex gap-2 justify-center items-center">
              {trusted.map((trust) => (
                <div className="bg-white rounded-lg px-8 py-6" key={trust}>
                  <img
                    className="w-[63.741px] h-[24.282px] object-contain"
                    src={trust}
                    alt="trusted company"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <img src="/asset/iphone.png" alt="phone" />
        </div>
      </div>
    </section>
  );
}
