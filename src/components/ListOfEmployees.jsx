import React from 'react'
import SearchIcon from "../assets/SearchIcon.svg"
import CTAButton from './CTAButton'
import DeleteIcon from "../assets/DeleteIcon.svg"

function ListOfEmployees() {
    return (
        <div className='m-auto w-full'>
            <div className='flex'>
                <div className='relative w-full'>
                    <input type="text" name="" id="" placeholder='Name...' className='w-full h-full border-2 border-black rounded-[10px] p-2' />
                    <img src={SearchIcon} alt="search-icon" className='absolute top-1/2 -translate-y-1/2 right-2 w-5' />
                </div>
                <div className='bg-[#F3F4F6] px-5 py-3 rounded-[10px] border border-[#E5E7EB] mx-[10px] whitespace-nowrap'>
                    <p>Total Employees : 40</p>
                </div>
                <div className='ml-[10px]'>
                    <CTAButton text={"Add an Employee"} />
                </div>
            </div>
            <table className="w-full border border-gray-300 border-collapse text-center mt-[30px]">
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

        </div>
    )
}

export default ListOfEmployees