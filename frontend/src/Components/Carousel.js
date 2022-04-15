import React from "react";
import Poza1 from "../Image/pexels-pixabay-51947.jpg"
import Poza2 from "../Image/pexels-pixabay-265216.jpg"
import Poza3 from "../Image/pexels-tim-mossholder-974314.jpg"
export default function Carousel(){
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide relative" data-bs-ride="carousel">
            <div className="carousel-inner relative w-fit overflow-hidden">
                <div className="carousel-item active relative float-left w-fit">
                    <img
                        src={Poza1}
                        className="block w-fit"
                        alt="Wild Landscape"
                    />
                </div>
                <div className="carousel-item relative float-left w-fit">
                    <img
                        src={Poza2}
                        className="block w-fit"
                        alt="Camera"
                    />
                </div>
                <div className="carousel-item relative float-left w-fit">
                    <img
                        src={Poza3}
                        className="block w-fit"
                        alt="Exotic Fruits"
                    />
                </div>
            </div>
        </div>
    )
}