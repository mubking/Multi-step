import React from "react";

const StepFour = ({ planData, activePlan, selectedOptions, options }) => {
  return (
    <div className="p-4">
      <h1 className="text-3xl"> Finishing up</h1>
      <h2 className=""> Double-check everything looks OK before confirming.</h2>

      <div className=" bg-[#F8F9FE] flex flex-row justify-between p-5">
        <h4>{planData[activePlan].title}</h4>
        <h4>{planData[activePlan].amount}</h4>
      </div>
      <div className="mt-4  px-4 flex flex-col gap-2">
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
    </div>
  );
};

export default StepFour;
