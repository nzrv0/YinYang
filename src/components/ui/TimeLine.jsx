import React from "react";

function TimeLine({ Information }) {
    return (
        <>
            {Information.map((item) => (
                <div className="flex flex-row gap-7">
                    <div className="flex flex-col items-center">
                        <div className="bg-black rounded-full p-3 dark:bg-white">
                            {item.Icon}
                        </div>
                        <div className="w-1 h-full bg-dark5 dark:bg-white5" />
                    </div>
                    <div>
                        <span className="bg-transparent border border-dark35 text-dark35 dark:border-white35 dark:text-white35 text-xs font-medium tracking-[0.8px] px-3 py-1 rounded-full">
                            {item.Year}
                        </span>
                        <h4 className="text-black text-base font-bold my-2 dark:text-white">
                            {item.Title}
                        </h4>
                        <p className="text-regular text-xs tracking-[0.8px] text-dark65 w-52 dark:text-white65">
                            {item.Paragraph}
                        </p>
                    </div>
                </div>
            ))}
        </>
    );
}

export default TimeLine;
