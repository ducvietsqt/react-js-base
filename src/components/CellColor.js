import { useState, useRef } from 'react'

export default function CellThumbnail(props) {
  const {value, colors = [], updateCell} = props
  const [open, openMenu] = useState(false)
  const menuRef = useRef(null)
  const getBg = (id) => {
    const color = colors.find((color) => color.id === id)
    return color ? color.name : ''
  }

  // Show the menu
  document.addEventListener('click', function (e) {
    documentClickHandler(e)
  })
  // Hide the menu when clicking outside of it
  const documentClickHandler = (e) => {
    try {
      const isClickedOutside = !menuRef.current.contains(e.target)
      if (isClickedOutside) {
        document.removeEventListener('click', documentClickHandler)
        openMenu(false)
      }
    }catch (e) {
      console.log(e.message)
    }
  }

  return (
    <div className="color-cell" onClick={() => openMenu(!open)} ref={menuRef}>
      <div className="color-cell--value" style={{background: getBg(value)}}/>
      { open && <div className="list-color">
        {colors.map((color, index) =>
          <div key={index}
               className="color-cell--item" onClick={() => updateCell(color.id)}>
            <div className="color-point" style={{background: color.name}} />
            <div className="color-label">{color.name}</div>
          </div>
        )}
      </div>}
    </div>
  )
}
