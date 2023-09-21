import React from "react";

function Button({ First, Second, handleEvent }) {
    return (
        <button
            type="button"
            className="bg-transparent border-solid border-2 border-dark35  lg:px-8 lg:py-4 px-4 py-2 rounded-md lg:text-base text-sm font-semibold tracking-[1.6px]  transition-all duration-500 lg:hover:bg-black lg:hover:border-black lg:hover:text-white lg:hover:transition-all lg:hover:duration-500 dark:border-white35 dark:text-white dark:hover:bg-white dark:hover:text-black"
            onClick={handleEvent}
        >
            {First}
            <span className="stroke1 px-2 lg:text-base text-sm font-bold text-transparent ">
                {Second}
            </span>
        </button>
    );
}

export default Button;
