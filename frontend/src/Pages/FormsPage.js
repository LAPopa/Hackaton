import React from "react";
import ActivityForm from "../Components/ActivityForm";
import HousingForm from "../Components/HousingForm";

export default function FormsPage() {
    return(
        <div className="grid grid-cols-2 items-center">
        <ActivityForm/>
        <HousingForm/>
        </div>
    )
}