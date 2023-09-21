import { React, useEffect } from "react";
import { MdWbSunny, MdNightlight } from "react-icons/md";
import useDarkLight from "../../hook/useDarkLight";

function DarkLightToggle() {
    const { darkMode, setDarkMode } = useDarkLight();
    const element = document.documentElement;

    useEffect(() => {
        if (darkMode === false) {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else if (darkMode === true) {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.removeItem("theme");
        }
    }, [darkMode, element.classList]);

    return (
        <button
            onClick={() => setDarkMode(!darkMode)}
            type="button"
            className="p-2 grid place-items-center rounded-full bg-dark35 dark:bg-white35 fixed top-2/4 -translate-y-2/4 right-5 z-[999]"
        >
            {darkMode ? (
                <MdNightlight color="white" size={30} />
            ) : (
                <MdWbSunny color="white" size={30} />
            )}
        </button>
    );
}

export default DarkLightToggle;
