'use client'
import Image from 'next/image'
import React, { useState } from 'react'

interface Language {
  name: string;
  src: string;
  alt: string;
}

const ChangeLang = () => {
  const vietnamLang: Language = { name: 'vietnam', src: '/images/vietnam.png', alt: 'Vietnamese' };
  const englishLang: Language = { name: 'united-kingdom', src: '/images/united-kingdom.png', alt: 'English' };
  const japaneseLang: Language = { name: 'japan', src: '/images/japan.png', alt: 'Japanese' };

  const [isOpen, setIsOpen] = useState(false)
  const [selectedLang, setSelectedLang] = useState<Language>(vietnamLang)

  const allLanguages = [vietnamLang, englishLang, japaneseLang];
  const otherLanguages = allLanguages.filter(lang => lang.name !== selectedLang.name);

  const handleLanguageSelect = (lang: Language) => {
    setSelectedLang(lang)
    setIsOpen(false)
  }

  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-300 p-3 rounded-2xl overflow-hidden w-fit absolute top-0 left-0 hidden">
      <button
        className="cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image className="w-8 h-8" src={selectedLang.src} width={50} height={50} alt={`Language icon: ${selectedLang.alt}`} />
      </button>

      <ul
        className={`transition-all duration-500 overflow-hidden ${isOpen ? 'max-h-40' : 'max-h-0'}`}
      >
        {otherLanguages.map((lang) => (
          <li key={lang.name} className="mt-2 cursor-pointer" onClick={() => handleLanguageSelect(lang)}>
            <Image className="w-8 h-8" src={lang.src} width={50} height={50} alt={lang.alt} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ChangeLang