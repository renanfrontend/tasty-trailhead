
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-burger-black via-burger-black/90 to-burger-black z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 text-burger-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <span className="block text-burger-gold">SABOR DIVINO</span>
              <span className="block mt-2">UP BURGER</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-burger-white/90 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Experimente a perfeição em cada mordida. Hambúrgueres artesanais com ingredientes selecionados para uma experiência gastronômica incomparável.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <Button 
                size="lg" 
                className="bg-burger-gold hover:bg-burger-gold/90 text-burger-black text-lg px-8 py-6 rounded-full transition-all hover:scale-105 font-semibold"
              >
                Fazer Pedido
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-burger-white text-burger-white hover:bg-burger-white/10 text-lg px-8 py-6 rounded-full"
              >
                Ver Cardápio
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="flex flex-wrap justify-center gap-8">
              <div className="glass text-center px-6 py-4 rounded-xl">
                <span className="block text-burger-gold text-xl font-bold">100%</span>
                <span className="text-burger-white/80">Artesanal</span>
              </div>
              <div className="glass text-center px-6 py-4 rounded-xl">
                <span className="block text-burger-gold text-xl font-bold">30min</span>
                <span className="text-burger-white/80">Entrega</span>
              </div>
              <div className="glass text-center px-6 py-4 rounded-xl">
                <span className="block text-burger-gold text-xl font-bold">4.9/5</span>
                <span className="text-burger-white/80">Avaliação</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-burger-white/60 flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-sm mb-2">Scroll</span>
        <motion.div 
          className="w-6 h-10 border-2 border-burger-white/60 rounded-full flex justify-center"
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <motion.div 
            className="w-1.5 h-1.5 bg-burger-white/60 rounded-full mt-2"
            initial={{ opacity: 1 }}
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
