import React from 'react'

const YourEx = () => {
    return (
        <>
            <section className='bg-[url(./assets/image/webp/yourex.webp)]  bg-cover bg-no-repeat'>
                <div className=' flex justify-center items-center md:py-[106px] py-[80px] mx-3'>
                    <div className=' flex flex-col items-center justify-center md:pt-[50px] p-6 md:pb-[42px]  md:px-[75px] border-[1px] border-[#FFFFFF26] bg-[#FFFFFF26] backdrop-blur-[5px] max-w-[778px] w-full'>
                        <h3 className=' md:text-[52px] text-[45px] max-w-[627px] font-normal leading-[62px] font-helveticaNeue text-[#FFFFFF] uppercase'>
                            Are you over your EX?
                        </h3>
                        <p className=' text-[14px] md:text-[16px] font-normal font-poppins leading-[25px] text-[#FFFFFF] max-w-[585px] text-center pt-[10px] pb-8'>
                            Most women don't even realize how their past experiences affect their lives today. Assisting you to overcome this situation is what we do.
                        </p>
                        <button className='text-[14px] md:text-[16px] font-inter font-medium capitalize leading-[24px] text-[#FFFFFF] rounded-[68px] bg-book-gradient1 py-[16px] px-[36px] hover:bg-book-gradient2 ease-in duration-300 hover:scale-95 hover:shadow-[0px_0px_20px_0px_#4B30CB]'>
                            Let’s find it out
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default YourEx
