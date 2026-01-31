import React from 'react'
import Header from '../../components/Header'
import CTAButton from '../../components/CTAButton'
import CancelButton from '../../components/CancelButton'

function AddAnEmployeeForm() {
    return (
        <div className='mx-auto'>
            <Header role={"Manager"} id={112233} />
            <main>
                <h1 className='text-[40px] text-center font-bold'>Add an Employee</h1>
                <div className='flex justify-center'>
                    <form action="" className='border-[1px] border-black rounded-lg p-5 w-[600px] max-w-full m-5' >
                        <label htmlFor="name" className='text-sm block mt-5 font-[600]'>Name of the Employee</label>
                        <input type="text" name="name" id="name" className='mt-[10px] border-[1px] border-black rounded-lg w-full p-2 bg-[#F0F0F0] text-sm' />
                        <label htmlFor="role" className='text-sm block mt-5 font-[600]'>Role</label>
                        <input type="text" name="role" id="role" className='mt-[10px] border-[1px] border-black rounded-lg w-full p-2 bg-[#F0F0F0] text-sm' />
                        <label htmlFor="password" className='text-sm block mt-5 font-[600]'>Password</label>
                        <input type="password" name="password" id="password" className='mt-[10px] border-[1px] border-black rounded-lg w-full p-2 bg-[#F0F0F0] text-sm' />
                        <label htmlFor="confirmpassword" className='text-sm block mt-5 font-[600]'>Confirm Password</label>
                        <input type="password" name="confirmpassword" id="confirmpassword" className='mt-[10px] border-[1px] border-black rounded-lg w-full p-2 bg-[#F0F0F0] text-sm' />
                        <div className='mt-10 text-center'>
                            <CTAButton text={"Add"} />
                            <CancelButton />
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
}

export default AddAnEmployeeForm