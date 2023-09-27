import { useEffect, useState } from "react";

import DonationCard from "./DonationCard";




const Donation = () => {

const [donation,setDonation] = useState([]);

const [noFound,setNofound] = useState(false);

const [isShow,setIsShow] = useState(false);

useEffect(() => {

    const donationItem = JSON.parse(localStorage.getItem("donation"))

    if(donationItem){
        setDonation(donationItem)
    }
    else{
        setNofound('No Data Found')
    }

},[])

console.log(isShow)
    return(
        <div>
            {noFound? <p className="h-[80vh] flex justify-center items-center text-xl font-semibold">{noFound}</p>
             :
              <div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">

                    {
                        isShow ? donation.map((card) => (
                        <DonationCard key={card.id } card={card} ></DonationCard> ))
                        :
                        donation.slice(0,4).map((card) => (
                            <DonationCard key={card.id} card={card}></DonationCard>
                        ))
                    }

                </div>

               {

                donation.length > 4  &&  <button onClick={() => setIsShow(!isShow)} className={`px-5 my-20 bg-[#009444] text-white text-lg font-medium block mx-auto rounded-lg  
                ${isShow  &&  "hidden"} `}>See All</button>

               }

              </div> }
        </div>
    );
};

export default Donation;