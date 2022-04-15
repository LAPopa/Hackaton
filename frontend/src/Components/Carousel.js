import React from "react";
import Poza1 from "../Image/pexels-pixabay-51947.jpg"
import Poza2 from "../Image/pexels-pixabay-265216.jpg"
import Poza3 from "../Image/pexels-tim-mossholder-974314.jpg"
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