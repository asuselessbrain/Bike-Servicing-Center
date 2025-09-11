import Image from "next/image";

const Partners = () => {

    const ourPartners = [
        { "id": 1, "name": "Honda Motors", "image": "https://res.cloudinary.com/dwduymu1l/image/upload/v1757604304/honda_dqvun7.png" },
        { "id": 2, "name": "Yamaha", "image": "https://res.cloudinary.com/dwduymu1l/image/upload/v1757604383/vecteezy_yamaha-black-logo-on-transparent-background_14414660-removebg-preview_ewl4bt.png" },
        { "id": 3, "name": "Suzuki Bikes", "image": "https://res.cloudinary.com/dwduymu1l/image/upload/v1757604528/suzuki_oeebep.png" },
        { "id": 4, "name": "KTM", "image": "https://res.cloudinary.com/dwduymu1l/image/upload/v1757604712/ktm_jx5vdj.png" },
        { "id": 5, "name": "Bajaj", "image": "https://res.cloudinary.com/dwduymu1l/image/upload/v1757604855/bajaj_fgy1ob.png" },
        { "id": 6, "name": "TVS Motors", "image": "https://res.cloudinary.com/dwduymu1l/image/upload/v1757604979/TVS_cqzrzo.png" },
    ]

    return (
        <div className="max-w-[1440px] mx-auto overflow-hidden my-20">
            <h2 className="uppercase text-2xl md:text-4xl lg:text-4xl font-semibold italic">Our Partner</h2>
            <div className="h-1 mt-4 w-28 bg-primary"></div>

            <div className="flex items-center gap-6 h-28 mt-10 animate-infinite-scroll w-max">
                {[...ourPartners, ...ourPartners].map((partner, index) => (
                    <div key={index} className="border-2 border-gray-300 rounded h-full flex items-center justify-center dark:bg-white">
                        <Image
                            src={partner.image}
                            alt={partner.name}
                            width={200}
                            height={200}
                            className="object-contain h-full"
                        />
                    </div>
                ))}
            </div>
        </div>

    );
};

export default Partners;