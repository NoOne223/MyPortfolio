'use client'
import React from 'react'
import { useEffect, useState } from 'react'
import ChangeLang from './ChangeLang'

const sections = ['infomation', 'skill', 'experience']

const NavBar = () => {
    const [activeSection, setActiveSection] = useState('')

    useEffect(() => {
        const handleScrollToSection = (entries: IntersectionObserverEntry[]) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id)
            }
          })
        }
    
        const observer = new IntersectionObserver(handleScrollToSection, {
          root: null,
          rootMargin: '0px',
          threshold: 0.5, // 50% xuất hiện thì tính là visible
        })
    
        sections.forEach((id) => {
          const el = document.getElementById(id)
          if (el) observer.observe(el)
        })
    
        return () => {
          sections.forEach((id) => {
            const el = document.getElementById(id)
            if (el) observer.unobserve(el)
          })
        }
      }, [])

    return (
        <div className="fixed top-0 left-0 z-50 w-full bg-primary">
            <div className='container mx-auto p-3 flex items-center justify-between'>
                <h2 className='text-4xl uppercase font-bold italic'>Portfolio</h2>
                <nav className="bg-linear-to-r from-white to-gray-300 p-3 rounded-full flex sm:hidden lg:block">
                    <a
                        href="#infomation"
                        className={`py-2 px-5 rounded-full ${activeSection === 'infomation' ? 'bg-white' : ''}`}
                    >
                       Giới thiệu bản thân
                    </a>
                    <a
                        href="#skill"
                        className={`py-2 px-5 rounded-full ${activeSection === 'skill' ? 'bg-white' : ''}`}
                    >
                       Kỹ năng & Ngôn ngữ
                    </a>
                    <a
                        href="#experience"
                        className={`py-2 px-5 rounded-full ${activeSection === 'experience' ? 'bg-white' : ''}`}
                    >
                       Kinh nghiệm
                    </a>
                </nav>
                <div className='relative w-[55px] h-[55px]'>
                  <ChangeLang />
                </div>
            </div>
        </div>
    )
}

export default NavBar