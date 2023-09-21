import { React, useState } from "react";
import { BsArrowUpShort } from "react-icons/bs";

function ScrollButton() {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 400) {
            setVisible(true);
        } else if (scrolled <= 400) {
            setVisible(false);
        }
    };
    window.addEventListener("scroll", toggleVisible);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            type="button"
            onClick={scrollToTop}
            className={`${
                visible === false ? "hidden" : "inline-block"
            } fixed bottom-6 right-6 w-10 h-10 bg-black dark:bg-white rounded-full grid place-items-center z-50`}
        >
            <BsArrowUpShort className="dark:fill-black fill-white" size={30} />
        </button>
    );
}

export default ScrollButton;
