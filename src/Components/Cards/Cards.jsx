

const Cards = ({item}) => {

    const handleDelete = _id =>{
        console.log('Delete', _id);
    }


    return (
        <div className="card w-96 bg-base-100 shadow-xl cursor-pointer">
  <figure className="px-10 pt-10 w-full h-[300px] bg-cover">
    <img className="" src={item.imageURL} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{item.item_name}</h2>
    
    <p><span className="font-bold mt-5">Stock Status : </span>{item.stockStatus}</p>
    <p><span className="font-bold">Rating : </span>{item.rating}</p>
    <p><span className="font-bold">Price : </span>{item.price}$</p>
    
    <div className="card-actions">
      <button className="btn btn-primary">View Property</button>
      <button onClick={() => handleDelete(item._id)} className="btn btn-accent">Delete</button>
    </div>
  </div>
</div>
    );
};

export default Cards;