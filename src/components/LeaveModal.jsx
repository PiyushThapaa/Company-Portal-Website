import React from 'react'

function LeaveModal({onClose, data}) {

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">

            {/* Background Overlay */}
            <div
                className="absolute inset-0 bg-black/50"
                onClick={onClose}
            ></div>

            {/* Modal Box */}
            <div className="relative bg-white rounded-xl shadow-lg w-[90%] max-w-md p-6 z-10">
                <h2 className="text-xl font-semibold mb-4 text-center">Leave Details</h2>
                <hr className='mb-4'/>
                <div className='flex justify-between mb-4'>
                    <b>Date of Submission</b>
                    <p>{data.createdAt.toDate().toLocaleDateString("en-GB").split("/").join("-")}</p>
                </div>
                <div className='flex justify-between mb-4'>
                    <b>Type of Leave</b>
                    <p>{data.type_of_leave}</p>
                </div>
                <div className='flex justify-between mb-4'>
                    <b>Duration</b>
                    {data.type_of_leave == "Full Day" ?
                    <p>{data.from.split('-').reverse().join('-')} <b>to</b> {data.to.split('-').reverse().join('-')}</p> :
                    <p>{data.date.split('-').reverse().join('-')} ({data.session})</p>
                    }
                </div>
                <div className='flex justify-between mb-4'>
                    <b>Reason</b>
                    <p>{data.reason}</p>
                </div>
                <div className='flex justify-between mb-4 items-center'>
                    <b>Status</b>
                    <p className='bg-yellow-400 p-2 rounded-[10px]'>{data.status}</p>
                </div>
                <div className='flex justify-between mb-4'>
                    <b>Manager's Comment</b>
                    <p>{data.manager_cmt}</p>
                </div>
            </div>
        </div>
    )
}

export default LeaveModal