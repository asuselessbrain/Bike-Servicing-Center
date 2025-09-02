import Image from "next/image";
import logo from "../../../public/logo.png";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";
const Header = () => {
    return (
        <div className="flex items-center justify-between max-w-[1440px] mx-auto">
            <div className="flex items-center gap-2">
                <Image src={logo} height={100} width={100} alt="Auto Rapid" />
                <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold md:font-bold">AutoRapid</h2>
            </div>
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-4 border-r-2 px-6 border-gray-300">
                    <TfiHeadphoneAlt size={30} />
                    <div className="text-md font-semibold">
                        <h4>Call Now:</h4>
                        <h4>+880 1625-000000</h4>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <CiUser size={32} />
                    <CiHeart size={32} />
                    <CiShoppingCart size={32} />
                </div>
            </div>
        </div>
    );
};

export default Header;