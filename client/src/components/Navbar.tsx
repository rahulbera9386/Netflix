import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthStore } from '../store/useAuthStore'
import { LogOut } from 'lucide-react'

const Navbar = () => {
    const {user,logout}=useAuthStore()
  return (
   <header className='max-w-6xl mx-auto  flex justify-between items-center p-4 h-20'>
<div className='flex items-center gap-10 z-50'>
    <Link to={"/"}>
    <img src='/netflix-logo.png' alt='logo' className='w-32 sm:w-40'/>
    </Link>
    <div className='flex gap-2 itemsS-center'>
        <Link to={"/movies"}>Movies</Link>
    </div>

</div>
<div>
    <div className='rounded-full bg-transparent p-4 h-full w-full flex justify-between gap-4 items-center'>
<h1 className='text-gray-900 h-full w-full rounded-full bg-red-600 text-center p-2'>{user.username.charAt(0).toUpperCase()}</h1>
<LogOut  onClick={logout} className='cursor-pointer h-full w-full' />
    </div>
</div>
   </header>

  )
}

export default Navbar