import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const StepFive = () => {
    useEffect(() => {
        Aos.init({
          duration: 1000,
          delay: 200,
          easing: "ease-in"
        })
      }, []);
  return (
    <div data-Aos='fade-up' className="py-24 flex justify-center items-center">
      <div className=" flex flex-col items-center justify-center">
        <div className="">
          <img src="/assets/images/icon-thank-you.svg" alt="" />
        </div>
        <div className="text-center">
          <h1 className="text-[#042954] text-5xl">Thank you!</h1>
          <p className="text-[#304157] text-sm mt-4">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to email us
            at support@loremgaming.com.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StepFive;
