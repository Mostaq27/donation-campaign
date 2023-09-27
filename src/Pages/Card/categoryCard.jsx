import swal from 'sweetalert';


const CategoryCard = ({ card }) => {

    const { id, image, category, title, category_bg, card_bg, text_color, description, price } = card || {}

    const handleAddToDonation = () => {


        const addedDonationArray = [];

        const donationItem = JSON.parse(localStorage.getItem('donation'))

        if (!donationItem) {
            addedDonationArray.push(card)
            localStorage.setItem('donation', JSON.stringify(addedDonationArray))
            swal("Good job!", "Successfully donated !", "success");
        }
        else {

            const isExits = donationItem.find(card => card.id == id)

            if (!isExits) {

                addedDonationArray.push(...donationItem, card)
                localStorage.setItem('donation', JSON.stringify(addedDonationArray))
                swal("Good job!", "Successfully donated!", "success");
            }
            else {
                swal("Error!", "already exits!", "error");
            }

        }
    }

    return (

        <div>

            <div className="mx-auto w-[1320px] h-[700px]  absolute">
                <div className="relative mb-12 flex flex-col overflow-hidden rounded-xl bg-white bg-clip-border shadow-md">
                    <img
                        alt="category_image"
                        className="h-[32rem] w-full object-cover object-center"
                        src={image}
                    />
                </div>
                <div className="opacity-25 h-[100px] bg-gray-900 w-[1320px] absolute right-0 bottom-[185px] rounded-xl">      </div>
                <div className=" relative bottom-32 right-[-40px]">
                    <button onClick={handleAddToDonation}
                        className="capitalize middle none center rounded-lg py-3 px-6 font-sans text-xs font-bold text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        data-ripple-light="true" style={{ backgroundColor: text_color }}> Donate ${price}</button>
                    
                </div>
                <div className="mb-10 pb-10 absolute -bottom-[100px]">

                <h2 className="mb-2 block font-sans text-4xl font-bold leading-[1.3] tracking-normal  antialiased text-black">
                    {title}
                </h2>
                <p className="block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased pb-14">
                    {description}
                </p>

                </div>
            </div>
        </div>
    );
};
export default CategoryCard;