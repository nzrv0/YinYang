import { React, useState } from "react";
import BlogDetail from "../ui/BlogDetail";

function BlogsCard({ MainImage, Date, Name, Title, Content, Quotes }) {
    const [Blog, setBlog] = useState({
        MainImage: "",
        Title: "",
        Name: "",
        Date: "",
        Content: undefined,
        Quotes: "",
    });
    return (
        <>
            <article
                className="w-full max-w-xs h-96 rounded-xl relative bg-dark35 dark:bg-white35 active-element cursor-pointer dark:box-light-shadow box-dark-shadow"
                onClick={() =>
                    setBlog({
                        MainImage,
                        Title,
                        Name,
                        Date,
                        Content,
                        Quotes,
                    })
                }
            >
                <div className="w-full h-3/5 relative overflow-hidden">
                    <img
                        src={MainImage}
                        alt="main"
                        className="object-cover w-full h-full rounded-t-lg active-image"
                    />
                    <h4 className="bg-black bg-opacity-50 font-semibold text-xs text-white rounded-tr-lg py-1 px-2 absolute bottom-0 left-0 ">
                        {Date}
                    </h4>
                </div>
                <div className="flex flex-col items-start gap-2 w-full p-5">
                    <h2 className="text-base text-white font-bold tracking-[0.8px]">
                        {Title}
                    </h2>
                    <p className="font-medium text-xs text-white text-opacity-60">
                        {`${Content[0].slice(0, 100)}...`}
                    </p>
                    <span className="w-12 h-4 relative overflow-hidden">
                        <h4 className="text-xs font-normal text-white active-el -translate-x-[60px] transition-all">
                            more
                        </h4>
                        <hr className="w-full h-0.5 bg-white absolute top-2/4 active-hr transition-all" />
                    </span>
                </div>
            </article>
            {Blog.Content && (
                <BlogDetail
                    MainImage={Blog.MainImage}
                    Title={Blog.Title}
                    Name={Blog.Name}
                    Content={Blog.Content}
                    Quotes={Blog.Quotes}
                    Date={Blog.Date}
                    setBlog={setBlog}
                />
            )}
        </>
    );
}

export default BlogsCard;
