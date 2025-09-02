import Image from "next/image";
import logo from "../../../public/logo.png";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
import { ModeToggle } from "./DarkModeControl";
const Header = () => {
    return (
        <div className="flex items-center justify-between max-w-[1440px] mx-auto px-4 md:px-8 lg:px-0">
            <div className="flex items-center gap-2">
                <Image src={logo} className="h-16 w-16 md:h-28 md:w-28" alt="Auto Rapid" priority />
                <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold md:font-bold">AutoRapid</h2>
            </div>
            <div className="flex items-center gap-6">
                <div className="lg:flex items-center gap-4 border-r-2 px-6 border-gray-300 hidden">
                    <TfiHeadphoneAlt size={30} />
                    <div className="text-md font-semibold">
                        <h4>Call Now:</h4>
                        <h4>+880 1625-000000</h4>
                    </div>
                </div>
                <div className="flex items-center gap-2 md:gap-6">
                    <CiUser className="w-6 md:w-8 h-6 md:h-8 text-gray-700 dark:text-white" />
                    <CiHeart className="w-6 md:w-8 h-6 md:h-8 text-gray-700 dark:text-white" />
                    <CiShoppingCart className="w-6 md:w-8 h-6 md:h-8 text-gray-700 dark:text-white" />
                    <ModeToggle />
                </div>
            </div>
        </div>
    );
};

export default Header;