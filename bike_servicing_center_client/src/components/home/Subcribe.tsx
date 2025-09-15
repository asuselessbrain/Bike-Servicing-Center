import { FaRegPaperPlane } from "react-icons/fa";
import { Button } from "../ui/button";
import ScrambleText from "../shared/TextScramble";

const Subscribe = () => {
    return (
        <div className="relative h-72 my-20 px-4 sm:px-6 lg:px-8 2xl:px-0">
            <div className="h-60 hidden lg:block w-[50%] bg-primary absolute -translate-y-1/2 top-1/2 z-10 left-0 clipLeft">

            </div>
            <div className="h-72 hidden lg:block w-3/5 bg-cover bg-center bg-no-repeat absolute right-0 -translate-y-1/2 top-1/2 clipRight" style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(https://res.cloudinary.com/dwduymu1l/image/upload/v1757473160/man-fixing-motorcycle-modern-workshop_gtkjev.jpg)`
            }}>

            </div>

            <div className="relative z-20 max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between h-full text-white">
                <div className="bg-primary lg:bg-transparent w-full py-10 px-4">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl italic"><ScrambleText text="Subscribe For Newsletter" /></h2>
                    <div className="h-1 mt-2 w-34 bg-white mb-10"></div>
                    <form className="border border-white rounded flex items-center justify-between px-4 py-2 overflow-hidden max-w-md">
                        <input type="email" name="" id="" className="w-full focus:outline-none" placeholder="Your Email" />
                        <button><FaRegPaperPlane size={24} className="cursor-pointer text-gray-100" /></button>
                    </form>
                </div>
                <div className="w-full py-10 px-4 lg:bg-none bg-cover bg-center bg-no-repeat [background-image:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('https://res.cloudinary.com/dwduymu1l/image/upload/v1757473160/man-fixing-motorcycle-modern-workshop_gtkjev.jpg')]">
                    <p className="text-gray-200 text-[20px]"><ScrambleText text="We offer you" /></p>

                    <h3 className="text-2xl md:text-4xl lg:text-4xl font-semibold mt-4 italic"><ScrambleText text="The Best Auto Repair Service" /></h3>
                    <div className="h-1 mt-2 w-34 bg-white"></div>
                    <Button className="uppercase mt-10 px-6 py-4 rounded cursor-pointer duration-500">Contact Us</Button>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;