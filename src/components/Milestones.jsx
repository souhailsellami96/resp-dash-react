import React from 'react'
import { BsCart2 } from "react-icons/bs"
export default function Milestones() {
    const data = [
        {
            icon: BsCart2,
            title: "Total Budget",
            value: "1200"
        },
        {
            icon: BsCart2,
            title: "Total Revenues",
            value: "400"
        },
        {
            icon: BsCart2,
            title: "Current Price",
            value: "8.20"
        },
        {
            icon: BsCart2,
            title: "Total Invested",
            value: "560"
        },
    ]
    return (
        <div className="milestones" >
            {data.map((milestone) => {
                return (
                    <div className="milestone">
                        <div className="icon">
                            <milestone.icon />
                        </div>
                        <div className="details">
                            <h4>{milestone.title}</h4>
                            <h2>{milestone.value}</h2>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
