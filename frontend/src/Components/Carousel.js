import React from "react";
import Poza1 from "../Image/test_carousel.png"
import Poza2 from "../Image/test_carousel2.png"
import Poza3 from "../Image/test_carousel3.png"
export default function Carousel(){
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide relative" data-bs-ride="carousel">
            <div className="carousel-inner relative w-full h-96 overflow-hidden">
                <div className="carousel-item active relative float-left w-full h-96">
                    <img
                        src={Poza1}
                        className="block w-full h-96"
                        alt="Wild Landscape"
                    />
                </div>
                <div className="carousel-item relative float-left w-full h-96">
                    <img
                        src={Poza2}
                        className="block w-full h-96"
                        alt="Camera"
                    />
                </div>
                <div className="carousel-item relative float-left w-full h-96">
                    <img
                        src={Poza3}
                        className="block w-full h-96"
                        alt="Exotic Fruits"
                    />
                </div>
            </div>
        </div>
    )
}