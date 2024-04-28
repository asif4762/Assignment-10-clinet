import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";

const Root = () => {
    return (
        <div className="max-w-[90%] mx-auto mt-7">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;