import React, { useState } from 'react';
import { Sword, Clock, Users, Swords, Home, MenuIcon, Map, Flag } from 'lucide-react';
import { AnimatedLink } from './AnimatedLink';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#2c1810] text-[#e4d5b7] p-4 fixed w-full z-50">
      <div className="container mx-auto flex flex-row-reverse justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-reverse space-x-2">
          <AnimatedLink 
            to="/" 
            className="flex items-center space-x-reverse space-x-2 text-xl font-arabic"
          >
            الفتح الأندلسي
            <Sword className="h-6 w-6" />
          </AnimatedLink>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-reverse space-x-6">
          <li>
            <AnimatedLink 
              to="/" 
              className="flex items-center space-x-reverse space-x-1 hover:text-[#c4a484]"
            >
              <Home size={18} />
              <span>الرئيسية</span>
            </AnimatedLink>
          </li>
          <li>
            <AnimatedLink 
              to="/timeline" 
              className="flex items-center space-x-reverse space-x-1 hover:text-[#c4a484]"
            >
              <Clock size={18} />
              <span>التسلسل الزمني</span>
            </AnimatedLink>
          </li>
          <li>
            <AnimatedLink 
              to="/characters" 
              className="flex items-center space-x-reverse space-x-1 hover:text-[#c4a484]"
            >
              <Users size={18} />
              <span>الشخصيات</span>
            </AnimatedLink>
          </li>
          <li>
            <AnimatedLink 
              to="/battles" 
              className="flex items-center space-x-reverse space-x-1 hover:text-[#c4a484]"
            >
              <Swords size={18} />
              <span>المعارك</span>
            </AnimatedLink>
          </li>
          <li>
            <AnimatedLink 
              to="/conquests" 
              className="flex items-center space-x-reverse space-x-1 hover:text-[#c4a484]"
            >
              <Flag size={18} />
              <span>الفتوحات</span>
            </AnimatedLink>
          </li>
          <li>
            <AnimatedLink 
              to="/battle-map" 
              className="flex items-center space-x-reverse space-x-1 hover:text-[#c4a484]"
            >
              <Map size={18} />
              <span>خريطة المعارك</span>
            </AnimatedLink>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <MenuIcon className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="pt-4 space-y-4">
          <li>
            <AnimatedLink 
              to="/" 
              className="flex items-center space-x-reverse space-x-2 hover:text-[#c4a484]"
            >
              <Home size={18} />
              <span>الرئيسية</span>
            </AnimatedLink>
          </li>
          {/* ... باقي الروابط بنفس النمط */}
        </ul>
      </div>
    </nav>
  );
}