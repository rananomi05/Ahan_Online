'use client';

import Slider from 'react-slick';
import Image from 'next/image';
import image1 from "@/app/Assets/download.webp"
import image2 from "@/app/Assets/download-1.webp"
import image3 from "@/app/Assets/download-2.webp"

const images = [image1, image2, image3];


export default function ImageSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <Slider {...settings} >
            {images.map((img, index) => (
                <Image
                    key={index}
                    src={img} // ✅ not wrapped in another object
                    alt={`Image ${index}`}
                    width={800}
                    height={400}
                    className="w-full object-cover"
                />
            ))}
        </Slider>
    );
}
