import React from 'react'
import { NavLink } from 'react-router-dom'



export const Navbar = () => {
    const activeStyle = {
        activate: "",
        desactivate: ""
    }
    return (
        <div className="divpr">
            <NavLink to="/">
                <h2>Home</h2>
            </NavLink>
            <NavLink className="divpr" to="181972" >
                <h2>Student</h2>
            </NavLink>
            <NavLink className="divpr" to="search" >
                <h2>Search</h2>
            </NavLink>
        </div>

    )
}
