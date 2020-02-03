import React from 'react'

export default function Navbar({first_name, last_name}) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                
                <h4 className="navbar-brand">{first_name } {last_name}</h4>
                <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">

                    <li className="nav-links text-light">Home</li>
                    <li className="nav-links text-light">About</li>
                    <li className="nav-links text-light">Contact</li>
                    
                </ul>
                </div>
            </nav>
        </div>
    )
}
