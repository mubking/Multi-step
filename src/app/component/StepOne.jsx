"use client"
import React, { useState } from 'react';


const StepOne = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [numberError, setNumberError] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setNameError('');
      setEmailError('');
      setNumberError('');
  
      if (name.trim() === '') {
        setNameError('Name is required');
      }
      if (email.trim() === '') {
        setEmailError('Email Address is required');
      }
      if (number.trim() === '') {
        setNumberError('Number is required');
      }
  
    
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
          case 'name':
            setName(value);
            setNameError('');
            break;
          case 'email':
            setEmail(value);
            setEmailError('');
            break;
          case 'number':
            setNumber(value);
            setNumberError('');
            break;
          default:
            break;
        }
      };
  
    return (
        <div className='p-4'>
        <h1 className='text-[#042954] text-5xl text'>Personal info</h1>
        <p className='text-[#DDDEE6] text-sm mt-5'>
          Please provide your name, email address, and phone number.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-[#1A2C45] ">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder='  e.g. Stephen King'
              value={name}
              onChange={handleInputChange}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            {nameError && <p className="text-red-500 text-sm">{nameError}</p>}
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-[#1A2C45]">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder='  e.g. stephenking@lorem.com'
              value={email}
              onChange={handleInputChange}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
          </div>
          <div className="relative mb-4">
            <div className='flex flex-row mr-14 items-center'>
            <label htmlFor="number" className="leading-7 text-sm text-[#1A2C45]">Number</label>
            {numberError && <p className="text-red-500 text-sm absolute inset-y-0 right-0">{numberError}</p>}

            </div>
            <input
              type="text"
              id="number"
              name="number"
              placeholder='  e.g. +1 234 567 890'
              value={number}
              onChange={handleInputChange}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            
          </div>
          <button className="inline-flex  text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Nest Step
          </button>
        </form>
      </div>
    )
}

export default StepOne;