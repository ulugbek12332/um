import React from 'react'
import Header from './components/Header'
import Click from './components/Click'
import Omg from './components/Omg'

const App = () => {
  return (
  <div className='bg-[#2C2F35] w-screen h-screen flex justify-center items-center flex-col gap-7' >
      <h1  className='text-white text-3xl'>Hamster Combat</h1>
    
      <Header/>
      <Click/>
      <Omg/>
     
    </div>
  )
}

export default App