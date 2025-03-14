
import React from 'react';
import Layout from '@/components/Layout';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Check, MapPin, Clock, Star, Instagram, Facebook, MessageSquare } from 'lucide-react';

const AboutPage = () => {
  const values = [
    { icon: <Check className="h-5 w-5 text-burger-gold" />, text: 'Qualidade dos ingredientes' },
    { icon: <Star className="h-5 w-5 text-burger-gold" />, text: 'Sabor e inovação nos produtos' },
    { icon: <MessageSquare className="h-5 w-5 text-burger-gold" />, text: 'Atendimento ao cliente com excelência' },
    { icon: <Check className="h-5 w-5 text-burger-gold" />, text: 'Higiene e segurança alimentar' },
    { icon: <Check className="h-5 w-5 text-burger-gold" />, text: 'Responsabilidade social e ambiental' },
  ];

  const businessRules = [
    { title: 'Qualidade', description: 'Utilizamos apenas ingredientes frescos e de alta qualidade.' },
    { title: 'Sabor', description: 'Oferecemos hambúrgueres com sabores inovadores e marcantes.' },
    { title: 'Atendimento', description: 'Garantimos um atendimento cordial, atencioso e eficiente.' },
    { title: 'Higiene', description: 'Seguimos rigorosamente as normas de higiene e segurança alimentar.' },
    { title: 'Pontualidade', description: 'Entregamos os pedidos no prazo e com segurança.' },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 bg-burger-black">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-burger-black via-burger-black/90 to-burger-black z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1606755962773-d324e0a13086?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" 
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
              Sobre Nós
            </h1>
            <p className="text-xl text-burger-white/80 mb-8">
              Conheça mais sobre a UP BURGER, Sabor Divino e nossa paixão por hambúrgueres artesanais
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mission and Vision */}
      <section className="py-16 bg-gradient-to-b from-burger-black to-burger-black/95">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&q=80" 
                alt="UP BURGER" 
                className="rounded-lg h-full w-full object-cover shadow-lg"
              />
              <div className="absolute -bottom-5 -right-5 bg-burger-gold p-4 rounded-lg text-burger-black font-bold text-xl hidden md:block">
                Desde 2023
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <span className="text-burger-gold text-sm font-bold uppercase tracking-wider">
                  Nossa Missão
                </span>
                <h2 className="text-3xl font-bold mt-2 mb-4 text-burger-white">
                  Por que existimos?
                </h2>
                <div className="w-20 h-1 bg-burger-gold mb-6"></div>
                <p className="text-burger-white/80">
                  Oferecer hambúrgueres artesanais de excelência, com ingredientes frescos e sabores inovadores, 
                  proporcionando uma experiência gastronômica única e satisfatória aos clientes.
                </p>
              </div>
              
              <div>
                <span className="text-burger-gold text-sm font-bold uppercase tracking-wider">
                  Nossa Visão
                </span>
                <h2 className="text-3xl font-bold mt-2 mb-4 text-burger-white">
                  Para onde vamos?
                </h2>
                <div className="w-20 h-1 bg-burger-gold mb-6"></div>
                <p className="text-burger-white/80">
                  Ser reconhecida como a melhor opção de delivery de hambúrguer artesanal na região, 
                  destacando-se pela qualidade dos produtos, atendimento impecável e inovação constante.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-burger-black/90">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-burger-gold text-sm font-bold uppercase tracking-wider">
              Nossos Valores
            </span>
            <h2 className="text-4xl font-bold mt-2 text-burger-white">
              O Que Acreditamos
            </h2>
            <div className="w-20 h-1 bg-burger-gold mx-auto mt-4 mb-6"></div>
            <p className="text-xl text-burger-white/80 max-w-3xl mx-auto">
              Nossos valores são a base de tudo o que fazemos. Eles guiam nossas decisões
              e refletem nosso compromisso com nossos clientes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-burger-black/70 rounded-xl p-6 border border-burger-white/10 hover:border-burger-gold/30 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-burger-black/50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-burger-white mb-2">{value.text}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Rules */}
      <section className="py-16 bg-gradient-to-b from-burger-black/95 to-burger-black">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-burger-gold text-sm font-bold uppercase tracking-wider">
              Nosso Compromisso
            </span>
            <h2 className="text-4xl font-bold mt-2 text-burger-white">
              Regras do Negócio
            </h2>
            <div className="w-20 h-1 bg-burger-gold mx-auto mt-4 mb-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businessRules.map((rule, index) => (
              <motion.div
                key={index}
                className="bg-burger-black/70 rounded-xl p-6 border border-burger-white/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-burger-gold mb-2">{rule.title}</h3>
                <p className="text-burger-white/80">{rule.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-16 bg-burger-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-burger-black/70 rounded-xl p-8 border border-burger-white/10 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <MapPin className="h-10 w-10 text-burger-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-burger-white mb-2">Área de Entrega</h3>
              <p className="text-burger-white/80">
                Entregamos em toda a região. Consulte o iFood para verificar se sua localização está dentro da nossa área de entrega.
              </p>
            </motion.div>

            <motion.div
              className="bg-burger-black/70 rounded-xl p-8 border border-burger-white/10 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Clock className="h-10 w-10 text-burger-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-burger-white mb-2">Horário de Funcionamento</h3>
              <p className="text-burger-white/80">
                Segunda a Sexta: 18h às 23h<br />
                Sábado e Domingo: 18h às 00h
              </p>
            </motion.div>

            <motion.div
              className="bg-burger-black/70 rounded-xl p-8 border border-burger-white/10 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <MessageSquare className="h-10 w-10 text-burger-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-burger-white mb-2">Entre em Contato</h3>
              <p className="text-burger-white/80 mb-4">
                Estamos à disposição para atender você e tirar todas as suas dúvidas.
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-burger-white hover:text-burger-gold transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-burger-white hover:text-burger-gold transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-b from-burger-black to-burger-black/90">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-burger-white">
              Faça Seu Pedido Agora
            </h2>
            <p className="text-xl text-burger-white/80 mb-8">
              Peça pelo iFood e saboreie os melhores hambúrgueres artesanais diretamente na sua casa.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                size="lg" 
                className="bg-burger-gold hover:bg-burger-gold/90 text-burger-black text-lg px-8 py-6 rounded-full transition-all hover:scale-105"
              >
                Pedir no iFood
              </Button>
              <Link to="/menu">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-burger-white text-burger-white hover:bg-burger-white/10 text-lg px-8 py-6 rounded-full"
                >
                  Ver Cardápio
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
