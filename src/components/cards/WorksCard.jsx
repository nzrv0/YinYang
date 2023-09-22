import { React, useState } from "react";
import WorkDetail from "../ui/WorkDetail";

function WorksCard({ MainImage, SubImages, Title, Work, Year, Link }) {
    const [WorkDeatils, setWorkDetails] = useState({
        SubImages: "",
        Title: "",
        Work: "",
        Year: "",
        Link: "",
    });

    return (
        <>
            <article className="w-full max-w-xs h-64 rounded-xl  relative shadow-white dark:box-light-shadow box-dark-shadow">
                <div className="hover:bg-black hover:bg-opacity-80 w-full h-full absolute rounded-xl opacity-0 hover:opacity-100 flex flex-col items-center justify-center gap-1 transition-all duration-500 ease-in-out">
                    <h4 className="text-base text-white font-medium tracking-[1.6px]">
                        {Title}
                    </h4>
                    <button
                        type="button"
                        className="text-xs font-bold tracking-[1.6px] text-white50"
                        onClick={() =>
                            setWorkDetails({
                                SubImages,
                                Title,
                                Work,
                                Year,
                                Link,
                            })
                        }
                    >
                        more info
                    </button>
                </div>
                <img
                    src="../../assets/main.jpg"
                    alt="main"
                    className="object-cover w-full h-full rounded-xl"
                />
            </article>
            {WorkDeatils.SubImages && (
                <WorkDetail
                    SubImages={WorkDeatils.SubImages}
                    setWorkDetails={setWorkDetails}
                    Title={Title}
                    Work={Work}
                    Year={Year}
                    Link={Link}
                />
            )}
        </>
    );
}
export default WorksCard;
