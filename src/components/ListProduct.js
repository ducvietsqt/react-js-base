import {Component} from 'react'
import PropTypes from 'prop-types';
import './products.scss'
import CellThumbnail from './CellThumbnail'
import CellColor from './CellColor'
import CellTextField from './CellTextField'
import LinkOpenDetail from './LinkOpenDetail'

export default class ListProduct extends Component {
  static defaultProps = {
    products: [],
    fields: [
      {
        fieldName: 'id',
        label: 'ID',
      },
      {
        fieldName: 'errorDescription',
        label: 'Error Description',
      },
      {
        fieldName: 'image',
        label: 'Product Image',
        component: CellThumbnail,
      },
      {
        fieldName: 'name',
        label: 'Product Name',
        component: CellTextField,
      },
      {
        fieldName: 'sku',
        label: 'SKU',
        component: CellTextField,
      },
      {
        fieldName: 'color',
        label: 'Color',
        component: CellColor,
      },
    ],
    colors: [],
  }

  cellTypeView = (field = {}, value, rowId) => {
    const { component } = field
    const { colors } = this.props
    const { updateProduct } = this
    if(component) {
      const CellView = component
      const fieldName = field.fieldName
      const updateCell = (value) => {
        return updateProduct(rowId, {[fieldName]: value})
      }
      const props = { value, colors, updateCell }
      return <CellView {...props} />
    }
    return <div> { value }</div>
  }
  rowDetail = (row, fields) => {
    this.props.detailProduct({row, fields})
  }
  rowsCell = (row = {}) => {
    const { cellTypeView, rowDetail } = this
    const {fields = []} = this.props
    return fields.map((field, index) =>
      <td key={`${row.id}-${field.fieldName}`}>
        <div className="flex">
          {cellTypeView(field, row[field.fieldName], row.id)}
          { index === 0 && <LinkOpenDetail click={() => rowDetail(row, fields)}/>}
        </div>
      </td>
    )
  }
  updateProduct = async (productId, data) => {
    const {updateProduct } = this.props
    updateProduct(productId, data)
    // TODO: integrate API await updateProduct(productId, data)
  }
  render() {
    const {products, fields} = this.props
    const {rowsCell} = this

    return (
      <table className="table-products">
        <thead>
        <tr>
          {fields.map((field) => <th key={field.fieldName}> {field.label}</th>)}
        </tr>
        </thead>
        <tbody>
        {products.map((product) => (
          <tr className="row" key={product.id}>
            {rowsCell(product)}
          </tr>
        ))}
        </tbody>
      </table>
    )
  }
}
ListProduct.propTypes = {
  products: PropTypes.array,
  fields: PropTypes.array,
  colors: PropTypes.array,
  updateProduct: PropTypes.func,
  detailProduct: PropTypes.func,
}
