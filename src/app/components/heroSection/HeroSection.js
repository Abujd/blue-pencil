import Image from "next/image";
import React from "react";

function HeroSection(props) {
  return (
    <div className="relative overflow-hidden">
      <div className="container grid grid-cols-1 lg:grid-cols-2">
        <div className="lg:py-[140px] lg:order-first order-last md:mt-0 mt-[40px]">
          <h1 className="text-[#091133] leading-[66px] font-medium md:block hidden">
            Introduce Your Product <br /> Quickly & Effectively
          </h1>
          <h2 className="text-[#091133] leading-[40px] font-medium md:hidden block ">
            Introduce Your Product Quickly & Effectively
          </h2>
          <div className="mt-[20px] mb-[30px]">
            <p className="text-[#505F98] text-[18px] leading-[30px]">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            <p className="text-[#505F98] text-[18px] leading-[30px]">
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim.
            </p>
          </div>
          <div class="md:flex items-center gap-4">
            <button class="btn btn-primary  w-[100%] md:w-fit">
              Purchase UI Kit
            </button>
            <button class="btn btn-outlined md:mt-0 mt-[20px] w-[100%] md:w-fit">
              Learn More
            </button>
          </div>
        </div>
      </div>
      {/* <div className="absolute top-0 right-0">
        <Image src="/herosection.png" alt="Hero Image" layout="fill" />
      </div> */}
    </div>
  );
}

export default HeroSection;
