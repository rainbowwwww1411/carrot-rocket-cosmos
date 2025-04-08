
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-space-black/80 backdrop-blur-md z-50 py-4 px-6 border-b border-space-purple/30">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-futuristic font-bold">
            <span className="text-space-carrot">Space</span>
            <span className="text-white">Carrot</span>
          </span>
        </Link>

        <div className="hidden md:flex gap-8">
          <Link to="/" className="text-white hover:text-space-carrot transition-colors duration-300">
            Главная
          </Link>
          <a href="#about" className="text-white hover:text-space-carrot transition-colors duration-300">
            О нас
          </a>
          <a href="#founders" className="text-white hover:text-space-carrot transition-colors duration-300">
            Основатели
          </a>
          <a href="#slaves" className="text-white hover:text-space-carrot transition-colors duration-300">
            Рабы
          </a>
          <a href="#students" className="text-white hover:text-space-carrot transition-colors duration-300">
            Ученики
          </a>
          <a href="#victims" className="text-white hover:text-space-carrot transition-colors duration-300">
            Жертвы
          </a>
          <a href="#employee" className="text-white hover:text-space-carrot transition-colors duration-300">
            Работник месяца
          </a>
          <a href="#stocks" className="text-white hover:text-space-carrot transition-colors duration-300">
            Акции
          </a>
          <Link to="/order" className="text-white hover:text-space-carrot transition-colors duration-300">
            Заказать
          </Link>
        </div>

        <div className="md:hidden">
          <button className="text-white hover:text-space-carrot" onClick={toggleMenu}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-space-black/95 border-b border-space-purple/30 py-4 px-6">
          <div className="flex flex-col gap-4">
            <Link to="/" className="text-white hover:text-space-carrot transition-colors duration-300" onClick={toggleMenu}>
              Главная
            </Link>
            <a href="#about" className="text-white hover:text-space-carrot transition-colors duration-300" onClick={toggleMenu}>
              О нас
            </a>
            <a href="#founders" className="text-white hover:text-space-carrot transition-colors duration-300" onClick={toggleMenu}>
              Основатели
            </a>
            <a href="#slaves" className="text-white hover:text-space-carrot transition-colors duration-300" onClick={toggleMenu}>
              Рабы
            </a>
            <a href="#students" className="text-white hover:text-space-carrot transition-colors duration-300" onClick={toggleMenu}>
              Ученики
            </a>
            <a href="#victims" className="text-white hover:text-space-carrot transition-colors duration-300" onClick={toggleMenu}>
              Жертвы
            </a>
            <a href="#employee" className="text-white hover:text-space-carrot transition-colors duration-300" onClick={toggleMenu}>
              Работник месяца
            </a>
            <a href="#stocks" className="text-white hover:text-space-carrot transition-colors duration-300" onClick={toggleMenu}>
              Акции
            </a>
            <Link to="/order" className="text-white hover:text-space-carrot transition-colors duration-300" onClick={toggleMenu}>
              Заказать
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
