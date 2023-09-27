
import { useEffect, useState } from "react";
import { VictoryPie } from "victory-pie";


const Statistics = () => {

    const [countLength, setCountLength] = useState(0)

    useEffect(() => {
        const donationItem = JSON.parse(localStorage.getItem("donation"))
        if (donationItem) {
            setCountLength(donationItem.length)
        } else {
            setCountLength(0)
        }
    }, [])

    console.log(countLength)

    return (


        <div className="w-[1100px] h-[980px] ml-48">


            <VictoryPie
                width={300} 
                height={200}
                colorScale={["#00C49F", "#FF444A"]}
                data={[
                    { x: "Your Donation", y: countLength },
                    { x: "Total Donation", y: 12 },

                ]}
            />


        </div>
    );
};

export default Statistics;