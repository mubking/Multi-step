"use client";
import StepFour from "@/app/component/StepFour";
import StepOne from "@/app/component/StepOne";
import StepThree from "@/app/component/StepThree";
import StepTwo from "@/app/component/StepTwo";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActivetab] = useState(0);
  const [activePlan, setActivePlan] = useState(0);
  const [activePick, setActivePick] = useState(0);

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
      amount: "$9/mo "
      
    },
    {
      image: "/advanced.svg",
      title: "Advanced",
      amount: "$12/mo"

    },
    {
      image: "/pro.svg",
      title: "pro",
      amount: "$15/mo"

    },
  ];
  const handleClickPlan = (i) => {
    setActivePlan(i)
  }
  const pickAdd = [
    {
      button: '',
      title: 'Online service',
      para: 'Access to multiplayer games',
      month: '+$1/mo',
    },
    {
      button: '',
      title: '',
      para: '',
      month: '',
    },
    {
      button: '',
      title: '',
      para: '',
      month: '',
    },
  ];
  const handleClickPick = (i) => {
    setActivePick(i);
  };
  const contentMenu = [
    {
      content: (<StepOne />)
    },
    {
      content: (<StepTwo activePlan={activePlan} handleClickPlan={handleClickPlan} planData={planData} />)
    },
    {
      content: (<StepThree />)
    },
    {
      content: (<StepFour activePlan={activePlan} planData={planData} />)
    },
  ]

  const handleClickMenu = (i) => {
    setActivetab(i)
  }

  return (
    <section className="flex bg-[#EEF5FF] twelve h-screen flex-col justify-center items-center">
      <div className="flex flex-row three gap-6 w-[60%] rounded-2xl bg-white p-4 h-[85vh]">
        <header>
          <nav className="w-full h-[40vh] md:w-[250px] seven cursor-pointer p-4 rounded-2xl md:h-full md:bg-cover bg-auto bg-no-repeat bg-center bg-[url(/assets/images/bg-sidebar-desktop.svg)]">
            <div className="flex flex-col five gap-4">
              {
                menuLink.map((mn, i) => (
                  <div onClick={() => handleClickMenu(i)} className="flex flex-row gap-3">
                   <span className="flex  items-center  justify-center mt-2 border border-solid border-[white] rounded-full h-8 w-8 text-white hover:text-black hover:bg-[#BFE1FD]">
                      {mn.number}
                   </span>

                    <div className="flex flex-col six">
                      <span className="text-[#8988FF]">{mn.step}</span>
                      <h3 className="text-white">{mn.title}</h3>
                    </div>
                  </div>
                ))
              }
            </div>
          </nav>
        </header>
        <main className="bg-white w-full">
          {
            contentMenu[activeTab].content
          }
        </main>
        
      </div>
    </section>
  )
}
