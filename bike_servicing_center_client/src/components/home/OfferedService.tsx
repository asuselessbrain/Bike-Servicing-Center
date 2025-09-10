import { Button } from "../ui/button";
import Card from "../shared/Card";

const OfferedService = () => {
    const services = [
        {
            id: 1,
            name: "Engine Repair",
            description: "Complete engine diagnostics, repairs, and maintenance for all car models.",
            image: "https://res.cloudinary.com/dwduymu1l/image/upload/v1756977968/full-shot-adult-riding-cool-motorcycle_ggf7ij.jpg",
            price: "$150 - $500",
            ratting: 4.7,
            discount: 10
        },
        {
            id: 2,
            name: "Oil Change",
            description: "High-quality oil and filter replacement to keep your engine running smoothly.",
            image: "https://res.cloudinary.com/dwduymu1l/image/upload/v1756977987/full-shot-adult-with-equipment-riding-motorcycle_neruij.jpg",
            price: "$30 - $60",
            ratting: 4.9,
            discount: 15
        },
        {
            id: 3,
            name: "Brake Service",
            description: "Brake inspection, pad replacement, and fluid check to ensure safety on the road.",
            image: "https://res.cloudinary.com/dwduymu1l/image/upload/v1756978237/2_1_ixev8c.jpg",
            price: "$80 - $200",
            ratting: 4.8,
            discount: 12
        },
        {
            id: 4,
            name: "Tire Replacement & Alignment",
            description: "Tire rotation, replacement, and wheel alignment for a smooth ride.",
            image: "https://res.cloudinary.com/dwduymu1l/image/upload/v1756978239/3_1_x9ffnx.jpg",
            price: "$50 - $300",
            ratting: 4.6,
            discount: 20
        },
        {
            id: 5,
            name: "Battery Check & Replacement",
            description: "Battery inspection and replacement to avoid unexpected breakdowns.",
            image: "https://res.cloudinary.com/dwduymu1l/image/upload/v1756978242/5_1_uzsmi0.jpg",
            price: "$40 - $120",
            ratting: 4.7,
            discount: 10
        },
        {
            id: 6,
            name: "AC & Cooling System Service",
            description: "Car AC repair, coolant replacement, and radiator maintenance for a comfortable drive.",
            image: "https://res.cloudinary.com/dwduymu1l/image/upload/v1756978243/6_tsbjhs.jpg",
            price: "$60 - $250",
            ratting: 4.5,
            discount: 8
        },
        {
            id: 7,
            name: "Transmission Repair",
            description: "Transmission diagnostics, repairs, and fluid replacement for smooth gear shifts.",
            image: "https://res.cloudinary.com/dwduymu1l/image/upload/v1756977987/full-shot-adult-with-equipment-riding-motorcycle_neruij.jpg",
            price: "$200 - $600",
            ratting: 4.6,
            discount: 10
        },
        {
            id: 8,
            name: "Wheel Balancing",
            description: "Precise wheel balancing to reduce vibrations and improve tire life.",
            image: "https://res.cloudinary.com/dwduymu1l/image/upload/v1756978243/6_tsbjhs.jpg",
            price: "$20 - $80",
            ratting: 4.8,
            discount: 5
        },
        {
            id: 9,
            name: "Suspension Repair",
            description: "Repair and replacement of shocks, struts, and suspension components.",
            image: "https://res.cloudinary.com/dwduymu1l/image/upload/v1756977987/full-shot-adult-with-equipment-riding-motorcycle_neruij.jpg",
            price: "$100 - $400",
            ratting: 4.7,
            discount: 12
        },
        {
            id: 10,
            name: "Car Detailing",
            description: "Complete interior and exterior car cleaning, polishing, and protection.",
            image: "https://res.cloudinary.com/dwduymu1l/image/upload/v1756977987/full-shot-adult-with-equipment-riding-motorcycle_neruij.jpg",
            price: "$50 - $200",
            ratting: 4.9,
            discount: 15
        }
    ];



    return (
        <div className="max-w-[1440px] mx-auto w-full my-20 px-4 sm:px-6 lg:px-8 2xl:px-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold flex items-center justify-center italic">Services Offered</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-2 md:px-0 mt-20 mb-10">
                {
                    services.slice(0, 8).map((service, index) => <Card key={index} service={service} />)
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