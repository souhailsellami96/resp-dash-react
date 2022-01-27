import React from "react";
import { BiChevronRight } from "react-icons/bi";
import {RiGroupLine} from "react-icons/ri" ;
import Title from "./Title";

export default function Investors(){
    const data = [
        {title: "Over 1M",value:10},
        {title: "Over 100M",value:45},
        {title: "Under 100M",value:45},
    ]
    return(
        <div className="investors">
            <Title   title="Holders" subtitle="Details about investors"  />
            <div className="analytics">
                <div className="icon">
                    <RiGroupLine />
                </div>
                <div className="content">
                    <div className="title">
                        <h4>Pro Analytics</h4>
                    <   span>90$/month</span>
                    </div>
                    <BiChevronRight />
                </div>
            </div>

            <div className="progressbars">
                {data.map((x)=> {
                    return (
                        <div className="progressbar">
                            <div className="title">
                                <h5>{x.title}</h5>
                                <h5>{x.value}</h5>
                            </div>
                            <progress  value={x.value} max="100"></progress>
                        </div>
                    )
                }
                
                )}
            </div>

        </div>
    )
}