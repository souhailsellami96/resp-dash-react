import React from 'react'

export default function List({ lists }) {
    return (
        <ul>
            {lists.map((list) => {
                return (
                    <li className={list.active ? "active" : ""}>
                        <a href='#'>
                            <list.icon />
                            {list.text}
                        </a>
                    </li>
                );
            })}
        </ul>
    );
}
