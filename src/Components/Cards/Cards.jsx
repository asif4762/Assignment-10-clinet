import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ item }) => {

  const {_id, imageURL, item_name, stockStatus, rating, price} = item

  return (
    <div className="card w-96 bg-base-100 shadow-xl cursor-pointer">
      <figure className="px-10 pt-10 w-full h-[300px] bg-cover">
        <img src={imageURL} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{item_name}</h2>
        <p><span className="font-bold mt-5">Stock Status : </span>{stockStatus}</p>
        <p><span className="font-bold">Rating : </span>{rating}</p>
        <p><span className="font-bold">Price : </span>{price}$</p>
        <div className="card-actions">
          <Link to={`/single-item/${_id}`}><button className="btn btn-primary">View Property</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Cards;
