import Image from "next/image";
import Link from "next/link";
import { FaGooglePlusG } from "react-icons/fa";
import { FaLocationDot, FaPhoneVolume  } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { TiSocialFacebook, TiSocialInstagram, TiSocialLinkedin, TiSocialTwitter } from "react-icons/ti";

const Footer = () => {
    return (
        <div className="w-full">
            <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center -mb-20 text-white">
                <div className="flex items-center gap-6 bg-gray-800 w-full py-12 px-6 flex-1">
                    <FaLocationDot size={35} />
                    <div>
                        <h6 className="text-[20px]">Dhaka, Bangladesh</h6>
                        <p>123 Bike Street, Motor Cityf</p>
                    </div>
                </div>
                <div className="flex items-center gap-6 bg-primary/90 py-12 w-full px-6 flex-1">
                    <FaPhoneVolume size={35} />
                    <div>
                        <h6 className="text-[20px]">+880 1234 567890</h6>
                        <p>Give us a call</p>
                    </div>
                </div>
                <div className="flex items-center gap-6 bg-primary py-12 px-6 w-full flex-1">
                    <MdEmail size={35} />
                    <div>
                        <h6 className="text-[20px]">support@autorepair.com</h6>
                        <p>24/7 online support</p>
                    </div>
                </div>
            </div>
            <div className="bg-cover bg-no-repeat bg-center text-white pb-10 pt-24" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://res.cloudinary.com/dwduymu1l/image/upload/v1757517275/AMAC_Motorcycle_Mechanic_Workshop_cof7wx.webp)' }}>
                <div className="max-w-[1440px] w-full mx-auto px-4 2xl:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-start gap-10 lg:place-items-end">
                    <div>
                        <div className="flex items-center gap-4" >
                            <Image src="https://res.cloudinary.com/dwduymu1l/image/upload/v1757518912/logo_iynf2a.png" alt="AutoRepair" className="h-16 w-16 xl:h-24 xl:w-24" height={200} width={200} />
                            <h2 className="text-2xl xl:text-4xl font-semibold">AutoRepair</h2>
                        </div>
                        <p className="text-gray-100 max-w-2xl mt-4 text-justify">Your trusted partner for reliable bike servicing and repairs. From regular maintenance to emergency fixes, we ensure your ride stays smooth and safe on every journey.</p>
                        <div className="flex items-center gap-4 mt-6">
                            <TiSocialFacebook size={30} className="border-2 border-gray-400 rounded-full p-1 cursor-pointer hover:scale-125 hover:border-gray-100 hover:bg-gray-100 duration-700 hover:text-black/80 transition-all" />
                            <TiSocialTwitter size={30} className="border-2 border-gray-400 rounded-full p-1 cursor-pointer hover:scale-125 hover:border-gray-100 hover:bg-gray-100 duration-700 hover:text-black/80 transition-all" />
                            <FaGooglePlusG size={30} className="border-2 border-gray-400 rounded-full p-1 cursor-pointer hover:scale-125 hover:border-gray-100 hover:bg-gray-100 duration-700 hover:text-black/80 transition-all" />
                            <TiSocialLinkedin size={30} className="border-2 border-gray-400 rounded-full p-1 cursor-pointer hover:scale-125 hover:border-gray-100 hover:bg-gray-100 duration-700 hover:text-black/80 transition-all" />
                            <TiSocialInstagram size={30} className="border-2 border-gray-400 rounded-full p-1 cursor-pointer hover:scale-125 hover:border-gray-100 hover:bg-gray-100 duration-700 hover:text-black/80 transition-all" />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold">Our Services</h2>
                        <ul className="list-none space-y-2 mt-6">
                            <li>Engine Diagnostics</li>
                            <li>Lube, Oil and Filters</li>
                            <li>Computer Diagnostics</li>
                            <li>Anti-Lock Brake</li>
                            <li>Air Conditioning Evac</li>
                            <li>Performance Upgrades</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold">Our Products</h2>
                        <ul className="list-none space-y-2 mt-6">
                            <li>Engine Oils & Lubricants</li>
                            <li>Brake Pads & Rotors</li>
                            <li>Air Filters & Fuel Filters</li>
                            <li>Battery & Electrical Components</li>
                            <li>Suspension & Shock Absorbers</li>
                            <li>Performance Upgrades & Accessories</li>
                        </ul>
                    </div>
                    <div className="w-[90%]">
                        <h2 className="text-2xl font-bold">Services Hours</h2>
                        <ul className="list-none space-y-2 mt-6">
                            <li className="flex items-center justify-between"><p>Monday</p><p>7:00 AM - 4:30 PM</p></li>
                            <li className="flex items-center justify-between"><p>Tuesday</p><p>7:00 AM - 4:30 PM</p></li>
                            <li className="flex items-center justify-between"><p>Wednesday</p><p>7:00 AM - 4:30 PM</p></li>
                            <li className="flex items-center justify-between"><p>Thursday</p><p>7:00 AM - 4:30 PM</p></li>
                            <li className="flex items-center justify-between"><p>Friday</p><p>7:00 AM - 4:30 PM</p></li>
                            <li className="flex items-center justify-between"><p>Saturday</p><p>8:00 AM - 2:00 PM</p></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-black text-gray-200 font-semibold">
                <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between text-center md:text-left py-4">
                    <p>Copyright &copy; {new Date().getFullYear()} Automobile. All Rights Reserved.</p>
                    <ul className="flex items-center gap-6 md:gap-10 list-none">
                        <li><Link href="/">Home</Link></li>
                        <li>Terms</li>
                        <li>Privacy Policy</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;