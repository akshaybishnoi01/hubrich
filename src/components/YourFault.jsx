import React from 'react'
import msg from '../assets/image/svg/msg.svg'
import group2 from '../assets/image/svg/group2.svg'
import Slider from "react-slick";
const YourFault = () => {
    var settings1 = {
        dots: false,
        infinite: true,
        arrows: false,
        infinite: true,
        speed: 1000,
        pauseOnhover: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        rtl: true,
        responsive: [
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
                breakpoint: 420,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
        ],
    };
    var settings2 = {
        dots: false,
        infinite: true,
        arrows: false,
        infinite: true,
        speed: 1000,
        pauseOnhover: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
                breakpoint: 420,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
        ],
    };
    return (
        <>
            <section className=' lg:pt-[150px] md:pt-[100px] pt-10 lg:pb-[122px] md:pb-16 pb-7 relative'>
                <div className=' container 2xl:max-w-[1344px] xl:max-w-[1188px] lg:max-w-[1016px] mx-auto px-[12px]'>
                    <div className=' flex lg:justify-center lg:flex-row flex-col  lg:items-start sm:items-center '>
                        <div className=' lg:ps-16'>
                            <h2 className='font-helveticaNeue md:text-[60px] text-[45px]  font-normal md:leading-[77.28px] leading-[50px] text-[#000000] max-w-[238px]'>
                                IT'S NOT
                            </h2>
                            <h2 className=' sm:ms-[70px] font-helveticaNeue md:text-[60px] text-[45px]  font-normal md:leading-[77.28px] leading-[50px] text-[#000000] max-w-[371px]'>
                                <span className='text-[#F77B0B]'>YOUR</span> FAULT!
                            </h2>
                        </div>
                        <div className=' lg:ps-[60px] pt-4'>
                            <p className='  font-poppins md:text-[16px] text-[14px] border-l-[2px] border-solid border-[#9800B0] ps-[11px] font-normal md:leading-[25px] leading-[20px] text-[#000000] max-w-[293px]'>
                                It's not your fault for not knowing how to let go of the partner who no longer made you feel special.
                            </p>
                        </div>
                    </div>
                    <div className=' flex justify-center lg:pt-[58px] sm:pt[35px] pt-6 sm:pb-[25px] pb-5 lg:pb-[34px]'>
                        <p className=' text-center font-helveticaNeue md:text-[20px] text-[16px] capitalize font-semibold md":leading-[28px] leading-[24px] text-[#000000] max-w-[865px]'>
                            How would you know when you are busy with completely different things at the moment:
                        </p>
                    </div>
                </div>

                <div className='bg-[url(./assets/image/webp/women.webp)]  bg-cover bg-no-repeat'>
                    <div className='  container max-w-[1140px] mx-auto px-[12px]'>
                        <div className=' md:flex hidden   flex-row mx-[-12px] justify-center lg:ps-60'>
                            <div className=' min-h-[162px] flex justify-center w-full bg-[#003E9233]  transition duration-200 hover:bg-[#003E92] pt-[42px] max-w-[250px]'>
                                <p className='  font-poppins text-[14px] md:text-[16px] font-normal md:leading-[24px] leading-[20px] text-[#FFFFFF] max-w-[173px]'>
                                    Your self-esteem is in the basement.
                                </p>
                            </div>
                            <div className='min-h-[162px] flex justify-center w-full bg-[#003E9233] transition duration-200 hover:bg-[#003E92] pt-[42px] max-w-[250px]'>
                                <p className='  font-poppins text-[14px] md:text-[16px] font-normal md:leading-[24px] leading-[20px] text-[#FFFFFF] max-w-[198px] '>
                                    You keep asking yourself what you did wrong.
                                </p>
                            </div>
                            <div className='min-h-[162px] flex justify-center w-full bg-[#003E9233] transition duration-200 hover:bg-[#003E92] pt-[42px] max-w-[250px]'>
                                <p className='  font-poppins text-[14px] md:text-[16px] font-normal md:leading-[24px] leading-[20px] text-[#FFFFFF] max-w-[173px]'>
                                    The feeling of helplessness is your constant companion.
                                </p>
                            </div>
                        </div>
                        <div className=' md:hidden block'>
                            <Slider {...settings1} dir="rtl">
                                <div>
                                    <div className=' min-h-[162px] flex justify-center w-full bg-[#003E9233]  transition duration-200 hover:bg-[#003E92] pt-[42px] sm:max-w-[250px]'>
                                        <p className='  font-poppins text-[14px] md:text-[16px] font-normal md:leading-[24px] leading-[20px] text-[#FFFFFF] max-w-[173px]'>
                                            Your self-esteem is in the basement.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div className='min-h-[162px] flex justify-center w-full bg-[#003E9233] transition duration-200 hover:bg-[#003E92] pt-[42px] sm:max-w-[250px]'>
                                        <p className='  font-poppins text-[14px] md:text-[16px] font-normal md:leading-[24px] leading-[20px] text-[#FFFFFF] max-w-[198px] '>
                                            You keep asking yourself what you did wrong.
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <div className='min-h-[162px] flex justify-center w-full bg-[#003E9233] transition duration-200 hover:bg-[#003E92] pt-[42px] sm:max-w-[250px]'>
                                        <p className='  font-poppins text-[14px] md:text-[16px] font-normal md:leading-[24px] leading-[20px] text-[#FFFFFF] max-w-[173px]'>
                                            The feeling of helplessness is your constant companion.
                                        </p>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                        <div className=' md:flex hidden  lg:justify-start justify-center mt-[29px] lg:ps-12'>
                            <div className='min-h-[169px] flex justify-center w-full bg-[#003E9233]  transition duration-200 hover:bg-[#003E92] pt-[45px] max-w-[250px]'>
                                <p className='  font-poppins text-[14px] md:text-[16px] font-normal md:leading-[24px] leading-[20px] text-[#FFFFFF] max-w-[173px]'>
                                    You spend the nights alone and lonely.
                                </p>
                            </div>
                            <div className='min-h-[169px] flex justify-center w-full bg-[#003E9233] transition duration-200 hover:bg-[#003E92] pt-[45px] max-w-[250px]'>
                                <p className='  font-poppins text-[14px] md:text-[16px] font-normal md:leading-[24px] leading-[20px] text-[#FFFFFF] max-w-[198px] '>
                                    You have stopped going out and spend the time crying in your room.
                                </p>
                            </div>
                            <div className='min-h-[169px] flex justify-center w-full bg-[#003E9233] transition duration-200 hover:bg-[#003E92] pt-[45px] max-w-[250px]'>
                                <p className='  font-poppins text-[14px] md:text-[16px] font-normal md:leading-[24px] leading-[20px] text-[#FFFFFF] max-w-[173px]'>
                                    An emotional chaos is raging inside you.
                                </p>
                            </div>
                        </div>
                        <div className='md:hidden block mt-[29px]'>
                        <Slider  {...settings2}>
                            <div>
                            <div className='min-h-[169px] flex justify-center w-full bg-[#003E9233]  transition duration-200 hover:bg-[#003E92] pt-[45px] sm:max-w-[250px]'>
                                <p className='  font-poppins text-[14px] md:text-[16px] font-normal md:leading-[24px] leading-[20px] text-[#FFFFFF] max-w-[173px]'>
                                    You spend the nights alone and lonely.
                                </p>
                            </div>
                            </div>
                            <div>
                            <div className='min-h-[169px] flex justify-center w-full bg-[#003E9233] transition duration-200 hover:bg-[#003E92] pt-[45px] sm:max-w-[250px]'>
                                <p className='  font-poppins text-[14px] md:text-[16px] font-normal md:leading-[24px] leading-[20px] text-[#FFFFFF] max-w-[198px] '>
                                    You have stopped going out and spend the time crying in your room.
                                </p>
                            </div>
                            </div>
                            <div>
                            <div className='min-h-[169px] flex justify-center w-full bg-[#003E9233] transition duration-200 hover:bg-[#003E92] pt-[45px] sm:max-w-[250px]'>
                                <p className='  font-poppins text-[14px] md:text-[16px] font-normal md:leading-[24px] leading-[20px] text-[#FFFFFF] max-w-[173px]'>
                                    An emotional chaos is raging inside you.
                                </p>
                            </div>
                            </div>
                        </Slider>
                        </div>
                    </div>
                </div>
                <div className=' flex flex-col items-center justify-center px-3 lg:pt-[47px] sm:pt-8 pt-5 '>
                    <p className='  font-poppins text-[14px] md:text-[16px]  text-[#000000] font-normal md:leading-[25px] leading-[20px] max-w-[760px] pb-5'>
                        You are not alone! Numerous women before you stood exactly at this point, where you are now.
                    </p>

                    <button className=' flex items-center hover:shadow-[0px_0px_20px_0px_#6E16C7]   gap-1  p-[5px_9px] capitalize relative after:absolute after:inset-0 after:p-[1.7px] after:rounded-[63px]  duration-500 ease-linear btn_webkit after:w-full after:h-full after:bg-[linear-gradient(107.9deg,#0C5FD1_1.25%,#8703C5_93.71%)] rounded-[63px] w-full max-w-[240px] md:max-w-[452px]  group bg-white bg-transparent hover:bg-[linear-gradient(107.9deg,#0C5FD1_1.25%,#8703C5_93.71%)] '>
                        <span><img src={msg} alt="#" /></span>
                        <span className='bg-[linear-gradient(107.9deg,#0C5FD1_1.25%,#8703C5_93.71%)] bg-clip-text text-transparent group-hover:text-white font-inter font-[500] text-[14px] md:text-[16px]text-start ps-1 sm:ps-0 leading-[20px] md:leading-[24px] '>
                            Book a non-binding initial consultation now
                        </span>
                    </button>

                </div>
                <div className=' sm:flex hidden absolute md:right-0 sm:right-[-25px] md:top-14 sm:top-[-70px]  z-[-1]'>
                    <img src={group2} alt="#" />
                </div>
            </section>
        </>
    )
}

export default YourFault
