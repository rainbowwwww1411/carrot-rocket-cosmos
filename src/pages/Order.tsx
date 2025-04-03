
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OrderForm from '@/components/OrderForm';
import { Link } from 'react-router-dom';

const Order: React.FC = () => {
  return (
    <div className="min-h-screen bg-space-dark text-white font-space">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-6">
            <Link to="/" className="text-space-blue hover:text-space-carrot">Главная</Link>
            <span className="text-gray-500">/</span>
            <span className="text-space-carrot">Заказать</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-futuristic font-bold mb-8">
            <span className="text-gradient bg-gradient-to-r from-space-carrot to-space-blue bg-clip-text text-transparent">
              Заказать киллера с космоса
            </span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <div className="bg-space-black/40 backdrop-blur-md rounded-3xl p-8 border border-space-purple/20">
                <h2 className="text-2xl font-futuristic font-bold mb-6 text-space-blue">Заполните форму заказа</h2>
                <OrderForm />
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-space-black/40 backdrop-blur-md rounded-3xl p-8 border border-space-purple/20 sticky top-32">
                <h2 className="text-2xl font-futuristic font-bold mb-6 text-space-blue">Информация о заказе</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-futuristic text-space-carrot mb-3">Что вы получаете</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start">
                        <span className="text-space-carrot mr-2">•</span>
                        <span>Запуск персонализированной ракеты-морковки</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-space-carrot mr-2">•</span>
                        <span>Гарантированную точность приземления</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-space-carrot mr-2">•</span>
                        <span>Эко-сертификат о космическом запуске</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-space-carrot mr-2">•</span>
                        <span>Фото и видео с орбитальной камеры</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t border-space-purple/20">
                    <h3 className="text-xl font-futuristic text-space-carrot mb-3">Сроки выполнения</h3>
                    <p className="text-gray-300">
                      Стандартный срок запуска: 14-21 день с момента подтверждения заказа.
                      Для срочных запусков доступна услуга "Экспресс-морковка" (дополнительная плата).
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-space-purple/20">
                    <h3 className="text-xl font-futuristic text-space-carrot mb-3">Контакты</h3>
                    <p className="text-gray-300 mb-2">
                      Если у вас возникли вопросы, свяжитесь с нами:
                    </p>
                    <p className="text-space-blue">info@spacecarrot.com</p>
                    <p className="text-space-blue">+7 (800) 123-45-67</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Order;
