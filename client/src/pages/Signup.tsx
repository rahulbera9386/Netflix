import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authAPI, axiosInstance } from '../utills/api';
import { toast } from 'react-toastify';
import axios from 'axios';


const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });
  const navigate=useNavigate()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axiosInstance({
        ...authAPI.signup,
        data: formData
      });
      
      if (response.data.success) {
        navigate("/login");
        toast.success(response.data.message);
        setFormData({ username: "", email: "", password: "" });
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);

      if (axios.isAxiosError(error)) {
        
        if (error.response) {
          
          toast.error(error.response.data?.message || "Something went wrong!");
        }
      }
    }
  };

  return (
    <div className='h-screen w-full hero-bg'>
      <header className='max-w-6xl mx-auto flex items-center justify-between p-4'>
        <Link to={"/"}>
          <img src='/netflix-logo.png' alt='logo' className='w-52' />
        </Link>
      </header>

      <div className='flex justify-center items-center mt-20 mx-3'>
        <div className='w-full max-w-md p-8 space-y-6 bg-black/60 rounded-lg shadow-md'>
          <h1 className='text-white text-2xl font-bold'>Sign Up</h1>
          <form className='space-y-4' onSubmit={handleSubmit}>
            <div>
              <label htmlFor='email' className='text-sm font-medium text-gray-300 block'>
                Email
              </label>
              <input
                type='email'
                name='email'
                className='w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring'
                placeholder='you@example.com'
                id='email'
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor='username' className='text-sm font-medium text-gray-300 block'>
                Username
              </label>
              <input
                type='text'
                name='username'
                className='w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring'
                placeholder='user12'
                id='username'
                value={formData.username}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor='password' className='text-sm font-medium text-gray-300 block'>
                Password
              </label>
              <input
                type='password'
                name='password'
                className='w-full px-3 py-2 mt-1 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:ring'
                placeholder='***********'
                id='password'
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <button
              className='bg-red-600 w-full px-6 py-2 font-semibold text-white text-2xl rounded mt-4'
              type='submit'
            >
              Sign Up
            </button>
          </form>
          <p className='text-white text-center'>Already have an account?{" "}<Link to={"/login"} className='hover:underline'>Login</Link></p>
        </div>
        
      </div>
    </div>
  );
};

export default Signup;
