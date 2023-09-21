/* eslint-disable react/no-array-index-key */
import { React, useState, useEffect } from "react";
import { motion } from "framer-motion";

// components and Works Data
import { PageTitle, WorksCard } from "../components";
import { Works } from "../utils/constants";

const WorksList = ["All", "Web", "Design"];

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
