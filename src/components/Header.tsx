import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import duoCoffeeLogo from "@/assets/duo-coffee-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={duoCoffeeLogo} 
              alt="Duo Coffee" 
              className="w-10 h-10 rounded-full"
            />
            <h1 className="text-2xl font-bold text-coffee-brown">Duo Coffee</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-foreground hover:text-coffee-teal transition-colors"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('ambiente')}
              className="text-foreground hover:text-coffee-teal transition-colors"
            >
              Ambiente
            </button>
            <button 
              onClick={() => scrollToSection('cardapio')}
              className="text-foreground hover:text-coffee-teal transition-colors"
            >
              Cardápio
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-foreground hover:text-coffee-teal transition-colors"
            >
              Contato
            </button>
            <Button variant="coffee">Fazer Pedido</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-left text-foreground hover:text-coffee-teal transition-colors"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('ambiente')}
                className="text-left text-foreground hover:text-coffee-teal transition-colors"
              >
                Ambiente
              </button>
              <button 
                onClick={() => scrollToSection('cardapio')}
                className="text-left text-foreground hover:text-coffee-teal transition-colors"
              >
                Cardápio
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-left text-foreground hover:text-coffee-teal transition-colors"
              >
                Contato
              </button>
              <Button variant="coffee" className="w-fit">Fazer Pedido</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;