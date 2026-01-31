import React from 'react'
import Login from './Pages/Login'
import LeaveApplyForm from './Pages/EmployeeDashboard/LeaveApplyForm'
import ManagerDashboard from './Pages/ManagerDashboard/ManagerDashboard'
import LeavesOverview from './Pages/EmployeeDashboard/LeavesOverview'
import AddAnEmployeeForm from './Pages/ManagerDashboard/AddAnEmployeeForm'
import LeaveRequestDetails from './Pages/ManagerDashboard/LeaveRequestDetails'

import {getAuth} from "firebase/auth"
import app from './utils/firebase'

function App() {

  const auth = getAuth(app);
  // console.log(auth)

  return (
    <div className='text-[14px]'>
    <Login />
    {/* <LeaveApplyForm /> */}
    {/* <ManagerDashboard /> */}
    {/* <LeavesOverview /> */}
    {/* <AddAnEmployeeForm /> */}
    {/* <LeaveRequestDetails /> */}
    </div>
  )
}

export default App