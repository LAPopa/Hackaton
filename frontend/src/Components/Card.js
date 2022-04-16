import React from "react";
import Product1 from "../Image/Product1.jpg"
import Product2 from "../Image/Product2.jpg"
import Product3 from "../Image/Product3.jpg"
import Product4 from "../Image/Product4.jpg"
import Product5 from "../Image/Product5.jpg"
import Product6 from "../Image/Product6.jpg"
import Product7 from "../Image/Product7.jpg"
import Product8 from "../Image/Product8.jpg"
import Product9 from "../Image/Product9.jpg"

export default function Card() {
    return (
        <div className="sm:flex flex-wrap justify-center items-center text-center gap-8 px-72">
            <div className="flex justify-center">
                <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                    <img
                        className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                        src={Product1} alt=""/>
                    <div className="p-6 flex flex-col justify-start">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">Earrings</h5>
                        <p className="text-gray-700 text-base mb-4">
                            Handcrafted earrings.
                            Made from sterling silver.
                            <br/>High quality.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                    <img
                        className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                        src={Product2} alt=""/>
                    <div className="p-6 flex flex-col justify-start">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">Bracelets</h5>
                        <p className="text-gray-700 text-base mb-4">
                            Handmade bracelets.
                            Made from wool yarn and natural materials.
                            <br/>The perfect gift.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                    <img
                        className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                        src={Product3} alt=""/>
                    <div className="p-6 flex flex-col justify-start">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">Carpet</h5>
                        <p className="text-gray-700 text-base mb-4">
                            Handsewn carpet.
                            Woven in a traditional technique.
                            <br/>Embrace the rustic style !
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                    <img
                        className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                        src={Product4} alt=""/>
                    <div className="p-6 flex flex-col justify-start">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">Oils and ointments</h5>
                        <p className="text-gray-700 text-base mb-4">
                            Carefully prepared in a protected environment.
                            Made from locally grown medicinal plants.
                            <br/> A natural cure for what ails you.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                    <img
                        className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                        src={Product5} alt=""/>
                    <div className="p-6 flex flex-col justify-start">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">Tea</h5>
                        <p className="text-gray-700 text-base mb-4">
                            Fresh herbs dried to perfection.
                            Prepared and packaged to ensure the best experience.
                            <br/> Enjoy your daily cup.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                    <img
                        className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                        src={Product6} alt=""/>
                    <div className="p-6 flex flex-col justify-start">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">Marmalade</h5>
                        <p className="text-gray-700 text-base mb-4">
                            A sweet, clean treat.
                            Just locally grown fruit and sugar - just like grandma makes them !
                            <br/> For your day to day sweet break.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                    <img
                        className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                        src={Product7} alt=""/>
                    <div className="p-6 flex flex-col justify-start">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">Pickled vegetables</h5>
                        <p className="text-gray-700 text-base mb-4">
                            Ancient conservation method - modern healthy staple.
                            Made from locally grown vegetables.
                            <br/>A tasty dose of probiotics.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                    <img
                        className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                        src={Product8} alt=""/>
                    <div className="p-6 flex flex-col justify-start">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">Handmade soap</h5>
                        <p className="text-gray-700 text-base mb-4">
                            Crafted with love and care for your enjoyment.
                            Made with locally sourced herbs and flowers.
                            <br/> Pamper your skin - and senses.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}