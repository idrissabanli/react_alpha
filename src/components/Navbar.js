import React from 'react';
import { Link } from 'react-router-dom'

export default function Navbar({first_name, last_name}) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                
                <h4 className="navbar-brand">{first_name } {last_name}</h4>
                <div className="collapse navbar-collapse" id="navbarText">
                
                    <ul className="navbar-nav mr-auto nav-links">

                        <li className="text-light mr-3"><Link className="nav-link" to="/">Home</Link></li>
                        <li className="text-light mr-3"><Link className="nav-link" to="/products">Products</Link></li>
                        <li className="text-light mr-3"><Link className="nav-link" to="/products/add">Add Product</Link></li>
                    
                    </ul> 
        
                
                </div>
            </nav>
        </div>
    )
}
