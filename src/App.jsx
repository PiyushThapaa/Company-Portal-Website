import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom"
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

  const rerenderNavigate = useNavigate()

  const { user, loading, setLoading } = useContext(AuthContext)
  const [role,setRole] = useState(null)

  const fetchUserData = async () => {
    const userRef = doc(db, "Users",user.uid);
    try {
      const querySnapShot = await getDoc(userRef);
      setRole(querySnapShot.data().role)

      //To Navigate the page to / after the role is updated after login 
      rerenderNavigate("/")
    } catch (error) {
      console.log("Something went Wrong: ", error.message)
    } finally{
      setLoading(false)
    }
  }

  useEffect(() => {
      if (user) {
        fetchUserData()
      } else {
        setRole(null)
        // To navigate to / in case the user is null
        rerenderNavigate("/")
      }
  }, [user])

  return (
    loading ? <div>Loading...</div> :
    role ?
    role=="manager" ?
    <div className='text-[14px]'>
        <Routes>
          <Route path='/' element={<Navigate to="/manager-dashboard" replace />} />
          <Route path='/manager-dashboard' element={<ManagerDashboard />} />
          <Route path='/add-an-employee' element={<AddAnEmployeeForm />} />
          <Route path='/leave-request-details' element={<LeaveRequestDetails />} />
        </Routes>
    </div>
    :
    <div className='text-[14px]'>
        <Routes>
          <Route path='/' element={<Navigate to="/leaves-overview" replace />} />
          <Route path='/leave-apply-form' element={<LeaveApplyForm />} />
          <Route path='/leaves-overview' element={<LeavesOverview />} />
        </Routes>
    </div>
    :
    <div className='text-[14px]'>
        <Routes>
        <Route path='/' element={<Navigate to="/login" replace />} />
          <Route path='/login' element={<Login />} />
        </Routes>
    </div>
  )
}

export default App