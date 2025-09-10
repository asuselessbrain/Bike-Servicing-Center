import Card from "../shared/Card";
import { Button } from "../ui/button";

const PartsAndAccessories = () => {

    const products = [
        {
            id: 1,
            name: "Racing Helmet X1",
            category: "Helmet",
            description: "Lightweight, aerodynamic helmet for riders.",
            price: "$120",
            discount: 15,
            image: "https://res.cloudinary.com/dwduymu1l/image/upload/v1757481358/0844-1435-03-T9S_900x_yao1x3.webp"
        },
        {
            id: 2,
            name: "All-Terrain Tire 2000",
            category: "Tire",
            description: "Durable tire for city and off-road rides.",
            price: "$80",
            discount: 10,
            image: "https://res.cloudinary.com/dwduymu1l/image/upload/v1757481487/tire_mohave_highway-terrain_bsw_angle_Medium_yjuzsg.jpg"
        },
        {
            id: 3,
            name: "Synthetic Engine Oil 5W30",
            category: "Oil",
            description: "Keeps your engine running smoothly.",
            price: "$25",
            discount: 20,
            image: "https://res.cloudinary.com/dwduymu1l/image/upload/v1757481540/Mobil-1-Extended-Performance-Full-Synthetic-Motor-Oil-5W-30_dsaggf.jpg"
        },
        {
            id: 4,
            name: "Chain Lubricant Pro",
            category: "Accessories",
            description: "Reduces friction and extends chain life.",
            price: "$15",
            discount: 10,
            image: "https://res.cloudinary.com/dwduymu1l/image/upload/v1757481622/610f9e827872e17db262996dd2df1e07.jpg_720x720q80_rp9g51.jpg"
        },
        {
            id: 5,
            name: "Motorcycle Gloves Grip",
            category: "Accessories",
            description: "Comfortable gloves with reinforced grip.",
            price: "$35",
            discount: 15,
            image: "https://res.cloudinary.com/dwduymu1l/image/upload/v1757481696/81wL6EZcCkL._UF894_1000_QL80__lcgztk.jpg"
        },
        {
            id: 6,
            name: "LED Headlight 12V",
            category: "Lighting",
            description: "Bright LED headlight for better night rides.",
            price: "$60",
            discount: 25,
            image: "https://res.cloudinary.com/dwduymu1l/image/upload/v1757481743/61l5UO1lCGL_s7wm4p.jpg"
        },
        {
            id: 7,
            name: "Sports Exhaust Pipe",
            category: "Accessories",
            description: "Improves performance and sound of your bike.",
            price: "$150",
            discount: 20,
            image: "https://res.cloudinary.com/dwduymu1l/image/upload/v1757481793/audi-s3-type-8v-sport-exhaust_p2kujj.jpg"
        },
        {
            id: 8,
            name: "Rearview Mirrors Set",
            category: "Accessories",
            description: "Wide-angle mirrors for better visibility.",
            price: "$40",
            discount: 10,
            image: "https://res.cloudinary.com/dwduymu1l/image/upload/v1757481844/sp0854_rueckspiegel-sxt_monster_1_kytu6l.jpg"
        },
        {
            id: 9,
            name: "Gel Seat Cushion",
            category: "Accessories",
            description: "Extra comfort for long rides.",
            price: "$30",
            discount: 15,
            image: "https://www.istockphoto.com/photos/motorbike-gloves"
        },
        {
            id: 10,
            name: "Fuel Filter Premium",
            category: "Accessories",
            description: "Protects engine from dirt and debris.",
            price: "$20",
            discount: 10,
            image: "https://www.istockphoto.com/photos/motorcycle-oil"
        }
    ];


    return (
        <section className="max-w-[1440px] mx-auto my-20">
            <div className="text-center my-6 space-y-6">
                <h1 className="text-3xl md:text-4xl lg:text-5xl flex items-center justify-center italic">Genuine Spare Parts & Accessories</h1>
                <p className="text-gray-700 dark:text-gray-200">High-quality parts and accessories to keep your bike safe, smooth, and performing at its best – all in one place!</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-2 md:px-0 mt-20 mb-10">
                {
                    products.slice(0, 8).map((product, index) => <Card key={index} service={product} />)
                }


            </div>
            <div className="flex items-center justify-center">
                {
                    products.length > 8 ? <Button className="rounded">Show More</Button> : ""
                }
            </div>
        </section>
    );
};

export default PartsAndAccessories;