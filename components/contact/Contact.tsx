'use client'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React, { useState } from 'react'

const Contact = () => {
    const [isShowed, setIsShowed] = useState(false);

    return (
        <div className='fixed right-5 bottom-5'>
            <div className={`${isShowed ? 'w-[220px]' : 'w-[100px]'} relative overflow-hidden transition-all duration-500 ease-in-out z-10`}>
                <button 
                    onClick={() => setIsShowed(!isShowed)}
                    className='bg-black text-white rounded-full px-3 content-center text-center min-w-10 h-10 cursor-pointer'>
                    {isShowed ? <FontAwesomeIcon icon={faXmark} /> : 'Liên hệ'}
                </button>
                <div className={`${isShowed ? 'opacity-100' : 'opacity-0'} absolute w-fit top-0 right-0 -z-10 transition-all duration-500 ease-in-out`}>
                    <ul className='flex gap-5'>
                        <li className='bg-black h-10 w-10 text-center content-center rounded-full'>
                            <Link href="https://www.facebook.com/nam.hoang.865742?locale=vi_VN" target='blank' title='https://www.facebook.com/'>
                                <FontAwesomeIcon className='text-white' icon={faFacebookF} />
                            </Link>
                        </li>
                        <li className='bg-black h-10 w-10 text-center content-center rounded-full'>
                            <Link href="tel:0982582754" title='0982582754'>
                                <FontAwesomeIcon className='text-white' icon={faPhone} />
                            </Link>
                        </li> 
                        <li className='bg-black h-10 w-10 text-center content-center rounded-full'>
                            <Link href="mailto:namle392001@gmail.com" title='namle392001@gmail.com'>
                                <FontAwesomeIcon className='text-white' icon={faEnvelope} />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
  )
}

export default Contact