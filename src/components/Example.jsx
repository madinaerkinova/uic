import React from 'react'
import Navbar from './Navbar'
import Qisim from '../../public/qisim'

const Example = () => {
  return (
    <div className=' relative'>
      <div className=' w-[100px] h-[100px] bottom-0 right-0 absolute bg-transparent '></div>
      <div className='bg-black '>
      <Navbar/>
      </div>
      <Qisim/>
      </div>
  )
}

export default Example