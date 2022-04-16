import React from "react";
export default function Cta(){
    return (
        <section
            className="bg-green-600 h-80 w-full">
            <div className="w-full mx-auto text-center py-8">
                <h2 className="text-3xl font-extrabold leading-9 text-white sm:text-4xl sm:leading-10">
                    Grow with us !
                </h2>
                <p className="mt-3 text-base leading-7 sm:mt-4 text-white">
                    VillageHub is an initiative that brings together people from disadvantaged communities, empowering them to develop a better life.
                </p>
            </div>
            <div className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
                <div>
                    <p className="text-5xl font-extrabold leading-none text-white">
                        119
                    </p>
                    <p className="mt-2 text-base font-medium leading-6 text-white">
                        Current participants
                    </p>
                </div>
                <div className="mt-10 sm:mt-0">
                    <p className="text-5xl font-extrabold leading-none text-white">
                        3
                    </p>
                    <p className="mt-2 text-base font-medium leading-6 text-white">
                        Active housing
                    </p>
                </div>
                <div className="mt-10 sm:mt-0">
                    <p className="text-5xl font-extrabold leading-none text-white">
                        6
                    </p>
                    <p className="mt-2 text-base font-medium leading-6 text-white">
                        Active projects
                    </p>
                </div>
            </div>
        </section>

    )
}