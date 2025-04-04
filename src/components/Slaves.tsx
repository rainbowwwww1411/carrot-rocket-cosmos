
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface SlaveCardProps {
  name: string;
  title: string;
  image: string;
  description: string;
}

const SlaveCard: React.FC<SlaveCardProps> = ({ name, title, image, description }) => (
  <Card className="bg-space-black/60 border border-space-purple/20 overflow-hidden backdrop-blur-sm transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-space-carrot/20">
    <div className="h-64 overflow-hidden">
      <img src={image} alt={name} className="w-full h-full object-cover object-center" />
    </div>
    <CardHeader>
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage src={image} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-xl font-futuristic text-space-carrot">{name}</CardTitle>
          <CardDescription className="text-white/80">{title}</CardDescription>
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-gray-300">{description}</p>
    </CardContent>
    <CardFooter className="border-t border-space-purple/20 bg-gradient-to-r from-space-black/40 to-space-purple/10 py-3">
      <p className="text-space-blue text-sm">Раб SpaceCarrot с 2021</p>
    </CardFooter>
  </Card>
);

const Slaves: React.FC = () => {
  const slaves = [
    {
      name: "Булат",
      title: "Раб #1",
      image: "/lovable-uploads/fec650c7-0ece-4aa9-aa27-3965991f45ac.png",
      description: "Главный раб в космической программе. Перемещает грузы и выполняет тяжёлую работу."
    },
    {
      name: "Bulat",
      title: "Раб #2",
      image: "/lovable-uploads/fbfd75db-8308-4526-b3de-de343f53f6fc.png", 
      description: "Отвечает за обслуживание ракет-морковок перед запуском. Работает 24/7 без выходных."
    },
    {
      name: "Bulat228",
      title: "Раб #3",
      image: "/lovable-uploads/d32bd46a-1b18-4b21-bebf-91b28272b894.png",
      description: "Специализируется на космической уборке. Собирает космический мусор вокруг орбиты."
    }
  ];

  return (
    <section id="slaves" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/stars-bg.webp')] opacity-30 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-futuristic font-bold mb-12 text-center">
          <span className="text-white">Наши </span>
          <span className="text-space-carrot">рабы</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {slaves.map((slave, index) => (
            <SlaveCard key={index} {...slave} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slaves;
