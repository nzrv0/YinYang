import React from "react";

// Icons
import { MdOutlineWorkOutline, MdOutlineCalendarMonth } from "react-icons/md";
import { BiMapAlt } from "react-icons/bi";
import { LuGraduationCap } from "react-icons/lu";

const Info = [
    {
        Icon: (
            <MdOutlineCalendarMonth
                width={40}
                className="fill-black dark:fill-white"
            />
        ),
        title: "Age:",
        paragraph: "32",
    },
    {
        Icon: <LuGraduationCap className="stroke-black dark:stroke-white" />,
        title: "Degree:",
        paragraph: "Master",
    },
    {
        Icon: <BiMapAlt className="fill-black dark:fill-white" />,
        title: "Natinality:",
        paragraph: "USA",
    },
    {
        Icon: <MdOutlineWorkOutline className="fill-black dark:fill-white" />,
        title: "Freelance:",
        paragraph: "Available",
    },
];

function Information() {
    return (
        <div className="grid sm:grid-cols-2 place-items-center sm:place-items-start grid-cols-1 grid-rows-2 gap-x-28 gap-y-3 ">
            {Info.map((item) => (
                <span className="flex items-center gap-1">
                    {item.Icon}
                    <h4 className="text-base font-normal text-black dark:text-white">
                        {item.title}
                    </h4>
                    <p className="stroke1 text-transparent dark:stroke1white dark:text-transparent text-base font-extrabold dark:lg:selection:text-white35 tracking-wider">
                        {item.paragraph}
                    </p>
                </span>
            ))}
        </div>
    );
}

export default Information;
