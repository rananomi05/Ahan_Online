import Image from "next/image";
import logo from "../Assets/new-logo-1.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faLinkedin,
    faTelegram,
    faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer className="bg-white text-sm text-gray-800">
            {/* Social Media */}
            <div className="flex flex-wrap items-center justify-between gap-4 px-4 py-6 border-b border-gray-200 sm:px-6 lg:px-12">
                <div className="flex space-x-4 text-xl text-[#888]">
                    <FontAwesomeIcon icon={faInstagram} className="text-xl text-black hover:text-pink-500" />
                    <FontAwesomeIcon icon={faLinkedin} className="text-xl text-gray-600 hover:text-blue-600" />
                    <FontAwesomeIcon icon={faTelegram} className="text-xl text-gray-600 hover:text-blue-400" />
                    <FontAwesomeIcon icon={faXTwitter} className="text-xl text-gray-600 hover:text-black" />
                </div>
                <div className="font-medium text-center sm:text-left">
                    <span className="font-semibold">Follow Ahan Online</span> on social media
                </div>
                <div className="flex justify-center sm:justify-end">
                    <Image src={logo.src} alt="logo" width={208} height={60} />
                </div>
            </div>

            {/* Grid Content */}
            <div className="w-full  px-4 py-8 bg-white text-gray-700">
                <div className="grid grid-cols-1 gap-8 lg:ml-[300px] sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 max-w-7xl mx-auto">

                    {/* Iron Online */}
                    <div>
                        <h3 className="text-[#9D003D] font-semibold mb-4">Iron online</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Contact us</li>
                            <li>About us</li>
                            <li>Recruitment</li>
                            <li>Support</li>
                            <li>Blog</li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-[#9D003D] font-semibold mb-4">Services</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Iron weight table</li>
                            <li>Iron and steel price chart</li>
                            <li>Encyclopedia of Iron and Steel</li>
                            <li>Iranian steel factories</li>
                            <li>Resource registration</li>
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="text-[#9D003D] font-semibold mb-4">Products</h3>
                        <ul className="space-y-2 text-sm">
                            <li>Iron beam price</li>
                            <li>Prices of different types of sheets</li>
                            <li>Steel sheet price</li>
                            <li>Black sheet price</li>
                            <li>Galvanized sheet price</li>
                            <li>Rebar price</li>
                            <li>Profile price</li>
                            <li>Corner price</li>
                            <li>Gutter price</li>
                            <li>Types of pipes</li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h3 className="text-[#9D003D] font-semibold mb-4">Contact information</h3>

                        {/* Phone Box */}
                        <div className="flex items-center justify-between bg-white border border-gray-300 rounded p-2 mb-4 text-sm">
                            <span className="text-gray-700">021 - 54713</span>
                            <span className="bg-[#9D003D] text-white text-xs px-2 py-1 rounded">Internal 666</span>
                            <span className="font-medium">Customer service</span>
                        </div>

                        {/* Address Info */}
                        <div className="space-y-3 text-sm text-gray-700">
                            <p>
                                Tehran, Sattarkhan, Habibollah St., corner of Banafseh dead end.
                                <br />
                                <span className="font-semibold">Company address</span>
                            </p>
                            <p>
                                Old Qom Road, after Shahr Sang Street, Firouzi Street (former Tourist Street),
                                Mansouri Alley, No. 5
                                <br />
                                <span className="font-semibold">Warehouse address</span>
                            </p>
                            <p>
                                Saturday to Wednesday from 8:30 to 17:50
                                <br />
                                <span className="font-semibold">Working hours</span>
                            </p>
                        </div>
                    </div>

                </div>
            </div>

        </footer>
    );
}
