import React from 'react'

const StepFour = ({planData, activePlan}) => {
    return (
        <div className='p-4'>
            <h1 className='text-3xl'>  Finishing up</h1>
            <h2 className=''>  Double-check everything looks OK before confirming.</h2>

            <div className=" bg-[#F8F9FE] flex flex-row justify-between p-5">
                <h4>{planData[activePlan].title}</h4>
                <h4>{planData[activePlan].amount}</h4>
            </div>
        </div>
    )
}

export default StepFour
