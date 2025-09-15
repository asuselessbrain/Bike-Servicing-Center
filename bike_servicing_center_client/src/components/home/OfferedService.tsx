import { Button } from "../ui/button";
import Card from "../shared/Card";
import { services } from "@/json/services";
import ScrambleText from "../shared/TextScramble";

const OfferedService = () => {




    return (
        <div className="max-w-[1440px] mx-auto w-full my-20 px-4 sm:px-6 lg:px-8 2xl:px-0">
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold flex items-center justify-center italic"><ScrambleText text="Services Offered" /></h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-2 md:px-0 mt-20 mb-10">
                {
                    services.slice(0, 8).map((service, index) => <Card key={index} service={service} />)
                }


            </div>
            <div className="flex items-center justify-center">
                {
                    services.length > 8 ? <Button className="rounded">Show More</Button> : ""
                }
            </div>
        </div>
    );
};

export default OfferedService;