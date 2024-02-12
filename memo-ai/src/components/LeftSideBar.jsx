import {React, useState} from 'react'
import LogoSvg from '../assets/react.svg'
import HomeSvg from '../assets/home.svg'
import SaveSvg from '../assets/saved.svg'
import UpdateSvg from '../assets/update.svg'
import AddSvg from '../assets/add.svg'
import ChatSvg from '../assets/chat.svg'
import botIcon2 from '../assets/botIcon2.svg'
import { sendMsgToOpenAI } from '../openai'


const LeftSideBar = () => {
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([

    {
      text: "Hi, I am Memo, a state-of-the-art language model developed by MemoAi. I'm designed to understand and generate human-like text based on the input i receive. You can ask me questions, have conversations, seek information, or even request assistancewith the various tasks. Just let me know how i can help you!",
      isBot: true,
    }
  ]);

  const handleQuery = async (e) => {
    const text = e.target.value;
    setInput(' ');
    setMessages([
      ...messages,
      {text, isBot: false }
    ]);
    const res = await sendMsgToOpenAI(input);
    setMessages([
      ...messages,
      {text, isBot: false},
      {text: res, isBot: true}
    ]);
  }
  return (
    <div className='hidden md:flex flex-col h-screen justify-between bg-primary w-[270px]'>
      <div className='py-6 px-[7%]'>
        <div className='flex items-center gap-2'>
          <img src={botIcon2} alt="Logo"  />
          <p className="text-md font-semibold pl- text-white">MemoAI</p>
        </div>
        <div className='py-4 pt-8 items-center'>
          <button className='bg-blue-500 text-white py-3 px-6 rounded  w-full align-center justify-center flex items-center'  onClick={()=> {window.location.reload()}}><img src={AddSvg} alt="" className='w-[16px] mr-2' />  New chat </button>
        </div>
        <div className='py-3 gap-4 '>
          <div className='pb-4'>
          <button className=' border border-gray-500 border-solid text-white py-3 px-6 rounded  w-full text-sm  flex items-center ' onClick={handleQuery} value={'What is Programming ?'}><img src={ChatSvg} alt="" className='w-[16px] mr-2' />What is Programming?</button>
          </div>

          <div className='pb-4'>
            <button className=' border border-gray-500 border-solid text-white py-3 px-6 rounded  w-full text-sm  flex items-center 'onClick={handleQuery} value={'How to use an API ?'}><img src={ChatSvg} alt="" className='w-[16px] mr-2' />How to use API?</button>
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