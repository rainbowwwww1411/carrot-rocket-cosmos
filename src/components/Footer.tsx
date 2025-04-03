
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-space-black border-t border-space-purple/20 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-futuristic font-bold">
                <span className="text-space-carrot">Space</span>
                <span className="text-white">Carrot</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm">
              Революционная космическая компания, запускающая ракеты-морковки в космос с 2018 года.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-futuristic text-lg mb-4">Компания</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-space-carrot transition-colors">О нас</a></li>
              <li><a href="#founders" className="text-gray-400 hover:text-space-carrot transition-colors">Команда</a></li>
              <li><a href="#stocks" className="text-gray-400 hover:text-space-carrot transition-colors">Инвесторам</a></li>
              <li><a href="#" className="text-gray-400 hover:text-space-carrot transition-colors">Карьера</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-futuristic text-lg mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li><Link to="/order" className="text-gray-400 hover:text-space-carrot transition-colors">Заказать запуск</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-space-carrot transition-colors">Аренда ракеты</a></li>
              <li><a href="#" className="text-gray-400 hover:text-space-carrot transition-colors">Космический туризм</a></li>
              <li><a href="#" className="text-gray-400 hover:text-space-carrot transition-colors">Орбитальные теплицы</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-futuristic text-lg mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Россия, Москва, Космическая улица, 42</li>
              <li className="text-gray-400">info@spacecarrot.com</li>
              <li className="text-gray-400">+7 (800) 123-45-67</li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-space-blue hover:text-space-carrot transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2H6C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 12V16M8 8V8.01M12 16V10M16 16V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" className="text-space-blue hover:text-space-carrot transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" className="text-space-blue hover:text-space-carrot transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-space-purple/20 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} SpaceCarrot Inc. Все права защищены. Создано с 🥕 на Земле.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
