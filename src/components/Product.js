import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import ProductConsumer  from '../ProductContext';
import axios from 'axios';
import {Link} from 'react-router-dom';

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

    // componentDidMount() {
    //     const {id} = this.props;
    //     console.log('componentDidMount id=' + id );
    //     this.setState({});
    //   }

    //   componentWillUnmount() {
    //     console.log('componentWillUnmount')  
    //   }
        
    deleteProduct = async (dispatch, e) =>{
        const {id} = this.props;
        try {
            var response = await axios.delete(`http://localhost:8000/api/products/${id}/`);
            if (response.status === 204){
                dispatch({type: "DELETE_PRODUCT", payload:id});
            }
        } catch (error) {
            alert(error);
        }
        
    }
    
  render() {
    const {id, name, price, image} = this.props;
    
    
    return (
        <ProductConsumer>
        {
            value => {
                const {dispatch} = value;
                return (
        <div className="col-md-4 my-5">
            <div className="card" >
                <img  src={image} className="card-img-top product_image" alt="..."/>
                { this.state.isVisible?
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text"><b>Price:{price}</b> Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to={`/product-detail/${id}`} className="btn btn-primary">Go somewhere</Link>
                </div> :
                null
                }
                <div className="d-flex justify-content-center mb-3">
                <button onClick={this.onHide}>{ this.state.isVisible ? 'Hide' : 'Show' }</button>
                <button onClick={this.deleteProduct.bind(this, dispatch)}>Delete</button>
                </div>
            </div>
        </div>
                )
            }
        }
    </ProductConsumer>
    )
  }
}
Product.defaultProps = {
    name: 'No Info'
}

Product.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
}
export default Product;