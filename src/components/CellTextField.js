import {useState} from 'react'

export default function CellTextField(props) {
  const {value, maxLength, required, updateCell} = props
  const [editable, setEditable] = useState(false)
  const [msg, setMsg] = useState('')
  const validationField = (value) => {
    const text = value.toString().trim()
    let valid = true
    let msg = ''
    const rules = {
      required: {
        isValid: text.length > 0,
        mess: `This field required`
      },
      maxLength: {
        isValid: text.length < maxLength,
        mess: `A maximum of ${maxLength} characters is allowed`
      }
    }
    const r = ['required', 'maxLength']
    for (let i = 0; i < r.length; i++) {
      const rule = r[i]
      const {isValid, mess} = rules[rule]
      if (!isValid) {
        valid = isValid
        msg = mess
        break
      }
    }
    return {
      valid, msg
    }
  }
  const onBlur = (e) => {
    setEditable(false)
    setMsg('')
  }
  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      const text = e.target.value
      const {valid, msg} = validationField(text)
      if (!valid) {
        return setMsg(msg)
      }
      updateCell(text)
      setEditable(false)
    }
  }
  return (
    <div className="cell--text-field">
      <div>
        {editable && <input className="input-field"
                            autoFocus={true}
                            defaultValue={value}
                            onBlur={onBlur}
                            onKeyDown={onKeyDown}
                            type="text"/> || value}
        {msg && <label className="err-mess">{msg}</label>}
      </div>
      <div className="icon-edit" onClick={() => setEditable(!editable)}>
        <i className="fas fa-pen"></i>
      </div>
    </div>
  )
}
