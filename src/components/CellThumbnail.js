export default function CellThumbnail (props) {
  const { value } = props
  return (
    <div className="image-cell">
      <img src={value} alt=""/>
    </div>
  )
}
