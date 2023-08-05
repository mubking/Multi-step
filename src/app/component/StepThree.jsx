"use client";

const StepThree = ({ activePick, handleClickPick, pickAdd }) => {
  return (
    <div className="flex flex-row justify-between items-center mt-5 two gap-5 bg-[#F8F9FE]">
      {pickAdd.map((pa, i) => (
        <div
          key={i}
          onClick={() => handleClickPick(pa)}
          className={`${
            activePick === i ? "" : ""
          } w-[100%] flex flex-row gap-20 items-center border one border-gray-300 p-4 border-sm`}
        >
          <div className="">
            <input type="checkbox" name="" id="" />
          </div>

          <div className="flex justify-between two items-center">
            <div className="flex flex-col gap-2">
              <h2 className="text-[#001C41]">{pa.head}</h2>
              <p className="text-[#C4C5CD]">{pa.text}</p>
            </div>
            <div>
              <h2 className="text-[#AEABF5]">{pa.amount}</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StepThree;
