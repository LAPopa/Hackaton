import React, {useState} from "react";
import {useNavigate} from "react-router";

export default function ActivityForm() {

    let navigate = useNavigate();

    const [activity, setActivity] = useState(
        {
            "activityName": "",
            "activityType": null,
            "duration": null,
            "capacity": null
        }
    )

    const handleChange = event => {
        const {name, value} = event.target
        setActivity({...activity, [name]: value})
        console.log(activity)
    }

    const handleSubmit = event => {
        event.preventDefault()
        fetch("http://localhost:8080/register/activity",
            {
                method: "POST",
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("token"),
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(activity)
            }
        )
            .then(response => response.json())
            .then(response => {
                console.log(JSON.stringify(response))
    })
    navigate("/activities")
    }

    return(
        <div className="block p-6 rounded-lg shadow-lg bg-white w-4/6 m-20 p-10">
            <p>Add an activity</p>
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
                           placeholder="Activity Name" name="activityName" value={activity.activityName} onChange={handleChange}/>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="form-group mb-6">
                        <input type="number" className="form-control
                          block
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
                          focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none" id="exampleInput123"
                               placeholder="Activity Spots" name="capacity" value={activity.capacity} onChange={handleChange}/>
                    </div>
                    <div className="form-group mb-6">
                        <input type="number" className="form-control
                          block
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
                          focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none" id="exampleInput124"
                              placeholder="Activity Duration" name="duration" value={activity.duration} onChange={handleChange}/>
                    </div>
                </div>
                <select className="form-select appearance-none
                          block
                          w-full
                          px-3
                          py-1.5
                          text-base
                          font-normal
                          text-gray-700
                          bg-white bg-clip-padding bg-no-repeat
                          border border-solid border-gray-300
                          rounded
                          transition
                          ease-in-out
                          m-0
                          focus:text-gray-700 focus:bg-white focus:border-green-500 focus:outline-none" aria-label="Default select example"
                        name="activityType" value={activity.activityType} onChange={handleChange}>
                    <option selected disabled hidden>Activity type</option>
                    <option value="Maintenance">Maintenance</option>
                    <option value="Manufacture">Manufacture</option>
                    <option value="Sowing">Sowing</option>
                    <option value="Harvesting">Harvesting</option>
                </select>
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
                      ease-in-out">Add activity
                </button>
            </form>
        </div>
    )
}