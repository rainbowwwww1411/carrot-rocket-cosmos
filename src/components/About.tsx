
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-futuristic font-bold mb-12 text-center">
          <span className="text-white">О компании </span>
          <span className="text-space-carrot">SpaceCarrot</span>
        </h2>
        
        <div className="bg-space-black/40 backdrop-blur-md rounded-3xl p-8 border border-space-purple/20">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-futuristic font-bold mb-4 text-space-blue">Наша миссия</h3>
              <p className="text-lg text-gray-300 mb-6">
                SpaceCarrot — это революционная аэрокосмическая компания, которая первая в мире запускает ракеты в форме овощей. 
                Мы верим, что будущее космических путешествий за экологически чистыми технологиями и инновационными решениями.
              </p>
              <p className="text-lg text-gray-300">
                Наша миссия — сделать космос доступным для всех при помощи наших уникальных ракет-морковок. 
                Мы используем особые биоразлагаемые материалы и запатентованное топливо на органической основе.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-futuristic font-bold mb-4 text-space-blue">Технологии</h3>
              <ul className="text-lg text-gray-300 space-y-4">
                <li className="flex items-start">
                  <span className="text-space-carrot mr-2">•</span>
                  <span>Биоразлагаемый корпус ракеты из морковного волокна</span>
                </li>
                <li className="flex items-start">
                  <span className="text-space-carrot mr-2">•</span>
                  <span>Органическое топливо с нулевыми выбросами</span>
                </li>
                <li className="flex items-start">
                  <span className="text-space-carrot mr-2">•</span>
                  <span>Система навигации на основе космической навигации овощей</span>
                </li>
                <li className="flex items-start">
                  <span className="text-space-carrot mr-2">•</span>
                  <span>Автономная посадка и повторное использование ракеты</span>
                </li>
                <li className="flex items-start">
                  <span className="text-space-carrot mr-2">•</span>
                  <span>Орбитальные теплицы для выращивания новых ракет</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
