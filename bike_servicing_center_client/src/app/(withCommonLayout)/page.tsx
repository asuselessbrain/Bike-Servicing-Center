import DiscountAndAbout from "@/components/home/DiscountAndAbout";
import FrequentAskedQuestion from "@/components/home/FrequentAskedQuestion";
import ImageSlider from "@/components/home/ImageSlider";
import OfferedService from "@/components/home/OfferedService";
import OurWorkingProcess from "@/components/home/OurWorkingProcess";
import PartsAndAccessories from "@/components/home/Parts&Accessories";
import Subscribe from "@/components/home/Subcribe";
import WhyChooseUse from "@/components/home/WhyChooseUse";
import Partners from "@/components/shared/Partners";

const HomePage = () => {
    return (
        <div>
            <ImageSlider />
            <WhyChooseUse />
            <PartsAndAccessories />
            <DiscountAndAbout />
            <OurWorkingProcess />
            <OfferedService />
            <Subscribe />
            <FrequentAskedQuestion />
            <Partners />
        </div>
    );
};

export default HomePage;