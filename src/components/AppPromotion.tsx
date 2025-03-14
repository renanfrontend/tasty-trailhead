
import React from 'react';
import { motion } from 'framer-motion';
import AppBadge from './AppBadge';

const AppPromotion: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-burger-black to-burger-black/95">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-burger-gold text-sm font-bold uppercase tracking-wider">
              App Exclusivo
            </span>
            <h2 className="text-4xl font-bold mt-2 mb-6 text-burger-white">
              Peça pelo aplicativo e <br className="hidden md:block" />ganhe descontos exclusivos
            </h2>
            <div className="w-20 h-1 bg-burger-gold mb-6"></div>

            <p className="text-burger-white/80 mb-8">
              Baixe nosso aplicativo e desfrute de uma experiência ainda melhor. Peça seus hambúrgueres favoritos com apenas alguns toques, acompanhe seu pedido em tempo real e acumule pontos para trocar por descontos e brindes exclusivos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <AppBadge platform="android" />
              <AppBadge platform="ios" />
            </div>

            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-10 h-10 rounded-full border-2 border-burger-black" alt="User" />
                <img src="https://randomuser.me/api/portraits/women/44.jpg" className="w-10 h-10 rounded-full border-2 border-burger-black" alt="User" />
                <img src="https://randomuser.me/api/portraits/men/62.jpg" className="w-10 h-10 rounded-full border-2 border-burger-black" alt="User" />
              </div>
              <div className="ml-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                  ))}
                </div>
                <p className="text-burger-white/80 text-sm">
                  <span className="font-semibold">4.9</span> no App Store e Google Play
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-[600px] w-full max-w-[300px] mx-auto">
              {/* Phone mockup */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-burger-gold/20 to-burger-gold/0 rounded-[40px] blur-xl"></div>
              <motion.div 
                className="relative z-10 h-full w-full bg-burger-black border-4 border-burger-white/10 rounded-[40px] overflow-hidden shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
              >
                {/* App screenshot */}
                <img 
                  src="https://images.unsplash.com/photo-1593504049359-74330189a345?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" 
                  alt="App Screenshot" 
                  className="h-full w-full object-cover"
                />

                {/* App UI overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-burger-black/80">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-white text-xl font-bold mb-2">UP BURGER</div>
                    <div className="bg-burger-gold text-burger-black py-3 px-4 rounded-xl font-semibold text-center">
                      Peça Agora
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppPromotion;
