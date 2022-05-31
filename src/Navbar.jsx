import React from "react";
import Logo from "./Logo";
import Navlinks from "./Navlinks";
import Login from "./Login";

const Navbar = ()=>{
    return (
        <React.StrictMode>
            <Logo/>
            <Navlinks/>
            <Login/>
        </React.StrictMode>
    );
}

export default Navbar;