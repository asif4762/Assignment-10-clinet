import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const AddCraftItem = () => {

    const handleAddProduct = (event) => {
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
            customization_example
        }


        fetch('http://localhost:5500/all-arts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(info)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId)
        {
            Swal.fire({
                title: "Product Added Successfully",
                text: "You clicked the button!",
                icon: "success"
              });
              form.reset();
        }
        })
        
    };
    

    const {user} = useContext(AuthContext);
    console.log(user);

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
        <form onSubmit={handleAddProduct}>
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
                <option value="Yes" selected>
                  Yes
                </option>
                <option value="No" selected>
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
                defaultValue={user.email}
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
                defaultValue={user.displayName}
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

export default AddCraftItem;