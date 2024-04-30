import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const MyArtAndCraftList = () => {
    const { user } = useContext(AuthContext);
    const [myArts, setMyArts] = useState([]);
    const [control, setControl] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5500/myArts/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyArts(data); 
                console.log("My Arts:", data); 
            })
            .catch(error => console.error('Error fetching my arts:', error));
    }, [myArts, control]);
    
    const handleDelete = id => {
        fetch(`http://localhost:5500/delete/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            console.log("Delete Response:", data);
            if(data.deletedCount > 0)
            {
                setControl(prev => !prev); // Toggle the control state
            }
        })
        .catch(error => console.error('Error deleting item:', error));
    }
    
    console.log(user.email);

    return (
        <div>
            <h1 className="text-center text-4xl font-bold mt-14">My Ars & Crafts List</h1>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14">
                {myArts.map(p => (
                    <div key={p._id} className="card w-96 bg-base-100 shadow-xl cursor-pointer">
                        <figure className="px-10 pt-10 w-full h-[300px] bg-cover">
                            <img src={p.imageURL} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{p.item_name}</h2>
                            <p><span className="font-bold mt-5">Stock Status : </span>{p.stockStatus}</p>
                            <p><span className="font-bold">Rating : </span>{p.rating}</p>
                            <p><span className="font-bold">Price : </span>{p.price}$</p>
                            <div className="card-actions">
                                <Link to={`/single-item/${p._id}`}><button className="btn btn-primary">View Property</button></Link>
                                <button onClick={() => handleDelete(p._id)} className="btn btn-secondary w-1/2">Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyArtAndCraftList;
