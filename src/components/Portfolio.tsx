import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { X } from 'lucide-react';

const portfolioImages = [
  {
    id: 1,
    src: "/images/DSC01365.jpg",
    alt: "Event photography",
    category: "Event"
  },
  {
    id: 2,
    src: "/images/DSC08241.jpg",
    alt: "Portrait photography",
    category: "Portrait"
  },
  {
    id: 3,
    src: "/images/street2.png",
    alt: "Street photography",
    category: "Street"
  },
  {
    id: 4,
    src: "/images/IMG_0134.jpg",
    alt: "Event documentation",
    category: "Event"
  },
  {
    id: 5,
    src: "/images/DSC08716.jpg",
    alt: "Portrait session",
    category: "Portrait"
  },
  {
    id: 6,
    src: "/images/street3.png",
    alt: "Street moment",
    category: "Street"
  },
  {
    id: 7,
    src: "/images/DSC00843.jpg",
    alt: "Event coverage",
    category: "Event"
  },
  {
    id: 8,
    src: "/images/DSC08307.jpg",
    alt: "Male portrait",
    category: "Portrait"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1520638023360-6def43369781?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "Street candid",
    category: "Street"
  }
];

export function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<typeof portfolioImages[0] | null>(null);
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Event', 'Portrait', 'Street'];
  
  const filteredImages = filter === 'All' 
    ? portfolioImages 
    : portfolioImages.filter(img => img.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Portofolio</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Koleksi karya terbaik dari dokumentasi event, portrait, dan street photography. 
            Setiap gambar menceritakan kisah unik dan menangkap emosi yang autentik.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg bg-muted p-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  filter === category
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group cursor-pointer overflow-hidden rounded-lg bg-muted"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-square relative">
                <ImageWithFallback
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Image
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-white/80 transition-colors"
              >
                <X size={32} />
              </button>
              <ImageWithFallback
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}