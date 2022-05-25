import React from "react";
import {useEffect, useState} from "react";
import * as events from "events";

export default function HousingList() {

    const [houses, setHouses] = useState([]);

    const [newResident, setNewResident] = useState("");

    const handleChange = event => {
        event.preventDefault();
        setNewResident(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault();
        fetch(`http://localhost:8080/housing/add-resident?house=${event.target.id}&resident=${newResident}`,
            {
                method : "POST",
                headers : {
                    'Authorization': 'Bearer ' + localStorage.getItem("token"),
                }})
            .then(response => response.json())
            .then((response) => {
                setHouses(response)
            })
        window.location.reload();
    }

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
                                <li className="px-6 py-2 w-full">
                                    <form onSubmit={handleSubmit} id={house.name}>
                                        <input type="text" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                                        name="name" value={newResident} onChange={handleChange} placeholder="Add new resident"/>
                                        <button type="submit" className="mt-2 py-2 px-4 bg-green-500 hover:bg-green-700 focus:ring-green-600 focus:ring-offset-green-200
                                text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md
                                focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">Add resident</button>
                                    </form>
                                </li>
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