import { FaCheckCircle, FaClock, FaSmile, FaWrench } from "react-icons/fa";

const Stats = () => {
    return (
        <div className="bg-cover bg-no-repeat bg-center bg-fixed" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(https://res.cloudinary.com/dwduymu1l/image/upload/v1757607547/Motorcycle-Service-Melbourne_kxaqzv.png)` }}>
            <div className="max-w-[1440px] mx-auto text-white py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 lg:px-10 2xl:px-0 ">
                <div className="border-2 border-white rounded py-6 px-10 flex items-center flex-col  gap-6" >
                    <div className="flex items-center gap-2">
                        <FaSmile size={40} />
                        <p className="text-5xl">{(12050).toLocaleString()}+</p>
                    </div>
                    <h3 className="text-2xl">Happy Clients</h3>

                </div>
                <div className="border-2 border-white rounded py-6 px-10 flex items-center flex-col  gap-6" >
                    <div className="flex items-center gap-2">
                        <FaWrench size={40} />
                        <p className="text-5xl">{(400).toLocaleString()}+</p>
                    </div>
                    <h3 className="text-2xl">Expert Mechanics</h3>

                </div>
                <div className="border-2 border-white rounded py-6 px-10 flex items-center flex-col  gap-6" >
                    <div className="flex items-center gap-2">
                        <FaCheckCircle size={40} />
                        <p className="text-5xl">{(13015).toLocaleString()}+</p>
                    </div>
                    <h3 className="text-2xl">Services Completed</h3>

                </div>
                <div className="border-2 border-white rounded py-6 px-10 flex items-center flex-col  gap-6" >
                    <div className="flex items-center gap-2">
                        <FaClock size={40} />
                        <p className="text-5xl">{(9).toLocaleString()}+</p>
                    </div>
                    <h3 className="text-2xl">Years of Experience</h3>

                </div>
            </div>
        </div>
    );
};

export default Stats;