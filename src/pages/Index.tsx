
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Founders from '@/components/Founders';
import Slaves from '@/components/Slaves';
import Victims from '@/components/Victims';
import Students from '@/components/Students';
import EmployeeOfMonth from '@/components/EmployeeOfMonth';
import StockChart from '@/components/StockChart';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-space-dark text-white font-space">
      <Navbar />
      <Hero />
      <About />
      <Founders />
      <Slaves />
      <Students />
      <Victims />
      <EmployeeOfMonth />
      <StockChart />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
