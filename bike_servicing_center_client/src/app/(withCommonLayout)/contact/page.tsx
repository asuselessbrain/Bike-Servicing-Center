import ContactInfo from "@/components/contact/ContactInfo";
import PageHeader from "@/components/shared/PageHeader";
import Image from "next/image";

const Contact = () => {
    return (
        <div>
            <PageHeader text="Contact us" />
            <div className="max-w-[1440px] mx-auto my-10 xl:my-0">
                <ContactInfo />

                <div className="flex items-center justify-between gap-10 mx-4 2xl:mx-0">
                    <Image src="https://res.cloudinary.com/dwduymu1l/image/upload/v1758033509/plumber-holding-clock_ay1iou.png" alt="" width={200} height={200} className="w-1/3 hidden lg:block"></Image>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-4 w-1/2 flex-1">
                        <div>
                            <label htmlFor="name">Name</label>
                            <input name="name" id="name" className="w-full border border-none bg-gray-100 px-4 rounded-none py-2 mt-4" placeholder="Your Name" />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input name="email" id="email" className="w-full border border-none bg-gray-100 px-4 rounded-none py-2 mt-4" placeholder="Your Email" />
                        </div>
                        <div>
                            <label htmlFor="subject">Subject</label>
                            <input name="subject" id="subject" className="w-full border border-none bg-gray-100 px-4 rounded-none py-2 mt-4" placeholder="Subject" />
                        </div>
                        <div>
                            <label htmlFor="phoneNumber">Phone Number</label>
                            <input name="phoneNumber" id="phoneNumber" className="w-full border border-none bg-gray-100 px-4 rounded-none py-2 mt-4" placeholder="Phone Number" />
                        </div>
                        <div className="md:col-span-2 ">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" cols={30} rows={4} className="w-full border border-none bg-gray-100 px-4 rounded-none py-2 mt-4" placeholder="Message" />
                        </div>
                        <input type="submit" className="btn bg-primary border-0 text-white md:col-span-2" value="Send Message" />
                    </form>
                </div>
            </div>
            <div className="relative w-full h-[80vh]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.0270471542563!2d90.38459988620967!3d22.465617884215526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30aacf2344aa4639%3A0x4d41f5c5e384f599!2sM.%20Keramot%20Ali%20Hall%20(MKAH)%2C%20PSTU!5e0!3m2!1sen!2sbd!4v1758080077567!5m2!1sen!2sbd"
                    className="absolute top-0 left-0 w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </div>
    );
};

export default Contact;