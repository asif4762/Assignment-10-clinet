import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SingleItem = () => {

  const [userData, setUserData] = useState([]);

  const {id} = useParams();

  useEffect(() => {
    fetch(`https://assignemnt-10-server.vercel.app/all-arts/${id}`)
    .then(res => res.json())
    .then(data => setUserData(data))
  }, [id]);

  console.log(id);
  console.log(userData);

  return (
    <div>
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <img src={userData.imageURL} className="max-w-full rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-6xl font-bold">{userData.item_name}</h1>
      <p className="py-6 text-3xl">{userData.shortdescription}</p>
      <div className="flex justify-around mt-4">
      <p className="text-2xl"><span className="font-bold">Price: </span> {userData.price}$</p>
      <p className="text-2xl"><span className="font-bold">Rating: </span>{userData.rating}</p>
      </div>
      <div className="flex justify-around mt-4">
      <p className="text-2xl"><span className="font-bold">Processing Time: </span> {userData.processing_time}</p>
      <p className="text-2xl"><span className="font-bold">Sub Category: </span>{userData.subcategory_Name}</p>
      </div>
      <div className="flex justify-around mt-4">
      <p className="text-2xl"><span className="font-bold">Stock Status: </span> {userData.stockStatus}</p>
      <p className="text-2xl"><span className="font-bold">Sub Category: </span>{userData.customization_example}</p>
      </div>
      <div className="flex gap-4 mt-4">
      <Link className="w-full" to={`/single-item-update/${id}`}><button className="btn btn-primary w-full">Update</button></Link>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default SingleItem;
