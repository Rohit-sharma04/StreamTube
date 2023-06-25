import logo from './assets/logo.png'
const Header = () => {
  return (
    <>
     <div  className=' bg-[#0A6EBD]  py-3 shadow-lg mb-3 flex items-center'>
    
     <img  className='h-12 pl-3'  src={logo} alt='logo'/>
      <h1 className='text-lg font-semibold text-white'>Note <spam className=' font-bold bg-orange-400 text-black rounded-sm px-1' >Hub</spam></h1>
      
     </div>
    </>
  )
}

export default Header
