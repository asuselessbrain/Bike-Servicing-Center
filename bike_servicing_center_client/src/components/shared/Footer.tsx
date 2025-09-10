import Link from "next/link";

const Footer = () => {
    return (
        <div className="w-full">
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