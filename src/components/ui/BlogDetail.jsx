import React from "react";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { SlClose } from "react-icons/sl";

function BlogDetail({
    setBlog,
    MainImage,
    Title,
    Name,
    Date,
    Content,
    Quotes,
}) {
    return (
        <div className="w-full h-full fixed z-50 top-0 left-0 bg-black bg-opacity-95">
            <article className="bg-white sm:max-w-2xl max-w-xl sm:h-[800px] h-[580px] relative top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 rounded-xl">
                {/* Close Buttton */}
                <button
                    type="button"
                    className="w-8 h-8 absolute md:top-0 -top-10 md:-right-10 right-0 grid place-items-center"
                    onClick={() => setBlog({ SubImages: undefined })}
                >
                    <SlClose
                        color="white"
                        className="w-full h-full opacity-80"
                    />
                </button>
                {/* Blog Content */}
                <div className="w-full h-full  overflow-y-scroll p-10 overflow-x-hidden">
                    <img
                        src={MainImage}
                        alt="main"
                        className="w-full h-2/4 object-cover rounded-xl mb-10"
                    />
                    <h4 className="font-normal italic text-xs text-dark35">
                        {`By ${Name} ${Date}`}
                    </h4>
                    <hr className="w-full h-0.5 bg-dark20 mt-3 mb-5" />
                    <h2 className="mb-5 font-semibold text-2xl text-black">
                        {Title}
                    </h2>
                    <p className="font-normal text-xs leading-5 text-dark65">
                        {Content[0]}
                    </p>
                    <div className="flex items-start gap-10 my-10 w-full">
                        <div className="max-w-full">
                            <BiSolidQuoteLeft color="black" size={34} />
                        </div>
                        <span className="font-medium text-xs italic leading-5">
                            {Quotes[0]}
                        </span>
                    </div>
                    <p className="font-normal text-xs leading-5 text-dark65">
                        {Content[1]}
                    </p>
                </div>
            </article>
        </div>
    );
}

export default BlogDetail;
