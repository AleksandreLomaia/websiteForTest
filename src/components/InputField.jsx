import React from 'react'
import LoopLogo from '../assets/svgs/loopLogo'
import './InputField.css'

const InputLoop = () => {
  return (
    <div className='input-box'>
       <input className='input-field' type="text"  placeholder='Search for a lcoation' />
       <LoopLogo className="Logo" />
       <button className='continue'>Continue</button>
    </div>
  )
}

export default InputLoop