import React, {useState} from "react";
import {useNavigate} from "react-router";

export default function HousingForm() {

    let navigate = useNavigate()

    const [house, setHouse] = useState({
        "housingName": "",
        "housingCapacity": null
    })

    const handleChange = event => {
        const {name, value} = event.target
        setHouse({...house, [name]: value})
        console.log(house)
    }

    const handleSubmit = event => {
        event.preventDefault()
        fetch("http://localhost:8080/register/housing",
            {
                method: "POST",
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("token"),
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(house)
            }
        )
            .then(response => response.json())
            .then(response => {
                console.log(JSON.stringify(response))
            })
        navigate("/houses")
    }
    return(
        <div className="block p-6 rounded-lg shadow-lg bg-white w-4/6 m-20 p-10">
            <p>Add a house</p>
            <form onSubmit={handleSubmit}>
                <div className="form-group mb-6">
                    <input type="text" className="form-control block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none" id="exampleInput125"
                           placeholder="House Name" name="housingName" value={house.housingName} onChange={handleChange}/>
                </div>
                <div className="form-group mb-6">
                    <input type="number" className="form-control block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none" id="exampleInput126"
                           placeholder="House spots" name="housingCapacity" value={house.housingCapacity} onChange={handleChange}/>
                </div>
                <button type="submit" className="
                mt-2
                      w-full
                      px-6
                      py-2.5
                      bg-green-500
                      text-white
                      font-medium
                      text-xs
                      leading-tight
                      uppercase
                      rounded
                      shadow-md
                      hover:bg-green-700 hover:shadow-lg
                      focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0
                      active:bg-green-800 active:shadow-lg
                      transition
                      duration-150
                      ease-in-out">Add house
                </button>
            </form>
        </div>
    )
}