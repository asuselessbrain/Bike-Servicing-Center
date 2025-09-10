import { TServices } from "@/types/Services";
import Image from "next/image";
import { Button } from "../ui/button";
import { FaStarHalfAlt } from "react-icons/fa";

const Card = ({ service }: { service: TServices }) => {
    return (
        <div className="group rounded-xl overflow-hidden border-2">
            <div className="w-full h-64 relative overflow-hidden">
                <Image src={service.image} alt={service.name} width={200} height={200} className="w-full rounded h-full group-hover:scale-105 duration-700" />
                <div className="w-full h-full bg-gradient-to-l from-black/40 to-black/40 inset-0 absolute z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute h-10 w-10 z-20 top-2 group-hover:right-2 bg-primary rounded-full flex items-center justify-center text-white font-semibold text-sm -right-50 transition-all duration-500 opacity-0 group-hover:opacity-100">
                    <p>-{service.discount}%</p>
                </div>
            </div>
            <div className="p-4">
                <h3 className="group-hover:underline duration-700 text-2xl font-semibold mb-4 text-primary">{service.name.length > 20 ? service.name.slice(0, 20) + "..." : service.name}</h3>
                <p className="text-gray-500 dark:text-gray-400 mb-2">{service.description.length > 75 ? service.description.slice(0, 75) + "..." : service.description}</p>
                <h4 className="text-xl font-semibold mb-2 text-red-600">{service.price}</h4>
                {
                    service.ratting ?
                        <h4 className="flex items-center gap-2"><FaStarHalfAlt /> {service.ratting}</h4>
                        : ""
                }
                <Button className="mt-4 rounded cursor-pointer">View Details</Button>
            </div>
        </div>
    );
};

export default Card;