

const Banner = () => {
    return (
        <div className="">
            
            <div className=""  >
                <div className="hero-overlay opacity-20  ">
                    <img src="https://i.ibb.co/tPz3tK9/Rectangle-4281.png?fbclid=IwAR2UuT3G7C79zeVVmVg7KqIMgoEFdLa13Xk-DHSNGOaXi-dvP9NzMNmfqR8" alt="banner_image" />
                </div>
                <div className="hero-content text-center absolute bottom-[40%] left-[40%]">
                    <div className="max-w-md">
                    <h1 className="text-xl font-bold text-[#0B0B0B] pb-4">I Grow By Helping People In Need</h1>
                        <div className="join">
                            <input className="input input-bordered join-item" placeholder="Search here...." />
                            <button className="btn join-item rounded-r-xl bg-[#FF444A] text-white capitalize">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;