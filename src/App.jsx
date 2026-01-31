import { useState } from 'react'
import Homepage from './Pages/Homepage'
import About from './Pages/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Homepage/>
  <About/>
    </>
  )
}

export default App
