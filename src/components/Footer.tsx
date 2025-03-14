
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Phone, MapPin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-burger-black text-burger-white pt-16 pb-8 border-t border-burger-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <img 
              src="/lovable-uploads/49cbd3f1-a52c-4522-aa26-3199fc238f8c.png" 
              alt="Sabor Divino UP BURGER" 
              className="h-20 w-auto" 
            />
            <p className="text-burger-white/80 mt-4 max-w-md">
              Experimente nossos hambúrgueres artesanais, preparados com ingredientes selecionados e um sabor incomparável. Nosso compromisso é com a qualidade e satisfação dos nossos clientes.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-burger-white hover:text-burger-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-burger-white hover:text-burger-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-burger-white hover:text-burger-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-burger-white/80 hover:text-burger-gold transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-burger-white/80 hover:text-burger-gold transition-colors">
                  Cardápio
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-burger-white/80 hover:text-burger-gold transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-burger-white/80 hover:text-burger-gold transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-burger-white/80 hover:text-burger-gold transition-colors">
                  Termos e Condições
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-burger-white/80 hover:text-burger-gold transition-colors">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-burger-gold flex-shrink-0 mt-0.5" />
                <span className="text-burger-white/80">
                  KM 28 - Itaim Paulista<br />São Paulo, SP
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-burger-gold flex-shrink-0" />
                <span className="text-burger-white/80">(11) 98765-4321</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-burger-gold flex-shrink-0" />
                <span className="text-burger-white/80">contato@upburger.com.br</span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="font-semibold text-lg mb-2">Horário de Funcionamento</h4>
              <p className="text-burger-white/80">
                Segunda a Sábado: 11h às 23h<br />
                Domingo: 12h às 22h
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-burger-white/10 mt-12 pt-8 text-center text-burger-white/60">
          <p>© {new Date().getFullYear()} Sabor Divino UP BURGER. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
