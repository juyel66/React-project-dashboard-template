import { useState } from "react";

import registration_img from '../../../assets/image/hhhh.png'

function Registration() {
    const [email, setEmail] = useState("");
    const [userType, setUserType] = useState("Student");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, userType, password, confirmPassword });
        // Add your form submission logic here (e.g., API call)
    };

    return (

        

        <div className="flex items-center justify-between w-full min-h-screen gap-10">
            <div className="w-1/2 h-screen ">
                <img
                    src={registration_img}
                    alt="Registration illustration"
                    className="w-full h-screen p-10 "
                />
            </div>
            <div className="w-1/2 lg:px-40 ">
               

                    <div className="text-center mb-6">
                        <h1 className="text-3xl  text-[#000000]">ChaskiX</h1>
                        <p className=" text-3xl text-[#000000]">Logo here</p>
                    </div>

                    {/* Welcome Text */}
                    <h2 className="text-[40px] font-semibold text-center text-[#012939] mb-6">
                        Welcome to ChaskiX
                    </h2>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-gray-700 mb-2">Email</label>
                            <input
                                type="email"
                                placeholder="user@gmail.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg "
                                required
                            />
                        </div>

                        <div className="flex justify-between items-center">
                            <label className="block text-gray-700 mb-2">
                                What describes you best?
                            </label>
                            <select
                                value={userType}
                                onChange={(e) => setUserType(e.target.value)}
                                className="w-1/2 px-8 py-2 border border-gray-300 rounded-lg "
                            >
                                <option value="Student">Student</option>
                                <option value="Teacher">Hostler</option>
                                <option value="Professional">Enterpreneur</option>
                                <option value="Professional">Educator</option>
                                <option value="Professional">Strategist</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2 ">Password</label>
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg "
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2">Confirm Password</label>
                            <input
                                type="password"
                                placeholder="Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg "
                                required
                            />
                        </div>

                        <div className="flex justify-center mt-16">
                            <button
                                type="submit"
                                className=" bg-[#1B97D8] text-white rounded-lg mx-auto px-6 py-2 cursor-pointer"
                            >
                                Register
                            </button>
                        </div>

                        <p className="text-center text-gray-600">
                            Already have an account?{" "}
                            <a href="#" className="text-[#1B97D8]">
                                Login
                            </a>
                        </p>
                    </form>
               
            </div>
        </div>

    );
}

export default Registration;