import React from "react";
// import Card from "../Components/Card";
import Cta from "../Components/Cta";
import Testimonials from "../Components/Testimonials";
import Carousel from "../Components/Carousel";
export default function LandingPage() {
    return(
        <div>
            <div className="w-full h-80 object-cover">
                <Carousel/>
            </div>
            <div className="grid py-20">
                <Cta/>
            </div>
            <div>
                <Testimonials/>
            </div>
        </div>
    )
}