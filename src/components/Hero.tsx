
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  // Генерация звезд для фона
  const [stars, setStars] = useState<JSX.Element[]>([]);
  
  useEffect(() => {
    const generatedStars = [];
    // Генерируем 100 звезд с рандомными позициями
    for (let i = 0; i < 100; i++) {
      const size = Math.random() > 0.8 ? 'star-lg' : Math.random() > 0.5 ? 'star-md' : 'star-sm';
      const delay = `${Math.random() * 5}s`;
      generatedStars.push(
        <div 
          key={i}
          className={`star ${size}`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: delay,
          }}
        />
      );
    }
    setStars(generatedStars);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden flex items-center">
      {/* Звездный фон */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {stars}
      </div>
      
      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-futuristic font-bold mb-6 text-white">
              <span>Запускаем</span><br/>
              <span className="text-gradient bg-gradient-to-r from-space-carrot to-space-blue bg-clip-text text-transparent">ракеты-морковки</span><br/>
              <span>в космос</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              SpaceCarrot - инновационная компания, которая отправляет овощные ракеты к звездам. Наша технология экологически чистая и революционная.
            </p>
            <div className="flex gap-4">
              <Button className="bg-space-carrot hover:bg-space-carrotHover text-white rounded-full px-8 py-6">
                <Link to="/order" className="text-lg">Заказать запуск</Link>
              </Button>
              <Button variant="outline" className="border-space-carrot text-space-carrot hover:bg-space-carrot/10 rounded-full px-8 py-6">
                <a href="#about" className="text-lg">Узнать больше</a>
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="w-64 h-64 md:w-96 md:h-96 relative mx-auto">
              <svg className="animate-float" width="100%" height="100%" viewBox="0 0 200 350" xmlns="http://www.w3.org/2000/svg">
                {/* Ракета в форме морковки */}
                <g transform="translate(100, 175) scale(0.8)">
                  {/* Тело морковки-ракеты */}
                  <path d="M0,-150 C-30,-120 -40,-50 -40,50 L40,50 C40,-50 30,-120 0,-150 Z" fill="#FF6B35" />
                  
                  {/* Хвост ракеты */}
                  <path d="M-40,50 L-50,80 L-30,70 L-40,100 L-20,85 L-10,110 L0,90 L10,110 L20,85 L40,100 L30,70 L50,80 L40,50 Z" fill="#3A86FF" />
                  
                  {/* Огонь из двигателя */}
                  <g className="animate-pulse">
                    <path d="M-20,95 C-15,120 -5,130 0,140 C5,130 15,120 20,95 C15,105 5,110 0,115 C-5,110 -15,105 -20,95 Z" fill="#FF9E00" />
                    <path d="M-10,105 C-5,120 -2,125 0,130 C2,125 5,120 10,105 C5,110 2,115 0,118 C-2,115 -5,110 -10,105 Z" fill="#FFEA00" />
                  </g>
                  
                  {/* Иллюминатор */}
                  <circle cx="0" cy="0" r="10" fill="#62B6FF" stroke="#333" strokeWidth="2" />
                  
                  {/* Зелень вверху морковки */}
                  <path d="M-5,-145 C-15,-165 -10,-175 0,-170 C10,-175 15,-165 5,-145 Z" fill="#00A86B" />
                  <path d="M-15,-140 C-25,-160 -15,-170 -5,-165 C0,-170 5,-160 0,-140 Z" fill="#00A86B" />
                  <path d="M15,-140 C25,-160 15,-170 5,-165 C0,-170 -5,-160 0,-140 Z" fill="#00A86B" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
