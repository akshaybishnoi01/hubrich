import React, { useState } from 'react'
import logo from '../assets/image/svg/logo.svg'
import msg from '../assets/image/svg/msg.svg'
import phonecall from '../assets/image/svg/phonecall.svg'
import group1 from '../assets/image/svg/group1.svg'
import fault from '../assets/image/svg/fault.svg'
const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header className=' bg-center lg:bg-[url(./assets/image/webp/header_bg.webp)] bg-cover bg-no-repeat lg:pb-[190px] md:pb-[100px] pb-[20px] relative'>
        <nav className=" pt-4 ">
          <div className=' container 2xl:max-w-[1344px] xl:max-w-[1188px] lg:max-w-[1016px] mx-auto px-[12px] flex justify-between items-center '>
            <div className="flex items-center">
              <img src={logo} alt="#" /> 
            </div>
            <ul className={`${isOpen ? 'left-0' : '-left-full'} md:left-0 duration-300 ease-linear flex md:justify-between md:bg-transparent md:flex-row md:w-fit md:h-fit justify-center gap-[40px] items-center absolute bg-black md:relative w-full h-screen top-0 z-10 flex-col`}>
              <li>
                <a href="#" className=" mb-0 opacity-[70%] text-[14px] md:text-[16px] font-normal md:leading-[20.61px] leading-[16px] font-helveticaNeue text-[#FFFFFF] transition duration-300 hover:text-[#2C48CE] u_line webkit">
                  Benifits
                </a>
              </li>
              <li>
                <a href="#" className=" mb-0 opacity-[70%]  text-[14px] md:text-[16px] font-normal  md:leading-[20.61px] leading-[16px] font-helveticaNeue text-[#FFFFFF] transition duration-300 hover:text-[#2C48CE] u_line webkit">
                  Testimonials
                </a>
              </li>   
              <li>
                <button className='mb-0 capitalize  text-[14px] md:text-[16px] font-medium border-0  md:leading-[20.61px] leading-[16px] font-inter text-[#FFFFFF] bg-book-gradient1 py-[16px] px-[28.21px] hover:bg-book-gradient2 ease-in duration-300 hover:scale-95 hover:shadow-[0px_0px_20px_0px_#4B30CB]'>
                  Book consultation now
                </button>
              </li>
            </ul>
            <div onClick={handleToggle} className=" relative w-5 h-4 block md:hidden z-20">
              <span className={`${isOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'} left-0 duration-300 ease-linear absolute w-full h-0.5 bg-blue-700`}></span>
              <span className={`${isOpen ? 'hidden' : 'flex'} absolute w-full top-1/2 -translate-y-1/2 h-0.5 bg-blue-700`}></span>
              <span className={`${isOpen ? 'bottom-1/2 -translate-y-1/2 -rotate-45': 'bottom-0'} left-0 duration-300 ease-linear absolute w-full h-0.5 bg-blue-700`}></span>
            </div>
          </div>
        </nav>
        <div className=' container 2xl:max-w-[1344px] xl:max-w-[1188px] lg:max-w-[1016px] mx-auto px-[12px] relative z-[1]'>
          <div className=' lg:pt-[160px] md:pt-[100px] sm:pt-14 pt-9'>
            <p className=' mb-0 font-helveticaNeue md:text-[18.8px] text-[14px] capitalize font-normal md:leading-[24.22px] leading-[20px] text-[#F77B0B] max-w-[197px]'>
              Marc joachim hubrich
            </p>
            <h1 className=' mb-0 font-helveticaNeue md:text-[60px] text-[45px] uppercase font-normal md:leading-[77.28px] leading-[50px] text-[#000000] max-w-[545px] pb-[7px]'>
              Now I let you
              go!
            </h1>
            <p className=' mb-0 font-poppins text-[14px] md:text-[16px] font-normal md:leading-[25.6px] leading-[20px] opacity-[70%] text-[#000000] max-w-[517px]'>
              For women who do not want to be completely dragged down by a SEPARATION.
            </p>
            <p className=' mb-0 font-poppins text-[14px] md:text-[16px] font-normal md:leading-[25.6px] leading-[20px] opacity-[70%] text-[#000000] max-w-[517px] sm:pb-[32.29px] pb-5'>
              How to let go of your EX so you can leave him behin 
              without having to run to a therapist right away.
            </p>
            <div className=' flex items-center gap-4'>
              <button className=' flex items-center hover:shadow-[0px_0px_20px_0px_#6E16C7]   gap-1  p-[5px_9px] capitalize relative after:absolute after:inset-0 after:p-[1.7px] after:rounded-[63px]  duration-500 ease-linear btn_webkit after:w-full after:h-full after:bg-[linear-gradient(107.9deg,#0C5FD1_1.25%,#8703C5_93.71%)] rounded-[63px] w-full sm:max-w-[400px] max-w-[250px] md:max-w-[452px]  group bg-white bg-transparent hover:bg-[linear-gradient(107.9deg,#0C5FD1_1.25%,#8703C5_93.71%)] '>
              <span><img src={msg} alt="#" /></span>
              <span className='bg-[linear-gradient(107.9deg,#0C5FD1_1.25%,#8703C5_93.71%)] bg-clip-text text-transparent group-hover:text-white font-inter font-[500] text-[12px] md:text-[16px] text-start ps-1 sm:ps-0 leading-[20px] md:leading-[24px] '>
                Book a non-binding initial consultation now
                </span>
                </button>
              <img src={phonecall} alt="phone" />

            </div>

            <div className=' flex flex-wrap lg:hidden gap-6 pt-5'>
              <p className=' text-[14px] md:text-[16px] font-normal uppercase md:leading-[27px] leading-[22px]  font-helveticaNeue border-l-[2px] border-solid border-[#9800B0] ps-[13px] text-[#000000] max-w-[203px]'>
                Die wichtigsten Aspekte einer Trennung:
              </p>
              <ul className=' m-0 p-0'>
                <li className=' capitalize list-disc text-[14px] md:text-[16px]] font-medium md:leading-[25px] leading-[20px] text-[#000000] '>
                  
                  physische Trennung
                </li>
                <li className=' capitalize list-disc text-[14px] md:text-[16px] font-medium md:leading-[25px] leading-[20px] text-[#000000]'>
                  mentale Trennung

                </li>
              </ul>
            </div>
            <div className=' hidden lg:flex absolute bottom-[-150px] xl:right-[150px] lg:right-[1px]'>
              <p className=' text-[14px] md:text-[16px] font-normal uppercase leading-[27px] font-helveticaNeue border-l-[2px] border-solid border-[#9800B0] ps-[13px] text-[#FFFFFF] max-w-[203px]'>
                Die wichtigsten Aspekte einer Trennung:
              </p>
              <ul className=' m-0 p-0'>
                <li className=' capitalize list-disc text-[14px] md:text-[16px] font-medium leading-[25px] text-[#FFFFFF] '>
                  physische Trennung
                </li>
                <li className=' capitalize list-disc text-[14px] md:text-[16px] font-medium leading-[25px] text-[#FFFFFF]'>
                  mentale Trennung

                </li>
              </ul>
            </div>
          </div>
          <div className=' sm:flex hidden absolute sm:left-[-50px] md:left-[-25px] lg:left-0 lg:bottom-[-71%] md:bottom-[-50%] sm:bottom-[-65%] lg:scale-100 md:scale-75 sm:scale-50 z-[-1]'>
            <img className=' lg:scale-100 md:scale-90' src={fault} alt="#" />
          </div>
        </div>
        <div className='sm:flex hidden absolute left-0 top-0  z-[-1]'>
          <img src={group1} alt="#" />
        </div>
        
      </header>
    </>
  )
}

export default HeroSection
