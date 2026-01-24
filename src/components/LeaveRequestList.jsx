import React from 'react'

function LeaveRequestList() {
    return (
        <table className="w-full border border-gray-300 border-collapse text-center mt-[30px]">
            <thead className="bg-gray-100">
                <tr>
                    <th className="px-4 py-2 font-semibold border-b">Name</th>
                    <th className="px-4 py-2 font-semibold border-b">Duration</th>
                    <th className="px-4 py-2 font-semibold border-b">Status</th>
                    <th className="px-4 py-2 font-semibold border-b">Details</th>
                </tr>
            </thead>
            <tbody>
                <tr className="hover:bg-gray-50">
                    <td className="px-4 py-2 border-b">Keven</td>
                    <td className="px-4 py-2 border-b">15-01-2025 <b>to</b> 17-01-2025</td>
                    <td className="px-4 py-2 border-b bg-yellow-400">Pending</td>
                    <td className="px-4 py-2 border-b hover:no-underline underline text-[#2563eb] cursor-pointer">View</td>
                </tr>
            </tbody>
            <tbody>
                <tr className="hover:bg-gray-50">
                    <td className="px-4 py-2 border-b">Eleven</td>
                    <td className="px-4 py-2 border-b">04-12-2025 (First Half)</td>
                    <td className="px-4 py-2 border-b bg-green-400">Approved</td>
                    <td className="px-4 py-2 border-b hover:no-underline underline text-[#2563eb] cursor-pointer">View</td>
                </tr>
            </tbody>
        </table>
    )
}

export default LeaveRequestList