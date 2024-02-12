import { useState } from 'react'
import LeftSideBar from './components/LeftSideBar'
import RightSideBar from './components/RightSideBar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex min-h-screen  ">
      <div className=" ">
        <LeftSideBar/>
      </div>
      <div className="w-full ">
        <RightSideBar/>
      </div>
    </div>
    
  )
}

export default App
