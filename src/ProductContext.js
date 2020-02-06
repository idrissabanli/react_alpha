import React, {Component} from 'react';
import axios from 'axios'


const ProductContext = React.createContext();


const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_PRODUCT':
      return {
        ...state,
        products: state.products.filter(product=> product.id !== action.payload),
      };
    case 'ADD_PRODUCT':
      const data = {
        ...action.payload,
        'id': 6,
        'image': 'https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-11/Black/Apple-iPhone-11-Black-frontimage.jpg',
      }
      state.products.push(data);
      return {
        ...state,
        products: state.products,
      };
    default:
      return state
  }
}

export class ProductProvider extends Component{

    constructor(props){
      super(props);
      const s = this;
      axios.get('http://localhost:8000/api/products/').then(function (response) {
        s.setState({
          'products': response.data,
          dispatch : action => {
                s.setState(state => reducer(state, action))
              },
        }
        )
        
      });
    }
      // console.log(response.data)
      
      
    // state = { 'products' : [
    //     {
    //       'id': 1,
    //       'name': 'IPhone 10',
    //       'price': 1250,
    //       'image': 'https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-11/Black/Apple-iPhone-11-Black-frontimage.jpg'
    //     }, 
    //     {
    //       'id': 2,
    //       'name': 'IPhone 8',
    //       'price': 1250,
    //       'image': 'https://mimelon.com/uploads/catalog/Product//iphone-xr-red-select-201809.png',
    //     },
    //     {
    //       'id': 3,
    //       'name': 'IPhone 7',
    //       'price': 1250,
    //       'image': 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-xr-black-select-201809?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1551226038992'
    //     },
    //     {
    //       'id': 4,
    //       'name': 'IPhone 6',
    //       'price': 1250,
    //       'image': 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-xr-black-select-201809?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1551226038992'
    //     },
    //   ],
    //   dispatch : action => {
    //     this.setState(state => reducer(state, action))
    //   },
    // };



      deleteProductInList = (id) =>{
        this.setState({
          'products': this.state.products.filter(product=> product.id !== id),
        })
      }
    
      addProduct = (data) =>{
        // console.log(this);
        data = 
        { ...data,
          'id':5,
          'image': 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-xr-black-select-201809?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1551226038992',
        };
        this.state.products.push(data);
        this.setState(
          this.state.products,
        )
        console.log(this.state)
      }
    render() {
        return (
            <ProductContext.Provider value = {this.state}>
                {this.props.children} {/* APP.js */}
            </ProductContext.Provider>
        )
    }

}

const ProductConsumer = ProductContext.Consumer;

export default ProductConsumer;