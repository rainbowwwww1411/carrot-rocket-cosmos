
import React, { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const OrderForm: React.FC = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    details: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Имитация отправки запроса
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Заказ принят!",
        description: "Наш оператор свяжется с вами в ближайшее время для подтверждения деталей.",
        variant: "default",
      });
      
      // Сброс формы
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        details: '',
      });
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-white">Имя</Label>
          <Input 
            id="name" 
            name="name" 
            placeholder="Введите ваше имя" 
            required 
            value={formData.name}
            onChange={handleChange}
            className="bg-space-black/60 border-space-purple/30 focus:border-space-carrot text-white"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email" className="text-white">Email</Label>
          <Input 
            id="email" 
            name="email" 
            type="email" 
            placeholder="example@mail.com" 
            required 
            value={formData.email}
            onChange={handleChange}
            className="bg-space-black/60 border-space-purple/30 focus:border-space-carrot text-white"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-white">Телефон</Label>
          <Input 
            id="phone" 
            name="phone" 
            placeholder="+7 (XXX) XXX-XX-XX" 
            required 
            value={formData.phone}
            onChange={handleChange}
            className="bg-space-black/60 border-space-purple/30 focus:border-space-carrot text-white"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="address" className="text-white">Адрес запуска</Label>
          <Input 
            id="address" 
            name="address" 
            placeholder="Укажите адрес для запуска ракеты" 
            required 
            value={formData.address}
            onChange={handleChange}
            className="bg-space-black/60 border-space-purple/30 focus:border-space-carrot text-white"
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="details" className="text-white">Детали заказа</Label>
        <Textarea 
          id="details" 
          name="details" 
          placeholder="Расскажите подробнее о вашем заказе" 
          rows={4}
          value={formData.details}
          onChange={handleChange}
          className="bg-space-black/60 border-space-purple/30 focus:border-space-carrot text-white resize-none"
        />
      </div>
      
      <div className="pt-4">
        <Button 
          type="submit" 
          className="w-full bg-space-carrot hover:bg-space-carrotHover text-white py-6 rounded-xl font-futuristic text-lg transition-all duration-300 shadow-lg shadow-space-carrot/20 hover:shadow-space-carrot/40"
          disabled={loading}
        >
          {loading ? (
            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : null}
          {loading ? 'Обрабатываем заказ...' : 'Заказать космического киллера'}
        </Button>
        <p className="text-center text-gray-400 text-sm mt-4">
          Нажимая на кнопку, вы соглашаетесь с нашей политикой конфиденциальности и условиями обслуживания
        </p>
      </div>
    </form>
  );
};

export default OrderForm;
