import React, {useContext} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from './Pages/Login'
import LeaveApplyForm from './Pages/EmployeeDashboard/LeaveApplyForm'
import ManagerDashboard from './Pages/ManagerDashboard/ManagerDashboard'
import LeavesOverview from './Pages/EmployeeDashboard/LeavesOverview'
import AddAnEmployeeForm from './Pages/ManagerDashboard/AddAnEmployeeForm'
import LeaveRequestDetails from './Pages/ManagerDashboard/LeaveRequestDetails'
import {getAuth} from "firebase/auth"
import app from './utils/firebase'
import { AuthContext } from './utils/AuthContext'

function App() {

  const {user} = useContext(AuthContext)
  if (user) {
    console.log(user.uid)
  }

  return (
    <div className='text-[14px]'>
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/manager-dashboard' element={<ManagerDashboard />} />
        <Route path='/leaves-overview' element={<LeavesOverview />} />
      </Routes>
    </Router>
    {/* <LeaveApplyForm /> */}
    {/* <ManagerDashboard /> */}
    {/* <LeavesOverview /> */}
    {/* <AddAnEmployeeForm /> */}
    {/* <LeaveRequestDetails /> */}
    </div>
  )
}

export default App