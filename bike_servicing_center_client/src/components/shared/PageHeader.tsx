const PageHeader = ({ text }: { text: string }) => {
    return (
        <div className="h-80 bg-cover bg-fixed  bg-no-repeat bg-bottom [background-image:linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('https://res.cloudinary.com/dwduymu1l/image/upload/v1757939769/mechanic-using-a-hex-key-or-allen-wrench-to-remove-motorcycle-rear-hydraulic-brake-pump-working-in-garage-maintenance-and-repair-motorcycle-concept-selective-focus-photo_yyaxpp.jpg')]">
                <h2 className="uppercase text-5xl font-semibold text-white flex items-center justify-center h-full">{text}</h2>
            </div>
    );
};

export default PageHeader;