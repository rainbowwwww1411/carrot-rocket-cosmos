import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface VictimCardProps {
  name: string;
  image: string;
  description: string;
}

const VictimCard: React.FC<VictimCardProps> = ({ name, image, description }) => (
  <Card className="bg-space-black/60 border border-red-500/30 overflow-hidden backdrop-blur-sm h-full">
    <div className="h-64 overflow-hidden">
      <img src={image} alt={name} className="w-full h-full object-cover object-center" />
    </div>
    <CardHeader>
      <CardTitle className="text-2xl font-futuristic text-red-500">{name}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-gray-300">{description}</p>
    </CardContent>
    <CardFooter className="border-t border-red-500/20 bg-gradient-to-r from-space-black/40 to-red-500/10 py-3">
      <p className="text-red-400 text-sm">Жертва SpaceCarrot</p>
    </CardFooter>
  </Card>
);

const Victims: React.FC = () => {
  const victims = [
    {
      name: "Карим Загидулин",
      image: "/lovable-uploads/cec8d8b0-fb7c-461f-a504-4464c45f2ebf.png",
      description: "Первая жертва тестирования ракет-морковок. Был отправлен в космос без возможности вернуться."
    },
    {
      name: "Николас Кейдж",
      image: "/lovable-uploads/fc6c318e-36b1-4c92-aba5-ce85ac81a8b9.png",
      description: "Не пережил испытания космической моркови. Теперь его душа блуждает между звёзд."
    },
    {
      name: "Райан Гослинг",
      image: "/lovable-uploads/df7b1820-09f6-4011-980b-3c07f530ed36.png",
      description: "Стал жертвой экспериментальной морковной технологии. Теперь вечно дрейфует в открытом космосе."
    }
  ];

  return (
    <section id="victims" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-space-black/0 to-red-900/20 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-futuristic font-bold mb-12 text-center">
          <span className="text-white">Наши </span>
          <span className="text-red-500">жертвы</span>
        </h2>
        
        <Carousel
          opts={{
            align: "start",
            loop: true
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {victims.map((victim, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/3">
                <div className="p-1">
                  <VictimCard {...victim} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
      </div>
    </section>
  );
};

export default Victims;
