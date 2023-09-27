import { Link } from "react-router-dom";


const Category = ({ card }) => {
    const { id, image, category, title, category_bg, card_bg, text_color, description, price } = card || {}

    return (
        <div className="">
            <Link to={`/singleCard/${id}`}>
                <div className="relative flex max-w-[24rem] w-[312px] h-[283px] flex-col rounded-xl  bg-clip-border shadow-md" style={{ backgroundColor: card_bg }}>
                    <div className="relative m-0 overflow-hidden w-[312px] h-[194px] rounded-none bg-transparent bg-clip-border  shadow-none">
                        <img
                            src={image}
                            alt="ui/ux review check"
                        />
                    </div>
                    <div className="p-6">
                        <h4 className="block font-sans text-xl font-semibold leading-snug tracking-normal  antialiased rounded-xl w-[15vh] p-2" style={{ backgroundColor: category_bg, color: text_color }}>
                            {category}
                        </h4>
                        <p className="mt-3 block font-sans text-xl font-bold leading-relaxed  antialiased" style={{ color: text_color }}>
                            {title}
                        </p>
                    </div>

                </div>
            </Link>
        </div>

    );
};

export default Category;