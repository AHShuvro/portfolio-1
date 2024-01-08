import './Header1.css'


const Header1 = () => {
    return (
        <>




            <div className='bg-[#252734]  sticky top-0 z-50'>
                <div className='container'>
                    <div className="navbar  font-poppins">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    <li className=' text-[1.12rem] leading-[7.5rem] text-[#858792]'>Home</li>
                                    <li className=' text-[1.12rem] leading-[7.5rem] text-[#858792]'>Service</li>
                                    <li className=' text-[1.12rem] leading-[7.5rem] text-[#858792]'>Blog</li>
                                    <li className=' text-[1.12rem] leading-[7.5rem] text-[#858792]'>Pages</li>
                                    <li className=' text-[1.12rem] leading-[7.5rem] text-[#858792]'>Contact</li>
                                </ul>
                            </div>
                            <a className=""><img className='w-[4.68rem]' src="assets/img/logo.webp" alt="" /></a>
                        </div>
                        <div className="hidden lg:flex">
                            <ul className='flex gap-12'>
                                <li className=' text-[1.12rem] leading-[7.5rem] text-[#858792]'>Home</li>
                                <li className=' text-[1.12rem] leading-[7.5rem] text-[#858792]'>Service</li>
                                <li className=' text-[1.12rem] leading-[7.5rem] text-[#858792]'>Blog</li>
                                <li className=' text-[1.12rem] leading-[7.5rem] text-[#858792]'>Pages</li>
                                <li className=' text-[1.12rem] leading-[7.5rem] text-[#858792]'>Contact</li>
                            </ul>
                        </div>
                        <div className="navbar-end">
                            <button className="hover:bg-[#2A2C39] transition-all duration-500 text-[1.12rem] text-white h-16 w-[11.31rem] rounded-[40rem] border-[0.062rem] border-[#3b3d49]">Hire me </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header1;