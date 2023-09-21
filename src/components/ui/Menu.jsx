// Dependecis for React App
import React from "react";
import { NavLink } from "react-router-dom";

function Menu({ NavList, active, setActive }) {
    return (
        <div className="w-screen h-screen fixed top-0 left-0 bg-white xl:hidden z-[666] dark:bg-black">
            <nav className="h-full grid gap-y-6 place-items-center content-center ">
                {NavList.map((item) => (
                    <NavLink
                        className="font-extrabold text-2xl stroke1 text-transparent dark:stroke1white "
                        to={item.link}
                        key={item.title}
                        onClick={() => setActive(!active)}
                    >
                        {item.title}
                    </NavLink>
                ))}
            </nav>
        </div>
    );
}

export default Menu;
