import React from 'react'
import Logo from '../../assets/MUAI-logo.png'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate()
    const navItems = [
        // 'Sumz', 'Ai Chat' , 'About Us'
        {
            name:'Sumz',
            value:'sumz'
        },
        {
            name:'Ai Chat',
            value:'yourgpt'
        },
        {
            name:'About Us',
            value:'aboutus'
        },
    ]

 
    return (
        <div className='flex items-center justify-between w-full h-14 bg-[#e6e6e6]'>

            <img src={Logo} alt='logo' className='w-28 h-14 object-contain' onClick={()=>navigate('/')} />
            <ul className='flex mr-8 gap-5'>
                {navItems.map((item)=>(
                    <li key={`item ${item}`} className='cursor-pointer' onClick={() =>navigate(`/${item.value}`)}>
                        <p className='font-bold text-[#01aca8] hover:text-[#d52e58] transition-all '>{item.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Navbar

