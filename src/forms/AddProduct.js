import React, { Component } from 'react';
import ProductConsumer from '../ProductContext';
import axios from 'axios';

export default class AddProduct extends Component {
    state = {
      'name': '',
      'price': '',
      'image': null,
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
    // handleChange = (e) => {
    //   this.setState({
    //     [e.target.id]: e.target.value
    //   })
    // };
  
    handleImageChange = (e) => {
      this.setState({
        image: e.target.files[0]
      })
    };

    addProductForm = async (dispatch, e) =>{
        e.preventDefault();
        try {
          let form_data = new FormData();
          // form_data.append(...this.state);
          form_data.append('image', this.state.image, this.state.image.name);
          form_data.append('name', this.state.name);
          form_data.append('price', this.state.price);
          var response = await axios.post('http://localhost:8000/api/products/', form_data, {headers: {
            'content-type': 'multipart/form-data'
          }
        });
          if(response.status === 201){
            dispatch({type:'ADD_PRODUCT', payload:response.data});
            this.setState({
                'name': '',
                'price': '',
                'image': null,
              })
              this.props.history.push('/products');
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
            <form className="card-body" onSubmit={this.addProductForm.bind(this, dispatch)} encType="multipart/form-data">
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
                    <input className="form-control" type="file" accept="image/png, image/jpeg"  onChange={this.handleImageChange} required name="image"/>
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
