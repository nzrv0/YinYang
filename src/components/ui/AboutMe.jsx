import React from "react";

// Components and Images
import Information from "./Information";
import Button from "./Button";
import MainImage from "../../assets/main2.jpg";

const Info = {
    Name: "Isabella",
    Surname: "Carter",
    Works: "Frontend Developer",
    Paragraph:
        "A frontend developer is a skilled professional responsible for crafting the user interface and user experience of websites and applications. Using a combination of programming languages such as HTML, CSS, and JavaScript, they transform design concepts into functional, interactive digital experiences. Frontend developers collaborate closely with designers and backend developers to ensure seamless integration of visual elements, responsive layouts, and efficient data handling. ",
};

function AboutMe() {
    return (
        <>
            <div className="w-60 h-60 xl:w-full xl:h-[700px] sm:w-96 sm:h-96 relative transition-all">
                <img
                    src={MainImage}
                    alt="main"
                    className="xl:p-0 p-1 w-full h-full object-cover xl:rounded-md rounded-full xl:border-none border-4 border-solid border-dark10 dark:border-white10"
                />
                <div className="w-full h-full xl:border-4 border-dark10 dark:border-white10 border-solid absolute bottom-10 right-10 rounded-lg -z-20" />
                <div className="w-[calc(100%-15px)] h-[calc(100%-15px)] absolute bottom-12 right-12 -z-20 xl:border-4 border-dark10 dark:border-white10 border-solid rounded-lg" />
            </div>
            <div className="flex flex-col xl:items-start items-center gap-y-5">
                <h2 className="flex items-center gap-4 font-bold sm:text-6xl text-4xl text-black dark:text-white ">
                    {Info.Name}
                    <span className="sm:stroke4 sm:text-transparent text-dark35 sm:dark:stroke4white sm:dark:text-transparent dark:text-white35 dark:sm:text-stroke4white text-h2-bold sm:text-6xl text-4xl text:font-extrabold font-bold tracking-[1.8px] dark:lg:selection:text-white35">
                        {Info.Surname}
                    </span>
                </h2>
                <h4 className="text-dark50 sm:text-base text-xs font-medium tracking-[2.4px] dark:text-white50">
                    {Info.Works}
                </h4>
                <hr className="h-[0.5px] w-full dark:opacity-20" />
                <p className="text-dark50 xl:text-base text-xs font-normal xl:text-start text-center dark:text-white50">
                    {Info.Paragraph}
                </p>
                <hr className="h-[0.5px] w-full dark:opacity-20" />
                <Information />
                <a href="/assets/Blank-Cv.pdf" download>
                    <Button First="Download" Second="CV" />
                </a>
            </div>
        </>
    );
}

export default AboutMe;
