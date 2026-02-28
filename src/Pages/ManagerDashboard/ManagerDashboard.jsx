import React, { useState } from 'react'
import Header from '../../components/Header'
import ListOfEmployees from '../../components/ListOfEmployees'
import LeaveRequestList from '../../components/LeaveRequestList'

function ManagerDashboard() {
  const [mainComponent, setMainComponent] = useState(true)
  return (
    <div className='mx-auto'>
        <Header role={"Manager ID"} id={112233} />
        <main className='mx-[30px]'>
            <h1 className='text-3xl md:text-[40px] font-bold text-center'>Manager Dashboard</h1>
            <div className='text-center my-[30px]'>
                <button className={`${!mainComponent? "bg-[#D9D9D9] text-black border border-black":"bg-[#404040] text-white"} px-5 py-[10px] rounded-[20px] mr-2`} onClick={()=>setMainComponent(true)}>Leave Requests</button>
                <button className={`${mainComponent? "bg-[#D9D9D9] text-black border border-black":"bg-[#404040] text-white"} px-5 py-[10px] rounded-[20px] ml-2`} onClick={()=>setMainComponent(false)}>List of Employees</button>
            </div>
            {!mainComponent && <ListOfEmployees />}
            {mainComponent && <LeaveRequestList />}
        </main>
    </div>
  )
}

export default ManagerDashboard