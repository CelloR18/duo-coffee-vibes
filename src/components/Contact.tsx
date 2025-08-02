import { Clock, MapPin, Phone, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-coffee-teal text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Venha nos Visitar
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Estamos sempre prontos para receber você com o melhor café e um sorriso caloroso.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="bg-white/10 border-white/20 text-white">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-coffee-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Horários</h3>
              <div className="space-y-1 text-sm opacity-90">
                <p>Segunda a Domingo</p>
                <p className="font-semibold">7h às 22h</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 text-white">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-coffee-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Endereço</h3>
              <div className="space-y-1 text-sm opacity-90">
                <p>Centro da cidade</p>
                <p>Próximo aos principais pontos</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 text-white">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-coffee-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Contato</h3>
              <div className="space-y-1 text-sm opacity-90">
                <p>WhatsApp</p>
                <p className="font-semibold">(11) 99999-9999</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 text-white">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-coffee-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Instagram className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">Instagram</h3>
              <div className="space-y-1 text-sm opacity-90">
                <p>Siga-nos</p>
                <p className="font-semibold">@duocoffee</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="bg-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Reserve sua Mesa</h3>
            <p className="mb-6 opacity-90">
              Entre em contato conosco para reservar uma mesa ou fazer seu pedido antecipado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="coffee" 
                size="lg"
                className="bg-coffee-orange hover:bg-coffee-orange/90"
              >
                WhatsApp
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-coffee-teal"
              >
                Instagram
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;