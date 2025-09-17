import ContactInfo from "@/components/contact/ContactInfo";
import PageHeader from "@/components/shared/PageHeader";

const Contact = () => {
    return (
        <div>
            <PageHeader text="Contact us" />
            <div className="max-w-[1440px] mx-auto">
                <ContactInfo />
            </div>
        </div>
    );
};

export default Contact;