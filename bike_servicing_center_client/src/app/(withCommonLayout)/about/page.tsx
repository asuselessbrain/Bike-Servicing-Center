import PageHeader from "@/components/shared/PageHeader";
import Image from "next/image";

const AboutUs = () => {
    return (
        <div>
            <PageHeader text="About US" />
            <div className="bg-blue-50/50 dark:bg-black">
                <div className="flex items-center justify-between gap-10 py-20 max-w-[1440px] mx-auto">
                    <Image src="https://res.cloudinary.com/dwduymu1l/image/upload/v1758082639/original_dlctql.jpg" className="rounded-xl opacity-80 flex-1" alt="about us image" width={200} height={200}></Image>
                    <div className="flex-1 space-y-6">
                        <h2 className="text-4xl font-semibold mb-10">Helping and providing <span className="text-primary">best service</span> to our customer <span className="text-primary">over 25 years!!</span></h2>

                        <h4 className="text-xl text-gray-900 dark:text-gray-100 text-justify">
                            At AutoRapid, we believe your motorcycle deserves the best care. Since our beginning, we’ve been dedicated to keeping riders safe on the road with fast, reliable, and affordable motorcycle servicing. </h4>
                        <p className="text-gray-700 dark:text-gray-200 text-justify">
                            We know that a motorcycle is more than just a vehicle—it’s freedom, adventure, and a lifestyle. That’s why AutoRapid focuses not only on repairing bikes but also on enhancing the riding experience for every rider.</p>
                        <p className="text-gray-700 dark:text-gray-200 text-justify">
                            Our team of skilled mechanics treats every bike with precision and attention to detail. From routine maintenance to complex repairs, we make sure every motorcycle leaves our workshop ready for the road.
                        </p>
                    </div>
                </div>
            </div>
            <div className="max-w-[1440px] mx-auto">
                <h2 className="text-4xl font-semibold mb-10 text-center"><span className="text-primary">Why choose </span> us</h2>
                <p className="max-w-xl text-center mx-auto">We combine expertise, speed, and reliability to keep your motorcycle running at its best. Here’s why riders trust AutoRapid for every service.</p>

            </div>
        </div>
    );
};

export default AboutUs;