
const BlogPost = () => {
    return (
        <>
            <div className="container mb-20 md:mb-20 lg:mb-24 xl:mb-[10.5rem]">
                <div className="">
                    <p className='text-[1.12rem] font-light text-[#858792] font-poppins text-center'> ||  Blog Post
                    </p>
                    <h2 className=' text-[#fff] text-[4.37rem] font-bold mt-4 text-center'>Latest Tips & Tricks</h2>
                </div>
                <div className="text-white">
                    <div className="flex items-center justify-between">
                        <img src="assets/img/blog-feed-img-1.webp" alt="" />
                        <div>
                            <p>Business - <span>07 February, 2021</span></p>
                            <h3>{`Don't`} wait until you officially started business to line these up.</h3>
                        </div>
                        <button>Read More {`>>`}</button>
                    </div>
                    <div className="flex items-center justify-between">
                        <img src="assets/img/blog-feed-img-2.webp" alt="" />
                        <div>
                            <p>Business - <span>07 February, 2021</span></p>
                            <h3>{`Don't`} wait until you officially started business to line these up.</h3>
                        </div>
                        <button>Read More {`>>`}</button>
                    </div>
                    <div className="flex items-center justify-between">
                        <img src="assets/img/blog-feed-img-3.webp" alt="" />
                        <div>
                            <p>Business - <span>07 February, 2021</span></p>
                            <h3>{`Don't`} wait until you officially started business to line these up.</h3>
                        </div>
                        <button>Read More {`>>`}</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogPost;