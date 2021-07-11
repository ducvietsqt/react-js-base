export default function LinkOpen(props) {
  const { click } = props
  return (
    <div onClick={click} className="link-open">
      <i className="fas fa-external-link-alt"></i>
    </div>
  )
}
