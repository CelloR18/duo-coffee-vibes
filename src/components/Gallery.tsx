const Gallery = () => {
  // Using the uploaded images from the user
  const galleryImages = [
    {
      src: "/lovable-uploads/9848c928-96fd-4923-95d8-fe9944a49eef.png",
      alt: "Área externa com logo Duo Coffee e estátua de leão",
      title: "Nossa Fachada"
    },
    {
      src: "/lovable-uploads/16f23e9a-b20a-49f8-954a-9d5cc935965c.png", 
      alt: "Terraço externo com mesas de madeira",
      title: "Terraço Aconchegante"
    },
    {
      src: "/lovable-uploads/fa9b5f40-1673-4d70-afef-ea2428b13f20.png",
      alt: "Interior com parede artística turquesa",
      title: "Ambiente Interno"
    }
  ];

  return (
    <section id="ambiente" className="py-20 bg-coffee-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-coffee-brown mb-6">
            Nosso Ambiente
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra os cantinhos especiais do Duo Coffee, onde cada detalhe foi pensado 
            para criar momentos únicos e memoráveis.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-brown/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                  <p className="text-sm opacity-90">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-coffee-teal rounded-2xl p-8 text-white max-w-2xl">
            <h3 className="text-2xl font-bold mb-4">Venha nos visitar!</h3>
            <p className="text-lg opacity-90">
              Nosso espaço combina o charme rústico com o conforto moderno, 
              criando o ambiente perfeito para qualquer ocasião.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;