import React from 'react'
import SearchIcon from "../assets/SearchIcon.svg"
import CTAButton from './CTAButton'

function ListOfEmployees() {
  return (
    <div className='m-auto w-[90%]'>
        <div className='flex'>
            <div className='relative w-full'>
                <input type="text" name="" id="" placeholder='Name...' className='w-full h-full border-2 border-black rounded-[10px] p-2'/>
                <img src={SearchIcon} alt="search-icon" className='absolute top-1/2 -translate-y-1/2 right-2 w-5' />
            </div>
            <div className='bg-[#F3F4F6] px-5 py-3 rounded-[10px] border border-[#E5E7EB] mx-[10px] whitespace-nowrap'>
                <p>Total Employees : 40</p>
            </div>
            <div className='mx-[10px]'>
                <CTAButton text={"Add an Employee"} />
            </div>
        </div>
    </div>
  )
}

export default ListOfEmployees