import { useState } from 'react'
import './App.css'
import Login from "./Sign up/login/login"
import Signup from "./Sign up/sign up/sign"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Login />
      <Signup />
    </>
  )
}

export default App
