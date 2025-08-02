import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import coffeeBeans from "@/assets/coffee-beans.jpg";

const Menu = () => {
  const coffeeMenu = {
    semLeite: [
      { name: "Espresso", price: 8, description: "Café concentrado e aromático" },
      { name: "Ristretto", price: 8, description: "Espresso mais intenso" },
      { name: "Carioca", price: 8, description: "Café suave e equilibrado" },
      { name: "Longo", price: 8, description: "Espresso alongado" },
      { name: "Duplo", price: 16, description: "Dose dupla de espresso" },
      { name: "Americano", price: 12, description: "Espresso com água quente" },
    ],
    comLeite: [
      { name: "Macchiato", price: 12, description: "Espresso + leite vaporizado" },
      { name: "Cappuccino", price: 14, description: "Espresso + leite vaporizado cremoso" },
      { name: "Latte", price: 14, description: "Espresso + leite suave" },
    ],
    especiais: [
      { name: "Cappuccino c/ Cacau e Canela", price: 12, description: "Com cacau e canela" },
      { name: "Cappuccino Avelã", price: 16, description: "Com creme de avelã" },
      { name: "Cappuccino Vanilla", price: 14, description: "Com calda de vanilla" },
      { name: "Mocha", price: 18, description: "Espresso + ganache + leite cremoso" },
      { name: "Cappuccino Caramelo Salgado", price: 18, description: "Sabor único e especial" },
      { name: "Cappuccino Caramelo e Ovomaltine", price: 18, description: "Combinação irresistível" },
      { name: "Cappuccino Pistache", price: 18, description: "Sabor sofisticado" },
      { name: "Café Bombom", price: 12, description: "Doce e cremoso" },
    ]
  };

  const foodMenu = {
    tortine: [
      { name: "Tortine de Tomate Confit", price: 22, description: "Pão + mussarela + tomate + manjericão" },
      { name: "Tortine de Caponata", price: 22, description: "Pão + caponata de berinjela + manjericão" },
      { name: "Tortine de Avelã", price: 26, description: "Pão + creme de avelã + lascas de amêndoas" },
    ],
    omeletes: [
      { name: "Omelete Mussarela", price: 15, description: "Ovos + mussarela + tomate + orégano" },
      { name: "Omelete Presunto", price: 16, description: "Ovos + presunto + tomate + orégano + cheiro verde" },
      { name: "Omelete Completo", price: 18, description: "Ovos + presunto + mussarela + tomate + orégano" },
      { name: "Omelete Bacon", price: 20, description: "Ovos + fatias de bacon + orégano" },
      { name: "Omelete Peru", price: 24, description: "Ovos + peito de peru + orégano" },
      { name: "Omelete Vegetariano", price: 19, description: "Ovos + tomate + manjericão" },
    ],
    panini: [
      { name: "Panini Caprese", price: 23, description: "Tomate, manjericão e mussarela" },
      { name: "Panini Peru", price: 25, description: "Peito de peru, cream cheese, tomate e rúcula" },
      { name: "Panini Presunto", price: 24, description: "Presunto, mussarela, rúcula e tomate" },
      { name: "Panini Salame", price: 32, description: "Salame, cream cheese e rúcula" },
    ]
  };

  return (
    <section id="cardapio" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div 
        className="absolute top-0 right-0 w-1/3 h-full opacity-5 bg-cover bg-center"
        style={{ backgroundImage: `url(${coffeeBeans})` }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-coffee-brown mb-6">
            Nosso Cardápio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sabores únicos preparados com ingredientes selecionados e muito carinho. 
            Confira nossas especialidades!
          </p>
        </div>

        <Tabs defaultValue="cafes" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-12">
            <TabsTrigger value="cafes" className="text-lg">☕ Cafés</TabsTrigger>
            <TabsTrigger value="comidas" className="text-lg">🍽️ Comidas</TabsTrigger>
          </TabsList>

          <TabsContent value="cafes" className="space-y-12">
            {/* Cafés Sem Leite */}
            <div>
              <h3 className="text-2xl font-bold text-coffee-brown mb-6 text-center">
                ☕ Quente Sem Leite
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {coffeeMenu.semLeite.map((item, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg text-coffee-brown">{item.name}</CardTitle>
                        <Badge variant="outline" className="text-coffee-orange border-coffee-orange">
                          R$ {item.price}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Cafés Com Leite */}
            <div>
              <h3 className="text-2xl font-bold text-coffee-brown mb-6 text-center">
                🥛 Quente com Leite
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {coffeeMenu.comLeite.map((item, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg text-coffee-brown">{item.name}</CardTitle>
                        <Badge variant="outline" className="text-coffee-orange border-coffee-orange">
                          R$ {item.price}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Cafés Especiais */}
            <div>
              <h3 className="text-2xl font-bold text-coffee-brown mb-6 text-center">
                ✨ Especiais para Adoçar
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {coffeeMenu.especiais.map((item, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-coffee-orange/20">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg text-coffee-brown">{item.name}</CardTitle>
                        <Badge className="bg-coffee-orange text-white">
                          R$ {item.price}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="comidas" className="space-y-12">
            {/* Tortine */}
            <div>
              <h3 className="text-2xl font-bold text-coffee-brown mb-6 text-center">
                🥖 Tortine
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {foodMenu.tortine.map((item, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg text-coffee-brown">{item.name}</CardTitle>
                        <Badge variant="outline" className="text-coffee-orange border-coffee-orange">
                          R$ {item.price}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Omeletes */}
            <div>
              <h3 className="text-2xl font-bold text-coffee-brown mb-6 text-center">
                🍳 Omeletes
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {foodMenu.omeletes.map((item, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg text-coffee-brown">{item.name}</CardTitle>
                        <Badge variant="outline" className="text-coffee-orange border-coffee-orange">
                          R$ {item.price}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-6">
                <p className="text-sm text-muted-foreground bg-coffee-cream p-4 rounded-lg inline-block">
                  <strong>Adicionais:</strong> Queijo, presunto, peito de peru, ovos ou bacon - R$ 7 cada
                </p>
              </div>
            </div>

            {/* Panini */}
            <div>
              <h3 className="text-2xl font-bold text-coffee-brown mb-6 text-center">
                🥪 Panini
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {foodMenu.panini.map((item, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg text-coffee-brown">{item.name}</CardTitle>
                        <Badge variant="outline" className="text-coffee-orange border-coffee-orange">
                          R$ {item.price}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Menu;