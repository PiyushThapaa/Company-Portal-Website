import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from './Pages/Login'
import LeaveApplyForm from './Pages/EmployeeDashboard/LeaveApplyForm'
import ManagerDashboard from './Pages/ManagerDashboard/ManagerDashboard'
import LeavesOverview from './Pages/EmployeeDashboard/LeavesOverview'
import AddAnEmployeeForm from './Pages/ManagerDashboard/AddAnEmployeeForm'
import LeaveRequestDetails from './Pages/ManagerDashboard/LeaveRequestDetails'
import { getAuth } from "firebase/auth"
import app from './utils/firebase'
import { db } from './utils/firebase'
import { getDoc, doc } from 'firebase/firestore'
import { AuthContext } from './utils/AuthContext'

function App() {

  const { user } = useContext(AuthContext)
  const [role,setRole] = useState(null)

  const fetchUserData = async () => {
    const userRef = doc(db, "Users",user.uid);
    try {
      const querySnapShot = await getDoc(userRef);
      setRole(querySnapShot.data().role)
    } catch (error) {
      console.log("Something went Wrong: ", error.message)
    }
  }

  useEffect(() => {
    if (user) {
      fetchUserData()
    }
  }, [user])

  return (
    role ?
    role=="manager" ?
    <div className='text-[14px]'>
      <Router>
        <Routes>
          <Route path='/' element={<ManagerDashboard />} />
          <Route path='/manager-dashboard' element={<ManagerDashboard />} />
          <Route path='/leaves-overview' element={<LeavesOverview />} />
        </Routes>
      </Router>
    </div>
    :
    <div className='text-[14px]'>
      <Router>
        <Routes>
          <Route path='/manager-dashboard' element={<LeaveApplyForm />} />
          <Route path='/leaves-overview' element={<LeavesOverview />} />
        </Routes>
      </Router>
    </div>
    :
    <div className='text-[14px]'>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App