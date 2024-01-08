import { FaPhoneAlt } from "react-icons/fa";

const Footer1 = () => {
    return (
        <div className="bg-[#252734] ">
            <div className="container py-20 md:py-20 lg:py-24 xl:py-[10.5rem]">
                <div>
                    <p className='text-[1.12rem] font-light text-[#858792] font-poppins text-center'> ||  Get Latest Updates
                    </p>
                    <h2 className=' text-[#fff] text-[4.37rem] font-bold mt-4 text-center'>Subscribe For Newsletter</h2>
                </div>
                <div className="flex items-center justify-center gap-6 mt-[7rem] pb-20 md:pb-20 lg:pb-24 xl:pb-[10.5rem]">
                    <input type="text" placeholder="Enter Email..." className="input h-16 transition-all duration-500 bg-transparent border-[0.15rem] border-[#3b3d49] hover:border-white w-full rounded-full lg:w-[37.5rem]" />

                    <button className="hover:bg-[#2A2C39] transition-all duration-500 text-[1.12rem] text-white h-16 w-[11.31rem] rounded-[40rem] border-[0.15rem] border-[#3b3d49] hover:border-white">Subscribe Now</button>
                </div>
                <div className="flex justify-between">
                    <div>
                        <button className=" p-4 md:p-6 lg:p-8 xl:p-10 rounded-full border-[0.1rem] active:bg-slate-50 text-white active:text-black border-[#3b3d49]"><FaPhoneAlt /></button>
                        <p>019</p>
                    </div>
                    <div></div>
                    <div></div>

                </div>
            </div>
        </div>
    );
};

export default Footer1;