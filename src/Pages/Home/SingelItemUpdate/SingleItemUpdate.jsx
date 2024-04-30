import { useContext, useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const SingleItemUpdate = () => {

    const handleUpdateProduct = event =>{
        event.preventDefault();
        const form = event.target;
        const item_name = form.name.value;
        const subcategory_Name = form.subcategory.value;
        const imageURL = form.image.value;
        const price = form.price.value;
        const shortdescription = form.shortDescription.value;
        const processing_time = form.processingTime.value;
        const User_Email = user.email;
        const rating = form.rating.value;
        const stockStatus = form.brand.value;
        const User_Name = user.displayName;
        const customization_example = form.customization.value

        const info = {item_name,
            imageURL,
            price,
            shortdescription,
            processing_time,
            subcategory_Name,
            User_Email,
            rating,
            stockStatus,
            User_Name,
            customization_example,
        }

        console.log(info);
        fetch(`https://assignemnt-10-server.vercel.app/updateProduct/${id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body:JSON.stringify(info),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0)
        {
            Swal.fire({
                title: "Product Updated Successfully",
                text: "You clicked the button!",
                icon: "success"
              });
              form.reset();
        }
        })
    }

    const [userData, setUserData] = useState([]);
    const {id} = useParams();

    console.log('id' , id);

    const {user} = useContext(AuthContext);

    console.log('User Data', user);

    useEffect(() => {
        fetch(`https://assignemnt-10-server.vercel.app/all-arts/${id}`)
        .then(res => res.json())
        .then(data => setUserData(data))
      }, [id]);

    return (
        <div>
            <div className="gadgetContainer pt-10">
      <div className="shadow-lg p-5 border dark:bg-[#1a2641d5] rounded-xl">
        {/* Heading */}
        <div className="mt-5 mb-8">
          <p className="text-center text-3xl font-semibold">
            <span className="mr-3 text-[#FF497C]">
              <i className="bx bxs-alarm-add"></i>
            </span>
            <span className="dark:text-white">
              <span className="text-[#FF497C]">
                {/* {update ? "Update " : "Add "} */}
              </span>
              Your Product
            </span>
          </p>
        </div>
        {/* form */}
        <form onSubmit={handleUpdateProduct}>
          <div className="flex gap-8 ">
            <div className="flex-1">
              <label className="block mb-2 dark:text-white" htmlFor="name">
                Item Name
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Name"
                id="name"
                name="name"
                defaultValue={userData.item_name}
              />

              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="brand"
              >
                Customization
              </label>
              <select
                name="customization"
                id="customization"
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="select"
                defaultValue={userData.customization_example}
              >
                <option value="Test" selected>
                  Yes
                </option>
                <option value="Test2" selected>
                  No
                </option>
              </select>

              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="price"
              >
                Price
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Enter Price"
                id="Price"
                name="price"
                defaultValue={userData.price}
              />
              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="Processing Time"
              >
                Processing Time
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Processing Time"
                id="processingTime"
                name="processingTime"
                defaultValue={userData.processing_time}
              />
              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="Email"
              >
                Email
              </label>
              <input
                className="w-full font-bold p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder={userData.User_Email}
                id="email"
                name="email"
                readOnly
                defaultValue={userData.User_Email}
              />
              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="Email"
              >
                Email
              </label>
            </div>
            {/* Right side */}
            <div className="flex-1">
              <label className="block mb-2 dark:text-white" htmlFor="image">
                Image
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Enter Image URL"
                id="image"
                name="image"
                defaultValue={userData.imageURL}
              />
              <label className="block mb-2 mt-4 dark:text-white" htmlFor="type">
                SubCategory Name
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Enter type"
                id="subcategory"
                name="subcategory"
                defaultValue={userData.subcategory_Name}
              />

              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="rating"
              >
                Rating
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                maxLength={5}
                max={5}
                min={0}
                type="number"
                placeholder="Enter Rating"
                id="rating"
                name="rating"
                defaultValue={userData.rating}
              />
              <label
                className="block mt-4 mb-2 dark:text-white"
                htmlFor="brand"
              >
                Stock Status
              </label>
              <select
                name="brand"
                id="brand"
                className="w-full p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder="Select"
                defaultValue={userData.stockStatus}
              >
                <option value="In Stock" selected>
                  In Stock
                </option>
                <option value="Made To Order" selected>
                  Made to Order
                </option>
              </select>
              <label className="block mb-2 mt-4 dark:text-white" htmlFor="type">
                User Name
              </label>
              <input
                className="w-full text-black font-bold p-2 border rounded-md focus:outline-[#FF497C]"
                type="text"
                placeholder={userData.User_Name}
                id="type"
                name="userName"
                readOnly
                defaultValue={userData.User_Name}
              />
            </div>
          </div>

          <textarea className="textarea textarea-bordered w-full" name="shortDescription" placeholder="Short Description" defaultValue={userData.shortdescription
}></textarea>
          <input
            className="px-4 w-full py-2 mt-4 rounded hover:bg-[#ab3154]  bg-[#FF497C] duration-200 text-white cursor-pointer font-semibold"
            type="submit"
            value="Update Product"
          />
        </form>
      </div>
    </div>
        </div>
    );
};

export default SingleItemUpdate;