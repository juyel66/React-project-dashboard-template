import React, { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";


function CreateOrder() {
  const [hourlyRate, setHourlyRate] = useState(false);
  const [fixedPrice, setFixedPrice] = useState(false);
  const [category, setCategory] = useState("");
  const [currency, setCurrency] = useState("USD");

  return (
    <div className="  p-6 ">
      {/* Header */}
      <div className=" mb-6">
        <Link to="/dashboard">
          <button className="flex items-center text-[#154153] cursor-pointer gap-1">
            <GoArrowLeft />
            <span>Back</span>


          </button>
        </Link>
        <h1 className="text-[24px] font-bold text-center text-[#012939]">Create Order</h1>

      </div>

      {/* Form */}
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-[#154153] ">
          <div className="md:col-span-1">
            <label className="block text-[16px] mb-1">Give a title to your task</label>
            <input
              type="text"
              placeholder="Enter text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
          </div>
          <div className="md:col-span-1">
            <label className="block text-[16px] mb-1">Name the task category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white appearance-none"
            >
              <option value="" disabled>
                Select type
              </option>
              <option value="cleaning">Cleaning</option>
              <option value="delivery">Delivery</option>
              <option value="repair">Repair</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="md:col-span-1">
            <label className="block text-[16px] mb-1">Number of person required *</label>
            <input
              type="number"
              placeholder="Enter number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm mb-1">Describe the task</label>
          <textarea
            placeholder="Enter text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[120px] bg-white"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="flex items-center mb-1">
              <label className="block text-sm">Skill Required (max 5)</label>


            </div>
            <input
              type="text"
              placeholder="Enter text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Task address/location (if required)</label>
            <input
              type="text"
              placeholder="Enter text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
          </div>
        </div>

        {/* Map */}
        <div className="border border-gray-200 rounded-md overflow-hidden">
          <div className="flex items-center justify-between p-2 bg-white">
            <div className="text-xs text-gray-500">(Task location)</div>
            <div className="flex items-center border rounded-md overflow-hidden flex-1 mx-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <input
                type="text"
                placeholder="Search location"
                className="p-1 px-2 w-full text-sm focus:outline-none"
              />
            </div>
            <button className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs">
              Auto locate
            </button>
            <div className="text-xs text-gray-500">(Task location)</div>
          </div>
          <div className="relative h-[180px] bg-gray-100">
            <div className="w-full h-full bg-gray-200">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm mb-1">Task Duration</label>
            <input
              type="text"
              placeholder="e.g. 2 days"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
          </div>
          <div className="md:col-span-1">
            <label className="block text-sm mb-1">Offering</label>
            <div className="flex items-center space-x-4 mt-2">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="hourly"
                  checked={hourlyRate}
                  onChange={(e) => setHourlyRate(e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="hourly" className="text-sm">
                  Hourly rate
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="fixed"
                  checked={fixedPrice}
                  onChange={(e) => setFixedPrice(e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="fixed" className="text-sm">
                  Fixed price
                </label>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm mb-1">Total cost amount</label>
            <input
              type="number"
              placeholder="Enter amount"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Currency (USD)</label>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white appearance-none"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>
          </div>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateOrder;