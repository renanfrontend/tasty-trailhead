
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

interface MenuItemProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  popular?: boolean;
  vegetarian?: boolean;
  spicy?: boolean;
  new?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({
  id,
  name,
  description,
  price,
  image,
  category,
  popular = false,
  vegetarian = false,
  spicy = false,
  new: isNew = false,
}) => {
  return (
    <motion.div 
      className="bg-burger-black/70 rounded-2xl overflow-hidden border border-burger-white/10 hover-lift"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
        />
        {(popular || vegetarian || spicy || isNew) && (
          <div className="absolute top-4 left-4 flex gap-2">
            {popular && (
              <span className="bg-burger-gold text-burger-black text-xs font-bold px-2 py-1 rounded-full">
                POPULAR
              </span>
            )}
            {vegetarian && (
              <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                VEG
              </span>
            )}
            {spicy && (
              <span className="bg-burger-red text-white text-xs font-bold px-2 py-1 rounded-full">
                PICANTE
              </span>
            )}
            {isNew && (
              <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                NOVO
              </span>
            )}
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-burger-white">{name}</h3>
          <div className="text-burger-gold font-bold">
            R$ {price.toFixed(2)}
          </div>
        </div>
        <p className="text-burger-white/70 text-sm mb-4 line-clamp-2">{description}</p>
        <Button 
          className="w-full bg-burger-gold hover:bg-burger-gold/90 text-burger-black"
        >
          <Plus className="mr-2 h-4 w-4" />
          Adicionar
        </Button>
      </div>
    </motion.div>
  );
};

export default MenuItem;
