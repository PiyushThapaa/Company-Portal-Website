import React, { useState } from 'react'
import Logo from "../assets/project-logo.png"
import CTAButton from '../components/CTAButton'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../utils/firebase'

function Login() {

  const [cred, setCred] = useState({email:"", password:""})

  const loginHandler = async (e) => {
    e.preventDefault();
    if (cred.email == "" || cred.password == "") {
      alert("Enter all fields...");
      return;
    }
    try {
      const userCredentials = await signInWithEmailAndPassword(auth, `${cred.email}@app.com`, cred.password) 
      console.log("User logged in as ", userCredentials.user)
    } catch (error) {
      console.error("Error Ocurred, ", error.message)
    }
  }

  return (
    <div className='container mx-auto'>
        <header className='m-5 flex justify-between items-center'>
            <div className='flex-1'>
              <img src={Logo} alt="" width={80} height={80} />
            </div>
            <h1 className='text-[30px] font-bold text-center md:text-[40px]'>Company Portal</h1>
            <div className='flex-1'></div>
        </header>
        <main className='flex justify-center'>
          <form className='border-[1px] border-black rounded-lg p-5 w-96 max-w-full m-5 mt-10'>
            <h1 className='text-center text-[30px] font-bold'>Login</h1>
            <label htmlFor="id" className='text-sm block mt-5 font-[600]'>ID Number</label>
            <input type="text" name="id" id="id" onChange={(e)=>setCred({...cred,email:e.target.value})} className='mt-[10px] border-[1px] border-black rounded-lg w-full p-2 bg-[#F0F0F0] text-sm' />
            <label htmlFor="password" className='text-sm block mt-5 font-[600]'>Password</label>
            <input type="password" name="password" id="password" onChange={(e)=>setCred({...cred,password:e.target.value})} className='mt-[10px] border-[1px] border-black rounded-lg w-full p-2 bg-[#F0F0F0] text-sm'/>
            <div className='text-center mt-5'>
              <CTAButton text={"Login"} onClick={(e)=>loginHandler(e)}/>
            </div>
          </form>
        </main>
    </div>
  )
}

export default Login