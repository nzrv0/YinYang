import { React, useState } from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { SlClose } from "react-icons/sl";

// Import Swiper React components
/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

function WorkDetail({ setWorkDetails, SubImages, Title, Work, Year, Link }) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div className="w-full h-full fixed z-50 top-0 left-0 bg-black bg-opacity-95">
            <article className="md:max-w-2xl sm:max-w-lg max-w-xs w-full fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
                {/* Close Buttton */}
                <button
                    type="button"
                    className="w-8 h-8 absolute md:top-0 -top-10 md:-right-10 right-0 grid place-items-center"
                    onClick={() => setWorkDetails({ SubImages: undefined })}
                >
                    <SlClose
                        color="white"
                        className="w-full h-full opacity-80"
                    />
                </button>
                {/* First Slider */}
                <Swiper
                    thumbs={{
                        swiper:
                            thumbsSwiper && !thumbsSwiper.destroyed
                                ? thumbsSwiper
                                : null,
                    }}
                    modules={[Thumbs]}
                    spaceBetween={10}
                    className="border-2 border-white border-opacity-30 p-1 rounded-xl relative w-full mb-5 cursor-grab"
                >
                    {SubImages.map((item) => (
                        <SwiperSlide className="relative md:h-[650px] h-[400px] gradient after:content-[''] after:w-full after:h-full after:absolute after:left-0 after:top-0">
                            <img
                                src={item}
                                alt="main"
                                className="object-cover w-full h-full rounded-xl"
                            />
                        </SwiperSlide>
                    ))}
                    <div className="absolute bottom-7 left-7 z-30 flex flex-col items-start">
                        <a href={Link}>
                            <HiArrowUpRight className="mb-2" color="white" />
                        </a>
                        <h4 className="text-white font-medium sm:text-sm text-xs">
                            {`© ${Year}`}
                        </h4>
                        <h4 className="text-white font-medium md:text-sm text-xs tracking-[1.7px]">
                            {Work}
                        </h4>
                        <h2 className="text-white font-extrabold md:text-2xl text-xl mt-3 tracking-[3.75px]">
                            {Title}
                        </h2>
                    </div>
                </Swiper>

                {/* Second mini Slider */}
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={20}
                    slidesPerView={3}
                    modules={[Navigation, Thumbs]}
                    className="mySwiper cursor-grab"
                >
                    {SubImages.map((item) => (
                        <SwiperSlide>
                            <img
                                src={item}
                                alt="main"
                                className="object-cover md:h-36 w-full rounded-xl h-20 "
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </article>
        </div>
    );
}

export default WorkDetail;
