import React from 'react'
import { Facebook, Insta, Massage, Twitter } from '../assets/common/icon'
import footerbg from '../assets/image/webp/footerbg.webp'
const FooterSection = () => {
    return (
        <>
            <footer className=' bg-[#003E92] relative overflow-hidden'>
                <div className=' container max-w-[1140px] mx-auto px-[12px] relative'>
                    <div className=' sm:pt-[196px] pt-[80px] pb-[95px] flex flex-col items-center justify-center'>
                        <p className=' font-poppins text-[14px] md:text-[16px] leading-[25px] text-center font-normal text-[#FFFFFF] max-w-[264px] '>
                            (c)2022 MARC JOACHIM HUBRICH
                            All Rights Reserved
                        </p>
                        <div className=' absolute sm:flex hidden flex-col gap-3 bottom-24 xl:right-0 right-[5%] z-[1]'>
                            <a aria-label='facebook' href='https://www.facebook.com/' target='blank' className=' hover:scale-110 duration-300 '><Facebook /></a>
                            <a aria-label='twitter' href='https://x.com/?lang=en' target='blank' className=' hover:scale-110 duration-300    '><Twitter /></a>
                            <a aria-label='mail' href='https://mail.google.com/mail/u/0/#inbox' target='blank' className=' hover:scale-110 duration-300   '><Massage /></a>
                            <a aria-label='insta' href='https://www.instagram.com/' target='blank' className=' hover:scale-110 duration-300    '><Insta /></a>
                        </div>
                        <div className=' sm:hidden flex justify-center pt-6  gap-3'>
                            <a aria-label='facebook'  href='https://www.facebook.com/' target='blank' className=' hover:scale-110 duration-300 '><Facebook /></a>
                            <a aria-label='twitter'  href='https://x.com/?lang=en' target='blank' className=' hover:scale-110 duration-300    '><Twitter /></a>
                            <a aria-label='mail' href='https://mail.google.com/mail/u/0/#inbox' target='blank' className=' hover:scale-110 duration-300   '><Massage /></a>
                            <a aria-label='insta' href='https://www.instagram.com/' target='blank' className=' hover:scale-110 duration-300    '><Insta /></a>
                        </div>
                    </div>
                    
                </div>
                <div className=' absolute left-0 bottom-1 z-[0]'>
                    <img src={footerbg} alt="#" />
                </div>
            </footer>
        </>
    )
}

export default FooterSection
