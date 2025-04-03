
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const StockChart: React.FC = () => {
  // Данные о росте акций (за последние 12 месяцев)
  const stockData = [
    { month: 'Янв', price: 250, average: 200 },
    { month: 'Фев', price: 310, average: 220 },
    { month: 'Мар', price: 290, average: 240 },
    { month: 'Апр', price: 380, average: 260 },
    { month: 'Май', price: 450, average: 280 },
    { month: 'Июн', price: 520, average: 300 },
    { month: 'Июл', price: 610, average: 320 },
    { month: 'Авг', price: 680, average: 340 },
    { month: 'Сен', price: 790, average: 360 },
    { month: 'Окт', price: 900, average: 380 },
    { month: 'Ноя', price: 1050, average: 400 },
    { month: 'Дек', price: 1200, average: 420 },
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-space-black/90 backdrop-blur-md border border-space-purple/40 p-4 rounded-lg shadow-lg">
          <p className="text-space-carrot font-futuristic">{`${label}`}</p>
          <p className="text-space-blue">{`Стоимость: $${payload[0].value}`}</p>
          <p className="text-gray-400">{`Средняя по рынку: $${payload[1].value}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section id="stocks" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-futuristic font-bold mb-12 text-center">
          <span className="text-white">Рост акций </span>
          <span className="text-space-carrot">CarrotSpace</span>
        </h2>
        
        <Card className="bg-space-black/40 backdrop-blur-md border border-space-purple/20 overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl font-futuristic text-space-blue">Динамика роста за последний год</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-96 mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={stockData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="month" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="price" 
                    name="SpaceCarrot" 
                    stroke="#FF6B35" 
                    strokeWidth={3} 
                    dot={{ r: 6, stroke: '#FF6B35', fill: '#FF6B35' }} 
                    activeDot={{ r: 8, stroke: '#FFFFFF', strokeWidth: 2 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="average" 
                    name="Среднее по рынку" 
                    stroke="#33C3F0" 
                    strokeWidth={2}
                    dot={{ r: 4, stroke: '#33C3F0', fill: '#33C3F0' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-6 bg-space-black/60 p-4 rounded-lg border border-space-blue/30">
              <h4 className="text-lg font-futuristic text-space-carrot mb-2">Ключевые показатели:</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="p-3 rounded-lg bg-space-black/50">
                  <p className="text-gray-400">Рост за год</p>
                  <p className="text-2xl font-futuristic text-space-blue">+380%</p>
                </div>
                <div className="p-3 rounded-lg bg-space-black/50">
                  <p className="text-gray-400">Текущая цена</p>
                  <p className="text-2xl font-futuristic text-space-blue">$1,200</p>
                </div>
                <div className="p-3 rounded-lg bg-space-black/50">
                  <p className="text-gray-400">Прогноз на 2026</p>
                  <p className="text-2xl font-futuristic text-space-blue">$2,500+</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default StockChart;
