import React, {Component} from "react";
import {fetchProducts, fetchColors} from "../api/product";
import ListProduct from '../components/ListProduct'
import RowPopUpDetail from '../components/RowPopUpDetail'
import {connect} from "react-redux";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rowDetail: undefined
    }
  }

  async componentDidMount() {
    if(this.props.products.length) {
      return
    }
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
  openRowDetail = ({row, fields}) => {
    this.setState({rowDetail: {row, fields}})
  }
  closeDetail = () => {
    this.setState({rowDetail: undefined})
  }
  render() {
    const { rowDetail } = this.state
    const { products, colors } = this.props
    const { updateProduct, openRowDetail, closeDetail } = this
    return (
      <div className="container">
        <ListProduct products={products}
                     colors={colors}
                     updateProduct={updateProduct}
                     detailProduct={openRowDetail}/>
        <RowPopUpDetail rowDetail={rowDetail}
                        colors={colors}
                        closeDetail={closeDetail}/>
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
