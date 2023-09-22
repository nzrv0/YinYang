import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";

function SocailInfromations({ Color }) {
    const SocialLinks = [
        {
            Icons: (
                <AiFillInstagram
                    size={35}
                    z={44}
                    color={Color}
                    className={`border-2 rounded-full p-[6px] z-50 border-${Color} hover:bg-black hover:fill-white hover:border-none dark:fill-white`}
                />
            ),
            Link: "https://www.instagram.com/",
        },
        {
            Icons: (
                <AiOutlineTwitter
                    size={35}
                    z={44}
                    color={Color}
                    className={`border-2 rounded-full p-[6px] z-50 border-${Color} hover:bg-black hover:fill-white hover:border-none dark:fill-white`}
                />
            ),
            Link: "https://twitter.com/",
        },
        {
            Icons: (
                <BiLogoLinkedin
                    size={35}
                    z={44}
                    color={Color}
                    className={`border-2 rounded-full p-[6px] z-50 border-${Color} hover:bg-black hover:fill-white hover:border-none dark:fill-white`}
                />
            ),
            Link: "https://www.linkedin.com/",
        },
    ];

    return (
        <>
            {SocialLinks.map((item) => (
                <a href={item.Link} className="z-40">
                    {item.Icons}
                </a>
            ))}
        </>
    );
}

export default SocailInfromations;
