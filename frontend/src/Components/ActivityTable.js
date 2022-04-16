import React, {useEffect, useState} from "react";

export default function ActivityTable() {

    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/activity/get-all',
            {
                method : "GET",
                headers : {
                    'Authorization': 'Bearer ' + localStorage.getItem("token"),
                    "Content-Type" : "application/json"
                }})
            .then(response => response.json())
            .then((response) => {
                setActivities(response)
            })
    }, []);

    const handleClick = (event) => {
        fetch(`http://localhost:8080/activity/add-participant?activityName=${event.target.id}&workerEmail=${localStorage.getItem("email")}`,
            {
                method : "POST",
                headers : {
                    'Authorization': 'Bearer ' + localStorage.getItem("token")}}
            )
    }

    return(
        <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
            <div className="py-8">
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        <table className="min-w-full leading-normal">
                            <thead>
                            <tr>
                                <th scope="col"
                                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                    Name
                                </th>
                                <th scope="col"
                                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                    Activity Type
                                </th>
                                <th scope="col"
                                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                    Available Spots
                                </th>
                                <th scope="col"
                                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                    status
                                </th>
                                <th scope="col"
                                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                    Duration
                                </th>
                                <th scope="col"
                                    className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {activities.map((activity) =>
                            <tr>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <div className="flex items-center">
                                        <div>
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                {activity.name}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap">
                                        {activity.activityType}
                                    </p>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap">
                                        {activity.capacity - activity.participantsEmails.length}
                                    </p>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                <span
                                    className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                    <span aria-hidden="true"
                                          className={`absolute inset-0 ${activity.active ? "bg-green-200" : "bg-red-200"} opacity-50 rounded-full`}>
                                    </span>
                                    <span className="relative">
                                        {activity.active ? "Active" : "Closed"}
                                    </span>
                                </span>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <p className="text-gray-900 whitespace-no-wrap">
                                        {activity.duration} h/day
                                    </p>
                                </td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                     {(activity.active && (activity.capacity - activity.participantsEmails.length !== 0)) ?
                                            <button id={activity.name}
                                                    className="text-indigo-600 hover:text-indigo-900"
                                                    onClick={handleClick}>
                                                Participate
                                            </button>
                                            :
                                         <></>
                                    }
                                </td>
                            </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    )
}