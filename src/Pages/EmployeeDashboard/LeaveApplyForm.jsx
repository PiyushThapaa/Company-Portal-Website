import React from 'react'
import Header from '../../components/Header'
import CancelButton from '../../components/CancelButton'
import CTAButton from '../../components/CTAButton'

function LeaveApplyForm() {
    return (
        <div className='container mx-auto'>
            <Header role={"Employee ID"} id={11223} />
            <main>
                <h1 className='text-[40px] font-bold text-center'>Apply for Leaves</h1>
                <div className='flex justify-center'>
                    <form action="" className='border-[1px] border-black rounded-lg p-5 w-[600px] max-w-full m-5' >
                        <label htmlFor="LeaveType" className='text-sm block mt-5 font-[600]'>Leave Type</label>
                        <select name="LeaveType" id="LeaveType" className='mt-[10px] border-[1px] border-black rounded-lg w-full p-2 bg-[#F0F0F0] text-sm'>
                            <option value="fullday">Full Day</option>
                            <option value="halfday">Half Day</option>
                        </select>
                        <div className='flex justify-between flex-wrap'>
                            <div className='w-full md:w-[49%]'>
                                <label htmlFor="from" className='text-sm block mt-5 font-[600]'>From</label>
                                <input type="date" name="from" id="from" className='mt-[10px] border-[1px] border-black rounded-lg w-full p-2 bg-[#F0F0F0] text-sm' />
                            </div>
                            <div className='w-full md:w-[49%]'>
                                <label htmlFor="to" className='text-sm block mt-5 font-[600]'>To</label>
                                <input type="date" name="to" id="to" className='mt-[10px] border-[1px] border-black rounded-lg w-full p-2 bg-[#F0F0F0] text-sm' />
                            </div>
                        </div>
                        <label htmlFor="reason" className='text-sm block mt-5 font-[600]'>Reason</label>
                        <input type="text" name="reason" id="reason" className='mt-[10px] border-[1px] border-black rounded-lg w-full p-2 bg-[#F0F0F0] text-sm' />
                        <div className='mt-10 text-center'>
                            <CTAButton text={"Submit"} />
                            <CancelButton />
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
}

export default LeaveApplyForm