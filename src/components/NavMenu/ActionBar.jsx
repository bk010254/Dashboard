import React, { useState } from "react";
import { FaClock, FaSearch } from "react-icons/fa";
import { LuRefreshCcw } from "react-icons/lu";
import { FaPlus, FaEllipsisVertical, FaChevronDown } from "react-icons/fa6";

const ActionBar = ({ onSearch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query); // Pass the search query to the parent component
  };

  return (
    <>
      <div className="flex items-center justify-between p-4 bg-gray-100">
        {/* Left side with the title */}
        <h3 className="text-lg font-semibold">CNPPA Dashboard</h3>

        {/* Search input with icon */}
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <FaSearch className="text-gray-400" />
          </span>
          <input
            type="text"
            placeholder="Search Widgets..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="p-2 pl-10 border border-gray-300 rounded-md"
          />
        </div>

        {/* Right side with the buttons */}
        <div className="flex items-center space-x-4">
          <button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            Widget <FaPlus size={18} />
          </button>
          <button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            <LuRefreshCcw size={20} onClick={handleRefresh} />
          </button>
          <button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            <FaEllipsisVertical size={20} />
          </button>
          <div className="relative flex items-center">
            <button
              onClick={toggleDropdown}
              className="inline-flex w-44 justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-2 ring-inset ring-blue-900 hover:bg-gray-50"
            >
              <span className="border-r pr-2 text-blue-900">
                <FaClock size={20} />
              </span>
              <span className="ml-2 font-bold text-blue-700">Last 2 days</span>
              <FaChevronDown size={15} className="text-blue-700 mt-1" />
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                <ul>
                  <li>
                    <a
                      href="#/action-1"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Last 24 hours
                    </a>
                  </li>
                  <li>
                    <a
                      href="#/action-2"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Last 7 days
                    </a>
                  </li>
                  <li>
                    <a
                      href="#/action-3"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Last 30 days
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ActionBar;
