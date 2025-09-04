import Image from "next/image";
import { FaStarHalfAlt } from "react-icons/fa";
import { Button } from "../ui/button";

const OfferedService = () => {
    const services = [
        {
            id: 1,
            name: "Engine Repair",
            description: "Complete engine diagnostics, repairs, and maintenance for all car models.",
            image: "https://res.cloudinary.com/dwduymu1l/image/upload/v1756977968/full-shot-adult-riding-cool-motorcycle_ggf7ij.jpg",
            price: "$150 - $500",
            rating: 4.7,
            discount: 10
        },
        {
            id: 2,
            name: "Oil Change",
            description: "High-quality oil and filter replacement to keep your engine running smoothly.",
            image: "https://res.cloudinary.com/dwduymu1l/image/upload/v1756977987/full-shot-adult-with-equipment-riding-motorcycle_neruij.jpg",
            price: "$30 - $60",
            rating: 4.9,
            discount: 15
        },
        {
            id: 3,
            name: "Brake Service",
            description: "Brake inspection, pad replacement, and fluid check to ensure safety on the road.",
            image: "https://res.cloudinary.com/dwduymu1l/image/upload/v1756978237/2_1_ixev8c.jpg",
            price: "$80 - $200",
            rating: 4.8,
            discount: 12
        },
        {
            id: 4,
            name: "Tire Replacement & Alignment",
            description: "Tire rotation, replacement, and wheel alignment for a smooth ride.",
            image: "https://res.cloudinary.com/dwduymu1l/image/upload/v1756978239/3_1_x9ffnx.jpg",
            price: "$50 - $300",
            rating: 4.6,
            discount: 20
        },
        {
            id: 5,
            name: "Battery Check & Replacement",
            description: "Battery inspection and replacement to avoid unexpected breakdowns.",
            image: "https://res.cloudinary.com/dwduymu1l/image/upload/v1756978242/5_1_uzsmi0.jpg",
            price: "$40 - $120",
            rating: 4.7,
            discount: 10
        },
        {
            id: 6,
            name: "AC & Cooling System Service",
            description: "Car AC repair, coolant replacement, and radiator maintenance for a comfortable drive.",
            image: "https://res.cloudinary.com/dwduymu1l/image/upload/v1756978243/6_tsbjhs.jpg",
            price: "$60 - $250",
            rating: 4.5,
            discount: 8
        },
        {
            id: 7,
            name: "Transmission Repair",
            description: "Transmission diagnostics, repairs, and fluid replacement for smooth gear shifts.",
            image: "https://res.cloudinary.com/dwduymu1l/image/upload/v1756977987/full-shot-adult-with-equipment-riding-motorcycle_neruij.jpg",
            price: "$200 - $600",
            rating: 4.6,
            discount: 10
        },
        {
            id: 8,
            name: "Wheel Balancing",
            description: "Precise wheel balancing to reduce vibrations and improve tire life.",
            image: "https://res.cloudinary.com/dwduymu1l/image/upload/v1756978243/6_tsbjhs.jpg",
            price: "$20 - $80",
            rating: 4.8,
            discount: 5
        },
        {
            id: 9,
            name: "Suspension Repair",
            description: "Repair and replacement of shocks, struts, and suspension components.",
            image: "https://res.cloudinary.com/dwduymu1l/image/upload/v1756977987/full-shot-adult-with-equipment-riding-motorcycle_neruij.jpg",
            price: "$100 - $400",
            rating: 4.7,
            discount: 12
        },
        {
            id: 10,
            name: "Car Detailing",
            description: "Complete interior and exterior car cleaning, polishing, and protection.",
            image: "https://res.cloudinary.com/dwduymu1l/image/upload/v1756977987/full-shot-adult-with-equipment-riding-motorcycle_neruij.jpg",
            price: "$50 - $200",
            rating: 4.9,
            discount: 15
        }
    ];



    return (
        <div className="max-w-[1440px] mx-auto w-full my-20">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold flex items-center justify-center italic">Services Offered</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 px-2 md:px-0 mt-20 mb-10">
                {
                    services.slice(0, 8).map((service, index) => <div key={index} className="group rounded-xl overflow-hidden border-2">
                        <div className="w-full h-60 relative overflow-hidden">
                            <Image src={service.image} alt={service.name} width={200} height={200} className="w-full rounded h-full group-hover:scale-105 duration-700" />
                            <div className="w-full h-full bg-gradient-to-l from-black/40 to-black/40 inset-0 absolute z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            <div className="absolute h-10 w-10 z-20 top-2 right-2 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                <p>-{service.discount}%</p>
                            </div>
                        </div>
                        <div className="p-4">
                            <h3 className="group-hover:underline duration-700 text-2xl font-semibold mb-4 text-primary">{service.name.length > 20 ? service.name.slice(0, 20) + "..." : service.name}</h3>
                            <p className="text-gray-500 dark:text-gray-400 mb-2">{service.description.length > 70 ? service.description.slice(0, 80) + "..." : service.description}</p>
                            <h4 className="text-xl font-semibold mb-2 text-red-600">{service.price}</h4>
                            <h4 className="flex items-center gap-2"><FaStarHalfAlt /> {service.rating}</h4>
                            <Button className="mt-4 rounded cursor-pointer">View Details</Button>
                        </div>
                    </div>)
                }


            </div>
            <div className="flex items-center justify-center">
                {
                    services.length > 8 ? <Button className="rounded">Show More</Button> : ""
                }
            </div>
        </div>
    );
};

export default OfferedService;