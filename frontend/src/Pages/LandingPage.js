import React from "react";
import Card from "../Components/Card";
import Cta from "../Components/Cta";
export default function LandingPage() {
    const list = [1, 2, 3];
    return(
        <div>
            <div className = "grid grid-cols-3 py-20">
                {list.map((x) => (
                <Card/>
                ))}
            </div>
            <div>
                <Cta/>
            </div>
        </div>
    )
}