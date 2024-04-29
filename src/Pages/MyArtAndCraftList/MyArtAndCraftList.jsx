import { useEffect, useState } from "react";
import Cards from "../../Components/Cards/Cards";


const MyArtAndCraftList = () => {

    const [myArts, setMyArts] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5500/my-arts')
        .then(res => res.json())
        .then(data => setMyArts(data))
    }, [])
    console.log(myArts)

    return (
        <div>
        <h1 className="text-center text-4xl font-bold mt-14">My Ars & Crafts List</h1>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14">
            {
                myArts.map((item, index) => (
          <Cards key={index} item={item} />
        ))}
            </div>
                      
        </div>
    );
};

export default MyArtAndCraftList;