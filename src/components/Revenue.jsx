import React from 'react';
import Title from './Title';
import { Area, AreaChart, Tooltip, ResponsiveContainer } from "recharts";
export default function Revenue() {
    const data = [
        {
            data: 2000,
        },
        {
            data: 2800,
        },
        {
            data: 3200,
        },
        {
            data: 2100,
        },
        {
            data: 1600,
        },
        {
            data: 800,
        },

    ]
    return <div className='revenue'>
        <Title title="$1,718" subtitle="This week" />
        <div className="graph">
            <ResponsiveContainer width="100%" height="100%" >
                <AreaChart width={500} height={400} data={data} >
                    <defs>
                        <linearGradient id="color" x1="0" x2="0" y1="0" y2="1">
                            <stop offset="30%" stopColor="blue" stopOpacity={0.4} />
                            <stop offset="85%" stopColor="black" stopOpacity={0.2} />
                        </linearGradient>
                    </defs>
                    <Tooltip cursor={false} />
                    <Area type="monotone" dataKey="data" stroke="#ffffff" fill="url(#color)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    </div>;
}
