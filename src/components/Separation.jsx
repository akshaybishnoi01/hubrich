import React from 'react'
import msg from '../assets/image/svg/msg.svg'
import Slider from "react-slick";
import group3 from '../assets/image/svg/group3.svg'
import analy4 from '../assets/image/svg/analy4.svg'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,  }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,}}
        onClick={onClick}
      />
    );
  }

const Separation = () => {
    
    var settings = {
        dots: true,
        infinite: true,
        speed: 1600,
        pauseOnhover: true,
        arrow: true,
        slidesToShow: 1,
        fade: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

        appendDots: (dots) => (
            <div
                style={{
                    position: "absolute",
                    width: "fit-content",
                    height: "fit-content",
                }}
            >
                <ul
                    style={{ margin: "0" }}
                    className=" flex items-center custom-dots1 gap-3 justify-center"
                >
                    {dots}
                </ul>
            </div>
        ),
    };
    
    return (
        <>
            <section className=' lg:pt-[302px] md:pt-[260px] pt-[50px] lg:pb-[186px] md:pb-[100px] pb-[50px] relative ' >
                <div className='container max-w-[1140px] mx-auto px-[12px] relative '>
                    <div className=' flex flex-wrap flex-row mx-[-12px]'>
                        <div className=' lg:w-6/12 w-full flex flex-col lg:items-start items-center px-3'>
                            <p className=' font-helveticaNeue md:text-[29px] text-[20px] font-normal leading-[37px] text-[#000000] max-w-[306px]'>
                                THE FOUR PHASES OF
                            </p>
                            <h3 className=' max-w-[327px] font-helveticaNeue lg:text-start text-center md:text-[52px] text-[45px] font-normal leading-[62px] text-[#000000] '>
                                SEPARATION
                                <span className=' text-[#F77B0B]'> MINDSET</span>
                            </h3>
                            <p className=' max-w-[484px] font-poppins text-center text-[14px] md:text-[16px] font-normal leading-[25px] opacity-70 text-[#000000] pt-[19px] pb-9'>
                                There are 4 typical separation phases. The 4 phases are not always clearly separated from each other and can overlap.
                            </p>
                            <button className=' flex items-center hover:shadow-[0px_0px_20px_0px_#6E16C7]   gap-1  p-[5px_9px] capitalize relative after:absolute after:inset-0 after:p-[1.7px] after:rounded-[63px]  duration-500 ease-linear btn_webkit after:w-full after:h-full after:bg-[linear-gradient(107.9deg,#0C5FD1_1.25%,#8703C5_93.71%)] rounded-[63px] w-full max-w-[240px] md:max-w-[452px]  group bg-white bg-transparent hover:bg-[linear-gradient(107.9deg,#0C5FD1_1.25%,#8703C5_93.71%)] '>
                                <span><img src={msg} alt="#" /></span>
                                <span className='bg-[linear-gradient(107.9deg,#0C5FD1_1.25%,#8703C5_93.71%)] bg-clip-text text-transparent group-hover:text-white font-inter font-[500] text-[14px] md:text-[16px] text-start ps-1 sm:ps-0 leading-[22px] md:leading-[24px] '>
                                    Book a non-binding initial consultation now
                                </span>
                            </button>
                        </div>
                        <div className=' lg:w-6/12 w-full lg:pt-0 pt-10 px-3'>
                            <div className='  relative md:max-w-[608px] sm:max-w-[550px] max-w-[500px] w-full mx-auto separ' >
                                <Slider {...settings}>
                                    <div>
                                        <div className=' bg-[url(./assets/image/webp/sliderbg.webp)] sm:px-0 px-3 bg-cover bg-no-repeat md:max-w-[608px] sm:max-w-[550px] max-w-[500px] w-full md:min-h-[448px] sm:min-h-[400px] min-h-[320px] md:pt-[133px] sm:pt-[80px] pt-[50px] flex-col flex items-center'>
                                            <p className=' max-w-[316px] text-center text-[#FFFFFF] font-poppins font-medium md: text-[16px] leading-[32px] capitalize'>
                                                1st phase
                                            </p>
                                            <p className=' max-w-[316px] text-center text-[#FFFFFF]  font-poppins font-medium md:text-[20px] text-[16px] leading-[32px] capitalize'>
                                                "The not-wanting-to-be-true"
                                            </p>
                                            <p className=' pt-4 max-w-[364px] text-[#FFFFFF]  text-center font-poppins font-normal text-[14px] md:text-[16px] leading-[25px] '>
                                                This phase is characterized by denial and ignoring the final separation.
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className=' bg-[url(./assets/image/webp/sliderbg.webp)] sm:px-0 px-3 bg-cover bg-no-repeat md:max-w-[608px] sm:max-w-[550px] max-w-[500px] w-full md:min-h-[448px] sm:min-h-[400px] min-h-[320px] md:pt-[133px] sm:pt-[80px] pt-[50px] flex-col flex items-center'>
                                            <p className=' max-w-[316px] text-center text-[#FFFFFF] font-poppins font-medium md:text-[20px] text-[16px] leading-[32px] capitalize'>
                                                2st phase
                                            </p>
                                            <p className=' max-w-[316px] text-center text-[#FFFFFF]  font-poppins font-medium md:text-[20px] text-[16px] leading-[32px] capitalize'>
                                                "The not-wanting-to-be-true"
                                            </p>
                                            <p className=' pt-4 max-w-[364px] text-[#FFFFFF]  text-center font-poppins font-normal text-[14px] md:text-[16px] leading-[25px] '>
                                                Nervousness and feelings of guilt in the sales talk are the reason for poor performance, learn to put them aside and calmly convince your customers.
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className=' bg-[url(./assets/image/webp/sliderbg.webp)] sm:px-0 px-3 bg-cover bg-no-repeat md:max-w-[608px] sm:max-w-[550px] max-w-[500px] w-full md:min-h-[448px] sm:min-h-[400px] min-h-[320px] md:pt-[133px] sm:pt-[80px] pt-[50px] flex-col flex items-center'>
                                            <p className=' max-w-[316px] text-center text-[#FFFFFF] font-poppins font-medium md:text-[20px] text-[16px] leading-[32px] capitalize'>
                                                3st phase
                                            </p>
                                            <p className=' max-w-[316px] text-center text-[#FFFFFF]  font-poppins font-medium md:text-[20px] text-[16px] leading-[32px] capitalize'>
                                                "The not-wanting-to-be-true"
                                            </p>
                                            <p className=' pt-4 max-w-[364px] text-[#FFFFFF]  text-center font-poppins font-normal text-[14px] md:text-[16px] leading-[25px] '>
                                                Constant stress and enormous pressure as a founder is not normal, but the result of a wrong perspective on productive work. Learn how to get the maximum performance out of yourself without stress.
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className=' bg-[url(./assets/image/webp/sliderbg.webp)] sm:px-0 px-3 bg-cover bg-no-repeat md:max-w-[608px] sm:max-w-[550px] max-w-[500px] w-full md:min-h-[448px] sm:min-h-[400px] min-h-[320px] md:pt-[133px] sm:pt-[80px] pt-[50px] flex-col flex items-center'>
                                            <p className=' max-w-[316px] text-center text-[#FFFFFF] font-poppins font-medium md:text-[20px] text-[16px] leading-[32px] capitalize'>
                                                4st phase
                                            </p>
                                            <p className=' max-w-[316px] text-center text-[#FFFFFF]  font-poppins font-medium md:text-[20px] text-[16px] leading-[32px] capitalize'>
                                                "The not-wanting-to-be-true"
                                            </p>
                                            <p className=' pt-4 max-w-[364px] text-[#FFFFFF]  text-center font-poppins font-normal text-[14px] md:text-[16px] leading-[25px] '>
                                                This phase is characterized by denial and ignoring the final separation.
                                            </p>
                                        </div>
                                    </div>

                                </Slider>
                               
                            </div>
                        </div>
                    </div>
                    <div className=' absolute sm:flex hidden right-0 lg:top-[-75%] md:top-[-40%] sm:top-[-30%] '>
                        <img src={analy4} alt="#" />
                    </div>
                </div>
                <div className=' absolute md:flex hidden left-0 lg:top-[-50%] top-[-35%] z-[-1]'>
                    <img src={group3} alt="#" />
                </div>
            </section>
        </>
    )
}

export default Separation
