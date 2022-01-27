import React from 'react';
import { BiBrightness } from "react-icons/bi";

export default function Title({ title, subtitle }) {
    return <div className='title_container'>
        <div className="title">
            <div className="title">
                <h2>{title}</h2>
                <h4>{subtitle}</h4>
            </div>
        </div>
        <div className="icon">
            <BiBrightness />
        </div>

    </div>;
}
