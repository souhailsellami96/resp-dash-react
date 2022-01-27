import React from 'react';
import { FiSettings, FiShoppingBag } from "react-icons/fi";
import { MdLogout, MdSwapHorizontalCircle } from "react-icons/md";
import List from './List';
import { BiHelpCircle } from "react-icons/bi";
export default function Sidebar() {
    const lists1 = [
        {
            text: "Overview",
            icon: FiShoppingBag,
            active: true
        },
        {
            text: "Stake",
            icon: MdSwapHorizontalCircle,
        },
        {
            text: "Deposit",
            icon: MdSwapHorizontalCircle,
        },
        {
            text: "SWAP",
            icon: MdSwapHorizontalCircle,

        }
    ]
    const lists2 = [
        {
            text: "Help Center",
            icon: BiHelpCircle,
        },
        {
            text: "Settings",
            icon: FiSettings,
        },
        {
            text: "Help Center",
            icon: MdLogout,
        }
    ]
    return (
        <div className="sidebar">
            <div className='brand'>IO Wallet</div>
            <div className='list' >
                <List lists={lists1} />
                <List lists={lists2} />
            </div>
            <div className="pro">
                <div className="image">
                    <img alt="" />
                </div>
                <h3>IO Wallet Premium</h3>
                <h5> Premium Access</h5>
                <button>Get Price</button>
            </div>

        </div>
    )
}
