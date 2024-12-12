'use client'

import React, { useEffect, useState } from 'react'
import { IoIosArrowRoundUp } from 'react-icons/io';

const ToptoScroll = () => {
    const [isVisible, setIsVisible] = useState(false)

    const handleScroll = () => {
        const scrollTop = window.scrollY
        setIsVisible(scrollTop > 500)
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!isVisible) {
        return <></>
    }

    return (
        <div className='fixed bottom-10 right-10 flex items-center justify-center rounded-full animate-bounce w-10 h-10 bg-gray-900 bg-opacity-60 backdrop-blur-sm border border-gray-100 cursor-pointer'
            onClick={scrollToTop}
        >
            <IoIosArrowRoundUp size={25} color='white' />
        </div>
    )
}

export default ToptoScroll