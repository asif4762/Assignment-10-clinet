import { useEffect, useState } from "react";
import Cards from "../../Components/Cards/Cards";

const AllArtAndCraftItems = () => {
    const [allArts, setAllArts] = useState([]);
    const [myArts, setMyArts] = useState([]);
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5500/allCarts')
            .then(res => res.json())
            .then(data => setUserData(data))
            .catch(error => console.error('Error fetching user data:', error));
    }, []);

    useEffect(() => {
        fetch('http://localhost:5500/my-arts')
            .then(res => res.json())
            .then(data => setMyArts(data))
            .catch(error => console.error('Error fetching my arts:', error));
    }, []);

    useEffect(() => {
        if (userData.length > 0 && myArts.length > 0) {
            // Combine userData and myArts to update allArts
            setAllArts([...userData, ...myArts]);
        }
    }, [userData, myArts]);

    console.log(allArts)

    return (
        <div>
            <h1 className="text-center text-4xl font-bold mt-14">All Art And Craft Items</h1>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14">
            {
                allArts.map((item, index) => (
          <Cards key={index} item={item} />
        ))} 
            </div>
        </div>
    );
};

export default AllArtAndCraftItems;
