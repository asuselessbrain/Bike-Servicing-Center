import { Button } from "../ui/button";

const NavBar = () => {
    return (
        <div className="text-xl font-semibold max-w-[1440px] mx-auto flex items-center justify-between">
            <ul className="flex items-center list-none gap-6">
                <li className="relative cursor-pointer group p-2">
                    Home
                    <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-gray-900 dark:bg-gray-200 transition-all duration-300 group-hover:w-full"></span>
                </li>
                <li className="relative cursor-pointer group p-2">
                    Services
                    <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-gray-900 dark:bg-gray-200 transition-all duration-300 group-hover:w-full"></span>
                </li>
                <li className="relative group cursor-pointer p-2">
                    Book Service
                    <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-gray-900 dark:bg-gray-200 transition-all duration-300 group-hover:w-full"></span>    
                </li>
                <li className="relative group cursor-pointer p-2">
                    Shop
                    <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-gray-900 dark:bg-gray-200 transition-all duration-300 group-hover:w-full"></span>    
                </li>
                <li className="relative group cursor-pointer p-2">
                    Reviews
                    <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-gray-900 dark:bg-gray-200 transition-all duration-300 group-hover:w-full"></span>    
                </li>
                <li className="relative group cursor-pointer p-2">
                    Dashboard
                    <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-gray-900 dark:bg-gray-200 transition-all duration-300 group-hover:w-full"></span>    
                </li>
                <li className="relative group cursor-pointer p-2">
                    About Us
                    <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-gray-900 dark:bg-gray-200 transition-all duration-300 group-hover:w-full"></span>    
                </li>
                <li className="relative group cursor-pointer p-2">
                    Gallery
                    <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-gray-900 dark:bg-gray-200 transition-all duration-300 group-hover:w-full"></span>    
                </li>
                <li className="relative group cursor-pointer p-2">
                    FAQ
                    <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-gray-900 dark:bg-gray-200 transition-all duration-300 group-hover:w-full"></span>    
                </li>
                <li className="relative group cursor-pointer p-2">
                    Contact
                    <span className="absolute left-0 bottom-0 w-0 h-[3px] bg-gray-900 dark:bg-gray-200 transition-all duration-300 group-hover:w-full"></span>    
                </li>
            </ul>
            <div className="flex items-center gap-2 font-semibold">
                <Button className="rounded bg-gray-200 border border-gray-300 hover:bg-gray-300 text-black">SignIn</Button>
                <Button className="rounded">SignUp</Button>
            </div>
        </div>
    );
};

export default NavBar;