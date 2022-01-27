import React from 'react'
import Milestones from './Milestones'
import Navbar from './Navbar'
import Revenue from './Revenue'
import Investors from './Investors'

export default function Dashboard() {
    return (
        <div className='dashboard'>
            <Navbar />

            <div className="grid">
                <div className="first">
                    <Milestones />
                </div>

                <div className="second">
                    <Revenue />
                    <Investors />
                </div>
            </div>
        </div>
    )
}
