"use client"
import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const StepFour = ({ planData, activePlan, selectedOptions, options, activeStep, handleReset, setActiveStep }) => {
  const [time, setTime] = useState(getFormattedTime());
  useEffect(() => {
    Aos.init({
      duration: 1000,
      delay: 200,
      easing: "ease-in"
    })
  }, []);

  function getFormattedTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getFormattedTime());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <div data-Aos='zoom-down' className="p-4">
      <h1 className="text-3xl"> Finishing up</h1>
      <h2 className=""> Double-check everything looks OK before confirming.</h2>

      <div className=" bg-[#F8F9FE] flex flex-row justify-between p-5">
        <h4>{planData[activePlan].title}</h4>
        <h4>{planData[activePlan].amount}</h4>
      </div>
      <div className="mt-4  px-4 flex flex-col bg-[#F8F9FE] p-5 gap-2">
        {selectedOptions.map((index) => (
          <div className="flex justify-between items-center" key={index}>
            <h3 className="text-[hsl(231,11%,63%)] text-[16px] font-[500]">
              {options[index].head}
            </h3>
            <h3 className="text-[hsl(213,96%,18%)]">
              {options[index].amount}
            </h3>
          </div>
        ))}
      </div>
      <div className="clock-container mt-10">
        <label className="clock-label">Time:</label>
        <div className="clock" id="clock">
          {time}
        </div>
      </div>
      <div className="flex flex-row justify-between items-center mt-10  w-[100%] ">
        <button
          onClick={() => setActiveStep(activeStep - 1)}
          className="inline-flex text-[hsl(213,96%,18%)] border-none py-2 px-5 text-[16px]"
        >
          Go Back
        </button>
        <button
          onClick={handleReset}
          className="inline-flex text-white bg-[hsl(213,96%,18%)] border-0 py-2 px-5 focus:outline-none hover:opacity-[90%] rounded text-lg"
        >
          Next Step
        </button>
      </div>
    </div>
    
  );
};

export default StepFour;
