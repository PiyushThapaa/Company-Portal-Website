import React from 'react'
import Header from '../../components/Header'
import ListOfEmployees from '../../components/ListOfEmployees'

function ManagerDashboard() {
  return (
    <div className='mx-auto'>
        <Header role={"Manager ID"} id={112233} />
        <main>
            <h1 className='text-[40px] font-bold text-center'>Manager Dashboard</h1>
            <div className='text-center m-[30px]'>
                <button className='bg-[#D9D9D9] px-5 py-[10px] border border-black rounded-[20px] text-black mr-2'>Leave Requests</button>
                <button className='bg-[#404040] px-5 py-[10px] rounded-[20px] text-white ml-2'>List of Employees</button>
            </div>
            <ListOfEmployees />
        </main>
    </div>
  )
}

export default ManagerDashboard