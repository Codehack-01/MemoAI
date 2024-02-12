import {React, useEffect, useRef, useState} from 'react'
import LogoSvg from '../assets/react.svg'
import HomeSvg from '../assets/home.svg'
import SendSvg from '../assets/send.svg'
import UserIcon from '../assets/UserIcon.svg'
import botIcon from '../assets/botIcon.svg'
import DynamicHeightInput from './TextInput'
import { sendMsgToOpenAI } from '../openai'

const RightSideBar = () => {
  const msgEnd = useRef(null);

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([

    {
      text: "Hi, I am Memo, a state-of-the-art language model developed by MemoAi. I'm designed to understand and generate human-like text based on the input i receive. You can ask me questions, have conversations, seek information, or even request assistancewith the various tasks. Just let me know how i can help you!",
      isBot: true,
    }
  ]);

  useEffect(() =>{ 
    msgEnd.current.scrollIntoView();
  },[messages])

  const handleSend = async () => {
    const text = input;
    setInput(' ');
    setMessages([
      ...messages,
      {text, isBot: false }
    ])
    const res = await sendMsgToOpenAI(input);
    setMessages([
      ...messages,
      {text, isBot: false},
      {text: res, isBot: true}
    ]);
  }

  //Enable Enter key to send prompt
  const handleEnter = async (e) => {
    if(e.key ==='Enter') await handleSend();
  }


  return (
    <div className='pb-12 flex flex-col h-screen justify-between items-center justify-center align-center'>
      <div className='pt-12 pb- px-[2%] sm:px-[10%] md:px-[15%] lg:px-[20%] overflow-hidden overflow-y-scroll scroll-behavior-smooth w-full max-w-70rem h-[calc(100vh-5rem)] ' style={{scrollbarWidth: 'thin', scrollbarColor: '#fff'}}>
        
        {messages.map((message, i) => 
          <div key={i} className={message.isBot? <p className='ml-4 p-6 bg-primary  text-white rounded-lg text-sm '></p>:<p className='pl-4 text-sm'></p>}>
            <div key={i} className='flex items-start py-2 '>
              <img src={message.isBot?botIcon:UserIcon} alt=""  className=''/>
              {/* <p className='ml-4 p-4 bg-primary text-white rounded-lg text-sm '>{message.text}</p> */}
              <p className={message.isBot? 'ml-4 p-4 bg-primary text-white rounded-lg text-sm ' : 'ml-4 py-2 px-4 bold rounded-lg text-sm items-center'}>{message.text}</p>
              
            </div>
            
          </div>
        )}
        <div ref={msgEnd}/>

        
      </div>
      


      <div className='w-[90%]  md:[70%] lg:w-[60%] flex  border border-gray-500 border-solid px-6 py-3 rounded-md items-center shadow-md'>
        
        {/* <input type="text" placeholder='Message Memo' className='w-full overflow-y focus:outline-none  ' /> */}
        <textarea placeholder='Message Memo...' value={input} onKeyDown={handleEnter} onChange={(e) => {setInput(e.target.value)}}  rows={1} className='w-full  focus:outline-none resize-none text-sm ' style={{ wordWrap: 'break-word', overflow: 'hidden',  }}/>
        {/* <DynamicHeightInput/> */}
        
        {/* <textarea className='w-full resize-none overflow-hidden outline-none '   rows="1" cols="10"  placeholder='Type your message...'></textarea> */}
        <div className='ml-auto'>
          <button onClick={handleSend}><img src={SendSvg} alt=""  className='ml-2 w-[24px]'/></button>
          
          {/* <img src={SendSvg} alt=""  className='ml-2 w-[24px]'/> */}
        </div>
      
      </div>
        
    </div>
  )
}

export default RightSideBar