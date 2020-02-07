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
      }
      state.products.push(data);
      return {
        ...state,
        products: state.products,
      };
      // case 'UPDATE_PRODUCT':
      //   const data = {
      //     ...action.payload,
      //   }
      //   state.products.map(product => product.id === );
      //   return {
      //     ...state,
      //     products: state.products,
      //   };
    default:
      return state
  }
}

export class ProductProvider extends Component{

    // constructor(props){
    //   super(props);
    //   const s = this;
    //   axios.get('http://localhost:8000/api/products/').then(function (response) {
    //     s.setState({
    //       'products': response.data,
    //       dispatch : action => {
    //             s.setState(state => reducer(state, action))
    //           },
    //     }
    //     )
        
    //   });
    // }
      // console.log(response.data)
      
    async componentDidMount() {
        var response = await axios.get('http://localhost:8000/api/products/')
        // console.log(response.data);
        this.setState({
          products: response.data,
        })
    }
    
    state = { 'products' : [],
      dispatch : action => {
        this.setState(state => reducer(state, action))
      },
    };



      //  deleteProductInList = async (id) =>{
      //   await axios.delete('');
      //   this.setState({
      //     'products': this.state.products.filter(product=> product.id !== id),
      //   })
      // }
    
      // addProduct = (data) =>{
      //   // console.log(this);
      //   data = 
      //   { ...data,
      //     'id':5,
      //     'image': 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-xr-black-select-201809?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1551226038992',
      //   };
      //   this.state.products.push(data);
      //   this.setState(
      //     this.state.products,
      //   )
      //   console.log(this.state)
      // }
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