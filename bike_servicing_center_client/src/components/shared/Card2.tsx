import { Button } from "@/components/ui/button";
import { TServices } from "@/types/Services";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const Card2 = ({ service }: { service: TServices }) => {
    return (
        <div className="overflow-hidden rounded group">
            <div className="h-64 rounded overflow-hidden relative">
                <Image src="https://res.cloudinary.com/dwduymu1l/image/upload/v1756978243/6_tsbjhs.jpg" alt="{service.name}" className="h-full w-full" height={200} width={200} />
                <div className="h-full w-full bg-black/50 absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                <Button variant="outline" className="absolute -bottom-full group-hover:bottom-2 transition-all duration-300 bg-transparent rounded text-white left-[50%] -translate-x-1/2 cursor-pointer backdrop-blur-md">Read More</Button>
                <div className="absolute h-10 w-10 z-20 top-2 group-hover:right-2 bg-transparent border-1 backdrop-blur-3xl border-gray-400 rounded-full flex items-center justify-center text-white font-semibold text-sm -right-full transition-all duration-500 opacity-0 group-hover:opacity-100">
                    <p>-{service.discount}%</p>
                </div>
                <div className="absolute h-10 w-10 z-20 top-16 group-hover:right-2 bg-transparent border-1 backdrop-blur-3xl border-gray-400 rounded-full flex items-center justify-center text-white font-semibold text-sm -right-full transition-all duration-500 opacity-0 group-hover:opacity-100">
                    <p className="mr-[2px]">{service.ratting}</p>
                    <FaStar size={8}></FaStar>
                </div>
            </div>

            <div className="mt-4 bg-primary/90 text-center text-white relative overflow-hidden">
                <div className="py-6 px-4 relative z-10">
                    <h2 className="text-2xl font-semibold">{service.name.length > 20 ? service.name.slice(0, 20) + "..." : service.name}</h2>
                    <h4 className="text-[20px]">Lorem Ipsum</h4>
                    <p className="mt-6">{service.description.length > 75 ? service.description.slice(0, 75) + "..." : service.description}</p>
                </div>
                <div className="absolute bg-gray-800 h-full w-full top-0 -left-full group-hover:left-0 transition-all duration-700 z-0">

                </div>
            </div>
        </div>
    );
};

export default Card2;