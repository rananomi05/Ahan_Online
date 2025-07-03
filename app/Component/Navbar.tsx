"use client";

import logo from "../Assets/new-logo-1.svg";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { GiWrench } from "react-icons/gi";


import { FaBars, FaChevronLeft } from "react-icons/fa";
import {
    MdOutlineConstruction,
    MdOutlineInventory2,
    MdOutlineLayers,
    MdOutlineGridOn,
    MdOutlinePrecisionManufacturing,
    MdOutlineCable,
} from "react-icons/md";
import {
    GiSteelClaws,
    GiMetalBar,
    GiSteeltoeBoots,
    GiPipeWrench,
    GiRolledCloth,
    GiMeshNetwork,
    GiNuclearWaste,
} from "react-icons/gi";
// import LanguageSwitcher from "./LanguageSwitcher";


export default function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const items = [
        { label: "Rebar", icon: <GiMetalBar /> },
        { label: "Profile", icon: <GiSteeltoeBoots /> },
        { label: "Sheet", icon: <GiRolledCloth /> },
        { label: "Corner and gutter", icon: <GiSteelClaws /> },
        { label: "Iron beam", icon: <MdOutlineConstruction /> },
        { label: "Pipe", icon: <GiWrench /> },

        { label: "Steel", icon: <MdOutlineLayers /> },
        { label: "Grating and belt", icon: <MdOutlineGridOn /> },
        { label: "Equipment", icon: <MdOutlineInventory2 /> },
        { label: "Wire products", icon: <MdOutlineCable /> },
        { label: "Non-ferrous metals", icon: <GiNuclearWaste /> },
    ];
    return (
        <div>
            {/* Top Navbar */}
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap items-center justify-between gap-4 max-w-screen-xl p-4 mx-auto">
                    {/* Phone Icon */}
                    <div className="rounded-full w-10 h-10 bg-[#00D3BD] flex items-center justify-center">
                        <FontAwesomeIcon
                            icon={faPhoneVolume}
                            className="text-white w-[19px] h-[18px]"
                        />
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col items-start justify-center">
                        <a
                            href="tel:5541251234"
                            className="text-sm text-[#514E46] dark:text-white "
                        >
                            Contact to purchase
                        </a>
                        <span className="text-base text-[#009787]">
                            <span className="text-xl font-bold">54712</span> - 021
                        </span>
                    </div>

                    {/* Search Box */}
                    <form className="w-full sm:w-auto sm:flex-1 sm:mx-8 lg:mx-24">
                        <label htmlFor="default-search" className="sr-only">
                            Search
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                            </div>
                            <input
                                type="search"
                                id="default-search"
                                className="w-full md:w-[320px] p-2 ps-10 text-sm text-[#514E46] border rounded-lg bg-[#F2ECE3] focus:ring-blue-500 focus:border-blue-500 border-none"
                                placeholder="Search..."
                            />
                        </div>
                    </form>
                    {/* <button><LanguageSwitcher /></button> */}

                    {/* Logo */}
                    <div className="flex items-center">
                        <img src={logo.src} className="h-8" alt="Logo" />
                    </div>
                </div>
            </nav>

            {/* Bottom Navigation */}
            <nav className="bg-white shadow dark:bg-gray-700">
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex flex-wrap items-center justify-between">
                        <ul className="flex flex-wrap   md:gap-8 font-medium text-sm text-[#888276] font-semibold w-full">
                            <li className="flex items-center space-x-2">
                                <a href="#" className="hover:text-[#9D003D]">
                                    Login / Membership
                                </a>
                                <FontAwesomeIcon icon={faCircleUser} className="w-[20px] h-[20px]" />
                            </li>
                            <li className="ml-[50px] mt-[8px]   sm:ml-auto">
                                <a href="#" className="hover:text-[#9D003D]">
                                    Credit purchase
                                </a>
                            </li>
                            <li className="mt-[8px]">
                                <a href="#" className="text-[#9D003D] hover:text-[#888276]">
                                    Online price inquiry
                                </a>
                            </li>
                            <li className="mt-[8px]">
                                <a href="#" className="hover:text-[#9D003D]">
                                    Job opportunity
                                </a>
                            </li>
                            <li className="mt-[8px]">
                                <a href="#" className="hover:text-[#9D003D]">
                                    About us
                                </a>
                            </li>
                            <li className="mt-[8px]">
                                <a href="#" className="hover:text-[#9D003D]">
                                    Contact us
                                </a>
                            </li>
                            <li className="mt-[8px]">
                                <span className="text-[#888276]">|</span>
                            </li>
                            <li>
                                {/* Dropdown */}
                                <div className="relative inline-block text-left">
                                    {/* Menu Toggle Button */}
                                    <button
                                        onMouseEnter={() => setIsDropdownOpen(true)}
                                        // onMouseLeave={() => setIsDropdownOpen(false)}
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}


                                        className="flex items-center relative gap-2  hover:text-[#9D003D] text-[#888276] px-4 py-2 "
                                    >
                                        Daily price of products
                                        <FaBars className="text-sm" />
                                    </button>

                                    {/* Dropdown Panel */}
                                    {isDropdownOpen && (
                                        <div className="absolute top-full mt-2 w-72 bg-white shadow-lg rounded-lg z-50 text-gray-800 border">
                                            <ul className="divide-y divide-gray-200">
                                                {items.map((item) => (
                                                    <li
                                                        key={item.label}
                                                        className="flex items-center justify-between px-4 py-3 hover:bg-gray-100 cursor-pointer"
                                                    >
                                                        <div className="flex items-center gap-2">
                                                            <FaChevronLeft className="text-gray-400 text-xs" />
                                                            <span className="text-sm">{item.label}</span>
                                                        </div>
                                                        <span className="text-lg text-gray-600">{item.icon}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
