import React, { Component } from 'react'

export default class AddProduct extends Component {


    addProductForm = (e) =>{
        e.preventDefault();
        
        var form_data = {
            'name': e.target.name.value,
            'price': e.target.price.value,
        };
        console.log(form_data);
        var {addProduct} = this.props;
        console.log(addProduct);
        addProduct(form_data);
    }

  render() {
    return (
      <div>
        <form onSubmit={this.addProductForm}>
            <div className="form-group"> 
                <label>Name</label>
                <input className="form-control" name="name"/>
            </div>
            <div className="form-group"> 
                <label>Price</label>
                <input className="form-control" name="price"/>
            </div>
            <input type="submit" value="yarat"/>
        
        </form>
        
      </div>
      
    )
  }
}
