"use client";
import StepFour from "@/app/component/StepFour";
import StepOne from "@/app/component/StepOne";
import StepThree from "@/app/component/StepThree";
import StepTwo from "@/app/component/StepTwo";
import { useState } from "react";
import StepFive from "./component/StepFive";

export default function Home() {
  const [activeTab, setActivetab] = useState(0);
  const [activePlan, setActivePlan] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const menuLink = [
    {
      number: 1,
      step: "STEP 1",
      title: "Your info",
    },
    {
      number: 2,
      step: "STEP 2",
      title: "Select plan",
    },
    {
      number: 3,
      step: "STEP 3",
      title: "Add-ons",
    },
    {
      number: 4,
      step: "STEP 4",
      title: "Summary",
    },
  ];
  const planData = [
    {
      image: "/arcade.svg",
      title: "Arcade",
      amount: "$9/mo ",
    },
    {
      image: "/advanced.svg",
      title: "Advanced",
      amount: "$12/mo",
    },
    {
      image: "/pro.svg",
      title: "pro",
      amount: "$15/mo",
    },
  ];
  const handleClickPlan = (i) => {
    setActivePlan(i);
  };
  const pickAdds = [
    {
      head: "Online service",
      text: "Access to multiplayer games",
      amount: "+$1/mo",
    },
    {
      head: "Larger storage",
      text: "Extra 1TB of cloud save",
      amount: "+$2/mo",
    },
    {
      head: "Customizable Profile",
      text: "Custom theme on your profile",
      amount: "+$2/mo",
    },
  ];

  const handleClickPick = (index) => {
    if (selectedOptions.includes(index)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== index));
    } else {
      setSelectedOptions([...selectedOptions, index]);
    }
  };

  const handleReset = () => {
    setActivetab(activeTab + 1);

    setTimeout(() => {
      setActivetab(0);
    }, 3000);
  };

  const contentMenu = [
    {
      content: <StepOne activeStep={activeTab} setActiveStep={setActivetab} />,
    },
    {
      content: (
        <StepTwo
          activePlan={activePlan}
          activeStep={activeTab}
          setActiveStep={setActivetab}
          handleClickPlan={handleClickPlan}
          planData={planData}
        />
      ),
    },
    {
      content: (
        <StepThree
          activeStep={activeTab}
          setActiveStep={setActivetab}
          pickAdd={pickAdds}
          handleClickPick={handleClickPick}
        />
      ),
    },
    {
      content: (
        <StepFour
          options={pickAdds}
          activeStep={activeTab}
          setActiveStep={setActivetab}
          selectedOptions={selectedOptions}
          activePlan={activePlan}
          planData={planData}
          handleReset={handleReset}
        />
      ),
    },
    {
      content: <StepFive />,
    },
  ];

  const handleClickMenu = (i) => {
    setActivetab(i);
  };

  return (
    <section className="flex bg-[#EEF5FF] min-h-screen md:h-screen flex-col justify-center items-center">
      <div className="flex md:flex-row flex-col px-2 md:px-0 gap-6 md:w-[60%] rounded-2xl md:bg-white md:p-4 h-auto md:h-[85vh]">
        <header>
          <nav className="w-full h-[40vh] md:w-[250px] seven cursor-pointer md:mx-4 rounded-2xl md:h-full md:bg-cover bg-cover bg-no-repeat bg-center bg-[url(/assets/images/bg-sidebar-mobile.svg)] md:bg-[url(/assets/images/bg-sidebar-desktop.svg)]">
            <div className="flex pl-2 flex-col five gap-4">
              {menuLink.map((mn, i) => (
                <div
                  onClick={() => handleClickMenu(i)}
                  key={i}
                  className="flex flex-row gap-3"
                >
                  <span className="flex  items-center  justify-center mt-2 border border-solid border-[white] rounded-full h-8 w-8 text-white hover:text-black hover:bg-[#BFE1FD]">
                    {mn.number}
                  </span>

                  <div className="flex flex-col six">
                    <span className="text-[#8988FF]">{mn.step}</span>
                    <h3 className="text-white">{mn.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </nav>
        </header>
        <main className="bg-white w-full">
          <div className="relative md:top-0 bottom-[200px] bg-white">{contentMenu[activeTab].content}</div>
        </main>
      </div>
    </section>
  );
}
