import React from "react";
import Lottie from "lottie-react";

// Light Wave and Dark Wave Animations
import wave from "../../assets/wave-black.json";
import waveLight from "../../assets/wave-white.json";

import useDarkLight from "../../hook/useDarkLight";

const Skills = [
    { Name: "HTML", Percent: 0 },
    { Name: "CSS", Percent: 0 },
    { Name: "JavaScript", Percent: 50 },
    { Name: "Python", Percent: 20 },
    { Name: "Photoshop", Percent: 80 },
    { Name: "Figma", Percent: 0 },
    { Name: "After Effects", Percent: 36 },
    { Name: "Wordpress", Percent: 60 },
];

function SkillsCard() {
    const { darkMode } = useDarkLight();
    return (
        <>
            {Skills.map((item) => (
                <article>
                    <div className="w-28 h-28 relative">
                        <div className="w-28 h-28 rounded-full overflow-hidden relative bg-dark5 border-2">
                            <div className="realtive w-full h-full">
                                {item.Percent <= 35 && item.Percent >= 0 && (
                                    <Lottie
                                        animationData={
                                            darkMode ? waveLight : wave
                                        }
                                        className="w-full absolute bottom-0 after:content-[''] after:w-full after:h-[200%] after:after:bg-black dark:after:bg-white after:absolute"
                                    />
                                )}
                                {item.Percent > 35 && item.Percent < 60 && (
                                    <Lottie
                                        animationData={
                                            darkMode ? waveLight : wave
                                        }
                                        className="w-full absolute top-12 after:content-[''] after:w-full after:h-[200%] after:bg-black dark:after:bg-white after:absolute"
                                    />
                                )}
                                {item.Percent >= 60 && item.Percent <= 100 && (
                                    <Lottie
                                        animationData={
                                            darkMode ? waveLight : wave
                                        }
                                        className="w-full absolute top-2 after:content-[''] after:w-full after:h-[200%] after:bg-black dark:after:bg-white after:absolute"
                                    />
                                )}
                            </div>
                        </div>
                        <h4 className="font-extrabold text-black dark:stroke1black2 dark:text-white text-xl stroke1white2 absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4">
                            {`${item.Percent}%`}
                        </h4>
                    </div>
                    <h4 className="font-medium text-xl text-center pt-2 dark:text-white">
                        {item.Name}
                    </h4>
                </article>
            ))}
        </>
    );
}

export default SkillsCard;
