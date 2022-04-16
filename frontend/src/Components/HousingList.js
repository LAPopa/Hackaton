import React from "react";
import {useEffect, useState} from "react";

export default function HousingList() {

    const [houses, setHouses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/housing/get-all',
            {
                method : "GET",
                headers : {
                    'Authorization': 'Bearer ' + localStorage.getItem("token"),
                }})
            .then(response => response.json())
            .then((response) => {
                setHouses(response)
            })
    }, []);

    return(
        <>
            {houses.map((house) =>
        <div className=" accordion w-full py-5 px-80" id="accordionExample">
            <div className="accordion-item bg-white border border-gray-200">
                <h2 className="accordion-header mb-0" id={house.id}>
                    <button className="
        accordion-button
        relative
        items-center
        w-full
        py-4
        px-5
        text-base text-gray-800 text-center
        bg-white
        border-0
        rounded-none
        transition
        focus:outline-none
      " type="button" data-bs-toggle="collapse" data-bs-target={`#${house.name.replace(" ", "")}`} aria-expanded="true" aria-controls={house.name.replace(" ", "")}>
                        {house.name}
                    </button>
                </h2>
                <div id={house.name.replace(" ", "")} className="accordion-collapse collapse" aria-labelledby={house.id}
                     data-bs-parent="#accordionExample">
                    <div className="accordion-body py-4 px-5">
                        <div className="flex justify-center">
                            <ul className="bg-white rounded-lg w-96 text-gray-900">
                                {house.residents.map((resident) =>
                                    <li  className="px-6 py-2 border-b border-gray-200 w-full">{resident}</li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            )}
        </>
    )
}