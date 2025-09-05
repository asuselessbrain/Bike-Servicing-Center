import DiscountAndAbout from "@/components/home/DiscountAndAbout";
import ImageSlider from "@/components/home/ImageSlider";
import OfferedService from "@/components/home/OfferedService";
import WhyChooseUse from "@/components/home/WhyChooseUse";

const HomePage = () => {
    return (
        <div>
            <ImageSlider />
            <WhyChooseUse />
            <DiscountAndAbout />
            <OfferedService />
        </div>
    );
};

export default HomePage;