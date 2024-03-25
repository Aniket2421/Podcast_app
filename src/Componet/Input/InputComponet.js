import React from 'react'
import "../Input/style.css"

const InputComponet = ({ type, state, setState, placeholder, required }) => {
  return (
    <div>
      <input
        type={type}
        value={state}
        onChange={(e) => setState(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="custom-input"
      />
    </div>
  )
}

export default InputComponet