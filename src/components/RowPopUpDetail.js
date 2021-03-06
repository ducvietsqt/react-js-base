import './popup.scss'
export default function RowDetail(props) {
  const {rowDetail = {}, updateProduct, closeDetail} = props
  const {row = {}, fields = []} = rowDetail
  const viewCell = (field = {}, value, rowId) => {
    const { component } = field
    const { colors = [] } = props
    if(component) {
      const CellView = component
      const { fieldName, maxLength, required } = field
      const updateCell = (value) => {
        return updateProduct(rowId, {[fieldName]: value}, false)
      }
      const props = { value, colors, updateCell, maxLength, required }
      return <CellView {...props} />
    }
    return <div> { value }</div>
  }
  const initOpen = Object.keys(row).length > 0
  let cls = 'drawer-detail'
  cls = initOpen ? `${cls} drawer-detail--open` : cls
  return (
    <div className={cls}>
      <div className="drawer-detail--content">
        <div className="bar-icon" onClick={closeDetail}>
          <i className="fas fa-bars"></i>
        </div>
        {fields.map((field, index) =>
          <div key={index} className="row-detail">
            <div className="label">
              { field.label }
            </div>
            <div className="content">
              { viewCell(field, row[field.fieldName], row.id) }
            </div>
          </div>)}
      </div>
    </div>
  )
}
