import PageHeader from "@/components/shared/PageHeader";
import Image from "next/image";
import { FaMoneyBillWave, FaTools } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { GiGearHammer } from "react-icons/gi";
import Stats from "@/components/home/Stats";
import Partners from "@/components/shared/Partners";
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";

export const whyChooseData = [
    {
        "id": "01",
        "title": "Experienced & Certified Mechanics",
        "description":
            "Our skilled team has years of hands-on experience and certifications to handle every type of motorcycle repair.",
        "icon": FaTools,
    },
    {
        "id": "02",
        "title": "Quick Turnaround Time",
        "description":
            "We value your time. From routine servicing to complex repairs, we get you back on the road as fast as possible.",
        "icon": MdAccessTime,
    },
    {
        "id": "03",
        "title": "Genuine Parts You Can Trust",
        "description":
            "We only use authentic parts to ensure your motorcycle performs safely and reliably.",
        "icon": GiGearHammer,
    },
    {
        "id": "04",
        "title": "Affordable Pricing",
        "description":
            "No hidden costs. Our services are transparent and budget-friendly, giving you peace of mind.",
        "icon": FaMoneyBillWave,
    },
];

const machenics = [
    {
        "name": "Rahim Uddin",
        "position": "Senior Mechanic",
        "image": "https://res.cloudinary.com/dwduymu1l/image/upload/v1758110143/hands-car-mechanic-with-wrench-garage_nqhdxs.jpg",
        "description": "With over 12 years of experience in motorcycle servicing, Rahim specializes in engine repairs and diagnostics. Riders trust him for his precision and deep technical knowledge.",
        "socials": {
            "facebook": "https://facebook.com/rahim.autorapid",
            "instagram": "https://instagram.com/rahim_autorapid",
            "linkedin": "https://linkedin.com/in/rahim-uddin"
        }
    },
    {
        "name": "Hasan Ali",
        "position": "Electrical Specialist",
        "image": "https://res.cloudinary.com/dwduymu1l/image/upload/v1758110264/car-mechanist-making-car-service_uf15mz.jpg",
        "description": "Hasan is an expert in motorcycle wiring, battery maintenance, and modern electronic systems. His skills ensure every ride stays safe and reliable.",
        "socials": {
            "facebook": "https://facebook.com/hasan.autorapid",
            "instagram": "https://instagram.com/hasan_autorapid",
            "linkedin": "https://linkedin.com/in/hasan-ali"
        }
    },
    {
        "name": "Mehedi Hassan",
        "position": "Suspension & Brake Expert",
        "image": "https://res.cloudinary.com/dwduymu1l/image/upload/v1758110374/bearded-expert-mechanic-dressed-uniform-standing-with-crossed-arms-against-car-lift-garage_lsq2qv.jpg",
        "description": "Mehedi focuses on suspension tuning and brake systems. His work guarantees riders enjoy smooth handling and maximum safety on the road.",
        "socials": {
            "facebook": "https://facebook.com/mehedi.autorapid",
            "instagram": "https://instagram.com/mehedi_autorapid",
            "linkedin": "https://linkedin.com/in/mehedi-hassan"
        }
    }
]


