import React, {Component} from "react";
import {fetchProducts, fetchColors} from "../api/product";
import ListProduct from '../components/ListProduct'
import {connect} from "react-redux";

class Products extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    await this.getListProducts()
    const res = await fetchColors()
    const colors = res.data
    this.props.initializeColors(colors)
  }

  async getListProducts() {
    try {
      const res = await fetchProducts()
      const products = res.data
      this.props.initializeProducts(products)
    } catch (e) {

    } finally {

    }
  }
  updateProduct = (productId, data) => {
    this.props.updateProduct({productId, data})
  }
  render() {
    const { products, colors } = this.props
    const { updateProduct } = this
    return (
      <div className="container">
        <ListProduct products={products} colors={colors} updateProduct={updateProduct}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { products } = state
  return {
    products: products.items,
    colors: products.colors,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    initializeProducts: (payload) => dispatch({ type: 'INITIALIZE_PRODUCT', payload }),
    initializeColors: (payload) => dispatch({ type: 'INITIALIZE_COLORS', payload }),
    updateProduct: (payload) => dispatch({ type: 'UPDATE_PRODUCT', payload }),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Products)
