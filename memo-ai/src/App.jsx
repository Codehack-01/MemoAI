import { useState } from 'react'
import LeftSideBar from './components/LeftSideBar'
import RightSideBar from './components/RightSideBar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="flex min-h-screen  ">
      <div class=" ">
        <LeftSideBar/>
      </div>
      <div class="w-full ">
        <RightSideBar/>
      </div>
    </div>
    
  )
}

export default App
