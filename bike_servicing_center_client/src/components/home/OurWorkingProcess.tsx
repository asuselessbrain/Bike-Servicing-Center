import { FaCarOn, FaCarRear } from "react-icons/fa6";
import { TbDeviceMobileMessage } from "react-icons/tb";

const OurWorkingProcess = () => {
    return (
        <div className="max-w-[1440px] mx-auto overflow-hidden">
            <h2 className="text-2xl md:text-4xl lg:text-5xl italic">Our Working Process</h2>
            <div className="h-1 mt-2 w-34 bg-primary mb-10"></div>
            <div className="hidden lg:flex flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4 lg:mx-4">
                <div className="clipWorking  xl:py-20 py-6 sm:flex-1 bg-black/80 xl:px-24 lg:px-16 flex items-start flex-col justify-center text-white relative">
                    <TbDeviceMobileMessage size={100} />
                    <h2 className="xl:text-3xl lg:text-xl font-semibold my-6">Request Quote</h2>
                    <p className="text-gray-200 text-justify lg:text-sm xl:text-[16px]">Get a quick estimate for your vehicle’s repair or service needs. No hidden charges, just a clear breakdown.</p>
                    <h1 className="absolute text-9xl xl:right-30 lg:right-10 top-5 opacity-10">1</h1>
                </div>
               <div className="clipWorking  xl:py-20 py-6 sm:flex-1 bg-red-500/80 xl:px-24 lg:px-16 flex items-start flex-col justify-center text-white relative">
                    <FaCarRear size={100} />
                    <h2 className="xl:text-3xl lg:text-xl font-semibold my-6">Bring Your Vehicle</h2>
                    <p className="text-gray-200 text-justify lg:text-sm xl:text-[16px]">Drop off your car or motorbike at our workshop at a convenient time for professional inspection and servicing.</p>
                    <h1 className="absolute text-9xl xl:right-30 lg:right-10 top-5 opacity-10">2</h1>
                </div>
                <div className="clipWorking  xl:py-20 py-6 sm:flex-1 bg-black/80 xl:px-24 lg:px-16 flex items-start flex-col justify-center text-white relative">
                    <FaCarOn size={100} />
                    <h2 className="xl:text-3xl lg:text-xl font-semibold my-6">Get It Repaired</h2>
                    <p className="text-gray-200 text-justify lg:text-sm xl:text-[16px]">Our expert mechanics fix your vehicle efficiently using genuine parts, ensuring it runs smoothly and safely.</p>
                    <h1 className="absolute text-9xl xl:right-30 lg:right-10 top-5 opacity-10">3</h1>
                </div>
            </div>
            <div className="lg:hidden flex flex-col items-center justify-between gap-4 mx-6">
                <div className="md:p-10 p-6 sm:flex-1 bg-black/80 flex items-start flex-col justify-center text-white relative">
                    <TbDeviceMobileMessage size={100} />
                    <h2 className="md:text-3xl text-2xl font-semibold my-6">Request Quote</h2>
                    <p className="text-gray-200 text-justify">Get a quick estimate for your vehicle’s repair or service needs. No hidden charges, just a clear breakdown.</p>
                    <h1 className="absolute text-9xl md:right-10 right-5 top-5 opacity-10">1</h1>
                </div>
               <div className="md:p-10 p-6 sm:flex-1 bg-red-500/80 flex items-start flex-col justify-center text-white relative">
                    <FaCarRear size={100} />
                    <h2 className="md:text-3xl text-2xl font-semibold my-6">Bring Your Vehicle</h2>
                    <p className="text-gray-200 text-justify">Drop off your car or motorbike at our workshop at a convenient time for professional inspection and servicing.</p>
                    <h1 className="absolute text-9xl md:right-10 right-5 top-5 opacity-10">2</h1>
                </div>
                <div className="md:p-10 p-6 sm:flex-1 bg-primary/80 flex items-start flex-col justify-center text-white relative">
                    <FaCarOn size={100} />
                    <h2 className="md:text-3xl text-2xl font-semibold my-6">Get It Repaired</h2>
                    <p className="text-gray-200 text-justify">Our expert mechanics fix your vehicle efficiently using genuine parts, ensuring it runs smoothly and safely.</p>
                    <h1 className="absolute text-9xl md:right-10 right-5 top-5 opacity-10">3</h1>
                </div>
            </div>
        </div>

    );
};

export default OurWorkingProcess;