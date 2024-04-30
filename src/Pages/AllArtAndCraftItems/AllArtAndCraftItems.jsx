import { useEffect, useState } from "react";
import Cards from "../../Components/Cards/Cards";
import { set } from "firebase/database";

const AllArtAndCraftItems = () => {
    const [allArts, setAllArts] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5500/all-arts')
        .then(res => res.json())
        .then(data => setAllArts(data))
    })

    return (
        <div>
            <h1 className="text-center text-4xl font-bold mt-14">All Art And Craft Items</h1>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14">
                {allArts.map((item, index) => (
                    <Cards key={index} item={item} />
                ))} 
            </div>
        </div>
    );
};

export default AllArtAndCraftItems;
