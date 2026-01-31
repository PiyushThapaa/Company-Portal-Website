import React from 'react'

function CTAButton({text, onClick}) {
  return (
    <button onClick={onClick} className='bg-black text-white px-5 py-3 rounded-[10px] cursor-pointer whitespace-nowrap'>{text}</button>
  )
}

export default CTAButton