import React from "react";
import { Link } from "react-router-dom";

function Section1() {
  return (
    <section className="h-[90vh] relative rounded-br-3xl">
      <video
        autoPlay
        loop
        muted
        className="absolute z-20 top-0 left-0 w-full h-full object-cover rounded-br-[10rem]"
      >
        <source src="/assets/videos/landing.mp4" type="video/mp4" />
        {/* Your browser does not support the video tag.   */}
      </video>

      <div className="z-40 absolute top-1/2 left-0 md:left-32 py-10 px-5 lg-px-0 md:rounded-3xl md:w-[70%] lg:w-[35%]  bg-white bg-opacity-20  text-white -translate-y-1/2">
        <p className="text-4xl  font-semibold">
          La solution de <span className="text-orange">contrôle parental</span>{" "}
          et bien-être numérique optimale
        </p>

        <div className="mt-5 lg:mt-10 gap-10 flex max-md:justify-between md:gap-10">
          <Link
            to=""
            className="flex px-8 gap-1 place-items-center md:gap-4 rounded-xl transition-all duration-300 ease-in-out py-3 hover:bg-dark-blue   bg-blue"
          >
            <p className="max-md:text-xs">View Demo</p>
            <img src="/assets/images/vision.png" alt="" className="" />
          </Link>
          <Link
            to=""
            className="flex px-8 gap-1 place-items-center md:gap-4 rounded-xl transition-all duration-300 ease-in-out py-3 bg-orange orange-link"
          >
            <p className="max-md:text-xs">Buy Now</p>
            <img
              src="/assets/images/shopping-cart (2).png"
              alt=""
              className=""
            />
          </Link>
        </div>
      </div>
      <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-30 rounded-br-[10rem] md:hidden z-30"></div>
    </section>
  );
}

export default Section1;
