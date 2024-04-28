import { useEffect } from "react";
import UseData from "../../Components/Navbar/Hooks/UseData";

const Home = () => {

    const { data } = UseData();

    console.log(data);

    useEffect(() => {
        fetch('http://localhost:5500/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(data[0])
        })
        .then(res => res.json())
        .then(dat => {
            console.log(dat);
        })
    }, [data])

    return (
        <div>
            <h1>I am Home</h1>            
        </div>
    );
};

export default Home;