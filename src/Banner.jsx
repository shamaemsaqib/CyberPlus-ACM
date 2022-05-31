import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";

const Banner = ()=>{
    return (
        <React.StrictMode>
            <div style={{backgroundColor:"Black",
                    color:"White"}}>
                <Navbar />
                <Header/>
            </div>
            
        </React.StrictMode>
    )
}

export default Banner;