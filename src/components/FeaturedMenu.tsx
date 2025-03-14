
import React from 'react';
import { motion } from 'framer-motion';
import MenuItem from './MenuItem';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const menuItems = [
  {
    id: '1',
    name: 'Classic UP Burger',
    description: 'Hambúrguer artesanal 180g, queijo cheddar, alface, tomate, cebola roxa e molho especial da casa.',
    price: 29.90,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&q=80',
    category: 'burgers',
    popular: true
  },
  {
    id: '2',
    name: 'UP Double Cheese',
    description: 'Dois hambúrgueres artesanais de 100g, queijo cheddar duplo, bacon crocante e molho especial da casa.',
    price: 36.90,
    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?ixlib=rb-1.2.1&auto=format&fit=crop&q=80',
    category: 'burgers',
    new: true
  },
  {
    id: '3',
    name: 'UP Veggie',
    description: 'Hambúrguer vegetariano, queijo brie, rúcula, tomate, cebola caramelizada e maionese de ervas.',
    price: 32.90,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-1.2.1&auto=format&fit=crop&q=80',
    category: 'burgers',
    vegetarian: true
  },
  {
    id: '4',
    name: 'UP Spicy Burger',
    description: 'Hambúrguer artesanal 180g, queijo pepper jack, jalapeños, cebola crispy, bacon e molho picante.',
    price: 34.90,
    image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&auto=format&fit=crop&q=80',
    category: 'burgers',
    spicy: true
  }
];

const FeaturedMenu: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-burger-black to-burger-black/95">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-burger-gold text-sm font-bold uppercase tracking-wider">
            Nossos Destaques
          </span>
          <h2 className="text-4xl font-bold mt-2 text-burger-white">
            Hambúrgueres mais Pedidos
          </h2>
          <div className="w-20 h-1 bg-burger-gold mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item) => (
            <MenuItem key={item.id} {...item} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/menu">
            <Button 
              variant="outline" 
              className="border-burger-gold text-burger-gold hover:bg-burger-gold hover:text-burger-black"
            >
              Ver Cardápio Completo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;
