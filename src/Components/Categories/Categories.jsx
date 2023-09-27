import Category from "../Category/Category";


const Categories = ({ cards }) => {
    // console.log(cards)
    return (
        <div className="py-10">
          

            <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    cards?.map(card => <Category key={card.id} card={card}></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;