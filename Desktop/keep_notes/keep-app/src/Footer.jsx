import React from 'react'

const Footer = () => {
    const year =new Date().getFullYear()
  return (
    <div className=' bg-[#0A6EBD] w-full py-4'>
      <p className='text-gray-200 text-center'>contact me at : <br/><a href="mailto:rohitsharma4102002@gmail.com">rohitsharma4102002@gmail.com</a></p>
      <p className='text-center text-gray-400'>rohit © {year}</p>

    </div>
  )
}

export default Footer
