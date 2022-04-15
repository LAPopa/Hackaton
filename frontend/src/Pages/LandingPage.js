import React from "react";
// import Card from "../Components/Card";
import Cta from "../Components/Cta";
import Testimonials from "../Components/Testimonials";
import Carousel from "../Components/Carousel";
export default function LandingPage() {
    return(
        <div>
            <div className="w-full h-96 object-cover">
                <Carousel/>
            </div>
            <div className="grid">
                <Cta/>
            </div>
            <div className="py-10">
                <Testimonials/>
            </div>
        </div>
    )
}