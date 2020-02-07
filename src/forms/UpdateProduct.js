import React, { Component } from 'react';
import ProductConsumer from '../ProductContext';
import axios from 'axios';

export default class UpdateProduct extends Component {
    state = {
    }


    constructor(props){
        super(props);
        this.get_product_detail() 
    }
    async get_product_detail() {
        const {id} = this.props.match.params;
        try {
            const response = await axios.get(`http://localhost:8000/api/products/${id}/`);
            this.setState(
                response.data
            );            
        } catch (error) {
            
        }
    }

    onChangeName = (e) =>{
      this.state.name = e.target.value;
      this.setState({
        ...this.state
      });
    }

    // handleChange = (e) => {
    //   this.setState({
    //     [e.target.id]: e.target.value
    //   })
    // };
    onChangePrice = (e) =>{
      this.state.price = e.target.value;
      this.setState({
        ...this.state
      });
    }
  
    handleImageChange = (e) => {
    this.state.image = e.target.files[0];
    };

    

    updateProductForm = async (dispatch, e) =>{
        e.preventDefault();
        const {id} = this.props.match.params;
        try {
          let form_data = new FormData();

            console.log(this.state.image.name);
            if(this.state.image.name){
                form_data.append('image', this.state.image, this.state.image.name);
            }
            form_data.append('name', this.state.name);
            form_data.append('price', this.state.price);
            console.log(this.state);
            var response = await axios.put(`http://localhost:8000/api/products/${id}/`, form_data, {headers: {
                'content-type': 'multipart/form-data'
            }
            });
          if(response.status === 200){
            // dispatch({type:'UPDATE_PRODUCT', payload:response.data});
              this.props.history.push(`/product-detail/${id}`);
          }
        } catch (error) {
          alert(error);
        }
        
    }

  render() {
    const {name, price, image} = this.state;
    // const name = this.state.name;
    return (
      <ProductConsumer>{
        value =>{
          const {dispatch} = value;
          return (
          <div className="card mb-5">
            <form className="card-body" onSubmit={this.updateProductForm.bind(this, dispatch)} encType="multipart/form-data">
                <div className="form-group"> 
                    <label>Name</label>
                    <input className="form-control" onChange={this.onChangeName} value={name} name="name"/>
                </div>
                <div className="form-group"> 
                    <label>Price</label>
                    <input className="form-control" onChange={this.onChangePrice} value={price} name="price"/>
                </div>
                <div className="form-group"> 
                    <label>Image</label>
                    <p>Current: {this.state.image}</p>
                    <input className="form-control" type="file" accept="image/png, image/jpeg"  onChange={this.handleImageChange} name="image"/>
                </div>
                <input type="submit" value="deyis"/>
            
            </form>
            
          </div>
            )
          }
        }
      </ProductConsumer>
    )
  }
}
