import { services } from "@/json/services";
import Card2 from "../../../components/shared/Card2";
import Pagination from '@mui/material/Pagination';
import Searching from "@/components/services/Searching";
import Sorting from "@/components/services/Sorting";
import PageHeader from "@/components/shared/PageHeader";

const Services = () => {
    return (
        <div>
            <PageHeader text="Services" />
            <div className="max-w-[1440px] mx-auto my-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mx-6 lg:mx-0">
                    
                    <Searching />
                    {/* <Filtering /> */}
                    <Sorting />

                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-2 md:px-0 mt-10 mb-10 mx-6 2xl:mx-0">
                    {
                        services.map((service, index) => <Card2 key={index} service={service} />)
                    }
                </div>
                <div className="flex items-center justify-center my-20">
                    <Pagination count={10} variant="outlined" color="primary" shape="rounded" />
                </div>
            </div>
        </div>
    );
};

export default Services;