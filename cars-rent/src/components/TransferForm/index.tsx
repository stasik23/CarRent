'use client'

import React, { useState } from 'react';
import { FaExchangeAlt } from 'react-icons/fa';
import { Radio, RadioGroup, FormControlLabel } from '@mui/material';

export const TransferForm = () => {
  const [pickupCity, setPickupCity] = useState('');
  const [dropoffCity, setDropoffCity] = useState('');
  const [selectedOption, setSelectedOption] = useState('pickup');

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex flex-row items-center justify-center space-x-4 p-6 bg-gray-100 rounded-lg font-jakarta shadow-md">
      <div className={`bg-white p-4 rounded-lg shadow ${selectedOption === 'pickup' ? 'border border-blue-500' : ''}`}>
        <h3 className="text-lg text-black font-semibold">Pick-Up</h3>
        <RadioGroup value={selectedOption} onChange={handleOptionChange} row>
          <FormControlLabel value="pickup" control={<Radio />} label="" />
        </RadioGroup>
        <label className="text-black block mt-2">
          Locations
          <select value={pickupCity} onChange={(e) => setPickupCity(e.target.value)} className="mt-1 block w-full text-gray-500 border border-gray-300 rounded-md p-2">
            <option>Select your city</option>
            {/* Add more options here */}
          </select>
        </label>
        <label className="block text-black mt-2">
          Date
          <select className="mt-1 block w-full border text-gray-500 border-gray-300 rounded-md p-2">
            <option>Select your date</option>
            {/* Add more options here */}
          </select>
        </label>
        <label className="block text-black mt-2">
          Time
          <select className="mt-1 block w-full border text-gray-500 border-gray-300 rounded-md p-2">
            <option>Select your time</option>
            {/* Add more options here */}
          </select>
        </label>
      </div>

      <div className="exchange-icon flex items-center">
        <FaExchangeAlt className="text-2xl text-blue-500" />
      </div>

      <div className={`bg-white p-4 rounded-lg shadow ${selectedOption === 'dropoff' ? 'border border-blue-500' : ''}`}>
        <h3 className="text-lg text-black font-semibold">Drop-Off</h3>
        <RadioGroup value={selectedOption} onChange={handleOptionChange} row>
          <FormControlLabel value="dropoff" control={<Radio />} label="" />
        </RadioGroup>
        <label className="block text-black mt-2">
          Locations
          <select value={dropoffCity} onChange={(e) => setDropoffCity(e.target.value)} className="mt-1 block w-full border text-gray-500 border-gray-300 rounded-md p-2">
            <option>Select your city</option>
            {/* Add more options here */}
          </select>
        </label>
        <label className="block text-black mt-2">
          Date
          <select className="mt-1 block w-full border text-gray-500 border-gray-300 rounded-md p-2">
            <option>Select your date</option>
            {/* Add more options here */}
          </select>
        </label>
        <label className="block text-black mt-2">
          Time
          <select className="mt-1 block w-full border text-gray-500 border-gray-300 rounded-md p-2">
            <option>Select your time</option>
            {/* Add more options here */}
          </select>
        </label>
      </div>
    </div>
  );
};
