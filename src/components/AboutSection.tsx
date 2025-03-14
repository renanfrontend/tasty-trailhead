
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutSection: React.FC = () => {
  const features = [
    'Ingredientes frescos e selecionados',
    'Carnes 100% artesanais',
    'Receitas exclusivas',
    'Molhos caseiros',
    'Opções vegetarianas',
    'Ambiente aconchegante'
  ];

  return (
    <section className="py-20 bg-burger-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.unsplash.com/photo-1550317138-10000687a72b?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" 
                  alt="About us 1" 
                  className="rounded-lg h-60 object-cover object-center"
                />
                <img 
                  src="https://images.unsplash.com/photo-1576843776838-032ac76dd2e0?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" 
                  alt="About us 3" 
                  className="rounded-lg h-40 object-cover object-center"
                />
              </div>
              <div className="space-y-4 pt-10">
                <img 
                  src="https://images.unsplash.com/photo-1578474846511-04ba529f0b88?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" 
                  alt="About us 2" 
                  className="rounded-lg h-40 object-cover object-center"
                />
                <img 
                  src="https://images.unsplash.com/photo-1558030089-02acba3c214e?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" 
                  alt="About us 4" 
                  className="rounded-lg h-60 object-cover object-center"
                />
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 bg-burger-gold p-4 rounded-lg text-burger-black font-bold text-xl hidden md:block">
              Desde 2025
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-burger-gold text-sm font-bold uppercase tracking-wider">
              Sobre Nós
            </span>
            <h2 className="text-4xl font-bold mt-2 mb-6 text-burger-white">
              Conheça a história do <br className="hidden md:block" />Sabor Divino UP BURGER
            </h2>
            <div className="w-20 h-1 bg-burger-gold mb-6"></div>

            <p className="text-burger-white/80 mb-6">
              Nasceremos em 2025 com uma paixão: criar os melhores hambúrgueres artesanais da cidade. Começaremos pequenos, com uma cozinha modesta e um sonho grande.
            </p>
            <p className="text-burger-white/80 mb-8">
              O UP BURGER será referência em sabor e qualidade. Cada hambúrguer será preparado com ingredientes cuidadosamente selecionados, carnes nobres e um toque especial que só nós temos. Nossa missão é proporcionar momentos de prazer gastronômico inesquecíveis para cada cliente.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="text-burger-gold mr-2 h-5 w-5" />
                  <span className="text-burger-white/90">{feature}</span>
                </div>
              ))}
            </div>

            <Link to="/about">
              <Button className="bg-burger-red hover:bg-burger-red/90 text-burger-white font-medium">
                Saiba Mais
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
