import React from 'react'
import Header from '../../components/Header'

function LeaveRequestDetails() {
  return (
    <div className='mx-auto text-[14px]'>
        <Header role={"Manager"} id={112233} />
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
                    <select name="" id="">
                        <option value="" className='bg-yellow-400 text-white rounded'>Pending</option>
                        <option value="">Approve</option>
                        <option value="">Reject</option>
                    </select>
                </div>
                <div className='flex justify-between mb-4'>
                    <b>Manager's Comment</b>
                    <p>No comment yet</p>
                </div>
            </div>
        </main>
    </div>
  )
}

export default LeaveRequestDetails