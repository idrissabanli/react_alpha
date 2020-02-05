import React from 'react';
import ProductConsumer from "../ProductContext";

export default function Navbar({first_name, last_name}) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                
                <h4 className="navbar-brand">{first_name } {last_name}</h4>
                <div className="collapse navbar-collapse" id="navbarText">
                
                    <ProductConsumer>
                        {
                            data =>{
                               const products = data.products
                               return (
                                <ul className="navbar-nav mr-auto">

                                    <li className="nav-links text-light mr-3">Home</li>
                                    <li className="nav-links text-light mr-3">About</li>
                                    <li className="nav-links text-light mr-3">Contact</li>
                                    {
                                        products.map(product => {
                                            return <li className="nav-links text-light mr-3">{product.name}</li>
                                        })
                                    }
                                </ul> 
                               ) 
                            }

                        }

                    </ProductConsumer>
                
                </div>
            </nav>
        </div>
    )
}
