import React, { useContext, useState } from 'react'
import Header from '../../components/Header'
import CancelButton from '../../components/CancelButton'
import CTAButton from '../../components/CTAButton'
import { addDoc, collection, doc, getDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../../utils/firebase'
import { AuthContext } from '../../utils/AuthContext'
import { useNavigate } from 'react-router-dom'

function LeaveApplyForm() {

    const { user } = useContext(AuthContext)
    const Navigate = useNavigate()

    const [typeState, setTypeState] = useState(true)
    const [fullDayData, setFullDayData] = useState({from:"", to:""})
    const [halfDayData, setHalfDayData] = useState({date:"", session:"First Half"})
    const [reason, setReason] = useState("")
    
    const leaveApplyHandler = async (e) => {
        e.preventDefault();
        if (typeState) {
            if (fullDayData.from == "" || fullDayData.to == "" || reason == "") {
                alert("Please fill All the fields...")
                return;
            }
            const userRef = doc(db, "Users",user.uid);
            const querySnapShot = await getDoc(userRef);
            try {
                const leaveCollection = collection(db,"Leaves");
                await addDoc(leaveCollection,{
                    type_of_leave:"Full Day",
                    ...fullDayData,
                    employee_id:user.uid,
                    employee_name:querySnapShot.data().name,
                    reason:reason,
                    status:"Pending",
                    manager_cmt:"No Comment Yet",
                    createdAt: serverTimestamp()
                })
                console.log("Leave request sent to manager for approval")
                Navigate("/leaves-overview")
            } catch (error) {
                console.error("Error Ocurred : ",error.message)
            }
        } else {
            if (halfDayData.date == "" || halfDayData.session == "" || reason == "") {
                alert("Please fill All the fields...")
                return;
            }
            const userRef = doc(db, "Users",user.uid);
            const querySnapShot = await getDoc(userRef);
            try {
                const leaveCollection = collection(db,"Leaves");
                await addDoc(leaveCollection,{
                    type_of_leave:"Half Day",
                    ...halfDayData,
                    employee_id:user.uid,
                    employee_name:querySnapShot.data().name,
                    reason:reason,
                    status:"Pending",
                    manager_cmt:"No Comment Yet",
                    createdAt: serverTimestamp()
                })
                console.log("Leave request sent to manager for approval")
                Navigate("/leaves-overview")
            } catch (error) {
                console.error("Error Ocurred : ",error.message)
            }   
        }
    }

    return (
        <div className='container mx-auto'>
            <Header />
            <main>
                <h1 className='text-[40px] font-bold text-center'>Apply for Leaves</h1>
                <div className='flex justify-center'>
                    <form action="" className='border-[1px] border-black rounded-lg p-5 w-[600px] max-w-full m-5' >
                        <label htmlFor="LeaveType" className='text-sm block mt-5 font-[600]'>Leave Type</label>
                        <select name="LeaveType" id="LeaveType" className='mt-[10px] border-[1px] border-black rounded-lg w-full p-2 bg-[#F0F0F0] text-sm' onChange={(e)=>e.target.value=="Full Day"?setTypeState(true):setTypeState(false)}>
                            <option value="Full Day">Full Day</option>
                            <option value="Half Day">Half Day</option>
                        </select>
                        {
                            typeState ?
                                <div className='flex justify-between flex-wrap'>
                                    <div className='w-full md:w-[49%]'>
                                        <label htmlFor="from" className='text-sm block mt-5 font-[600]'>From</label>
                                        <input type="date" name="from" id="from" className='mt-[10px] border-[1px] border-black rounded-lg w-full p-2 bg-[#F0F0F0] text-sm' value={fullDayData.from} onChange={e=>setFullDayData({...fullDayData,from:e.target.value})} />
                                    </div>
                                    <div className='w-full md:w-[49%]'>
                                        <label htmlFor="to" className='text-sm block mt-5 font-[600]'>To</label>
                                        <input type="date" name="to" id="to" className='mt-[10px] border-[1px] border-black rounded-lg w-full p-2 bg-[#F0F0F0] text-sm' value={fullDayData.to} onChange={e=>setFullDayData({...fullDayData,to:e.target.value})}/>
                                    </div>
                                </div>
                                :
                                <div className='flex justify-between flex-wrap'>
                                    <div className='w-full md:w-[49%]'>
                                        <label htmlFor="date" className='text-sm block mt-5 font-[600]'>Date</label>
                                        <input type="date" name="date" id="date" className='mt-[10px] border-[1px] border-black rounded-lg w-full p-2 bg-[#F0F0F0] text-sm' value={halfDayData.date} onChange={e=>setHalfDayData({...halfDayData,date:e.target.value})}/>
                                    </div>
                                    <div className='w-full md:w-[49%]'>
                                        <label htmlFor="session" className='text-sm block mt-5 font-[600]'>Session</label>
                                        <select name="session" id="session" className='mt-[10px] border-[1px] border-black rounded-lg w-full p-2 bg-[#F0F0F0] text-sm' value={halfDayData.session} onChange={e=>setHalfDayData({...halfDayData,session:e.target.value})}>
                                            <option value="First Half">First Half</option>
                                            <option value="Second Half">Second Half</option>
                                        </select>
                                    </div>
                                </div>
                        }

                        <label htmlFor="reason" className='text-sm block mt-5 font-[600]'>Reason</label>
                        <input type="text" name="reason" id="reason" className='mt-[10px] border-[1px] border-black rounded-lg w-full p-2 bg-[#F0F0F0] text-sm'  value={reason} onChange={e=>setReason(e.target.value)}/>
                        <div className='mt-10 text-center'>
                            <CTAButton text={"Submit"} onClick={e=>leaveApplyHandler(e)} />
                            <CancelButton to={'/leaves-overview'} />
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
}

export default LeaveApplyForm