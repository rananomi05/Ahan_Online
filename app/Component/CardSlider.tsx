'use client';
import { useEffect, useState } from 'react';
import image1 from '../Assets/download (4).webp';
import image2 from '../Assets/download (5).webp';
import image3 from '../Assets/download (6).webp';
import image4 from '../Assets/download (7).webp';
import image5 from '../Assets/download (8).webp';
import image6 from '../Assets/download (9).webp';

const products = [
    { image: image1, title: 'Wire products' },
    { image: image2, title: 'Sheat' },
    { image: image3, title: 'Pipe' },
    { image: image4, title: 'Corner' },
    { image: image5, title: 'Wire products' },
    { image: image6, title: 'Stainless steel sheet' },
];

const cards = [
    {
        title: 'Sheet',
        product: 'Zobahan 16 iron beam, Isfahan branch, 12 meters',
        prices: [1, 2, 3, 4, 5],
    },
    {
        title: 'Raber',
        product: 'Shahin Bonab 14 A3 ribbed rebar, 12-meter branch, factory   ',
        prices: [6, 7, 8, 9, 10],
    },
    {
        title: 'Profile',
        product: 'Profile 100*60 4 6 meters Tehran ',
        prices: [11, 12, 13, 14, 15],
    },
    {
        title: 'Corner and Gutter',
        product: 'Corner 7 * 70 * 70 Arian Foolad 6 meters factory',
        prices: [16, 17, 18, 19, 20],
    },
    {
        title: 'Pipe',
        product: 'Mansmann pipe 3.73 1/2 inch China 6 meters Tehran company',
        prices: [21, 22, 23, 24, 25],
    },
    {
        title: 'Iron beam',
        product: 'Zobahan 16 iron beam, Isfahan branch, 12 meters',
        prices: [81, 22, 63, 10, 26],
    },
];

export default function CardSlider() {
    const [counts, setCounts] = useState([0, 0, 0, 0, 0]);

    useEffect(() => {
        const targetValues = [9, 10, 0, 5, 8];
        const interval = setInterval(() => {
            setCounts(prev =>
                prev.map((val, index) =>
                    val < targetValues[index] ? val + 1 : val
                )
            );
        }, 10);

        return () => clearInterval(interval);
    }, []);

    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 4;
    const totalSlides = Math.ceil(products.length / itemsPerPage);

    const handleNext = () => {
        if (currentIndex < totalSlides - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const translateX = `-${currentIndex * 100}%`;

    const [currentIndex1, setCurrentIndex1] = useState(0);

    const handleDotClick = (index: number) => {
        setCurrentIndex1(currentIndex1 + 1);
    };

    const visibleCards = cards.slice(currentIndex * 2, currentIndex * 2 + 2);
    const totalDots = Math.ceil(cards.length / 2);

    return (
        <div className="w-full">
            <div className="w-full mt-30 px-4 overflow-hidden">
                <div className="flex flex-col lg:flex-row justify-between items-center mb-4">
                    <div className="flex flex-col sm:flex-row items-center w-full">
                        <div className="mt-4 sm:mt-30 sm:ml-20 sm:mr-5">
                            <button onClick={handlePrev} className="px-3 py-2 border border-red-700 rounded-[5px]">
                                {'<'}
                            </button>
                        </div>

                        <div className="relative w-full overflow-hidden my-4 sm:my-0">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{
                                    transform: `translateX(${translateX})`,
                                    width: `${(products.length / itemsPerPage) * 100}%`,
                                }}
                            >
                                {products.map((item, index) => (
                                    <div
                                        key={index}
                                        className=" sm:w-1/2 md:w-1/3 lg:w-1/4 "
                                    >
                                        <div className=" bg-[#F5F5F5] w-[238px] h-[280px] shadow-md rounded-md relative group">
                                            <img
                                                src={item.image.src}
                                                alt={item.title}
                                                className="w-full h-full object-cover rounded-t-md"
                                            />
                                            <div className="hidden group-hover:flex flex-col items-center justify-center absolute top-0 left-0 w-full h-full bg-black/50 text-white rounded-md">
                                                <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
                                                <button className="bg-[#9D003D] px-3 py-2 rounded hover:bg-[#b3004d]">
                                                    View Price
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-4 sm:mt-30 sm:mr-20 sm:ml-5">
                            <button
                                onClick={handleNext}
                                className="px-3 py-2 font-black border border-red-700 rounded-[5px] text-center"
                            >
                                {'>'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col mt-10 lg:flex-row items-center bg-[#9D003D] w-full h-[665px] py-10 gap-y-10">
                <div className="w-full">
                    <h1 className="text-white lg:hidden font-semibold text-center pt-10 text-[24px] lg:text-[30px]">
                        Shop with <br />
                        <span className="font-bold text-[32px] lg:text-[40px]">.Professionals</span>
                    </h1>
                    <div className="flex flex-col  lg:flex-row gap-6 justify-center items-center px-4">
                        {visibleCards.map((card, idx) => (
                            <div
                                key={idx}
                                className="w-full sm:w-[80%] bg-white/10 shadow-lg md:w-[60%] lg:w-[430px] h-auto bg-[#FFFFF1A] text-black rounded-[10px] shadow-md p-4"
                            >
                                <h1 className="text-[24px] lg:text-[30px] font-bold text-white mb-4">{card.title}</h1>
                                <h2 className="text-[14px] lg:text-[16px] text-white font-semibold mb-2">Product name</h2>
                                <div className="bg-white text-[#292929] rounded-[4px] p-4 mb-4 border">
                                    {card.product}
                                </div>
                                <h1 className="font-semibold text-white mb-2">Current price (rails)</h1>
                                <div className="flex flex-row flex-wrap gap-2">
                                    {card.prices.map((count, index) => (
                                        <div
                                            key={index}
                                            className="w-[46px] h-[60px] flex items-center justify-center bg-white text-[#292929] rounded-[4px]"
                                        >
                                            <h1 className="font-semibold">{count}</h1>
                                        </div>
                                    ))}
                                </div>
                                <button className="mt-6 border w-full text-[#00E8CE] font-semibold px-4 py-2 rounded-[5px]">
                                    View sheet Price list
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-4 mb-6">
                        {Array.from({ length: totalSlides }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 mx-1 rounded-full ${currentIndex === index ? 'bg-red-700' : 'bg-gray-300'}`}
                            />
                        ))}
                    </div>
                </div>

                <h1 className="text-white font-semibold hidden lg:block  text-center pt-10 text-[24px] lg:text-[30px]">
                    Shop with <br />
                    <span className="font-bold text-[32px] lg:text-[40px]">.Professionals</span>
                </h1>
            </div>
        </div>
    );
}
