import React from "react";
import Sidenav from "../Components/Sidenav";
import Card from "../Components/Card";
export default function ShopPage(){
    return(
        <>
            <div>
                <Sidenav/>
            </div>
            <div className="py-4">
                <Card/>
            </div>
        </>
    )
}