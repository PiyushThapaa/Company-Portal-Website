import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import CTAButton from '../../components/CTAButton'
import CancelButton from '../../components/CancelButton'
import { useSearchParams } from 'react-router-dom';
import { db } from '../../utils/firebase';
import { doc, getDoc } from 'firebase/firestore';

function LeaveRequestDetails() {

    //To find the id of the employee
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");

    const [leaveDetails, setLeaveDetails] = useState({})

    const fetchLeave = async () => {
        try {
            const docRef = doc(db, "Leaves", id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setLeaveDetails(docSnap.data());
            } else {
                console.log("No such document!");
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    const [dropdownColor, setDropdownColor] = useState("bg-yellow-500 text-black")

    const dropdownColorHandler = (e) => {
        if (e.target.value == "Pending") {
            setDropdownColor("bg-yellow-500 text-black")
        } else if (e.target.value == "Approve") {
            setDropdownColor("bg-green-500 text-white")
        } else {
            setDropdownColor("bg-red-500 text-white")
        }
    }

    useEffect(()=>{
        if (leaveDetails.status == "Pending") {
            setDropdownColor("bg-yellow-500 text-black");
        } else if(leaveDetails.status == "Approve"){
            setDropdownColor("bg-green-500 text-white");
        } else {
            setDropdownColor("bg-red-500 text-white")
        }
    },[leaveDetails])

    useEffect(() => {
        fetchLeave()
    }, [id])

    return (
        <div className='mx-auto'>
            <Header />
            <main>
                <h1 className='text-[40px] font-bold text-center mb-[30px]'>Leave Request Details</h1>
                <div className="relative bg-white rounded-xl w-[90%] max-w-[600px] p-6 z-10 mx-auto border border-black">
                    <div className='flex justify-between mb-4'>
                        <b>Employee Email</b>
                        <p>{leaveDetails?.employee_email}</p>
                    </div>
                    <div className='flex justify-between mb-4'>
                        <b>Employee Name</b>
                        <p>{leaveDetails?.employee_name}</p>
                    </div>
                    <div className='flex justify-between mb-4'>
                        <b>Date of Submission</b>
                        <p>{Object.keys(leaveDetails).length != 0 ? leaveDetails.date.split('-').reverse().join('-'):null}</p>
                    </div>
                    <div className='flex justify-between mb-4'>
                        <b>Type of Leave</b>
                        <p>{Object.keys(leaveDetails).length != 0 ? leaveDetails.type_of_leave.split('-').reverse().join('-'):null}</p>
                    </div>
                    <div className='flex justify-between mb-4'>
                        <b>Duration</b>
                        {
                            leaveDetails?.type_of_leave == "Full Day" ?
                                <p>{Object.keys(leaveDetails).length != 0 ? leaveDetails.from.split('-').reverse().join('-'):null} <b>to</b> {Object.keys(leaveDetails).length != 0 ? leaveDetails.to.split('-').reverse().join('-'):null}</p>
                                :
                                <p>{Object.keys(leaveDetails).length != 0 ? leaveDetails.date.split('-').reverse().join('-') : null} ({Object.keys(leaveDetails).length != 0 ? leaveDetails.session : null})</p>
                        }
                    </div>
                    <div className='flex justify-between mb-4'>
                        <b>Reason</b>
                        <p>{leaveDetails?.reason}</p>
                    </div>
                    <div className='flex justify-between mb-4 items-center'>
                        <b>Status</b>
                        <select name="status" id="status" className={`${dropdownColor} px-1 py-[5px] rounded`} onChange={(e) => dropdownColorHandler(e)} defaultValue={"approve"} >
                            <option value="Pending" className='bg-white text-black'>Pending</option>
                            <option value="Spprove" className='bg-white text-black'>Approve</option>
                            <option value="Reject" className='bg-white text-black'>Reject</option>
                        </select>
                    </div>
                    <div className='flex justify-between mb-4 flex-col'>
                        <b>Add Comment (Optional)</b>
                        <input type="text" name="cmt" id="cmt" className='border border-black rounded w-full my-3 px-2 py-2 bg-[#F0F0F0]' defaultValue={leaveDetails?.manager_cmt} />
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