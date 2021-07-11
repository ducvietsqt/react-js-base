import { useState, useRef } from 'react'
export default function CellTextField(props) {
  const { value, updateCell } = props
  const [editable, setEditable] = useState(false)
  const onBlur = (e) => {
    setEditable(false)
  }
  const onKeyDown = (e) => {
    if(e.key === 'Enter') {
      const text = e.target.value
      updateCell(text)
      setEditable(false)
    }
  }
  return (
    <div className="cell--text-field">
      <div>
        { editable && <input className="input-field"
                             autoFocus={true}
                             defaultValue={value}
                             onBlur={onBlur}
                             onKeyDown={onKeyDown}
                             type="text"/> || value}
      </div>
      <div className="icon-edit" onClick={() => setEditable(!editable)}>
        <i className="fas fa-pen"></i>
      </div>
    </div>
  )
}
