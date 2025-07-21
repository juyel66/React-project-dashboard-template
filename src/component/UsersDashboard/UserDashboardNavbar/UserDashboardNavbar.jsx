"use client"

import { Bell } from "lucide-react"
import { NavLink } from "react-router-dom"

const UserDashboardNavbar = () => {
    return (
        <div className="flex items-center justify-between w-full h-16 px-6 bg-white max-w-[180vh] mx-auto">
            {/* Logo on the left */}
            <div className="flex items-center">
                <NavLink to="/" className="text-[24px] font-bold text-[#0077b6]">
                    ChaskiX
                </NavLink>
            </div>

            {/* Navigation NavLinks in the middle */}
            <div className="hidden md:flex items-center space-x-8">
                <NavLink to="/blog" className="text-[16px] font-medium">
                    BLOG
                </NavLink>
                <NavLink to="/pricing" className="text-[16px] font-medium">
                    PRICING
                </NavLink>
                <NavLink to="/service-community" className="text-[16px] font-medium">
                    SERVICE COMMUNITY
                </NavLink>
            </div>

            {/* User profile and notification on the right */}
            <div className="flex items-center space-x-4">
                <NavLink to='/dashboard/user_notifications' >
                <div className="relative ">
                    <button className="p-2 rounded-full hover:bg-gray-100 transition-transform duration-200 cursor-pointer ">
                        <Bell className="h-7 w-7 text-gray-600" /> {/* Increased base size */}
                    </button>
                    <div className="absolute text-[10px] p-[5px] top-[6px] right-[10px] bg-red-400 rounded-full"></div>
                </div>
                </NavLink>
                <div className="flex items-center space-x-2">
                    <div className="">
                        <img
                            src="https://i.ibb.co.com/x2wkVkr/Whats-App-Image-2024-07-04-at-10-43-40-AM.jpg"
                            alt="User profile"
                            className="h-10 w-10 rounded-full"
                        />
                    </div>
                    <span className="text-[17px] font-medium">Cameron</span>
                </div>
            </div>
        </div>
    )
}

export default UserDashboardNavbar