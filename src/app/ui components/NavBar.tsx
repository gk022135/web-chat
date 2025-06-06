"use client"

import { useState } from "react";
import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Search, Menu, X, ChevronDown } from "lucide-react";


const dropdownOptions: any = {
    Home: ["Latest News", "Trending", "Popular"],
    About: ["Our Mission", "Team", "Careers"],
    Services: ["Web Development", "SEO", "Marketing"],
    Contact: ["Email Us", "Live Chat", "Support"],
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
    const [drawerdropdownOpen, setDrawerDropdownOpen] = useState<string | null>(null);

    return (
        <nav className="text-white">
            <div className="w-full flex items-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 shadow-lg p-4">

                {/* Mobile Menu Button (Small Width) */}
                <div className="relative w-[5%]">
                    <button onClick={() => setIsOpen(!isOpen)} className="p-2 hover:bg-gray-600 rounded-md transition">
                        {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
                    </button>
                </div>

                {/* Left: Logo (Largest Width) */}
                <div className="flex-none w-[30%] pl-4">
                    <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        Logo
                    </h1>
                </div>

                {/* Middle: Search Bar (Moderate Width) */}
                <div className="flex-1 mx-4 hidden md:flex">
                    <div className="relative w-[40%]">
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full px-4 py-2 rounded-lg bg-gray-600 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        />
                        <AiOutlineSearch className="absolute right-3 top-2.5 text-gray-300" />
                    </div>
                </div>

                {/* Right: Navbar Items (Medium Width) */}
                <div className="hidden md:flex flex-1 justify-end space-x-4">
                    {Object.keys(dropdownOptions).map((item) => (
                        <div
                            key={item}
                            className="relative inline-block"
                            onMouseEnter={() => setDropdownOpen(item)}
                            onMouseLeave={() => setDropdownOpen(null)}
                        >
                            <button className="px-4 py-2 bg-gray-700 hover:bg-cyan-600 text-white rounded-md transition-all duration-300 shadow-md">
                                {item}
                            </button>

                            {dropdownOpen === item && (
                                <div className="absolute left-0 w-48 mt-1 bg-gray-800 shadow-xl rounded-lg border border-gray-700 overflow-hidden">
                                    {dropdownOptions[item].map((option: any, idx: any) => (
                                        <a key={idx} className="block px-4 py-2 hover:bg-gray-600 text-gray-200 transition-colors duration-200" href="#">
                                            {option}
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </div>


            {/* Mobile Menu */}

            {isOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 "
                        onClick={() => setIsOpen(false)}
                    ></div>

                    {/* Drawer */}
                    <div className="fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-purple-900 via-blue-900 to-indigo-900 shadow-2xl z-50  transform transition-transform duration-3000 ease-in-out">
                        {/* Glassmorphism overlay for drawer */}
                        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

                        <div className="relative h-full flex flex-col">
                            {/* Drawer Header */}
                            <div className="flex items-center justify-between p-6 border-b border-white/20">
                                <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                                    ✨ Menu
                                </h2>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 rounded-full hover:bg-white/10 transition-all duration-300"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Search in Drawer */}
                            <div className="p-6 border-b border-white/10">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        className="w-full px-4 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                    />
                                    <Search className="absolute right-4 top-3.5 text-gray-300" size={20} />
                                </div>
                            </div>

                            {/* Navigation Items */}
                            <div className="flex-1 overflow-y-auto p-6">
                                <div className="space-y-3">
                                    {Object.keys(dropdownOptions).map((item) => (
                                        <div key={item} className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
                                            <button
                                                onClick={() => setDrawerDropdownOpen(drawerdropdownOpen === item ? null : item)}
                                                className="w-full px-6 py-4 text-left font-medium hover:bg-white/10 transition-colors duration-200 flex items-center justify-between"
                                            >
                                                <span className="text-white">{item}</span>
                                                <ChevronDown className={`transition-transform duration-300 text-gray-300 ${drawerdropdownOpen === item ? 'rotate-180' : ''}`} size={16} />
                                            </button>

                                            {drawerdropdownOpen === item && (
                                                <div className="bg-white/5 border-t border-white/10 animate-in slide-in-from-top-2 duration-200">
                                                    {dropdownOptions[item].map((option: any, idx: any) => (
                                                        <a
                                                            key={idx}
                                                            href="#"
                                                            className="block px-8 py-3 text-sm hover:bg-white/10 transition-colors duration-200 hover:text-cyan-400 text-gray-200 border-b border-white/5 last:border-b-0"
                                                        >
                                                            {option}
                                                        </a>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Drawer Footer */}
                            <div className="p-6 border-t border-white/20">
                                <div className="text-center text-sm text-gray-400">
                                    © 2024 Nexus. All rights reserved.
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </nav>
    );
};

export default Navbar;





