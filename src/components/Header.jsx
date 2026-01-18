import React from 'react'
import Logo from "../assets/project-logo.png"
import ProfileIcon from "../assets/ProfileIcon.svg"

function Header({role, id}) {
    return (
        <header className='flex m-[30px] justify-between'>
            <img src={Logo} alt="Logo" width={50} />
            <div className='flex items-center gap-4'>
                <p>{role} : {id}</p>
                <img src={ProfileIcon} alt="Profile Logo" width={40} />
            </div>
        </header>
    )
}

export default Header