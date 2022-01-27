import React from 'react'

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className="title">
                <h2>Dashboard</h2>
                <span>Insights on your wallet</span>
            </div>
            <div className="container">
                <div className="search">
                    <input type="text" placeholder='Search ...'></input>
                </div>
                <div className="profile">
                    <div className="image">
                        <img />
                    </div>
                    <div className="profile_name">
                        <h4>Souhail Sellami</h4>
                        <h6>Admin</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}
