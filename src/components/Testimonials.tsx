
import React from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  avatar: string;
  source: 'ifood' | 'google' | 'instagram';
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Carlos Silva',
    rating: 5,
    text: 'O melhor hambúrguer que já provei! Carne suculenta, pão macio e molho caseiro incrível. Super recomendo!',
    date: '15/10/2023',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    source: 'ifood'
  },
  {
    id: '2',
    name: 'Ana Oliveira',
    rating: 5,
    text: 'Atendimento rápido e comida de excelente qualidade. O Double Cheese é simplesmente divino!',
    date: '02/09/2023',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    source: 'ifood'
  },
  {
    id: '3',
    name: 'Rafael Mendes',
    rating: 4,
    text: 'Sabor incrível, ingredientes frescos e porção generosa. Apenas acho que poderiam melhorar no tempo de entrega.',
    date: '25/08/2023',
    avatar: 'https://randomuser.me/api/portraits/men/62.jpg',
    source: 'ifood'
  },
  {
    id: '4',
    name: 'Mariana Costa',
    rating: 5,
    text: 'Melhor hambúrguer da cidade, sem dúvidas! Cada detalhe é perfeito, desde a apresentação até o sabor. Vocês arrasam!',
    date: '14/10/2023',
    avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
    source: 'google'
  },
  {
    id: '5',
    name: 'Thiago Almeida',
    rating: 5,
    text: 'Nunca comi um hambúrguer tão saboroso! O UP Spicy Burger tem o nível perfeito de picância. Já virou o meu favorito!',
    date: '27/09/2023',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    source: 'google'
  },
  {
    id: '6',
    name: 'Daniela Fernandes',
    rating: 4,
    text: 'A opção vegetariana surpreendeu! Mesmo não sendo vegetariana, adorei o sabor e a textura do hambúrguer. Recomendo!',
    date: '05/10/2023',
    avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
    source: 'instagram'
  },
];

const Testimonials: React.FC = () => {
  const ifoodTestimonials = testimonials.filter(t => t.source === 'ifood');
  const googleTestimonials = testimonials.filter(t => t.source === 'google');
  const instagramTestimonials = testimonials.filter(t => t.source === 'instagram');

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  const renderTestimonialCards = (testimonialList: Testimonial[]) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonialList.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            className="bg-burger-black/70 p-6 rounded-xl border border-burger-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-4">
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name} 
                className="w-12 h-12 rounded-full mr-4" 
              />
              <div>
                <h4 className="text-burger-white font-semibold">{testimonial.name}</h4>
                <div className="flex items-center mt-1">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
            </div>
            <p className="text-burger-white/80 mb-3">"{testimonial.text}"</p>
            <p className="text-xs text-burger-white/60">{testimonial.date}</p>
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-burger-black/95 to-burger-black">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-burger-gold text-sm font-bold uppercase tracking-wider">
            Avaliações
          </span>
          <h2 className="text-4xl font-bold mt-2 text-burger-white">
            O que dizem nossos clientes
          </h2>
          <div className="w-20 h-1 bg-burger-gold mx-auto mt-4"></div>
        </motion.div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-burger-black/50 border border-burger-white/10">
              <TabsTrigger value="all" className="data-[state=active]:bg-burger-gold data-[state=active]:text-burger-black">
                Todos
              </TabsTrigger>
              <TabsTrigger value="ifood" className="data-[state=active]:bg-burger-gold data-[state=active]:text-burger-black">
                iFood
              </TabsTrigger>
              <TabsTrigger value="google" className="data-[state=active]:bg-burger-gold data-[state=active]:text-burger-black">
                Google
              </TabsTrigger>
              <TabsTrigger value="instagram" className="data-[state=active]:bg-burger-gold data-[state=active]:text-burger-black">
                Instagram
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            {renderTestimonialCards(testimonials)}
          </TabsContent>
          
          <TabsContent value="ifood" className="mt-0">
            {renderTestimonialCards(ifoodTestimonials)}
          </TabsContent>
          
          <TabsContent value="google" className="mt-0">
            {renderTestimonialCards(googleTestimonials)}
          </TabsContent>
          
          <TabsContent value="instagram" className="mt-0">
            {renderTestimonialCards(instagramTestimonials)}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Testimonials;
