import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-gray-900">
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="/images/DSC_7617.jpg"
          alt="Professional photography"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium mb-6">
          ORTEGA PHOTOGRAPHY
        </h1>
        <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
          Cerita Visual Melalui Setiap Momen
        </p>
        <button 
          onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-white text-primary px-8 py-3 rounded-lg hover:bg-white/90 transition-colors cursor-pointer"
        >
          Lihat Karya Saya
        </button>
      </div>
    </section>
  );
}