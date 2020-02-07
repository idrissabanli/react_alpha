import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class ProductDetail extends Component {
    state = {

    }
    async get_product_detail() {
        const {id} = this.props.match.params;
        try {
            const response = await axios.get(`http://localhost:8000/api/products/${id}/`);
            this.setState(
                response.data,
            );
            
            
        } catch (error) {
            
        }
    }
    constructor(props){
        super(props);
        this.get_product_detail();
    }

     

  render() {
      const {id, name, price, image} = this.state;
    return (
      <div className="container">
          <div className="row">
        <div className="card col-lg-4">
        <img class="card-img-top" src={image} alt="Card image cap"/>
            
            <div className="card-body">
            <h5 className="card-title">{name}</h5>
                <p className="card-text">Price: {price} and Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolore natus saepe possimus nostrum adipisci, nulla sequi corrupti debitis. Possimus ipsam quasi, eligendi earum quidem animi maxime amet natus exercitationem.</p>
                <Link to={`/product-update/${id}`} className="btn btn-primary">Update</Link>
            </div>

        </div>
        </div>
      </div>
    )
  }
}
