import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types'

class Product extends Component {
    state = {
        isVisible: true
    }
    onHide = (e) => {
        console.log(this);
        this.setState({
            isVisible: !this.state.isVisible
        }); 
    }
    
  render() {
    const {id, name, price, image} = this.props;
    
    
    return (
        <div className="col-md-4 my-5">
            <div className="card" >
                <img  src={image} className="card-img-top product_image" alt="..."/>
                { this.state.isVisible?
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text"><b>Price:{price}</b> Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div> :
                null
                }
                <button onClick={this.onHide}>{ this.state.isVisible ? 'Hide' : 'Show' }</button>
            </div>
        </div>
    )
  }
}
Product.defaultProps = {
    name: 'No Info'
}

Product.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number,
}
export default Product;