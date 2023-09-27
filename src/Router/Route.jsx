import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home";
import Favorites from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import ErrorPage from "../Pages/ErrorPage/Error Page";
import Card from "../Pages/Card/Card";
import Donation from "../Pages/Donation/Donation";

const  myCreatedRoute = createBrowserRouter([
    {



        path : "/",
        element :<MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children : [
            {
                path : "/",
                element : <Home></Home>,
                loader : () => fetch('/donation.json')
            },
               {
                path : "/donation",
                element : <Donation></Donation>
               } ,
               {
                path : "/statistics",
                element :  <Statistics></Statistics>
               } ,
               {
                path: "/singleCard/:id",
                element: <Card></Card>,
                loader: ()=>fetch('/donation.json')
               }
        ]
    }
])

export default myCreatedRoute;