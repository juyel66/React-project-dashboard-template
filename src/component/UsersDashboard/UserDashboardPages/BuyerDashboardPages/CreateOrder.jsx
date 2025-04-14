import React, { useState } from 'react';
import { MapPinIcon, ChevronLeftIcon } from '@heroicons/react/24/solid';

const CreateOrder = () => {
  const [taskLocation, setTaskLocation] = useState('');
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [taskCategory, setTaskCategory] = useState('');
  const [personsRequired, setPersonsRequired] = useState('');
  const [description, setDescription] = useState('');
  const [skills, setSkills] = useState('');
  const [taskAddress, setTaskAddress] = useState('');
  const [currency, setCurrency] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    // console.log({
    //   title,
    //   taskCategory,
    //   personsRequired,
    //   description,
    //   skills,
    //   taskAddress,
    //   taskLocation,
    //   category,
    //   currency
    // });
  };

  return (
    <div className="  flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg w-full p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center cursor-pointer">
            <ChevronLeftIcon className="h-5 w-5 text-blue-500 mr-2" />
            <span className="text-blue-500 font-medium">Back</span>
          </div>
          <h1 className="text-xl font-semibold text-gray-800">Create Order</h1>
          <div className="flex items-center">
            <span className="bg-purple-500 text-white rounded-full h-6 w-6 flex items-center justify-center mr-2">C</span>
            <span className="bg-green-500 text-white rounded-full h-6 w-6 flex items-center justify-center">M</span>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Form Fields */}
          <div className="space-y-4">
            {/* Row 1: Title, Category, Number of Persons */}
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1">
                <label className="block text-sm text-gray-600">Give a title to the task</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter here"
                  required
                />
              </div>
              <div className="col-span-1">
                <label className="block text-sm text-gray-600">Name the category</label>
                <input
                  type="text"
                  value={taskCategory}
                  onChange={(e) => setTaskCategory(e.target.value)}
                  className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter here"
                  required
                />
              </div>
              <div className="col-span-1">
                <label className="block text-sm text-gray-600">Number of persons required*</label>
                <input
                  type="number"
                  value={personsRequired}
                  onChange={(e) => setPersonsRequired(e.target.value)}
                  className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter here"
                  required
                  min="1"
                />
              </div>
            </div>

            {/* Row 2: Description */}
            <div>
              <label className="block text-sm text-gray-600">Describe the task</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter here"
                rows="3"
                required
              ></textarea>
            </div>

            {/* Row 3: Skills and Task Address */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600">Skills required (and)</label>
                <div className="flex items-center mt-1">
                  <span className="bg-purple-500 text-white rounded-full h-6 w-6 flex items-center justify-center mr-2">C</span>
                  <span className="bg-green-500 text-white rounded-full h-6 w-6 flex items-center justify-center mr-2">U</span>
                  <input
                    type="text"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter here"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-600">Task address (because it is required)*</label>
                <input
                  type="text"
                  value={taskAddress}
                  onChange={(e) => setTaskAddress(e.target.value)}
                  className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter here"
                  required
                />
              </div>
            </div>

            {/* Map Section */}
            <div className="relative">
              <div className="bg-gray-200 h-48 rounded-md flex items-center justify-center">
                <MapPinIcon className="h-8 w-8 text-red-500" />
                <span className="ml-2 text-gray-600">Cedar Ball Shopping</span>
              </div>
              <div className="absolute top-2 left-2 flex space-x-2">
                <button type="button" className="bg-white px-3 py-1 rounded-md shadow text-gray-600">[Task location]</button>
                <button type="button" className="bg-blue-100 px-3 py-1 rounded-md shadow text-blue-600">Auto locate</button>
                <button type="button" className="bg-white px-3 py-1 rounded-md shadow text-gray-600">[Task location]</button>
              </div>
            </div>

            {/* Row 4: Task Location and Category */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600">Task location</label>
                <input
                  type="text"
                  value={taskLocation}
                  onChange={(e) => setTaskLocation(e.target.value)}
                  className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter here"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600">Category</label>
                <div className="flex items-center mt-1 space-x-2">
                  <button 
                    type="button"
                    className={`p-2 border rounded-md ${category === 'casual' ? 'bg-blue-100 text-blue-600' : ''}`}
                    onClick={() => setCategory('casual')}
                  >
                    Casual task
                  </button>
                  <button 
                    type="button"
                    className={`p-2 border rounded-md ${category === 'fixed' ? 'bg-blue-100 text-blue-600' : ''}`}
                    onClick={() => setCategory('fixed')}
                  >
                    Fixed price
                  </button>
                </div>
              </div>
            </div>

            {/* Row 5: Currency */}
            <div>
              <label className="block text-sm text-gray-600">Currency</label>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select currency</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button 
              type="submit"
              className=" bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateOrder;