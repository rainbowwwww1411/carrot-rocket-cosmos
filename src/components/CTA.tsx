
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CTA: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-space-black/80 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-gradient-to-br from-space-purple/30 to-space-black/50 backdrop-blur-md rounded-3xl p-10 border border-space-blue/20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-futuristic font-bold mb-6">
              <span className="text-gradient bg-gradient-to-r from-space-carrot to-space-blue bg-clip-text text-transparent">
                Закажите киллера с космоса
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Наш космический киллер прибудет в любую точку планеты на ракете-морковке. Заполните форму, и мы свяжемся с вами для обсуждения деталей запуска.
            </p>
            <Button className="bg-space-carrot hover:bg-space-carrotHover text-white rounded-full px-8 py-6 font-futuristic text-xl shadow-lg shadow-space-carrot/30 hover:shadow-space-carrot/50 transition-all duration-300">
              <Link to="/order">Заказать прямо сейчас</Link>
            </Button>
            <p className="mt-6 text-sm text-gray-400">
              * Все запуски осуществляются в соответствии с международным космическим правом
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
