import React from "react";
import { motion } from "framer-motion";

import InputForm from "../components/forms/InputForm";
import ContactDetail from "../components/forms/ContactDetail";
import PageTitle from "../components/shared/PageTitle";
import SocialIcons from "../components/shared/SocialIcons";

function Contact() {
    return (
        <motion.section>
            <PageTitle
                FirstTitle="Get In"
                SecondTitle="Touch"
                BackgroundTitle="Contact"
            />
            <section className="flex justify-center gap-28 mx-4 lg:flex-row flex-col mb-10">
                <div className="flex flex-col gap-5 lg:-order-1 order-1">
                    <ContactDetail />
                    <hr className="w-full h-[0.5px] bg-dark35" />
                    <div className="flex flex-row gap-3">
                        <SocialIcons Color="black" />
                    </div>
                </div>
                <InputForm />
            </section>
        </motion.section>
    );
}

export default Contact;
