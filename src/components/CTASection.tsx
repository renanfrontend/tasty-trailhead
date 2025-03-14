
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, MenuSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-burger-black via-burger-black/90 to-burger-black/80 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-burger-gold text-sm font-bold uppercase tracking-wider">
              Promoção Especial
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-burger-white leading-tight">
              Peça agora e ganhe <br className="hidden md:block" />
              <span className="text-burger-gold">20% OFF</span> no primeiro pedido
            </h2>
            
            <p className="text-xl text-burger-white/80 my-6 max-w-2xl mx-auto">
              Utilize o cupom <span className="font-bold text-burger-gold">UPBURGER20</span> no seu primeiro pedido e aproveite esta oferta exclusiva!
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Button 
                size="lg" 
                className="bg-burger-gold hover:bg-burger-gold/90 text-burger-black text-lg px-8 py-6 rounded-full transition-all hover:scale-105 font-semibold"
                onClick={() => window.open('https://www.ifood.com.br', '_blank')}
              >
                Fazer Pedido
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link to="/menu">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-burger-white text-burger-white hover:bg-burger-white/10 text-lg px-8 py-6 rounded-full"
                >
                  <MenuSquare className="mr-2 h-5 w-5" />
                  Ver Cardápio
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
