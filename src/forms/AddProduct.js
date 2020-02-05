import React, { Component } from 'react';
import ProductConsumer from '../ProductContext';

export default class AddProduct extends Component {
    state = {
      'name': '',
      'price': 0,
    }
    onChangeName = (e) =>{
      this.state.name = e.target.value;
      this.setState({
        ...this.state
      });
    }

    onChangePrice = (e) =>{
      this.state.price = e.target.value;
      this.setState({
        ...this.state
      });
    }

    addProductForm = (dispatch, e) =>{
        e.preventDefault();
        
        const form_data = this.state;
        dispatch({type:'ADD_PRODUCT', payload:form_data})
    }

  render() {
    const {name, price} = this.state;
    // const name = this.state.name;
    return (
      <ProductConsumer>{
        value =>{
          const {dispatch} = value;
          return (
          <div className="card mb-5">
            <form className="card-body" onSubmit={this.addProductForm.bind(this, dispatch)}>
                <div className="form-group"> 
                    <label>Name</label>
                    <input className="form-control" onChange={this.onChangeName} value={name} name="name"/>
                </div>
                <div className="form-group"> 
                    <label>Price</label>
                    <input className="form-control" onChange={this.onChangePrice} value={price} name="price"/>
                </div>
                <input type="submit" value="yarat"/>
            
            </form>
            
          </div>
            )
          }
        }
      </ProductConsumer>
    )
  }
}
