import React from "react";
import { MdWork } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { easeInOut, motion } from "framer-motion";

// Components and Images
import {
    AboutMe,
    PageTitle,
    SectionTitle,
    ActivityCard,
    SkillsCard,
    TestimonialsCard,
    TimeLine,
} from "../components";

const WorkIcon = (
    <MdWork size={16} color="white" className="fill-white dark:fill-black" />
);
const GraduationIcon = (
    <FaGraduationCap
        size={16}
        color="white"
        className="fill-white dark:fill-black"
    />
);
const Educations = [
    {
        Icon: WorkIcon,
        Year: "2015-Present",
        Title: "Engineering Degree - Oxfrod University",
        Paragraph:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        Icon: WorkIcon,
        Year: "2010-1015",
        Title: "Engineering Degree - Oxfrod University",
        Paragraph:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        Icon: WorkIcon,
        Year: "2010",
        Title: "Engineering Degree - Oxfrod University",
        Paragraph:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
];

const Experience = [
    {
        Icon: GraduationIcon,
        Year: "2015-Present",
        Title: "Engineering Degree - Oxfrod University",
        Paragraph:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        Icon: GraduationIcon,
        Year: "2010-1015",
        Title: "Engineering Degree - Oxfrod University",
        Paragraph:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        Icon: GraduationIcon,
        Year: "2010",
        Title: "Engineering Degree - Oxfrod University",
        Paragraph:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
];
function About() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: easeInOut }}
        >
            <PageTitle
                BackgroundTitle="Resume"
                FirstTitle="About"
                SecondTitle="Me"
            />
            {/* Information About You */}
            <section className="2xl:mx-64 xl:mx-40 mx-20 mb-20 mt-32 grid xl:grid-cols-2 grid-cols-1 place-items-center gap-20 transition-all">
                <AboutMe />
            </section>

            {/* What I do Section */}
            <section className="mb-20">
                <SectionTitle First="What I" Second="Do" Line />
                <div className="grid xl:grid-cols-3 xl:grid-rows-2 lg:grid-cols-2 lg:grid-rows-3 grid-cols-1 gap-10 xl:mx-50 lg:mx-36 mx-10 my-20">
                    <ActivityCard />
                </div>
            </section>

            {/* My Skills Section */}
            <section className="mb-20 ">
                <SectionTitle First="My" Second="Skills" Line />
                <div className="transition-all grid md:grid-cols-4 grid-cols-2 grid-rows-2 gap-y-10 place-items-center mx-auto max-w-5xl">
                    <SkillsCard />
                </div>
            </section>

            {/* My Education & My Experience Section */}
            <section className="mb-20 xl:mx-64 mx-8 sm:mx-40 sm:px-0 grid md:grid-cols-2 md:gap-72 grid-cols-1 place-items-center gap-y-20">
                <div className="flex flex-col items-start">
                    <SectionTitle First="My" Second="Education" />
                    <div className="flex flex-col gap-8">
                        <TimeLine Information={Educations} />
                    </div>
                </div>
                <div className="flex flex-col items-start">
                    <SectionTitle First="My" Second="Experience" />
                    <div className="flex flex-col gap-8">
                        <TimeLine Information={Experience} />
                    </div>
                </div>
            </section>

            {/* Testimonalias Section */}
            <section className="mb-20 ">
                <SectionTitle Second="Testimonalias" />
                <div className="xl:mx-10 lg:mx-20 mx-10">
                    <TestimonialsCard />
                </div>
            </section>
        </motion.section>
    );
}

export default About;
