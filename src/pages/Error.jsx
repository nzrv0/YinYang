import React from "react";
import { NavLink } from "react-router-dom";

// components
import { Button } from "../components";

function Error() {
    return (
        <div className="min-h-0 h-[calc(100vh-69px)] flex flex-col items-center justify-center gap-2 transition-all">
            <h1 className="text-center sm:text-9xl text-8xl font-extrabold stroke6 text-transparent">
                404
            </h1>
            <p className="text-xl text-black font-medium mb-4">
                Page Not Found
            </p>
            <NavLink to="/">
                <Button First="Back To" Second="Home" />
            </NavLink>
        </div>
    );
}

export default Error;
