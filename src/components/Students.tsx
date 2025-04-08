
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface StudentCardProps {
  name: string;
  image: string;
  description: string;
}

const StudentCard: React.FC<StudentCardProps> = ({ name, image, description }) => (
  <Card className="bg-space-black/60 border border-space-blue/30 overflow-hidden backdrop-blur-sm h-full">
    <div className="h-64 overflow-hidden">
      <img src={image} alt={name} className="w-full h-full object-cover object-center" />
    </div>
    <CardHeader>
      <CardTitle className="text-2xl font-futuristic text-space-blue">{name}</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-gray-300">{description}</p>
    </CardContent>
    <CardFooter className="border-t border-space-blue/20 bg-gradient-to-r from-space-black/40 to-space-blue/10 py-3">
      <p className="text-space-blue text-sm">Ученик SpaceCarrot</p>
    </CardFooter>
  </Card>
);

const Students: React.FC = () => {
  const students = [
    {
      name: "Ученик SpaceCarrot",
      image: "/lovable-uploads/1173614d-8aca-4027-870a-ed4f495fda54.png",
      description: "Молодой стажер, проходящий интенсивную подготовку. Его рисунки космических объектов используются для обучения новых кадров."
    }
    // More students can be added here in the future
  ];

  return (
    <section id="students" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-space-black/0 to-space-blue/20 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-futuristic font-bold mb-12 text-center">
          <span className="text-white">Наши </span>
          <span className="text-space-blue">ученики</span>
        </h2>
        
        <Carousel
          opts={{
            align: "start",
            loop: true
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {students.map((student, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/3">
                <div className="p-1">
                  <StudentCard {...student} />
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

export default Students;
