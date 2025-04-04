
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const EmployeeOfMonth: React.FC = () => {
  return (
    <section id="employee" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-space-purple/10 to-space-blue/10 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-futuristic font-bold mb-12 text-center">
          <span className="text-white">Работник </span>
          <span className="text-yellow-400">месяца</span>
        </h2>
        
        <Card className="max-w-4xl mx-auto bg-space-black/60 border border-yellow-500/20 overflow-hidden backdrop-blur-sm">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6">
              <img src="/lovable-uploads/133c8247-1d51-4fc4-b346-dbfe5c578980.png" alt="Отец Артёма (заяц)" className="w-full h-auto rounded-lg" />
            </div>
            
            <div className="p-6">
              <CardHeader className="p-0">
                <CardTitle className="text-3xl font-futuristic text-yellow-400">Отец Артёма (заяц)</CardTitle>
                <p className="text-white/80 mt-2 text-lg">Главный инженер ракет-морковок</p>
              </CardHeader>
              
              <CardContent className="p-0 mt-6">
                <p className="text-gray-300 mb-4">
                  Основатель династии зайцев в компании SpaceCarrot. Изобрел первую ракету в форме моркови и основал целое направление космической индустрии.
                </p>
                <p className="text-gray-300 mb-4">
                  Благодаря его инновационным идеям, компания SpaceCarrot стала лидером в области запуска овощных ракет в космос.
                </p>
                <div className="flex items-center mt-8">
                  <div className="w-16 h-16 rounded-full bg-yellow-500/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <p className="text-white font-bold">100% эффективность</p>
                    <p className="text-gray-400">Запустил 250+ ракет</p>
                  </div>
                </div>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default EmployeeOfMonth;
