// Dependecis for React App
import { React, useState } from "react";
import { NavLink } from "react-router-dom";
// Icons
import { PiListBold } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";

// Components
import Menu from "./Menu";

const Name = "Isabella";

const NavList = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Portfolio", link: "/portfolio" },
    { title: "Blog", link: "/blog" },
    { title: "Contact", link: "/contact" },
];

function Navbar() {
    const [active, setActive] = useState(false);

    return (
        <header className="container w-full px-6 py-4 flex justify-between items-center xl:px-24 transition-all">
            <NavLink
                to="/"
                className="text-2xl font-black text-transparent stroke2 tracking-wider selection:text-dark35 active:text-dark35"
            >
                {Name}
            </NavLink>
            <nav className="hidden xl:flex xl:items-center xl:gap-10">
                {NavList.map((item) => (
                    <NavLink
                        className={({ isActive }) =>
                            isActive
                                ? "text-black dark:text-white text-base font-black tracking-[2px]"
                                : "text-base font-black text-transparent tracking-[2px] stroke1"
                        }
                        to={item.link}
                        key={item.title}
                        onClick={() => setActive(false)}
                    >
                        {item.title}
                    </NavLink>
                ))}
            </nav>
            <button
                type="button"
                className="xl:hidden inline-block stroke2"
                onClick={() => setActive(!active)}
            >
                {active ? (
                    <IoMdClose
                        size={36}
                        stroke="#a6a6a6"
                        strokeWidth={20}
                        className="fixed top-2 right-6 z-[999]"
                    />
                ) : (
                    <PiListBold size={36} stroke="#a6a6a6" strokeWidth={12} />
                )}
            </button>
            {active && (
                <Menu NavList={NavList} active={active} setActive={setActive} />
            )}
        </header>
    );
}

export default Navbar;
