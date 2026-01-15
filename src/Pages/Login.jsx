import React from 'react'
import Logo from "../assets/project-logo.png"

function Login() {
  return (
    <div className='container'>
        <header className='m-5 flex justify-between items-center'>
            <div className='flex-1'>
              <img src={Logo} alt="" width={80} height={80} />
            </div>
            <h1 className='text-[40px] font-bold text-center'>Company Portal</h1>
            <div className='flex-1'></div>
        </header>
        <main>
          
        </main>
    </div>
  )
}

export default Login