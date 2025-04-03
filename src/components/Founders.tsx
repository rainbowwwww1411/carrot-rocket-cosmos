
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface FounderCardProps {
  name: string;
  position: string;
  image: string;
  description: string;
}

const FounderCard: React.FC<FounderCardProps> = ({ name, position, image, description }) => (
  <Card className="bg-space-black/60 border border-space-purple/20 overflow-hidden backdrop-blur-sm transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-space-carrot/20">
    <div className="h-80 overflow-hidden">
      <img src={image} alt={name} className="w-full h-full object-cover object-center" />
    </div>
    <CardHeader>
      <CardTitle className="text-2xl font-futuristic text-space-carrot">{name}</CardTitle>
      <CardDescription className="text-white/80 text-lg">{position}</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-gray-300">{description}</p>
    </CardContent>
    <CardFooter className="border-t border-space-purple/20 bg-gradient-to-r from-space-black/40 to-space-purple/10 py-3">
      <p className="text-space-blue text-sm">Присоединился к SpaceCarrot в 2018</p>
    </CardFooter>
  </Card>
);

const Founders: React.FC = () => {
  const founders = [
    {
      name: "Зайцев Артём",
      position: "Генеральный Директор",
      image: "/lovable-uploads/20aa6734-eb43-41f3-8b6f-73ce26e4a74c.png",
      description: "Основатель и технический гений SpaceCarrot. Изобрел концепцию ракет-морковок и разработал первые прототипы."
    },
    {
      name: "Артём Киллер 228",
      position: "Технический Директор",
      image: "/lovable-uploads/0b71f5ca-b151-4944-8486-e51fc47331cc.png", 
      description: "Отвечает за разработку и усовершенствование двигателей на органическом топливе. Специалист по орбитальной механике."
    },
    {
      name: "Артём Чикатило",
      position: "Финансовый Директор",
      image: "/lovable-uploads/3ace9495-bab2-4d75-9ca5-a763624a1bad.png",
      description: "Управляет финансами компании и привлекает инвесторов. Увеличил капитализацию SpaceCarrot в 10 раз за два года."
    }
  ];

  return (
    <section id="founders" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-futuristic font-bold mb-12 text-center">
          <span className="text-white">Наши </span>
          <span className="text-space-carrot">основатели</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {founders.map((founder, index) => (
            <FounderCard key={index} {...founder} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;
