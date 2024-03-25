import React from 'react'
import './style.css'

const Button = ({text,onClick,disabled,style}) => {
  return (
    <div style={style}  onClick={onClick} disabled = {disabled} className='btn'>{text}  </div>
  )
}

export default Button