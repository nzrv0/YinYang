import { React, useState, useEffect } from "react";
import { easeInOut, motion } from "framer-motion";

// components and Blog Data
import { BlogsCard, PageTitle } from "../components";
import { Blogs } from "../utils/constants";

function Blog() {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(Blogs);
    }, []);

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: easeInOut }}
        >
            <PageTitle
                FirstTitle="My"
                SecondTitle="Blog"
                BackgroundTitle="Posts"
            />
            <section className="flex items-center justify-center my-5">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mx-5">
                    {data
                        ? data.map((item) => (
                              <BlogsCard
                                  Date={item.Date}
                                  MainImage={item.MainImage}
                                  Name={item.Name}
                                  Title={item.Title}
                                  Content={item.Content}
                                  Link={item.Link}
                                  Quotes={item.Quotes}
                              />
                          ))
                        : "loading"}
                </div>
            </section>
        </motion.section>
    );
}

export default Blog;
