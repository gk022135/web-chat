"use client";

import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Search, ChevronDown } from "lucide-react";

const dropdownOptions: any = {
  Home: ["Latest News", "Trending", "Popular"],
  About: ["Our Mission", "Team", "Careers"],
  Services: ["Web Development", "SEO", "Marketing"],
  Contact: ["Email Us", "Live Chat", "Support"],
};

const SidebarNavbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  return (
    <div className="flex">
      {/* Left Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-60 bg-gray-900 text-white p-4 shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">✨ Menu</h2>

        <div className="relative mb-4">
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-white/20 placeholder-gray-300"
          />
          <Search className="absolute right-4 top-3.5 text-gray-300" size={20} />
        </div>

        {/* Navigation Items */}
        <div className="space-y-3">
          {Object.keys(dropdownOptions).map((item) => (
            <div key={item} className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
              <button 
                onClick={() => setDropdownOpen(dropdownOpen === item ? null : item)}
                className="w-full px-6 py-4 text-left font-medium flex items-center justify-between hover:bg-gray-700"
              >
                <span>{item}</span>
                <ChevronDown className={`transition-transform duration-300 ${dropdownOpen === item ? 'rotate-180' : ''}`} size={16} />
              </button>

              {dropdownOpen === item && (
                <div className="bg-gray-700 border-t border-gray-600">
                  {dropdownOptions[item].map((option: any, idx: any) => (
                    <a key={idx} href="#" className="block px-8 py-3 text-sm hover:bg-gray-600 text-gray-300 border-b border-gray-600 last:border-none">
                      {option}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-60 flex-1 p-6">
        <h1 className="text-3xl font-bold">Welcome to the Dashboard</h1>
        <p className="mt-2 text-gray-600">This area will contain the rest of the content.</p>
      </main>
    </div>
  );
};

export default SidebarNavbar;
