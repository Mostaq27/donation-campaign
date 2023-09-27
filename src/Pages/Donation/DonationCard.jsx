


const DonationCard = ({ card }) => {

    const { id, image, category, title, category_bg, card_bg, text_color, description, price } = card || {};
    console.log(card)

    return (
        <div className="">


            <div className="relative flex w-full max-w-[48rem] flex-row rounded-lg bg-clip-border  shadow-md" style={{backgroundColor:card_bg}}>
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none  bg-clip-border ">
                    <img
                        src={image}
                        alt="image"
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <h6 className="mb-4 block font-sans text-xl font-semibold capitalize leading-relaxed tracking-normal  antialiased w-[15vh] p-2 rounded-lg" style={{backgroundColor:category_bg,color:text_color}}>
                        {category}
                    </h6>
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-black antialiased">
                        {title}
                    </h4>
                    <p className="mb-8 block font-sans text-xl font-bold leading-relaxed  antialiased" style={{color:text_color}}>
                        $ {price}
                    </p>
                    <a className="inline-block" href="#">
                        <button
                            className=" capitalize flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-lg font-semibold text-white   transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" style={{backgroundColor:text_color}}
                            type="button"
                        >
                            View Details
                            
                        </button>
                    </a>
                </div>
            </div>

        </div>
    );
};

export default DonationCard;