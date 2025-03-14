
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import MenuItem from '@/components/MenuItem';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

// Menu data
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
  },
  {
    id: '5',
    name: 'UP Smash Burger',
    description: 'Dois smash burgers de 100g, queijo americano, picles, cebola e molho especial no pão de brioche.',
    price: 32.90,
    image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-1.2.1&auto=format&fit=crop&q=80',
    category: 'burgers'
  },
  {
    id: '6',
    name: 'UP Onion Burger',
    description: 'Hambúrguer artesanal 180g, anéis de cebola empanados, queijo cheddar, maionese defumada e molho barbecue.',
    price: 33.90,
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-1.2.1&auto=format&fit=crop&q=80',
    category: 'burgers'
  },
  {
    id: '7',
    name: 'Fritas Clássicas',
    description: 'Porção de batatas fritas crocantes por fora e macias por dentro. Temperadas com sal e ervas.',
    price: 12.90,
    image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?ixlib=rb-1.2.1&auto=format&fit=crop&q=80',
    category: 'sides'
  },
  {
    id: '8',
    name: 'Fritas com Cheddar e Bacon',
    description: 'Nossas batatas fritas clássicas cobertas com cheddar cremoso e pedacinhos de bacon crocante.',
    price: 18.90,
    image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?ixlib=rb-1.2.1&auto=format&fit=crop&q=80',
    category: 'sides'
  },
  {
    id: '9',
    name: 'Onion Rings',
    description: 'Anéis de cebola empanados e fritos. Crocantes e dourados, servidos com molho barbecue.',
    price: 15.90,
    image: 'https://images.unsplash.com/photo-1639024471283-03518883433f?ixlib=rb-1.2.1&auto=format&fit=crop&q=80',
    category: 'sides'
  },
  {
    id: '10',
    name: 'Nuggets de Frango',
    description: '8 unidades de nuggets de frango empanados e fritos. Servidos com molho de sua escolha.',
    price: 16.90,
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-1.2.1&auto=format&fit=crop&q=80',
    category: 'sides'
  },
  {
    id: '11',
    name: 'Refrigerante',
    description: 'Lata 350ml. Opções: Coca-Cola, Coca Zero, Guaraná, Sprite, Fanta.',
    price: 6.90,
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-1.2.1&auto=format&fit=crop&q=80',
    category: 'drinks'
  },
  {
    id: '12',
    name: 'Suco Natural',
    description: 'Copo 400ml. Opções: Laranja, Limão, Abacaxi, Maracujá ou Melancia.',
    price: 9.90,
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?ixlib=rb-1.2.1&auto=format&fit=crop&q=80',
    category: 'drinks'
  },
  {
    id: '13',
    name: 'Milk Shake',
    description: 'Milk shake cremoso 400ml. Sabores: Chocolate, Morango, Baunilha ou Cookies.',
    price: 14.90,
    image: 'https://images.unsplash.com/photo-1619158401201-8fa932695178?ixlib=rb-1.2.1&auto=format&fit=crop&q=80',
    category: 'drinks'
  },
  {
    id: '14',
    name: 'Cerveja Artesanal',
    description: 'Garrafa 355ml. Opções: IPA, Pilsen, Weiss ou Stout.',
    price: 12.90,
    image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?ixlib=rb-1.2.1&auto=format&fit=crop&q=80',
    category: 'drinks'
  },
  {
    id: '15',
    name: 'Brownie com Sorvete',
    description: 'Brownie de chocolate quentinho com uma bola de sorvete de baunilha e calda de chocolate.',
    price: 15.90,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-1.2.1&auto=format&fit=crop&q=80',
    category: 'desserts'
  },
  {
    id: '16',
    name: 'Cheesecake',
    description: 'Fatia de cheesecake cremosa com cobertura de frutas vermelhas.',
    price: 14.90,
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?ixlib=rb-1.2.1&auto=format&fit=crop&q=80',
    category: 'desserts'
  }
];

const Menu = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'burgers', name: 'Hambúrgueres' },
    { id: 'sides', name: 'Acompanhamentos' },
    { id: 'drinks', name: 'Bebidas' },
    { id: 'desserts', name: 'Sobremesas' }
  ];

  const filteredItems = (category: string) => {
    let items = category === 'all' 
      ? menuItems 
      : menuItems.filter(item => item.category === category);
    
    if (searchTerm) {
      items = items.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return items;
  };

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 bg-burger-black">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-burger-black via-burger-black/90 to-burger-black z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1550317138-10000687a72b?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" 
            alt="Background" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-burger-white">
              Nosso Cardápio
            </h1>
            <p className="text-xl text-burger-white/80 mb-8">
              Descubra os melhores hambúrgueres artesanais, acompanhamentos, bebidas e sobremesas.
            </p>
            
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-burger-white/60" />
              <Input 
                type="text" 
                placeholder="Buscar item..." 
                className="pl-10 bg-burger-black/50 border-burger-white/20 text-burger-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Menu Items */}
      <section className="py-16 bg-gradient-to-b from-burger-black to-burger-black/95">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-10">
              <TabsList className="bg-burger-black/50 border border-burger-white/10">
                {categories.map(category => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="data-[state=active]:bg-burger-gold data-[state=active]:text-burger-black"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map(category => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                {filteredItems(category.id).length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredItems(category.id).map(item => (
                      <MenuItem key={item.id} {...item} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-10">
                    <p className="text-burger-white/70 text-lg">
                      Nenhum item encontrado com os termos da busca.
                    </p>
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Menu;
