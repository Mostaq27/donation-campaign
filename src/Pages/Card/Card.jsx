import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CategoryCard from "./categoryCard";



const Card = () => {

    const [card, setCard] = useState({})
    const { id } = useParams()


    const cards = useLoaderData()


    useEffect(() => {
        const findcard = cards?.find(card => card.id == id)
        setCard(findcard)
    }, [id, cards])

    // console.log(card)F
    return (
        <div className="p-10">
            <CategoryCard card={card}></CategoryCard>
        </div>
    );
};
export default Card;