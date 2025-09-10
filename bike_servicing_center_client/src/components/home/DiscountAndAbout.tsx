import { Button } from "../ui/button";

const DiscountAndAbout = () => {
    return (
        <div className="w-full relative lg:h-[500px] my-20 overflow-hidden">
            <div
                className="h-[400px] w-3/5 clipLeft hidden lg:absolute left-0 top-1/2 -translate-y-1/2 bg-cover bg-center text-white lg:flex items-start justify-center flex-col"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)) , url('https://trainingtale.org/wp-content/uploads/2025/02/Motorcycle-Maintenance-Course.jpg')",
                }}
            >

            </div>

            <div className="h-[350px] w-[55%] bg-primary clipRight hidden lg:absolute right-0 top-1/2 -translate-y-1/2 text-white pl-40 lg:flex justify-center flex-col">

            </div>
            <div className="relative max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center justify-between h-full px-4 sm:px-6 lg:px-8 2xl:px-0">
                <div className="text-white flex flex-col items-start p-6 lg:p-0 relative mx-4 lg:mx-0 w-full py-10 px-4 lg:bg-none bg-cover bg-center bg-no-repeat [background-image:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('https://trainingtale.org/wp-content/uploads/2025/02/Motorcycle-Maintenance-Course.jpg')]">
                    <p className="text-xl italic">Come before 21st Feb</p>
                    <h2 className="text-2xl md:text-4xl lg:text-4xl font-semibold mt-4 italic">Get Upto 30% Rewards</h2>
                    <div className="h-1 mt-2 w-34 bg-primary"></div>
                    <p className="lg:max-w-1/2 text-gray-200 mt-4">Auto Painting & Collision Repair Shop. We help you turn the car you drive back into the car you love!</p>
                    <Button className="rounded uppercase mt-6 cursor-pointer">Claim Reward</Button>
                </div>

                <div className="text-white p-6 lg:p-0 lg:pl-10 lg:max-w-[50%] relative mx-4 lg:mx-0 bg-primary lg:bg-transparent w-full py-10 px-4">
                    <h3 className="text-2xl md:text-4xl lg:text-4xl font-semibold mt-4 italic">About AutoRepair</h3>
                    <div className="h-1 mt-2 w-34 bg-white"></div>
                    <p className="text-gray-200 mt-4 text-justify">AutoRepair is your reliable partner for professional motorbike and vehicle servicing. We keep your ride safe, smooth, and long-lasting.</p>
                    <ul className="mt-6 list-disc list-inside space-y-4">
                        <li>Regular maintenance to prevent costly damage</li>
                        <li>Expert mechanics with modern tools</li>
                        <li>Genuine parts for quality repairs</li>
                        <li>Engine, brakes, oil & full bike servicing</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DiscountAndAbout;