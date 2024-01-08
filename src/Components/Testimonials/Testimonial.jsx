
const Testimonial = () => {
    return (
        <div className="bg-[#252734] py-20 md:py-20 lg:py-24 xl:py-[10.5rem]">
            <div className="container mx-auto">
                <div className="flex justify-end">
                    <div>
                        <p className='text-[1.12rem] font-light text-[#858792] font-poppins text-start'> ||  Testimonial
                        </p>
                        <h2 className=' text-[#fff] text-[4.37rem] font-bold mt-4 text-start'>Satisfied Clients Say</h2>
                    </div>
                </div>
                <div className="flex gap-10">
                    <div className="h-96 w-full bg-white"></div>
                    <div className="h-96 w-full bg-white"></div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;