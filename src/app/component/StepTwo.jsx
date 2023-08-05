"use client";

import React, { useState } from "react";
// import arcade from '.'
const StepTwo = ({activePlan, handleClickPlan, planData}) => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn((prevIsOn) => !prevIsOn);
  };

  return (
    <div className=" p-4 ">
      <h1 className="text-[#042954] text-5xl">Select your plan</h1>
      <p className="text-[#DDDEE6] text-sm mt-4">
        You have the option of monthly or yearly billing.
      </p>
      <div className="flex flex-row w-[100%] mt-10 gap-4  h-40 ">
        {planData.map((pd, i) => (
          <div onClick={()=> handleClickPlan(i)} className={`${activePlan === i ? "bg-blue-500" : ""} w-[100%] border one border-gray-300 p-4 border-sm `}>
            <img src={pd.image} alt="" />
            <h2 className="mt-10">{pd.title}</h2>
            <div className=" flex flex-row  items-center  ">
              {pd.amount}
            </div>
          </div>
        ))}
        {/* <div className=" w-[100%] border one border-gray-300 p-4 border-sm ">
          <img src="/arcade.svg" alt="" />
          <h2 className="mt-10">Arcade</h2>
          <div className=" flex flex-row  items-center  ">
            <p>$9/</p>
            <p>Mo</p>
          </div>
        </div>
        <div className=" w-[100%] border one border-gray-300 p-4">
          <img src="/advanced.svg" alt="" />
          <h2 className="mt-10"> Advanced</h2>

          <div className="flex flex-row items-center">
            <p>$12/</p>
            <p>Mo</p>
          </div>
        </div>
        <div className=" w-[100%] border one border-gray-300 p-4">
          <img src="/pro.svg" alt="" />
          <h2 className="mt-10">pro</h2>
          <div className="flex flex-row items-center">
            <p>$15/</p>
            <p>Mo</p>
          </div>
        </div> */}
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

      <div className="flex flex-row justify-between mt-10">
        <button class="inline-flex text-[#BBBDC6] bg-[transparent] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Go back
        </button>
        <button class="inline-flex text-white bg-[#03295A] border-0 py-2 px-6 focus:outline-none hover:bg-[#F9818E] rounded ">
          Next Step
        </button>
      </div>
    </div>
  );
};

export default StepTwo;
