const OfferedService = () => {
    const services = [
        {
            id: 1,
            name: "Engine Repair",
            description: "Complete engine diagnostics, repairs, and maintenance for all car models.",
            icon: "https://img.icons8.com/ios-filled/50/000000/engine.png",
            price: "$150 - $500",
            rating: 4.7
        },
        {
            id: 2,
            name: "Oil Change",
            description: "High-quality oil and filter replacement to keep your engine running smoothly.",
            icon: "https://img.icons8.com/ios-filled/50/000000/oil-can.png",
            price: "$30 - $60",
            rating: 4.9
        },
        {
            id: 3,
            name: "Brake Service",
            description: "Brake inspection, pad replacement, and fluid check to ensure safety on the road.",
            icon: "https://img.icons8.com/ios-filled/50/000000/brake.png",
            price: "$80 - $200",
            rating: 4.8
        },
        {
            id: 4,
            name: "Tire Replacement & Alignment",
            description: "Tire rotation, replacement, and wheel alignment for a smooth ride.",
            icon: "https://img.icons8.com/ios-filled/50/000000/tire.png",
            price: "$50 - $300",
            rating: 4.6
        },
        {
            id: 5,
            name: "Battery Check & Replacement",
            description: "Battery inspection and replacement to avoid unexpected breakdowns.",
            icon: "https://img.icons8.com/ios-filled/50/000000/car-battery.png",
            price: "$40 - $120",
            rating: 4.7
        },
        {
            id: 6,
            name: "AC & Cooling System Service",
            description: "Car AC repair, coolant replacement, and radiator maintenance for a comfortable drive.",
            icon: "https://img.icons8.com/ios-filled/50/000000/air-conditioning.png",
            price: "$60 - $250",
            rating: 4.5
        }
    ];

    return (
        <div className="max-w-[1440px] mx-auto w-full my-20">
            <h1 className="text-5xl font-semibold flex items-center justify-center italic">Services Offered</h1>
            <div>

            </div>
        </div>
    );
};

export default OfferedService;