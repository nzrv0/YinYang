import React from "react";

function SectionTitle({ First, Second, Line }) {
    return (
        <div className="flex items-center justify-center gap-10 mb-20">
            {Line && (
                <div className="w-full max-w-xs h-auto bg-transparent border border-dark35 dark:border-white35 rounded-full py-[2px] lg:inline-block hidden" />
            )}
            <div className="tracking-[1.35px] sm:text-5xl text-4xl font-medium text-black dark:text-white dark:lg:selection:text-white35">
                {First}
                <span className="tracking-[1.35px] sm:text-5xl text-4xl font-medium sm:stroke2 sm:text-transparent text-dark35 dark:text-white35 dark:sm:stroke2white sm:pl-4 pl-2">
                    {Second}
                </span>
            </div>
            {Line && (
                <div className="w-full max-w-xs h-auto bg-transparent border border-dark35 dark:border-white35 rounded-full py-[2px] lg:inline-block hidden" />
            )}
        </div>
    );
}

export default SectionTitle;
