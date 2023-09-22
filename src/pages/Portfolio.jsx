/* eslint-disable react/no-array-index-key */
import { React, useState, useEffect } from "react";
import { motion } from "framer-motion";

// components and Works Data
import { PageTitle, WorksCard } from "../components";
// import { Works } from "../utils/constants";

import Work1 from "../assets/Works/Work1.jpg";
import Work2 from "../assets/Works/Work2.jpg";
import Work3 from "../assets/Works/Work3.jpg";
import Work4 from "../assets/Works/Work4.jpg";
import Work5 from "../assets/Works/Work5.jpg";
import Work6 from "../assets/Works/Work6.jpg";

const WorksList = ["All", "Web", "Design"];

const Works = [
    {
        Category: "Design",
        MainImage: Work1,
        SubImages: [Work2, Work3, Work4],
        Title: "Typing Project",
        Work: "Web Development",
        Year: "2023",
        Link: "#",
    },
    {
        Category: "Design",
        MainImage: Work2,
        SubImages: [Work2, Work3, Work4],
        Title: "Photography Project",
        Work: "Photography",
        Year: "2022",
        Link: "#",
    },
    {
        Category: "Design",
        MainImage: Work3,
        SubImages: [Work2, Work5, Work6],
        Title: "Design Project",
        Work: "Figma Design",
        Year: "2021",
        Link: "#",
    },
    {
        Category: "Web",
        MainImage: Work4,
        SubImages: [Work2, Work3, Work4],
        Title: "Typing Project",
        Work: "Web Development",
        Year: "2023",
        Link: "#",
    },
    {
        Category: "Web",
        MainImage: Work5,
        SubImages: [Work2, Work3, Work4],
        Title: "Photography Project",
        Work: "Photography",
        Year: "2022",
        Link: "#",
    },
    {
        Category: "Design",
        MainImage: Work6,
        SubImages: [Work2, Work3, Work4],
        Title: "Design Project",
        Work: "Figma Design",
        Year: "2021",
        Link: "#",
    },
];

function Portfolio() {
    const [activeList, setActiveList] = useState("All");
    const [data, setData] = useState([]);

    useEffect(() => {
        if (activeList !== "All") {
            setData(Works.filter((item) => item.Category === activeList));
        } else setData(Works);
    }, [activeList]);

    return (
        <motion.section>
            <PageTitle
                FirstTitle="My"
                SecondTitle="Works"
                BackgroundTitle="Portfolio"
            />
            <>
                <ul className="flex flex-row gap-10 items-center justify-center">
                    {WorksList.map((item, id) => (
                        <li
                            key={id}
                            className={`${
                                item === activeList
                                    ? "text-black dark:text-white"
                                    : "text-dark35 dark:text-white35"
                            } inline-block cursor-pointer relativefont-normal text-base`}
                            onClick={() => setActiveList(item)}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
                <div className="flex items-center justify-center my-5">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mx-5">
                        {data
                            ? data.map((item) => (
                                  <WorksCard
                                      Category={item.Category}
                                      MainImage={item.MainImage}
                                      SubImages={item.SubImages}
                                      Title={item.Title}
                                      Work={item.Work}
                                      Year={item.Year}
                                      Link={item.Link}
                                  />
                              ))
                            : "loading"}
                    </div>
                </div>
            </>
        </motion.section>
    );
}

export default Portfolio;
