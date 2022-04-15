import React from "react";
import Card from "../Components/Card";
import Cta from "../Components/Cta";
import Testimonials from "../Components/Testimonials";
import Carousel from "../Components/Carousel";
import ImageSlider from "../Components/ImageSlider";
export default function LandingPage() {
    // const list = [1, 2, 3];
    return(
        <div>
            <Carousel/>
            {/*<ImageSlider/>*/}
            {/*<div className = "grid grid-cols-3 py-20">*/}
            {/*    {list.map((x) => (*/}
            {/*    <Card/>*/}
            {/*    ))}*/}
            {/*</div>*/}
            <div>
                <Testimonials/>
            </div>
            <div>
                <Cta/>
            </div>
        </div>
    )
}