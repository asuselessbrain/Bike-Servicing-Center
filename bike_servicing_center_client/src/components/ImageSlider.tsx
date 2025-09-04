"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const images = [
    {
        id: 1,
        url: "https://res.cloudinary.com/dwduymu1l/image/upload/v1756977968/full-shot-adult-riding-cool-motorcycle_ggf7ij.jpg",
        name: "Engine Diagnostics",
        des: "Professional computer-based scanning and diagnostics to identify and fix engine issues quickly.",
    },
    {
        id: 2,
        url: "https://res.cloudinary.com/dwduymu1l/image/upload/v1756977987/full-shot-adult-with-equipment-riding-motorcycle_neruij.jpg",
        name: "Oil Change & Maintenance",
        des: "Regular servicing including oil change, filter replacement, and performance check for bikes and cars.",
    },
    {
        id: 3,
        url: "https://res.cloudinary.com/dwduymu1l/image/upload/v1756978237/2_1_ixev8c.jpg",
        name: "Brake & Suspension Repair",
        des: "Ensuring safety with professional brake pad replacement, disc repair, and suspension adjustments.",
    },
    {
        id: 4,
        url: "https://res.cloudinary.com/dwduymu1l/image/upload/v1756978239/3_1_x9ffnx.jpg",
        name: "Body & Paint Work",
        des: "Accident repair, dent removal, and premium painting service to restore your vehicle’s original look.",
    },
    {
        id: 5,
        url: "https://res.cloudinary.com/dwduymu1l/image/upload/v1756978242/5_1_uzsmi0.jpg",
        name: "Tire & Wheel Service",
        des: "Complete tire solutions including balancing, alignment, and replacement for all vehicles.",
    },
    {
        id: 6,
        url: "https://res.cloudinary.com/dwduymu1l/image/upload/v1756978243/6_tsbjhs.jpg",
        name: "Full Bike & Car Servicing",
        des: "From inspection to complete servicing, we provide all-in-one solutions for your bike and car.",
    },
];

export default function ImageSlider() {
    const [item, setItem] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setItem((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const nextImage = () => {
        setItem((prev) => (prev + 1) % images.length);
    };

    const previousImage = () => {
        setItem((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const getCircularImages = (images: { id: number; url: string; name: string; des: string }[], start: number, count: number) => {
        const result = [];
        for (let i = 0; i < count; i++) {
            result.push(images[(start + i) % images.length]);
        }
        return result;
    };

    return (
        <div className="relative w-full h-[800px] overflow-hidden">
            <AnimatePresence initial={false}>
                <motion.div
                    key={item}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${images[item]?.url})` }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                />
            </AnimatePresence>
            <div className="relative z-10 max-w-[1440px] mx-auto h-full flex items-center justify-between">
                <motion.div
                    className="max-w-[600px] text-white"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                >
                    <motion.h2
                        className="text-4xl font-bold uppercase"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        {images[item].name}
                    </motion.h2>
                    <motion.p
                        className="mt-3 mb-5"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        {images[item].des}
                    </motion.p>
                    <motion.button
                        className="px-4 py-2 bg-white text-black font-medium rounded shadow hover:bg-gray-200 transition"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        See More
                    </motion.button>
                </motion.div>
                <div className="flex items-center gap-4 max-w-[500px] overflow-hidden">
                    {getCircularImages(images, item + 1, 3).map((image, index) => (
                        <motion.div
                            key={`${image.id}-${index}`}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                        >
                            <Image
                                src={image.url}
                                className="h-64 w-3xl rounded-xl"
                                width={200}
                                height={200}
                                alt="image"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="absolute z-20 text-white bottom-8 left-1/2 -translate-x-1/2">
                <motion.button
                    onClick={previousImage}
                    className="p-2 border-2 mx-2 rounded cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <FaArrowLeft />
                </motion.button>
                <motion.button
                    onClick={nextImage}
                    className="p-2 border-2 mx-2 rounded cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <FaArrowRight />
                </motion.button>
            </div>
        </div>
        // <div className="relative w-full h-[800px] overflow-hidden">
        //     {images.map((image, index) => (
        //         <div
        //             key={image.id}
        //             className={`absolute h-full w-full transition-opacity duration-1000 ${index === item ? "opacity-100 z-10" : "opacity-0 z-0"
        //                 }`}
        //         >
        //             <Image src={image.url} fill alt={image.name} className="object-cover" />
        //             <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60 z-20"></div>

        //             {/* Caption */}
        //             <div className="absolute bottom-20 left-10 z-30 text-white">
        //                 <h2 className="text-4xl font-bold">{image.name}</h2>
        //                 <p className="max-w-md">{image.des}</p>
        //             </div>
        //         </div>
        //     ))}

        //     {/* Navigation Arrows */}
        //     <button
        //         onClick={previousImage}
        //         className="absolute left-5 top-1/2 -translate-y-1/2 text-white z-40 p-3 bg-black/40 rounded-full hover:bg-black/60"
        //     >
        //         <FaArrowLeft size={20} />
        //     </button>
        //     <button
        //         onClick={nextImage}
        //         className="absolute right-5 top-1/2 -translate-y-1/2 text-white z-40 p-3 bg-black/40 rounded-full hover:bg-black/60"
        //     >
        //         <FaArrowRight size={20} />
        //     </button>
        // </div>
    );
}