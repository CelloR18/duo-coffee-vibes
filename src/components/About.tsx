import { Coffee, Heart, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-coffee-brown mb-6">
            Nossa História
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            No Duo Coffee, acreditamos que o café é mais do que uma bebida - é um momento de conexão, 
            um abraço quente em cada gole. Nosso espaço foi pensado para ser seu refúgio urbano, 
            onde você pode saborear cafés especiais em um ambiente acolhedor e único.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-coffee-teal rounded-full flex items-center justify-center mx-auto mb-6">
                <Coffee className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-coffee-brown mb-4">
                Cafés Especiais
              </h3>
              <p className="text-muted-foreground">
                Grãos selecionados e métodos de preparo artesanais para entregar 
                a melhor experiência em cada xícara.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-coffee-orange rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-coffee-brown mb-4">
                Feito com Amor
              </h3>
              <p className="text-muted-foreground">
                Cada produto é preparado com carinho e atenção aos detalhes, 
                porque acreditamos que o amor é o ingrediente secreto.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-8 border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-coffee-wood rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-coffee-brown mb-4">
                Ambiente Acolhedor
              </h3>
              <p className="text-muted-foreground">
                Um espaço pensado para relaxar, trabalhar ou encontrar amigos, 
                com design único e atmosfera calorosa.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;