import { useEffect, useState } from "react";

import DonationCard from "./DonationCard";




const Donation = () => {

const [donation,setDonation] = useState([])

const [noFound,setNofound] = useState(false)

useEffect(() => {

    const donationItem = JSON.parse(localStorage.getItem("donation"))

    if(donationItem){
        setDonation(donationItem)
    }
    else{
        setNofound('No Data Found')
    }

},[])

    return(
        <div>
            {noFound? <p className="h-[80vh] flex justify-center items-center text-xl font-semibold">{noFound}</p>
             :
              <div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">

                    {donation.map(card => <DonationCard key={card.id } card={card} ></DonationCard> )}

                </div>

              </div> }
        </div>
    );
};

export default Donation;