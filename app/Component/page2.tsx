'use client';
import Image from "next/image";

import image from "../Assets/download-10.webp";
import image1 from "../Assets/download-11.webp";
import image2 from "../Assets/download-12.webp";
import image3 from "../Assets/download-13.webp";
import image4 from "../Assets/download-14.webp";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen, faPaperPlane, faBookmark } from '@fortawesome/free-regular-svg-icons';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

const articles = [
    {
        img: image1,
        title: "What is a folding and fixed corner? Its types",
        time: "1 minute ago",
    },
    {
        img: image2,
        title: "What is scratched steel sheet; its types and...",
        time: "6 minutes ago",
    },
    {
        img: image3,
        title: "Wave of Chinese steel in the Persian Gulf",
        time: "18 hours ago",
    },
    {
        img: image4,
        title: "Blackout in the steel chain; power outages",
        time: "2 hours ago",
    },
];

export default function Page2() {
    return (
        <div>
            <div className="bg-gray-100 min-h-screen">
                <div className="container mx-auto pt-10 text-center">
                    <h1 className="font-bold">Iron Online, an up-to-date reference for iron prices</h1>
                    <p className="font-semibold text-[#5F5F5F]">
                        More than 100 consultants and sales experts are by your side throughout the purchasing process.
                    </p>

                    <div className="hidden lg:flex justify-between shadow text-[#515356] items-center mx-auto mt-10 font-bold max-w-5xl px-6">
                        <h1>Connections</h1>
                        <h1>Corner and gutter</h1>
                        <h1>Pipe</h1>
                        <h1>Profile</h1>
                        <h1>Cold sheet</h1>
                        <h1>Hote sheet</h1>
                        <h1>Iron beam</h1>
                        <h1>Reber</h1>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center mt-10 gap-6 lg:gap-0">
                        <img src={image.src} className="w-[777px] h-[326px] " />
                        <div className="flex flex-col font-bold lg:ml-40 mt-10 lg:mt-0">
                            <h1 className="text-[#5F5F5F]">Contact with pipe Experts</h1>
                            <h1 className="text-[#25D366] mt-5 font-bold text-xl">
                                <span className="text-sm">032</span>54712
                            </h1>
                            <button className="px-3 py-2 mt-7 border border-red-700 rounded-[5px]">
                                Pipe Price list
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="min-h-screen flex flex-col items-center px-4">
                <h1 className="text-[#5F5F5F] font-bold mt-10 text-center">Buy it easily.</h1>
                <h2 className="text-[#5F5F5F] font-semibold mt-5 text-center max-w-3xl">
                    We will be with you throughout the entire purchasing and delivery process. Simply call
                    <span className="text-[#25D366]"> 021-54712, extension 666</span>.
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 xl:grid-cols-6 mt-10">
                    {[faEnvelopeOpen, faPaperPlane, faEnvelopeOpen, faBookmark, faEnvelopeOpen, faPhoneVolume].map((icon, idx) => (
                        <div key={idx} className="flex flex-col items-center shadow-lg rounded-[8px] font-bold w-[250px] min-h-[300px]">
                            <div className="p-3 mt-10 bg-[#9D003D] flex items-center rounded-[4px]">
                                <div className="text-white  flex items-center justify-center">
                                    <FontAwesomeIcon icon={icon} width={20} className="flex justify-center text-white" />
                                </div>
                            </div>
                            <h1 className="mt-5 text-[#555555] w-[200px] text-center text-sm">
                                {[
                                    "Issuing an official invoice",
                                    "Loading and transporting goods",
                                    "Quality control",
                                    "How to settle",
                                    "Issuing a pro forma invoice",
                                    "Purchase request"
                                ][idx]}
                            </h1>
                            <p className="text-[#868686] text-xs w-[200px]  text-center px-4 mt-6">
                                {[
                                    "After the exact value of your purchase is determined, final payment is made and your official purchase invoice is printed and sent",
                                    "Quality-approved goods, after loading, are shipped to their destination at your approved and approved rate",
                                    "The goods are carefully inspected by quality control experts and, if approved, a loading permit is issued",
                                    "Based on the provisions of the proforma invoice and the resulting agreement, settlement is made in cash or credit",
                                    "30 minutes later, the sales consultant will send the pro forma invoice and you will be notified immediately if the request takes time.",
                                    "Contact sales consultants for advice and purchase by calling 021-54712 and uploading a request on the site"
                                ][idx]}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-[#F5F5F7] px-6 py-10">
                <h1 className="text-[#292929] font-bold text-right pr-4 lg:pr-[120px]">Daily price of iron and steel</h1>
                <h2 className="text-black font-semibold pt-5 max-w-5xl mx-auto">
                    Ahan Online Group began its professional activity in facilitating the purchase and sale of ironware for customers in 2007, and in continuation of this path, by launching the Ahan Online website, it took an important step towards making ironware prices transparent in the market and factory. Rapid supply of various types of construction and industrial ironware, including: iron beams, rebar, profiles, black sheets, angles, etc. from leading brands such as Zob Ahan, Zafar Bonab, Miyaneh,
                </h2>
                <h2 className="text-[#5F5F5F] font-semibold text-right pt-5 pr-4">see more...</h2>
            </div>

            <div className="mt-10 px-6">
                <div className="flex flex-col sm:flex-row justify-between">
                    <h1 className="text-[#9D003D] font-bold">All articles</h1>
                    <h1 className="text-[#495057] font-bold sm:text-right mt-2 sm:mt-0">Latest articles</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
                    {articles.map((article, index) => (
                        <div
                            key={index}
                            className="rounded-xl shadow-md overflow-hidden bg-white hover:shadow-lg transition-all duration-300 cursor-pointer"
                        >
                            {article.img ? (
                                <Image
                                    src={article.img}
                                    alt={article.title}
                                    width={400}
                                    height={250}
                                    objectFit="cover"
                                />
                            ) : null}
                            <div className="p-4">
                                <h2 className="text-sm font-medium text-gray-700 truncate">
                                    ...{article.title}
                                </h2>
                                <p className="text-xs text-gray-500 mt-2">{article.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
