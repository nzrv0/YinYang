/* eslint-disable react/jsx-props-no-spreading */
import { React, useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { BiInfoCircle } from "react-icons/bi";

function InputForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(false);

    const {
        handleSubmit,
        formState: { errors },
        control,
    } = useForm();

    const onSubmit = async () => {
        const form = document.querySelector("form");

        await emailjs
            .sendForm(
                "service_uj81j7o",
                "template_029zrtn",
                form,
                "0ENXAu8JNCQWxor-r",
            )

            .then(
                (result) => {
                    console.log(result.text);
                    setName("");
                    setEmail("");
                    setMessage("");
                    setSuccess(true);
                },
                (error) => {
                    console.log(error.text);
                },
            );
    };
    useEffect(() => {
        setTimeout(() => {
            setSuccess(false);
        }, 3000);
    }, [success]);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-7">
                {/* Name Controller */}
                <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                        <>
                            <input
                                type="text"
                                {...field}
                                placeholder="Enter your name"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="border border-dark35 text-sm font-normal px-4 py-3 text-start rounded-lg outline-none w-full bg-transparent dark:border-white35 dark:text-white"
                            />
                            {errors.name && (
                                <p style={{ color: "black" }}>
                                    {errors.name?.message}
                                </p>
                            )}
                        </>
                    )}
                />
                {/* Email Controller */}
                <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                        <>
                            <input
                                type="email"
                                {...field}
                                placeholder="Enter your email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="border border-dark35 text-sm font-normal px-4 py-3 text-start rounded-lg outline-none w-full bg-transparent dark:border-white35 dark:text-white"
                            />
                            {errors.email && (
                                <p style={{ color: "red" }}>
                                    {errors.email?.message}
                                </p>
                            )}
                        </>
                    )}
                />
            </div>
            {/* Message Controller */}
            <Controller
                name="message"
                control={control}
                render={({ field }) => (
                    <>
                        <textarea
                            type="text"
                            {...field}
                            placeholder="Enter your message"
                            required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="my-7 border border-dark35 text-sm font-normal px-4 py-3 rounded-lg outline-none w-full h-40 overflow-hidden bg-transparent dark:border-white35 dark:text-white"
                        />
                        {errors.message && (
                            <p style={{ color: "black" }}>
                                {errors.message?.message}
                            </p>
                        )}
                    </>
                )}
            />
            <div className="flex flex-col sm:flex-row itmes-center justify-between">
                <input
                    type="submit"
                    className="px-10 py-2 text-xl font-bold bg-black text-white cursor-pointer rounded-full dark:bg-white dark:text-black"
                />
                {success && (
                    <div className="flex items-center justify-center gap-1 sm:mt-0 mt-5">
                        <BiInfoCircle
                            size={20}
                            className="dark:fill-white fill-black"
                        />
                        <h1 className="text-base font-medium text-black dark:text-white">
                            Message has been sent
                        </h1>
                    </div>
                )}
            </div>
        </form>
    );
}

export default InputForm;
