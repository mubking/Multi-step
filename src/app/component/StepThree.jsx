"use client";

const StepThree = ({ activePick, handleClickPick, pickAdd, activeStep, setActiveStep }) => {
  return (
    <div className="flex flex-row justify-between items-center mt-5 two bg-[#F8F9FE]">
      {pickAdd.map((pa, i) => (
        <div
          key={i}
          onClick={() => handleClickPick(i)}
          className={`${
            activePick === i ? "bg-blue-500" : ""
          } w-[100%] flex flex-row gap-2 items-center border one border-gray-300 p-4 border-sm`}
        >
          <div className="">
            <input type="checkbox" name="" id="" />
          </div>

          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-2">
              <h2 className="text-[#001C41]">{pa.head}</h2>
              <p className="text-[#C4C5CD]">{pa.text}</p>
            </div>
            <div>
              <h2 className="text-[#AEABF5]">{pa.amount}</h2>
            </div>
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
      ))}
    </div>
  );
};

export default StepThree;
