import React from "react";

function PageTitle({ BackgroundTitle, FirstTitle, SecondTitle }) {
    return (
        <section className="my-20 relative select-none">
            <h3 className="sm:text-5xl text-4xl text-center font-bold text-black uppercase block dark:text-white  ">
                {FirstTitle}
                <span className="stroke2 sm:text-5xl text-4xl font-bold pl-2 uppercase">
                    {SecondTitle}
                </span>
            </h3>
            <h1 className="-z-40 absolute top-2/4 -translate-y-2/4 left-2/4 -translate-x-2/4 text-8xl font-extrabold tracking-[18px] text-dark5 uppercase  md:block hidden dark:text-white5">
                {BackgroundTitle}
            </h1>
        </section>
    );
}

export default PageTitle;
