import React, { useState } from 'react'
import Header from '../../components/Header'
import CTAButton from '../../components/CTAButton'
import CancelButton from '../../components/CancelButton'

function LeaveRequestDetails() {
    const [dropdownColor, setDropdownColor] = useState("bg-yellow-500 text-black")

    const dropdownColorHandler = (e) => {
        if (e.target.value == "pending") {
            setDropdownColor("bg-yellow-500 text-black")
        } else if(e.target.value == "approve"){
            setDropdownColor("bg-green-500 text-white")
        } else {
            setDropdownColor("bg-red-500 text-white")
        }
    }
  return (
    <div className='mx-auto'>
        <Header />
        <main>
            <h1 className='text-[40px] font-bold text-center mb-[30px]'>Leave Request Details</h1>
            <div className="relative bg-white rounded-xl w-[90%] max-w-[600px] p-6 z-10 mx-auto border border-black">
                <div className='flex justify-between mb-4'>
                    <b>Employee ID</b>
                    <p>112233</p>
                </div>
                <div className='flex justify-between mb-4'>
                    <b>Employee Name</b>
                    <p>Keven</p>
                </div>
                <div className='flex justify-between mb-4'>
                    <b>Date of Submission</b>
                    <p>29-06-2025</p>
                </div>
                <div className='flex justify-between mb-4'>
                    <b>Type of Leave</b>
                    <p>Full Day</p>
                </div>
                <div className='flex justify-between mb-4'>
                    <b>Duration</b>
                    <p>29-06-2025 <b>to</b> 30-06-2025</p>
                </div>
                <div className='flex justify-between mb-4'>
                    <b>Reason</b>
                    <p>Going Home</p>
                </div>
                <div className='flex justify-between mb-4 items-center'>
                    <b>Status</b>
                    <select name="status" id="status" className={`${dropdownColor} px-1 py-[5px] rounded`} onChange={(e)=>dropdownColorHandler(e)} >
                        <option value="pending" className='bg-white text-black'>Pending</option>
                        <option value="approve" className='bg-white text-black'>Approve</option>
                        <option value="reject" className='bg-white text-black'>Reject</option>
                    </select>
                </div>
                <div className='flex justify-between mb-4 flex-col'>
                    <b>Add Comment (Optional)</b>
                    <input type="text" name="" id="" className='border border-black rounded w-full my-3 px-2 py-2 bg-[#F0F0F0]' />
                </div>
                <div className='text-center'>
                    <CTAButton text={"Change Status"} />
                    <CancelButton />
                </div>
            </div>
        </main>
    </div>
  )
}

export default LeaveRequestDetails