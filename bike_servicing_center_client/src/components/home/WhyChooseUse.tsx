import Image from "next/image";
import { FaUserCog, FaDollarSign, FaClock, FaTools, FaShieldAlt, FaCogs, FaPhoneAlt } from "react-icons/fa";

const whyChooseUs = [
    {
        id: 1,
        icon: <FaUserCog size={46} />,
        title: "Experienced Mechanics",
        description: "Our certified mechanics have years of experience handling all car makes and models."
    },
    {
        id: 2,
        icon: <FaDollarSign size={46} />,
        title: "Affordable Pricing",
        description: "Transparent pricing with no hidden charges. Get top-notch service without breaking the bank."
    },
    {
        id: 3,
        icon: <FaClock size={46} />,
        title: "Quick Turnaround",
        description: "Most standard repairs are completed within a day, and we provide real-time updates."
    },
    {
        id: 4,
        icon: <FaTools size={46} />,
        title: "Genuine Parts & Materials",
        description: "We use only genuine parts and high-quality materials to ensure your car stays in peak condition."
    },
    {
        id: 5,
        icon: <FaShieldAlt size={46} />,
        title: "Customer Satisfaction Guaranteed",
        description: "Your satisfaction is our priority. We go the extra mile to make sure your car runs smoothly."
    },
    {
        id: 6,
        icon: <FaCogs size={46} />,
        title: "Modern Equipment & Technology",
        description: "Equipped with the latest diagnostic tools and repair technology for precise and efficient service."
    },
    {
        id: 7,
        icon: <FaPhoneAlt size={46} />,
        title: "24/7 Assistance",
        description: "Our emergency services are available round the clock to get you back on track."
    },
];



const WhyChooseUse = () => {
    return (
        <div className="max-w-[1440px] mx-auto  my-20 px-4 sm:px-6 lg:px-8 2xl:px-0">
            <h2 className="text-2xl md:text-4xl lg:text-5xl italic">Why Choose Us</h2>
            <div className="h-1 mt-4 w-34 bg-primary"></div>
            <div className="md:flex items-center justify-between gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 flex-1 gap-6 text-justify">
                    {
                        whyChooseUs.slice(0, 4).map((item, index) => <div key={index} className="flex items-start gap-4">
                            <div>{item.icon}</div>
                            <div className="max-w-[24rem]">
                                <h4 className="text-xl font-semibold">{item.title}</h4>
                                <p className="text-gray-500 dark:text-gray-400">{item.description}</p>
                            </div>
                        </div>)
                    }
                </div>
                <div className="flex-1 hidden lg:block relative w-full h-80 lg:h-[400px] rounded-lg overflow-hidden ">
                    <Image src="https://shorturl.at/SUTkf" alt="Mechanic Image" fill className="object-cover" />
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUse;