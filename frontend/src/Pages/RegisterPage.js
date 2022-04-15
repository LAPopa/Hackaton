import React from "react";
import WorkerRegisterForm from "../Components/WorkerRegisterForm";
import BuyerRegisterForm from "../Components/BuyerRegisterForm";
import BuyerInfoCard from "../Components/BuyerInfoCard";
import WorkerInfoCard from "../Components/WorkerInfoCard";
export default function RegisterPage(){
    return (
        <div className="bg-gray-100">
            <div className="grid grid-cols-1 gap-8 px-24 py-8 md:grid-cols-2">
                <BuyerInfoCard/>
                <WorkerInfoCard/>
            </div>
            <div className="grid py-4">
                <BuyerRegisterForm/>
                <WorkerRegisterForm/>
            </div>
        </div>

    )
}