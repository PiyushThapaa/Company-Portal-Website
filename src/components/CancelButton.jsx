import React from 'react'
import { Link } from 'react-router-dom'

function CancelButton({to}) {
  return (
    <Link to={to} className='bg-[#D9D9D9] text-black px-5 py-3 rounded-lg cursor-pointer ml-[10px]'>Cancel</Link>
  )
}

export default CancelButton