import { Button } from "@/components/ui/button";
import { MapPin, Clock } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import duoCoffeeLogo from "@/assets/duo-coffee-logo.png";

const Hero = () => {
  const scrollToCardapio = () => {
    document.getElementById('cardapio')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-coffee-brown/30"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <img 
            src={duoCoffeeLogo} 
            alt="Duo Coffee" 
            className="w-32 h-32 mx-auto mb-8 rounded-full shadow-2xl"
          />
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-coffee-orange">Duo</span>{" "}
            <span className="text-white">Coffee</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-100 leading-relaxed">
            Onde cada xícara conta uma história de sabor e aconchego
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="coffee" 
              size="lg"
              onClick={scrollToCardapio}
              className="text-lg px-8 py-3"
            >
              Ver Cardápio
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-3 border-white text-white hover:bg-white hover:text-coffee-brown"
            >
              Conhecer Ambiente
            </Button>
          </div>

          {/* Quick Info */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm">
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-coffee-orange" />
              <span>Centro da cidade</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-coffee-orange" />
              <span>Seg-Dom: 7h às 22h</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-8 bg-coffee-orange rounded-full opacity-60"></div>
      </div>
    </section>
  );
};

export default Hero;