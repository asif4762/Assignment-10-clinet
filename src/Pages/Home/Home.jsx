import { useEffect, useState } from "react";
import Cards from "../../Components/Cards/Cards";
import Banner from "../../Components/Banner/Banner";

const Home = () => {
const [userData, setUserData] = useState([]);
    useEffect(() => {
        fetch('https://assignemnt-10-server.vercel.app/all-arts')
        .then(res => res.json())
        .then(data => setUserData(data))
    }, [])



    console.log(userData);

    return (
        <div className="">
      <div className="max-w-[100%] lg:max-w-[80%] mx-auto mt-40 lg:mt-20">
        <Banner></Banner>
      </div>
      <h1 className="text-center text-4xl font-bold mt-14">Arts & Crafts</h1>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14">
        {userData.map((item, index) => (
          <Cards key={index} item={item} />
        ))}
      </div>
    </div>
    );
};

export default Home;