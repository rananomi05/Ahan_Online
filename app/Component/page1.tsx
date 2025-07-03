import ImageSlider from '../Component/ImageSlider';
import CardSlider from './CardSlider';

export default function Home() {
    return (
        <main className="p-4">
            <ImageSlider />

            <CardSlider />
        </main>
    );
}


// 'use client'

// import Image from 'next/image';
// import image from '../../app/Assets/download.webp';
// import image1 from '../../app/Assets/download-1.webp';
// import image2 from '../../app/Assets/download-2.webp';

// export default function Page1() {
//     return (
//         <div className="w-full h-[290px] max-w-screen-md mx-auto py-8">
//             <div
//                 id="indicators-carousel"
//                 className="relative w-full"
//                 data-carousel="static"
//             >
//                 {/* Carousel wrapper */}
//                 <div className="relative h-64 overflow-hidden rounded-lg md:h-96">
//                     {/* Slide 1 */}
//                     <div className="block duration-700 ease-in-out" data-carousel-item="active">
//                         <Image
//                             src={image}
//                             alt="Slide 1"
//                             className="object-cover"
//                             fill
//                             sizes="100vw"
//                             style={{ objectFit: 'cover' }}
//                         />
//                     </div>

//                     {/* Slide 2 */}
//                     <div className="hidden duration-700 ease-in-out" data-carousel-item>
//                         <Image
//                             src={image1}
//                             alt="Slide 2"
//                             className="object-cover"
//                             fill
//                             sizes="100vw"
//                             style={{ objectFit: 'cover' }}
//                         />
//                     </div>

//                     {/* Slide 3 */}
//                     <div className="hidden duration-700 ease-in-out" data-carousel-item>
//                         <Image
//                             src={image2}
//                             alt="Slide 3"
//                             className="object-cover"
//                             fill
//                             sizes="100vw"
//                             style={{ objectFit: 'cover' }}
//                         />
//                     </div>
//                 </div>

//                 {/* Indicators */}
//                 <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
//                     <button
//                         type="button"
//                         className="w-3 h-3 rounded-full bg-white"
//                         aria-current="true"
//                         aria-label="Slide 1"
//                         data-carousel-slide-to="0"
//                     />
//                     <button
//                         type="button"
//                         className="w-3 h-3 rounded-full bg-white"
//                         aria-label="Slide 2"
//                         data-carousel-slide-to="1"
//                     />
//                     <button
//                         type="button"
//                         className="w-3 h-3 rounded-full bg-white"
//                         aria-label="Slide 3"
//                         data-carousel-slide-to="2"
//                     />
//                 </div>

//                 {/* Controls */}
//                 <button
//                     type="button"
//                     className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group"
//                     data-carousel-prev
//                 >
//                     <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
//                         <svg
//                             className="w-4 h-4 text-white"
//                             fill="none"
//                             stroke="currentColor"
//                             strokeWidth="2"
//                             viewBox="0 0 24 24"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
//                         </svg>
//                         <span className="sr-only">Previous</span>
//                     </span>
//                 </button>
//                 <button
//                     type="button"
//                     className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group"
//                     data-carousel-next
//                 >
//                     <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
//                         <svg
//                             className="w-4 h-4 text-white"
//                             fill="none"
//                             stroke="currentColor"
//                             strokeWidth="2"
//                             viewBox="0 0 24 24"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
//                         </svg>
//                         <span className="sr-only">Next</span>
//                     </span>
//                 </button>
//             </div>

//             <p className="mt-4 text-center text-gray-700">This is a working carousel.</p>
//         </div>
//     );
// }