const AboutUs = () => {
    return (
        <div>
            <PageHeader text="About US" />
            <div className="bg-blue-50/50 dark:bg-black">
                <div className="flex items-center justify-between gap-10 py-20 max-w-[1440px] mx-auto px-4">
                    <Image src="https://res.cloudinary.com/dwduymu1l/image/upload/v1758082639/original_dlctql.jpg" className="rounded-xl hidden lg:block opacity-80 flex-1" alt="about us image" width={200} height={200}></Image>
                    <div className="flex-1 space-y-6">
                        <h2 className="text-3xl md:text4xl font-semibold mb-10 text-center lg:text-left">Helping and providing <span className="text-primary">best service</span> to our customer <span className="text-primary">over 25 years!!</span></h2>

                        <h4 className="md:text-xl text-gray-900 dark:text-gray-100 text-justify">
                            At AutoRapid, we believe your motorcycle deserves the best care. Since our beginning, we’ve been dedicated to keeping riders safe on the road with fast, reliable, and affordable motorcycle servicing. </h4>
                        <p className="text-gray-700 dark:text-gray-200 text-justify">
                            We know that a motorcycle is more than just a vehicle—it’s freedom, adventure, and a lifestyle. That’s why AutoRapid focuses not only on repairing bikes but also on enhancing the riding experience for every rider.</p>
                        <p className="text-gray-700 dark:text-gray-200 text-justify">
                            Our team of skilled mechanics treats every bike with precision and attention to detail. From routine maintenance to complex repairs, we make sure every motorcycle leaves our workshop ready for the road.
                        </p>
                    </div>
                </div>
            </div>
            <div className="max-w-[1440px] mx-auto my-20">
                <h2 className="text-4xl font-semibold mb-10 text-center uppercase"><span className="text-primary">Why choose </span> us</h2>
                <p className="max-w-xl text-center mx-auto">We combine expertise, speed, and reliability to keep your motorcycle running at its best. Here’s why riders trust AutoRapid for every service.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                    {
                        whyChooseData.map((item, index) => (
                            <div key={index} className="border p-6 bg-gray-100 dark:bg-gray-900 rounded space-y-4 relative cursor-pointer hover:drop-shadow-2xl hover:scale-105 transition-all duration-700 group">
                                <div className="drop-shadow-xl group-hover:bg-primary group-hover:text-white transition-all duration-700 p-4 rounded-full w-fit bg-white dark:bg-black">
                                    <item.icon size={26} />
                                </div>
                                <h2 className="text-2xl cursor-pointer" title={item.title}>{item.title.length > 20 ? item.title.slice(0, 20) + "...." : item.title}</h2>
                                <p className="text-gray-700 dark:text-gray-200">{item.description}</p>
                                <h2 className="absolute top-4 right-4 z-10 font-semibold text-xl opacity-50">{item.id}</h2>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Stats />
            <div className="max-w-[1440px] mx-auto mt-20">
                <h2 className="text-3xl md:text-4xl font-semibold mb-10 flex items-center justify-center text-center lg:text-left uppercase"><span className="text-primary mr-2">our experienced </span> team</h2>
                <p className="max-w-xl text-center mx-auto">Behind every smooth ride is a skilled hand — our team of certified mechanics blends passion, precision, and years of expertise to give your motorcycle the care it truly deserves.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {
                        machenics.slice(0, 3).map((item, i) => (
                            <div key={i} className="group border border-gray-200 dark:border-gray-800 drop-shadow-2xl space-y-4 rounded-xl overflow-hidden cursor-pointer">
                                <div className="relative overflow-hidden border">
                                    <Image src={item.image} alt={item.name} className="w-full h-96" width={200} height={200} ></Image>
                                    <div className="absolute top-0 group-hover:right-0 -right-full bg-black/50 w-full h-full flex items-center justify-center py-10 px-20 text-justify transition-all duration-500 z-2">
                                        <p className="text-white">{item.description}</p>
                                    </div>
                                    <div className="absolute top-1/2 -translate-y-1/2 group-hover:left-0 -left-full transition-all duration-500 flex flex-col gap-6 py-4 px-2 items-center justify-center bg-primary z-3 text-white">
                                        <IoLogoInstagram size={30} className="cursor-pointer" />
                                        <IoLogoTwitter size={30} className="cursor-pointer" />
                                        <IoLogoFacebook size={30} className="cursor-pointer" />
                                        <IoLogoLinkedin size={30} className="cursor-pointer" />
                                    </div>
                                </div>
                                <div className="p-4 pb-8 space-y-2">
                                    <h2 className="text-2xl font-semibold">{item.name}</h2>
                                    <p className="text-gray-800 dark:text-gray-200">{item.position}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Partners />
        </div>
    );
};

export default AboutUs;