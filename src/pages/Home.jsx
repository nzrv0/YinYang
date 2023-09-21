import React from "react";
import { NavLink } from "react-router-dom";
import { easeInOut, motion } from "framer-motion";

// Components and Images
import MainImage from "../assets/main.jpg";
import { Button, SocialIcons } from "../components";

const WhoIam = {
    Name: "Isabella",
    Works: "FRONTEND DEVELOPER",
    AboutMe:
        "Frontend developer dedicated to shaping engaging digital experiences. Proficient in HTML, CSS, and JavaScript, I fuse design with functionality to craft user-friendly websites.",
};

function Home() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: easeInOut }}
            className="min-h-full sm:min-h-0 h-[calc(100vh-69px)] flex flex-col items-center gap-10 justify-center lg:grid lg:grid-cols-2 lg:items-center lg:gap-20 overflow-hidden"
        >
            {/* First Section of Home Page */}
            <div className="w-48 h-48 lg:w-full lg:after:content-[''] lg:after:w-[50vw] lg:after:h-screen lg:after:fixed lg:after:top-0 lg:after:left-0">
                <img
                    alt="main"
                    src={MainImage}
                    className="object-cover w-full h-full lg:w-[50vw] lg:h-screen lg:absolute bottom-0 left-0 rounded-full lg:rounded-none "
                />
                <div className="lg:flex hidden items-center gap-3 absolute bottom-4 left-4 ">
                    <SocialIcons Color="white" />
                </div>
            </div>
            {/* Second Section of Home Page */}
            <div className="lg:inline-block flex flex-col items-center gap-2">
                <h4 className="font-semibold text-black lg:text-3xl sm:text-2xl text-xl dark:text-white">
                    HI THERE!
                </h4>
                <h2 className="my-2 font-bold text-black lg:text-7xl sm:text-6xl text-5xl tracking-[4px] dark:text-white">
                    I&apos;M
                    <span className="lg:dark:stroke6white lg:dark:text-transparent dark:text-white35 pl-[10px] lg:font-black sm:font-bold font-semibold lg:text-7xl sm:text-6xl text-5xl tracking-[4px] lg:stroke6 text-dark35 dark:lg:selection:text-white35">
                        {WhoIam.Name}
                    </span>
                </h2>
                <span className="dark:text-black dark:bg-white bg-black lg:px-4 lg:py-2 sm:px-4 sm:py-2 py-1 px-2 rounded-md font-semibold sm:text-xs text-[10px] text-white tracking-[2px]">
                    {WhoIam.Works}
                </span>
                <p className="dark:text-white50 max-w-lg lg:my-8 sm:my-4 my-6 lg:p-0 sm:p-0 px-1 lg:text-sm sm:text-sm text-xs text-dark65 lg:text-left text-center tracking-[2.4px]">
                    {WhoIam.AboutMe}
                </p>
                <NavLink to="/about">
                    <Button First="MORE ABOUT" Second="ME" />
                </NavLink>
            </div>
        </motion.section>
    );
}

export default Home;
