import React from 'react'
import '../styles/Button.css'

const Button = (props) => {
    const text = props.text;
  return (
    <div>
        <button className='button'>{text}</button>
    </div>
  )
}

export default Button