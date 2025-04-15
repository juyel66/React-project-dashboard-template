import React from 'react'
import { GoArrowLeft } from 'react-icons/go'
import { Link } from 'react-router-dom'

function BuyerCandidateList() {

    const freelancers = [
        {
            username: "DIYEnthusiast14",
            role: "UI/UX Designer",
            bid_amount: "200USD",
        },
        {
            username: "MovieBuff45",
            role: "UI/UX Designer",
            bid_amount: "200USD/HOUR",
        },
        {
            username: "NatureExplor",
            role: "UI/UX Designer",
            bid_amount: "200USD/HOUR",
        },
        {
            username: "JaneSmit",
            role: "UI/UX Designer",
            bid_amount: "200USD/HOUR",
        },
        {
            username: "CoolGuy42",
            role: "UI/UX Designer",
            bid_amount: "200USD",
        },
        {
            username: "Foodie1234",
            role: "UI/UX Designer",
            bid_amount: "200USD/HOUR",
        },
    ]

    return (
        <div className='nunito p-6 '>
            <div>
                <Link to="/dashboard/buyer_order_create" className="btn btn-sm absolute flex items-center gap- text-[#012939]">
                    <GoArrowLeft /> <span>Back</span>
                </Link>
                <h1 className='text-center text-[#012939] text-[24px] font-bold na'>Candidate list</h1>
            </div>

            <div className=" p-4 bg-gray-100 rounded-lg">
                <div className="space-y-4">
                    {freelancers.map((freelancer, index) => (
                        <div key={index} className="flex items-center justify-between bg-white p-4 rounded-md shadow-sm">
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                                <div>
                                    <p className="font-medium text-gray-800">{freelancer.username}</p>
                                    <p className="text-sm text-gray-500">{freelancer.role}</p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <div className="border-l border-gray-200 pl-4 pr-6">
                                    <p className="text-sm text-gray-500">Bid amount</p>
                                    <p className="text-sm text-gray-700">{freelancer.bid_amount}</p>
                                </div>

                                <div className="flex space-x-2">
                                    <button className="text-sm text-blue-600 hover:underline">View profile</button>
                                    <button className="text-sm text-gray-600 bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded">
                                        Invite to chat
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BuyerCandidateList