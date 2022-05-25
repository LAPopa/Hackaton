import React from "react";
import Contact from "../Image/Contact1.jpg"
import Contact1 from "../Image/Contact2.jpg"
import Contact2 from "../Image/Contact3.jpg"
import Contact3 from "../Image/Contact4.jpg"
import Contact4 from "../Image/Contact5.jpg"
import Contact5 from "../Image/Contact6.jpg"
export default function PresentationPhoto(){
    return(
        <section className="overflow-hidden text-gray-700">
            <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
                <div className="flex flex-wrap -m-1 md:-m-2">
                    <div className="flex flex-wrap w-1/2">
                        <div className="w-1/2 p-1 md:p-2">
                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                 src={Contact} />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                 src={Contact1} />
                        </div>
                        <div className="w-full p-1 md:p-2">
                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                 src={Contact2} />
                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/2">
                        <div className="w-full p-1 md:p-2">
                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                 src={Contact3} />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                 src={Contact4} />
                        </div>
                        <div className="w-1/2 p-1 md:p-2">
                            <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                 src={Contact5} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}