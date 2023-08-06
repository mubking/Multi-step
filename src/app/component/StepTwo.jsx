"use client";

import Aos from "aos";
import React, { useState, useEffect } from "react";
import "aos/dist/aos.css";
// import arcade from '.'
const StepTwo = ({
  activePlan,
  handleClickPlan,
  planData,
  activeStep,
  setActiveStep,
}) => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn((prevIsOn) => !prevIsOn);
  };

  useEffect(() => {
    Aos.init({
      duration: 1000,
      delay: 200,
      easing: "ease-in",
    });
  }, []);

  return (
    <div data-aos="fade-left" className=" p-4 ">
      <h1 className="text-[#042954] text-5xl">Select your plan</h1>
      <p className="text-[#DDDEE6] text-sm mt-4">
        You have the option of monthly or yearly billing.
      </p>
      <div className="flex flex-col md:flex-row w-[100%] mt-10 gap-4">
        {planData.map((pd, i) => (
          <div
          key={i}
            onClick={() => handleClickPlan(i)}
            className={`${
              activePlan === i ? "bg-blue-500" : ""
            } w-[100%] flex flex-row gap-4 md:items-start items-center md:flex-col border one border-gray-300 px-4 py-4 border-sm `}
          >
            <div className="">
            <img src={pd.image} alt="" />
            </div>
            <div className="flex-col flex">
              <h2 className="">{pd.title}</h2>
              <h3 className="">{pd.amount}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className=" bg-[#F8F9FE] flex flex-row gap-10 justify-center mt-8">
        <h2>Monthly</h2>
        <button
          onClick={handleToggle}
          className={`${
            isOn ? "bg-blue-500" : "bg-[#03295A]"
          } w-12 h-6 rounded-full transition-colors focus:outline-none`}
        >
          <span
            className={`${
              isOn ? "translate-x-[10px]" : "-translate-x-[10px]"
            } inline-block mt-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform`}
          ></span>
        </button>
        <h2>yearly</h2>
      </div>

      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setActiveStep(activeStep - 1)}
          className="inline-flex text-[hsl(213,96%,18%)] border-none py-2 px-5 text-[16px]"
        >
          Go Back
        </button>
        <button
          onClick={() => setActiveStep(activeStep + 1)}
          className="inline-flex text-white bg-[hsl(213,96%,18%)] border-0 py-2 px-5 focus:outline-none hover:opacity-[90%] rounded text-lg"
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default StepTwo;
