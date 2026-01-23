import React, { useState } from 'react'
import Header from '../../components/Header'
import CTAButton from '../../components/CTAButton'
import LeaveModal from '../../components/LeaveModal';

function LeavesOverview() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='mx-auto text-[14px]'>
            <Header role={"Employee ID"} id={11223} />
            <main className='mx-[30px]'>
                <h1 className='text-[40px] font-bold text-center'>Leaves Overview</h1>
                <div className='text-right my-[30px]'>
                    <CTAButton text={"Apply for Leave"} />
                </div>
                <table className="w-full border border-gray-300 border-collapse text-center mt-[30px]">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 font-semibold border-b">Type of Leave</th>
                            <th className="px-4 py-2 font-semibold border-b">Duration</th>
                            <th className="px-4 py-2 font-semibold border-b">Status</th>
                            <th className="px-4 py-2 font-semibold border-b">Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:bg-gray-50">
                            <td className="px-4 py-2 border-b">Full Day</td>
                            <td className="px-4 py-2 border-b">15-01-2025 <b>to</b> 17-01-2025</td>
                            <td className="px-4 py-2 border-b bg-yellow-400">Pending</td>
                            <td className="px-4 py-2 border-b hover:no-underline underline text-[#2563eb] cursor-pointer" onClick={()=>setIsOpen(true)}>View</td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr className="hover:bg-gray-50">
                            <td className="px-4 py-2 border-b">Half Day</td>
                            <td className="px-4 py-2 border-b">04-12-2025 (First Half)</td>
                            <td className="px-4 py-2 border-b bg-green-400">Approved</td>
                            <td className="px-4 py-2 border-b hover:no-underline underline text-[#2563eb] cursor-pointer" onClick={()=>setIsOpen(true)}>View</td>
                        </tr>
                    </tbody>
                </table>
            </main>
            <div className="h-screen flex items-center justify-center">
                {isOpen && <LeaveModal onClose={() => setIsOpen(false)} />}
            </div>
        </div>
    )
}

export default LeavesOverview