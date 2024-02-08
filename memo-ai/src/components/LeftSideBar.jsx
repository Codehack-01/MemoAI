import React from 'react'
import LogoSvg from '../assets/react.svg'
import HomeSvg from '../assets/home.svg'
import SaveSvg from '../assets/saved.svg'
import UpdateSvg from '../assets/update.svg'
import AddSvg from '../assets/add.svg'
import ChatSvg from '../assets/chat.svg'

const LeftSideBar = () => {
  return (
    <div className='hidden md:flex flex-col h-screen justify-between bg-primary w-[270px]'>
      <div className='py-6 px-[7%]'>
        <div className='flex '>
          <img src={LogoSvg} alt="Logo" className='w-[30px]' />
          <p className="text-lg font-semibold pl- text-white">MemoAI</p>
        </div>
        <div className='py-4 pt-8 items-center'>
          <button className='bg-blue-500 text-white py-3 px-6 rounded  w-full align-center justify-center flex items-center'><img src={AddSvg} alt="" className='w-[16px] mr-2' />  New chat </button>
        </div>
        <div className='py-3 gap-4 '>
          <div className='pb-4'>
            <button className=' border border-gray-500 border-solid text-white py-3 px-6 rounded  w-full text-sm  flex items-center '><img src={ChatSvg} alt="" className='w-[16px] mr-2' />What is Programming?</button>
          </div>

          <div className='pb-4'>
            <button className=' border border-gray-500 border-solid text-white py-3 px-6 rounded  w-full text-sm  flex items-center '><img src={ChatSvg} alt="" className='w-[16px] mr-2' />How to use API?</button>
          </div>

          

        </div>

      </div>
      <div className= 'py-8  px-[7%] border-t border-gray-500 border-solid gap-5 text-white text-sm font-semibold flex flex-col gap-5'>
        <div className='flex'>
          <img src={HomeSvg} alt="" className='w-[18px] ' />
          
          <p className='pl-4'>Home</p>
        </div>
        <div className='flex'>
          <img src={SaveSvg} alt="" className='w-[18px]' />
          <p className='pl-4'>saved</p>
        </div>
        <div className='flex'>
          <img src={UpdateSvg} alt="" className='w-[15px]' />
          <p className='pl-4'>upgrade to Pro</p>
        </div>
        
      </div>
        
      
        
    </div>
  )
}

export default LeftSideBar