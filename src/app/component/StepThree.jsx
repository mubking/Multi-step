"use client"
import React, { useState } from 'react';

const StepThree = ({ activePick, handleClickPick, pickAdd }) => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="flex flex-row justify-between items-center mt-5 two bg-[#F8F9FE]">
      {pickAdd.map((pa, i) => (
        <div
          key={i}
          onClick={() => handleClickPick(i)}
          className={`${activePick === i ? 'bg-blue-500' : ''} w-[100%] border one border-gray-300 p-4 border-sm`}
        >
          <input type="checkbox" name="" id="" />

          <div className="">
            <h2 className="text-[#001C41]">{pa.title}</h2>
            <p className="text-[#C4C5CD]">{pa.para}</p>
          </div>
          <div>
            <h2 className="text-[#AEABF5]">{pa.month}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StepThree;
