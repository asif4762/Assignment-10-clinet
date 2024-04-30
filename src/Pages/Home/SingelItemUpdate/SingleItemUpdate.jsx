import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const SingleItemUpdate = () => {
    const [user, setUserData] = useState([]);
    const {id} = useParams();

    console.log('id' , id);

    console.log('User Data', user);

    useEffect(() => {
        fetch(`http://localhost:5500/all-arts/${id}`)
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
        <form>
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
                defaultValue={'asif'}
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
                placeholder={user.email}
                id="email"
                name="email"
                readOnly
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
                placeholder={user.displayName}
                id="type"
                name="userName"
                readOnly
              />
            </div>
          </div>

          <textarea className="textarea textarea-bordered w-full" name="shortDescription" placeholder="Short Description"></textarea>
          <input
            className="px-4 w-full py-2 mt-4 rounded hover:bg-[#ab3154]  bg-[#FF497C] duration-200 text-white cursor-pointer font-semibold"
            type="submit"
            value="Add Product"
          />
        </form>
      </div>
    </div>
        </div>
    );
};

export default SingleItemUpdate;