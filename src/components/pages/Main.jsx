import React from "react";

import Navbar from "../templates/navbar";
import Hero from "../templates/hero";
import AboutSection from "../templates/aboutSection";
import TestimonialSection from "../templates/testimonialSection";

export default function Main() {
    return (
        <>
            <Navbar />
            <Hero />
            <AboutSection />
            <TestimonialSection />
        </>
    )
}