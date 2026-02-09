import React, { useContext, useState } from 'react'
import Logo from "../assets/project-logo.png"
import ProfileIcon from "../assets/ProfileIcon.svg"
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { AuthContext } from '../utils/AuthContext'

function Header({ role, id }) {

    const [logoutbtn, setLogoutbtn] = useState(false)
    const { setAuthChanged } = useContext(AuthContext)

    const logout = async () => {
        try {
            await signOut(auth);
            console.log("User Logged Out")
            setAuthChanged(prev=>!prev)
        } catch (err) {
            console.log("Error logging Out: ", err.message)
        }
    }

    return (
        <header className='flex m-[30px] justify-between'>
            <img src={Logo} alt="Logo" width={50} />
            <div className='flex items-center gap-4 relative'>
                <p>{role} : {id}</p>
                <img src={ProfileIcon} alt="Profile Logo" width={40} onClick={()=>setLogoutbtn(prev=>!prev)} className='cursor-pointer' />
                <div className={`absolute right-4 bottom-[-28px] ${logoutbtn?"block":"hidden"}`}>
                    <div className='relative'>
                        <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[5px] border-b-black absolute top-0 right-0 transform -translate-y-full"></div>
                        <button className='bg-black text-white py-1 px-2 rounded rounded-tr-none' onClick={logout}>Logout</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header