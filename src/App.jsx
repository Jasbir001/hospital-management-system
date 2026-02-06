import { useState } from 'react'
import Homepage from './Pages/Homepage'
import About from './Pages/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/about" element={<About/>}/>
  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
