/* eslint-disable import/no-unresolved */
import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// Import Icon and Image
import { BiSolidQuoteRight } from "react-icons/bi";
import User from "../../assets/user.jpg";

const Testimonalias = [
    {
        Image: User,
        Name: "Tommy Shelby",
        Who: "Envato Customre",
        Paragraph:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        Image: User,
        Name: "Tommy Shelby",
        Who: "Envato Customre",
        Paragraph:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        Image: User,
        Name: "Tommy Shelby",
        Who: "Envato Customre",
        Paragraph:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        Image: User,
        Name: "Tommy Shelby",
        Who: "Envato Customre",
        Paragraph:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        Image: User,
        Name: "Tommy Shelby",
        Who: "Envato Customre",
        Paragraph:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        Image: User,
        Name: "Tommy Shelby",
        Who: "Envato Customre",
        Paragraph:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
];

function TestimonialsCard() {
    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            modules={[Grid, Pagination]}
            breakpoints={{
                100: {
                    slidesPerView: 1,
                },
                1024: {
                    slidesPerView: 2,
                },
                1280: {
                    slidesPerView: 3,
                },
            }}
            pagination={{
                el: ".swiper-pagination",
                clickable: true,
                dynamicBullets: true,
            }}
            className="h-60"
        >
            {Testimonalias.map((item) => (
                <SwiperSlide>
                    <article className="bg-dark5 dark:bg-white5 p-8 rounded-xl w-full cursor-ew-resize">
                        <div className="flex sm:flex-row items-center mb-5">
                            <img
                                src={item.Image}
                                alt="user"
                                className="w-16 h-16 object-cover rounded-full"
                            />
                            <span className="ml-3">
                                <h4 className="sm:text-xl text-lg font-semibold dark:text-white">
                                    {item.Name}
                                </h4>
                                <p className="text-xs font-normal text-dark50 dark:text-white50">
                                    {item.Who}
                                </p>
                            </span>
                            <BiSolidQuoteRight
                                className="ml-auto sm:w-10 w-7 dark:fill-white fill-black"
                                size={34}
                            />
                        </div>
                        <p className="text-xs font-normal text-dark50 tracking-[0.8px] max-w-xs dark:text-white50">
                            {item.Paragraph}
                        </p>
                    </article>
                </SwiperSlide>
            ))}
            {/* Customize Pagination */}
            <div className="sm:block hidden absolute -bottom-6 left-2/4  m-4 ">
                <div className="swiper-pagination" />
            </div>
        </Swiper>
    );
}

export default TestimonialsCard;
