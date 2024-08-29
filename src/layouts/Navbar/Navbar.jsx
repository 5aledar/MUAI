import React from 'react'
import Logo from '../../assets/MUAI-logo.png'
const Navbar = () => {
    const navItems = [
        'Sumz', 'Ai Chat' , 'About Us'
    ]
    return (
        <div className='flex items-center justify-between w-full h-14 bg-slate-200'>

            <img src={Logo} alt='logo' className='w-28 h-14 object-contain' />
            <ul className='flex mr-10'>
                {navItems.map((item)=>(
                    <li key={`item ${item}`} className='px-5 cursor-pointer'>
                        <p className='font-medium text-teal-700 hover:font-bold '>{item}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Navbar

