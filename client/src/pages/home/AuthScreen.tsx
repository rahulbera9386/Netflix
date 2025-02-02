import { ChevronRight } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const AuthScreen = () => {
  const [email, setEmail] = useState("")
  return (
    <div className='hero-bg relative'>
      <header className='max-w-6xl mx-auto flex items-center justify-between p-4 pb-10'>
        <img src='/netflix-logo.png' alt='netflix-logo' className='w-32 md:w-52' />
        <Link to={"/signin"} className='bg-red-600 text-white py-1 rounded px-2'>SignIn</Link>
      </header>
      <div className='flex flex-col items-center justify-center text-center py-40 text-white max-w-6xl mx-auto'>
        <h1 className='text-4xl sm:text-6xl font-bold mb-4'>Unlimited Movies,Tv Shows,and more</h1>
        <p className='text-lg mb-4'>Watch Anywhere,cancel anytime</p>
        <p className='mb-4'>Ready To watch?Enter your email to create or restart membership</p>
        <form className=' flex flex-col sm:flex-row gap-4 w-1/2'>
          <input type='email' placeholder='Email address' value={email} onChange={(e) => setEmail(e.target.value)} className='p-2 rounded border-gray-700 bg-black/80 flex-1 border' />
          <button className='flex justify-center items-center px-2 lg:px-6 py-1 sm:py-2 rounded bg-red-600'>
            Get Started
            <ChevronRight size={12} />

          </button>
        </form>
      </div>
      <div className='h-2 w-full bg-[#232323] aria-hidden:"true' />
      <div className='py-10 bg-black text-white'>
        <div className='flex max-w-6xl mx-auto justify-center items-center md:flex-row flex-col px-4 md:px-4'>
          <div className='flex-1 text-center md:text-left'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mb-4'>Enjoy on your tv</h2>
            <p className='text-lg sm:text-xl'>Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
          </div>
          <div className='flex-1 relative '>
            <img src='/tv.png' alt='tv-img' className='relative z-20 mt-4' />
            <video className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1/2 z-10' autoPlay={true} muted loop playsInline>
              <source src='/hero-vid.m4v' type='video/mp4' />
            </video>
          </div>
        </div>

      </div>
      <div className='h-2 w-full bg-[#232323] aria-hidden:"true' />
      <div className=' text-white py-10 bg-black'>
        <div className=' flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col-reverse px-4 md:px-2'>
          <div className='flex-1 relative'>
            <div className='relative'>
              <img src='/stranger-things-lg.png' alt='starnger-things' className='mt-4' />
              <div className='bg-black absolute left-1/2 bottom-5 flex gap-2 items-center w-3/4 -translate-x-1/2 h-24 border lg:w-1/2 border-slate-500 rounded-md px-2'>
                <img src='/stranger-things-sm.png' alt='stranger-thigs' className='h-full' />
                <div>
                  <div className='flex flex-col gap-0'>
                    <span className='text-md lg:text-lg font-bold'>Stranger Things</span>
                    <span className='text-sm text-blue-500'>Downloading...</span>
                  </div>
                </div>

              </div>

            </div>

          </div>
          <div className='text-center md:text-left flex-1'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mb-4 text-balance
            '>Download your shows to watch offline</h2>
            <p className='text-lg lg:text-xl'>
              Save your favorites easily and always have something to watch.
            </p>
          </div>
        </div>


      </div>

      <div className='h-2 w-full bg-[#232323]' />
      <div className='bg-black py-10 text-white'>
        <div className='flex flex-col sm:flex-row max-w-6xl items-center justify-center px-4 md:px-2 mx-auto'>
          <div className='text-center md:text-left flex-1'>
            <h2 className='text-4xl md:text-5xl font-extrabold mb-4'>Watch Everywhere</h2>
            <p className='text-lg md:text-xl'>	Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
          </div>
          <div className='flex-1 relative overflow-hidden'>
<img src='/device-pile.png' alt='device-pile' className='relative z-20 '/>
<video autoPlay={true} loop muted className='absolute top-2 left-1/2 -translate-x-1/2 h-4/6 z-10 max-w-[63%]'>
  <source src='/video-devices.m4v' type='video/mp4'/>
</video>
          </div>
        </div>
      </div>


    <div className='h-2 w-full bg-[#232323] '/> 
    <div className='bg-black text-white py-8'>
      <div className='max-w-6xl mx-auto'>
        <p className='text-center'>Developed With ❤️ By @Rahul Bera</p>

      </div>

    </div>
    </div>
  )
}

export default AuthScreen
