import React, {Component} from "react";
import {fetchProducts, fetchColors} from "../../api/product";
import ListProduct from '../../components/ListProduct'
import RowPopUpDetail from '../../components/RowPopUpDetail'
import Paginate from '../../components/Paginate'
import {connect} from "react-redux";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rowDetail: undefined,
      routes: [1, 2, 3, 4]
    }
  }

  async componentDidMount() {
    if (this.props.products.length) {
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

  updateProduct = (productId, data, inlineEdit = true) => {
    this.props.updateProduct({productId, data})
    if (inlineEdit === false) {
      const row = this.props.products.find((product) => product.id === productId)
      const fields = this.state.rowDetail.fields
      this.setState({rowDetail: {row, fields}})
    }
  }
  openRowDetail = ({row, fields}) => {
    this.setState({rowDetail: {row, fields}})
  }
  closeDetail = () => {
    this.setState({rowDetail: undefined})
  }

  render() {
    const {rowDetail} = this.state
    const {products, colors, listPaging, currentPage, gotoPage} = this.props
    const {updateProduct, openRowDetail, closeDetail} = this
    return (
      <div className="container">
        <ListProduct products={products}
                     colors={colors}
                     updateProduct={updateProduct}
                     detailProduct={openRowDetail}/>
        <Paginate pages={listPaging} currentPage={currentPage} changePage={gotoPage}/>
        <RowPopUpDetail rowDetail={rowDetail}
                        updateProduct={updateProduct}
                        colors={colors}
                        closeDetail={closeDetail}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {products} = state
  const totalRow = products.items.length
  const currentPage = products.currentPage || 1
  const perPage = 10
  return {
    products: paginate(products.items, perPage, currentPage),
    colors: products.colors,
    listPaging: listPaging(totalRow, perPage, currentPage),
    currentPage,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initializeProducts: (payload) => dispatch({type: 'INITIALIZE_PRODUCT', payload}),
    initializeColors: (payload) => dispatch({type: 'INITIALIZE_COLORS', payload}),
    updateProduct: (payload) => dispatch({type: 'UPDATE_PRODUCT', payload}),
    gotoPage: (payload) => dispatch({type: 'UPDATE_PAGE_NUMBER', payload}),

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Products)
function paginate(array, perPage, currentPage) {
  return array.slice((currentPage - 1) * perPage, currentPage * perPage);
}
function listPaging(totalRow, perPage, currentPage) {
  const last = Math.ceil(totalRow / perPage)
  const length = 5,
    show = 10
  let from, to
  if (last <= show) {
    from = 1
    to = last
  } else {
    if (currentPage <= length + 1) {
      from = 1
      to = show
    } else if (currentPage > last - length) {
      from = last - show + 1
      to = last
    } else {
      from = Math.max(1, currentPage - length)
      to = Math.min(last, currentPage + length - 1)
    }
  }
  const diff = to - from + 1
  return [...Array(to)].map((el, idx) => [1 + idx]).slice(-diff)
}
