import { useLoaderData } from "react-router-dom";
import Categories from "../../Components/Categories/Categories";
import Banner from "../../Components/Header/Banner/Banner";

const Home = () => {

const cards = useLoaderData()
// console.log(cards)

    return(
        <div className="">
        <Banner></Banner>
        <div className="py-10">
            
        <Categories cards={cards}></Categories>
        </div>
        </div>
    );
};

export default Home;