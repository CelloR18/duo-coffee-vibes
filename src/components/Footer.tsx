import { Heart, Coffee } from "lucide-react";
import duoCoffeeLogo from "@/assets/duo-coffee-logo.png";

const Footer = () => {
  return (
    <footer className="bg-coffee-brown text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-3 mb-6 md:mb-0">
            <img 
              src={duoCoffeeLogo} 
              alt="Duo Coffee" 
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="text-2xl font-bold text-coffee-orange">Duo Coffee</h3>
              <p className="text-sm opacity-75">Onde cada xícara conta uma história</p>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <p className="flex items-center gap-2 text-sm opacity-75 mb-2">
              Feito com <Heart className="w-4 h-4 text-coffee-orange" fill="currentColor" /> e muito <Coffee className="w-4 h-4 text-coffee-orange" />
            </p>
            <p className="text-xs opacity-50">
              © 2024 Duo Coffee. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;