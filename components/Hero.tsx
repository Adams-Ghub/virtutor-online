import React from "react";
import SearchInput from "./SearchInput";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="max-container px-4">
      <div className="md:flex-between flex flex-col items-center justify-center gap-12 py-24 md:flex-row ">
        <div className="flex flex-col gap-6 px-4 max-md:order-2 md:max-w-[50%] md:px-0">
          <h1 className="text-[1.6em] font-black leading-[0.8] md:text-[3em] md:leading-[1.0]">Online tutoring that releases potential</h1>
          <p className="mt-0 md:mb-2 md:mt-5 ">
            We can&apos;t stop you worrying about your child. But our expert
            tutors can help their grades and confidence soar - and help you
            worry a little less.
          </p>
          <div>
            <SearchInput />
          </div>
        </div>
        <div>
            <Image 
            src="/assets/images/hero-transparent.webp"
            alt="student having online lesson with tutor"
            width={600}
            height={400}
            className="w-full max-md:order-1"
            />
        </div>
      </div>
    </section>
  );
};

export default Hero;
