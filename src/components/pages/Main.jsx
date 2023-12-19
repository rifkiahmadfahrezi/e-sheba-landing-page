import React from "react";

import Navbar from "../templates/navbar";
import Hero from "../templates/hero";
import AboutSection from "../templates/aboutSection";
import TestimonialSection from "../templates/testimonialSection";
import HealthSection from "../templates/healthSection";
import SubscribeNewslater from "../templates/subscribeNewslater";

export default function Main() {
    return (
        <>
            <Navbar />
            <Hero />
            <AboutSection />
            <TestimonialSection />
            <HealthSection />
            <SubscribeNewslater />
        </>
    )
}