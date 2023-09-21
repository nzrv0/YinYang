import React from "react";

// Icons
import { DiWordpress } from "react-icons/di";
import { PiDevicesFill } from "react-icons/pi";
import { TiInfinity, TiSpanner } from "react-icons/ti";
import { HiMiniRocketLaunch } from "react-icons/hi2";
import { AiFillMessage } from "react-icons/ai";

const Activity = [
    {
        Icon: <DiWordpress size={34} className="fill-black dark:fill-white" />,
        title: "Web Development",
        paragraph:
            "From static websites to dynamic single-page applications, I have experience with a wide range of web development strategies.",
    },
    {
        Icon: (
            <PiDevicesFill size={34} className="fill-black dark:fill-white" />
        ),
        title: "Responsive Design",
        paragraph:
            "Creating websites that look and function flawlessly across various devices is a top priority for me.",
    },

    {
        Icon: <TiInfinity size={34} className="fill-black dark:fill-white" />,
        title: "User-Centered Design",
        paragraph:
            "I prioritize user needs and preferences, ensuring that every design choice I make contributes to a seamless and enjoyable user experience.",
    },
    {
        Icon: (
            <HiMiniRocketLaunch
                size={34}
                className="fill-black dark:fill-white"
            />
        ),
        title: "Web Performance Optimization",
        paragraph:
            "I understand the significance of delivering fast-loading websites.",
    },
    {
        Icon: (
            <AiFillMessage size={34} className="fill-black dark:fill-white" />
        ),
        title: "Collaboration and Communication",
        paragraph: "Effective teamwork is crucial in every project's success.",
    },
    {
        Icon: <TiSpanner size={34} className="fill-black dark:fill-white" />,
        title: "Frontend Technologies",
        paragraph: "My toolkit includes mastery of HTML, CSS, and JavaScript.",
    },
];
function ActivityCard() {
    return (
        <>
            {Activity.map((item) => (
                <article className="flex flex-col gap-5 p-8 border-2 relative rounded-md bg-dark5 border-dark10 dark:bg-white5 dark:border-white10 ">
                    {item.Icon}
                    <h4 className="text-base font-bold tracking-[0.8px] text-black dark:text-white">
                        {item.title}
                    </h4>
                    <p className="text-xs font-normal tracking-[0.8px] text-dark65 dark:text-white65">
                        {item.paragraph}
                    </p>
                </article>
            ))}
        </>
    );
}

export default ActivityCard;
