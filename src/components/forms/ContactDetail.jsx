import React from "react";
import { FaPhone } from "react-icons/fa6";
import { BiSolidNavigation } from "react-icons/bi";
import { IoMail } from "react-icons/io5";

const Contacts = [
    {
        Icon: <FaPhone className="fill-white dark:fill-black" />,
        Name: "Phone",
        Detail: "+1 xxx xxx xxx xx",
    },
    {
        Icon: <IoMail className="fill-white dark:fill-black" />,
        Name: "Email",
        Detail: "example@gmail.com",
    },
    {
        Icon: <BiSolidNavigation className="fill-white dark:fill-black" />,
        Name: "Address",
        Detail: "Ave XX, New York, USA",
    },
];

function ContactDetail() {
    return (
        <>
            {Contacts.map((item) => (
                <div className="flex items-center gap-3">
                    <div className="bg-black w-10 h-10 grid place-items-center rounded-xl dark:bg-white">
                        {item.Icon}
                    </div>
                    <div className="flex flex-col items-start">
                        <h4 className="font-normal text-xs text-dark50 dark:text-white50">
                            {item.Name}
                        </h4>
                        <h2 className="font-semibold text-base text-black dark:text-white">
                            {item.Detail}
                        </h2>
                    </div>
                </div>
            ))}
        </>
    );
}

export default ContactDetail;
