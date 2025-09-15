import Image from "next/image";

const AppointmentPage = () => {
    return (
        <div>
            <div className="h-60 bg-cover bg-fixed  bg-no-repeat bg-center [background-image:linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('https://res.cloudinary.com/dwduymu1l/image/upload/v1757939769/mechanic-using-a-hex-key-or-allen-wrench-to-remove-motorcycle-rear-hydraulic-brake-pump-working-in-garage-maintenance-and-repair-motorcycle-concept-selective-focus-photo_yyaxpp.jpg')]">
                <h2 className="uppercase text-5xl font-semibold text-white flex items-center justify-center h-full">Appointment</h2>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-[1440px] mx-auto my-20 px-4 2xl:px-0">
                <Image src="https://res.cloudinary.com/dwduymu1l/image/upload/v1757942459/appoinment-man-bg_wx4j5z.png" className="flex-1 rounded hidden lg:block" alt="bike servicing man" width={200} height={200} />
                <div className="flex-1 text-center">
                    <h2 className="uppercase text-xl font-semibold md:text-3xl text-primary">request an <span className="text-black dark:text-white">appointment</span></h2>
                    <p className="my-8">Book your service appointment with ease! Fill out the form below to schedule a convenient time for your motorbike’s servicing and maintenance. Our expert team is ready to keep your ride safe, smooth, and road-ready.</p>
                    <form className="text-left">
                        <h4 className="text-xl text-gray-900 dark:text-gray-200 border-b pb-2 mb-4">Bike Details</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="text-gray-700 dark:text-gray-300" htmlFor="brand">Brand Name</label>
                                <select name="brand" id="brand" className="w-full border border-primary px-4 rounded py-2 mt-4" defaultValue="">
                                    <option value="" disabled>-- Select Your Bike Brand --</option>
                                    <option value="honda">Honda</option>
                                    <option value="yamaha">Yamaha</option>
                                    <option value="suzuki">Suzuki</option>
                                    <option value="bajaj">Bajaj</option>
                                    <option value="tvs">TVS</option>
                                    <option value="hero">Hero</option>
                                    <option value="ktm">KTM</option>
                                    <option value="royal-enfield">Royal Enfield</option>
                                    <option value="harley-davidson">Harley-Davidson</option>
                                    <option value="ducati">Ducati</option>
                                    <option value="kawasaki">Kawasaki</option>
                                    <option value="bmw">BMW Motorrad</option>
                                    <option value="aprilia">Aprilia</option>
                                    <option value="husqvarna">Husqvarna</option>
                                    <option value="vespa">Vespa</option>
                                </select>
                            </div>
                            <div>
                                <label className="text-gray-700 dark:text-gray-300" htmlFor="bikeModel">Bike Model</label>
                                <input name="bikeModel" id="bikeModel" className="w-full border border-primary px-4 rounded py-2 mt-4" placeholder="Enter Your Bike Model" />
                            </div>
                            <div className="col-span-2">
                                <label className="text-gray-700 dark:text-gray-300" htmlFor="reg_number">Bike Registration Number</label>
                                <input name="reg_number" id="reg_number" className="w-full border border-primary px-4 rounded py-2 mt-4" placeholder="Enter Your Bike Registration Number" />
                            </div>
                        </div>
                        <h4 className="text-xl text-gray-900 dark:text-gray-200 border-b pb-2 my-4">Service Details</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="text-gray-700 dark:text-gray-300" htmlFor="service_type">Service Type</label>
                                <select name="service_type" id="service_type" className="w-full border border-primary px-4 rounded py-2 mt-4" defaultValue="">
                                    <option value="" disabled>-- Select Service Type --</option>
                                    <option value="general-service">General Service</option>
                                    <option value="oil-change">Oil Change</option>
                                    <option value="engine-check">Engine Check</option>
                                    <option value="brake-service">Brake Service</option>
                                    <option value="tire-replacement">Tire Replacement</option>
                                    <option value="full-servicing">Full Servicing</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label className="text-gray-700 dark:text-gray-300" htmlFor="preferredDate">Preferred Date</label>
                                <input name="preferredDate" id="preferredDate" className="w-full border border-primary px-4 rounded py-2 mt-4" placeholder="Enter Your Bike Model" />
                            </div>
                            <div className="col-span-2">
                                <label className="text-gray-700 dark:text-gray-300" htmlFor="preferred_time">Preferred Time</label>
                                <select name="preferred_time" id="preferred_time" className="w-full border border-primary px-4 rounded py-2 mt-4" defaultValue="">
                                    <option value="">-- Select Preferred Time Slot --</option>
                                    <option value="09:00-10:00">09:00 AM – 10:00 AM</option>
                                    <option value="10:00-11:00">10:00 AM – 11:00 AM</option>
                                    <option value="11:00-12:00">11:00 AM – 12:00 PM</option>
                                    <option value="01:00-02:00">01:00 PM – 02:00 PM</option>
                                    <option value="02:00-03:00">02:00 PM – 03:00 PM</option>
                                    <option value="03:00-04:00">03:00 PM – 04:00 PM</option>
                                    <option value="04:00-05:00">04:00 PM – 05:00 PM</option>
                                    <option value="05:00-06:00">05:00 PM – 06:00 PM</option>
                                </select>
                            </div>
                        </div>
                        <div className="mt-4">
                            <label className="text-gray-700 dark:text-gray-300" htmlFor="additional_note">Preferred Time</label>
                            <textarea name="additional_note" id="additional_note" cols={30} rows={4} placeholder="Preferred Time" className="w-full border border-primary px-4 rounded py-2 mt-4"></textarea>
                        </div>
                        <h4 className="text-xl text-gray-900 dark:text-gray-200 border-b pb-2 my-4">Customer Information</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="text-gray-700 dark:text-gray-300" htmlFor="full_name">Full Name</label>
                                <input name="full_name" id="full_name" className="w-full border border-primary px-4 rounded py-2 mt-4" placeholder="Enter Your Full Name" />
                            </div>
                            <div>
                                <label className="text-gray-700 dark:text-gray-300" htmlFor="phone_number">Phone Number</label>
                                <input name="phone_number" id="phone_number" className="w-full border border-primary px-4 rounded py-2 mt-4" placeholder="Enter Your Phone Number" />
                            </div>
                            <div className="col-span-2">
                                <label className="text-gray-700 dark:text-gray-300" htmlFor="email">Email</label>
                                <input name="email" id="email" className="w-full border border-primary px-4 rounded py-2 mt-4" placeholder="Enter Your Email" />
                            </div>
                        </div>
                        <input type="submit" value="Submit Request" className="btn bg-primary border-0 text-white rounded w-full mt-6 hover:bg-primary/85" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AppointmentPage;