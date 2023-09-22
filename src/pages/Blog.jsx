import { React, useState, useEffect } from "react";
import { easeInOut, motion } from "framer-motion";

// components and Blog Data
import { BlogsCard, PageTitle } from "../components";

import Blog1 from "../assets/Blogs/Blog1.jpg";
import Blog2 from "../assets/Blogs/Blog2.jpg";
import Blog3 from "../assets/Blogs/Blog3.jpg";
import Blog4 from "../assets/Blogs/Blog4.jpg";
import Blog5 from "../assets/Blogs/Blog5.jpg";
import Blog6 from "../assets/Blogs/Blog6.jpg";

const Blogs = [
    {
        MainImage: Blog1,
        Title: "Top 10 Books You Should Read",
        Name: "James Brown",
        Date: "11 Dec, 23",
        Content: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Nec ultrices dui sapien eget. Amet nisl suscipit adipiscing bibendum. Sem et tortor consequat id porta nibh venenatis cras sed. Posuere sollicitudin aliquam ultrices sagittis. Euismod elementum nisi quis eleifend quam adipiscing vitae proin. Sed felis eget velit aliquet sagittis id consectetur purus ut. Fames ac turpis egestas maecenas. Et pharetra pharetra massa massa ultricies mi quis. Ut eu sem integer vitae justo eget. In dictum non consectetur a erat nam at lectus. Montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Nec ultrices dui sapien eget. Amet nisl suscipit adipiscing bibendum. Sem et tortor consequat id porta nibh venenatis cras sed. Posuere sollicitudin aliquam ultrices sagittis. Euismod elementum nisi quis eleifend quam adipiscing vitae proin. Sed felis eget velit aliquet sagittis id consectetur purus ut. Fames ac turpis egestas maecenas. Et pharetra pharetra massa massa ultricies mi quis. Ut eu sem integer vitae justo eget. In dictum non consectetur a erat nam at lectus. Montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada.",
        ],
        Quotes: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Nec ultrices dui sapien eget. Amet nisl suscipit adipiscing bibendum.",
        ],
    },
    {
        MainImage: Blog2,
        Title: "Top 10 Books You Should Read",
        Name: "James Brown",
        Date: "11 Dec, 23",
        Content: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Nec ultrices dui sapien eget. Amet nisl suscipit adipiscing bibendum. Sem et tortor consequat id porta nibh venenatis cras sed. Posuere sollicitudin aliquam ultrices sagittis. Euismod elementum nisi quis eleifend quam adipiscing vitae proin. Sed felis eget velit aliquet sagittis id consectetur purus ut. Fames ac turpis egestas maecenas. Et pharetra pharetra massa massa ultricies mi quis. Ut eu sem integer vitae justo eget. In dictum non consectetur a erat nam at lectus. Montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Nec ultrices dui sapien eget. Amet nisl suscipit adipiscing bibendum. Sem et tortor consequat id porta nibh venenatis cras sed. Posuere sollicitudin aliquam ultrices sagittis. Euismod elementum nisi quis eleifend quam adipiscing vitae proin. Sed felis eget velit aliquet sagittis id consectetur purus ut. Fames ac turpis egestas maecenas. Et pharetra pharetra massa massa ultricies mi quis. Ut eu sem integer vitae justo eget. In dictum non consectetur a erat nam at lectus. Montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada.",
        ],
        Quotes: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Nec ultrices dui sapien eget. Amet nisl suscipit adipiscing bibendum.",
        ],
    },
    {
        MainImage: Blog3,
        Title: "Top 10 Books You Should Read",
        Name: "James Brown",
        Date: "11 Dec, 23",
        Content: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Nec ultrices dui sapien eget. Amet nisl suscipit adipiscing bibendum. Sem et tortor consequat id porta nibh venenatis cras sed. Posuere sollicitudin aliquam ultrices sagittis. Euismod elementum nisi quis eleifend quam adipiscing vitae proin. Sed felis eget velit aliquet sagittis id consectetur purus ut. Fames ac turpis egestas maecenas. Et pharetra pharetra massa massa ultricies mi quis. Ut eu sem integer vitae justo eget. In dictum non consectetur a erat nam at lectus. Montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Nec ultrices dui sapien eget. Amet nisl suscipit adipiscing bibendum. Sem et tortor consequat id porta nibh venenatis cras sed. Posuere sollicitudin aliquam ultrices sagittis. Euismod elementum nisi quis eleifend quam adipiscing vitae proin. Sed felis eget velit aliquet sagittis id consectetur purus ut. Fames ac turpis egestas maecenas. Et pharetra pharetra massa massa ultricies mi quis. Ut eu sem integer vitae justo eget. In dictum non consectetur a erat nam at lectus. Montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada.",
        ],
        Quotes: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Nec ultrices dui sapien eget. Amet nisl suscipit adipiscing bibendum.",
        ],
    },
    {
        MainImage: Blog4,
        Title: "Top 10 Books You Should Read",
        Name: "James Brown",
        Date: "11 Dec, 23",
        Content: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Nec ultrices dui sapien eget. Amet nisl suscipit adipiscing bibendum. Sem et tortor consequat id porta nibh venenatis cras sed. Posuere sollicitudin aliquam ultrices sagittis. Euismod elementum nisi quis eleifend quam adipiscing vitae proin. Sed felis eget velit aliquet sagittis id consectetur purus ut. Fames ac turpis egestas maecenas. Et pharetra pharetra massa massa ultricies mi quis. Ut eu sem integer vitae justo eget. In dictum non consectetur a erat nam at lectus. Montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Nec ultrices dui sapien eget. Amet nisl suscipit adipiscing bibendum. Sem et tortor consequat id porta nibh venenatis cras sed. Posuere sollicitudin aliquam ultrices sagittis. Euismod elementum nisi quis eleifend quam adipiscing vitae proin. Sed felis eget velit aliquet sagittis id consectetur purus ut. Fames ac turpis egestas maecenas. Et pharetra pharetra massa massa ultricies mi quis. Ut eu sem integer vitae justo eget. In dictum non consectetur a erat nam at lectus. Montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada.",
        ],
        Quotes: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Nec ultrices dui sapien eget. Amet nisl suscipit adipiscing bibendum.",
        ],
    },
    {
        MainImage: Blog5,
        Title: "Top 10 Books You Should Read",
        Name: "James Brown",
        Date: "11 Dec, 23",
        Content: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Nec ultrices dui sapien eget. Amet nisl suscipit adipiscing bibendum. Sem et tortor consequat id porta nibh venenatis cras sed. Posuere sollicitudin aliquam ultrices sagittis. Euismod elementum nisi quis eleifend quam adipiscing vitae proin. Sed felis eget velit aliquet sagittis id consectetur purus ut. Fames ac turpis egestas maecenas. Et pharetra pharetra massa massa ultricies mi quis. Ut eu sem integer vitae justo eget. In dictum non consectetur a erat nam at lectus. Montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Nec ultrices dui sapien eget. Amet nisl suscipit adipiscing bibendum. Sem et tortor consequat id porta nibh venenatis cras sed. Posuere sollicitudin aliquam ultrices sagittis. Euismod elementum nisi quis eleifend quam adipiscing vitae proin. Sed felis eget velit aliquet sagittis id consectetur purus ut. Fames ac turpis egestas maecenas. Et pharetra pharetra massa massa ultricies mi quis. Ut eu sem integer vitae justo eget. In dictum non consectetur a erat nam at lectus. Montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada.",
        ],
        Quotes: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Nec ultrices dui sapien eget. Amet nisl suscipit adipiscing bibendum.",
        ],
    },
    {
        MainImage: Blog6,
        Title: "Top 10 Books You Should Read",
        Name: "James Brown",
        Date: "11 Dec, 23",
        Content: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Nec ultrices dui sapien eget. Amet nisl suscipit adipiscing bibendum. Sem et tortor consequat id porta nibh venenatis cras sed. Posuere sollicitudin aliquam ultrices sagittis. Euismod elementum nisi quis eleifend quam adipiscing vitae proin. Sed felis eget velit aliquet sagittis id consectetur purus ut. Fames ac turpis egestas maecenas. Et pharetra pharetra massa massa ultricies mi quis. Ut eu sem integer vitae justo eget. In dictum non consectetur a erat nam at lectus. Montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Nec ultrices dui sapien eget. Amet nisl suscipit adipiscing bibendum. Sem et tortor consequat id porta nibh venenatis cras sed. Posuere sollicitudin aliquam ultrices sagittis. Euismod elementum nisi quis eleifend quam adipiscing vitae proin. Sed felis eget velit aliquet sagittis id consectetur purus ut. Fames ac turpis egestas maecenas. Et pharetra pharetra massa massa ultricies mi quis. Ut eu sem integer vitae justo eget. In dictum non consectetur a erat nam at lectus. Montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada.",
        ],
        Quotes: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Nec ultrices dui sapien eget. Amet nisl suscipit adipiscing bibendum.",
        ],
    },
];

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
