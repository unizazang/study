// **eslintignore**

import { useState } from 'react'
import './App.css'

function App() {
  
let [cnt, setCnt ] = useState(0);
  return (
    <div>
      <h1 className='text-blue font- '> 안녕하세요? </h1>
      <h2> {cnt }</h2>
      <button className=' bg-blue w-96 h-10 text-red-950 rounded-full py-2 ring-8 ring-pink'  onClick={()=>{
        setCnt(cnt+1)
      }}> COUNT </button>
    </div>
  )
}

export default App
