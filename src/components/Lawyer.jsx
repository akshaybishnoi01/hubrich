import React from 'react'
import lawyer from '../assets/image/webp/lawyer.webp'
import { Arrow1 } from '../assets/common/icon'
import group4 from '../assets/image/svg/group4.svg'
import mjh6 from '../assets/image/svg/mjh6.svg'
const Lawyer = () => {
    return (
        <>
            <section className=' lg:pt-[239px] md:pt-[200px] pt-[60px]'>
                <div className=' container max-w-[1140px] mx-auto px-[12px] relative'>
                    <div className='  flex flex-wrap flex-row mx-[-12px]'>
                        <div className=' lg:w-6/12 w-full px-3 flex justify-center  '>
                            <img className=' w-full max-w-[559px]' src={lawyer} alt="#" />
                        </div>
                        <div className=' lg:w-6/12 w-full px-3 flex lg:justify-end justify-center lg:pt-0 pt-10'>
                           <div className=' flex flex-col'>
                           <h3 className=' md:text-[52px] text-[45px] font-normal leading-[66px] font-helveticaNeue max-w-[523px] text-[#000000]'>
                                LAWYER <span className=' text-[#F8831A]'>&</span> DIVORCE COACH
                            </h3>
                            <p className=' text-[36px] leading-[47px] font-helveticaNeue font-normal text-[#000000] uppercase max-w-[447px]'>
                                <span className=' text-[#F8831A]'>M</span>arc <span className=' text-[#F8831A]'>J</span>oachim <span className=' text-[#F8831A]'>H</span>ubrich
                            </p>
                            <p className='  leading-[28px] font-semibold pt-[30px] pb-3 text-[#000000] capitalize max-w-[317px]'>
                                About the mindset agency coach
                            </p>
                            <p className=' font-poppins font-normal text-[14px] md:text-[16px] leading-[25px] max-w-[484px] opacity-70 text-[#000000] pb-[35px]'>
                                Marc J. Hubrich is the founder of the mindset agency specializing in consulting services.
                            </p>
                            <button className=' flex items-center hover:shadow-[0px_0px_20px_0px_#6E16C7] gap-3 sm:p-[16px_32px] p-[10px_12px] capitalize relative after:absolute after:inset-0 after:p-[1.7px] after:rounded-[63px] duration-300 ease-linear btn_webkit after:w-full after:h-full after:bg-[linear-gradient(107.9deg,#0C5FD1_1.25%,#8703C5_93.71%)] rounded-[63px] w-full max-w-[240px] md:max-w-[352px] hover:scale-95 bg-white bg-transparent '>
                            <span className='bg-[linear-gradient(107.9deg,#0C5FD1_1.25%,#8703C5_93.71%)] bg-clip-text text-transparent  font-inter font-[500] text-[14px] md:text-[16px] text-start ps-1 sm:ps-0 leading-[22px] md:leading-[24px] '>
                            Learn more about the agency
                </span>
                <Arrow1/>
                </button>
                           </div>
                        </div>
                    </div>
                    <div className=' lg:flex hidden absolute right-[-15%] bottom-[-4%] z-[-1] '>
                        <img src={group4} alt="#" />
                    </div>
                    <div className=' md:flex hidden absolute right-[1%] lg:bottom-[-45%] bottom-[-10%]'>
                       <img src={mjh6} alt="#" />
                    </div>
                </div>
                
            </section>
        </>
    )
}

export default Lawyer
