
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/useAuthStore'
import { toast } from 'react-toastify'

const Login = () => {
  const [formData, setFormData] = useState({

    email: "",
    password: ""
  })
const {login,error}=useAuthStore();
const navigate=useNavigate()


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
  }
  //console.log(formData)

  const handleSubmit=async(e)=>{
    e.preventDefault()
    try{
      const data=await login(formData.email,formData.password);
      if(data)
      {
        toast("Login Success");
        navigate("/")
        setFormData({email:"",password:""});
        
      }

      console.log(error)
      if(error)
      {
        toast(error)
      }

    }
    catch(error)
    {
       console.log(error)
    }
  }
  return (
    <div className='h-screen w-full hero-bg'>
      <header className='max-w-6xl mx-auto flex items-center justify-between p-4'>
        <Link to={"/"}>
          <img src='/netflix-logo.png' alt='logo' className='w-52' />

        </Link>
      </header>
      <div className='flex justify-center items-center mt-20 mx-3'>
        <div className='w-full max-w-md p-8 space-y-6 bg-black/60 rounded-lg shadow-md'>
          <h1>Login</h1>
          <form className='space-y-4' onSubmit={handleSubmit}>
            <div>
              <label htmlFor='email' className='text-sm font-medium text-gray-300 block'>
                Email
              </label>
              <input
                type='email'
                name="email"
                className='w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring'
                placeholder='you@example.com'
                id='email'
                value={formData.email}
                onChange={handleChange}
              />

            </div>
           
            <div>
              <label htmlFor='password' className='text-sm font-medium text-gray-300 block'>
                Password
              </label>
              <input
                type='password'
                name="password"
                className='w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring'
                placeholder='***********'
                id='password'
                value={formData.password}
                onChange={handleChange}
              />

            </div>
            <button className='bg-red-600 w-full px-6 py-2 font-semibold text-white text-2xl rounded'>Login</button>
          </form>
          <p className='text-white text-center'>New to Netflix?{" "}<Link to={"/signup"} className='hover:underline'>SignUp</Link></p>
        </div>
      </div>

    </div>
  )
}

export default Login
