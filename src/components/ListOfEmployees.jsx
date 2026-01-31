import React from 'react'
import SearchIcon from "../assets/SearchIcon.svg"
import CTAButton from './CTAButton'
import DeleteIcon from "../assets/DeleteIcon.svg"

function ListOfEmployees() {
    return (
        <div className='m-auto w-full'>
            <div className='flex flex-wrap md:flex-nowrap'>
                <div className='relative w-full'>
                    <input type="text" name="" id="" placeholder='Name...' className='w-full h-full border-2 border-black rounded-[10px] p-2' />
                    <img src={SearchIcon} alt="search-icon" className='absolute top-1/2 -translate-y-1/2 right-2 w-5' />
                </div>
                <div className='flex mt-5 md:mt-0 w-full justify-center'>
                    <div className='bg-[#F3F4F6] px-5 py-3 rounded-[10px] border border-[#E5E7EB]  md:mx-[10px] whitespace-nowrap'>
                    <p>Total Employees : 40</p>
                </div>
                <div className='ml-[10px]'>
                    <CTAButton text={"Add an Employee"} />
                </div>
                </div>
            </div>
            <table className="w-full border border-gray-300 border-collapse text-center mt-[30px] hidden md:table">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-4 py-2 font-semibold border-b">Employee ID</th>
                        <th className="px-4 py-2 font-semibold border-b">Employee Name</th>
                        <th className="px-4 py-2 font-semibold border-b">DOJ</th>
                        <th className="px-4 py-2 font-semibold border-b">Role</th>
                        <th className="px-4 py-2 font-semibold border-b">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border-b">112233</td>
                        <td className="px-4 py-2 border-b">Keven</td>
                        <td className="px-4 py-2 border-b">12-Dec-2025</td>
                        <td className="px-4 py-2 border-b">Frontend Developer</td>
                        <td className="px-4 py-2 border-b cursor-pointer">
                        <img src={DeleteIcon} alt="delete-icon" width={20} height={20} className='mx-auto'/>
                        </td>
                    </tr>
                </tbody>
                <tbody>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border-b">112233</td>
                        <td className="px-4 py-2 border-b">Keven</td>
                        <td className="px-4 py-2 border-b">12-Dec-2025</td>
                        <td className="px-4 py-2 border-b">Frontend Developer</td>
                        <td className="px-4 py-2 border-b cursor-pointer">
                        <img src={DeleteIcon} alt="delete-icon" width={20} height={20} className='mx-auto'/>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className='w-full my-[30px] md:hidden flex flex-wrap gap-2 justify-center'>
                <div className='w-80 border border-black p-5 rounded'>
                    <h2 className='text-xl text-center mb-2 font-bold'>Keven (112233)</h2>
                    <div className='flex justify-between'>
                        <b>DOJ</b>
                        <div>12-12-12</div>
                    </div>
                    <div className='flex justify-between'>
                        <b>Role</b>
                        <div>Frontend Developer</div>
                    </div>
                    <div className='text-center mt-3'>
                        <button className='bg-[#FC0005] py-1 px-2 rounded text-white'>Remove</button>
                    </div>
                </div>
                <div className='w-80 border border-black p-5 rounded'>
                    <h2 className='text-xl text-center mb-2 font-bold'>Keven (112233)</h2>
                    <div className='flex justify-between'>
                        <b>DOJ</b>
                        <div>12-12-12</div>
                    </div>
                    <div className='flex justify-between'>
                        <b>Role</b>
                        <div>Frontend Developer</div>
                    </div>
                    <div className='text-center mt-3'>
                        <button className='bg-[#FC0005] py-1 px-2 rounded text-white'>Remove</button>
                    </div>
                </div>
                <div className='w-80 border border-black p-5 rounded'>
                    <h2 className='text-xl text-center mb-2 font-bold'>Keven (112233)</h2>
                    <div className='flex justify-between'>
                        <b>DOJ</b>
                        <div>12-12-12</div>
                    </div>
                    <div className='flex justify-between'>
                        <b>Role</b>
                        <div>Frontend Developer</div>
                    </div>
                    <div className='text-center mt-3'>
                        <button className='bg-[#FC0005] py-1 px-2 rounded text-white'>Remove</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListOfEmployees