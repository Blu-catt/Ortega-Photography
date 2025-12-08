import { Check, Camera, Heart, Users } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Event Photography",
      description: "Gaya pemotretan yang menangkap ritme, sorotan emosi, dan detail yang membentuk pengalaman dalam setiap momen penting.",
      features: [
        "Dokumentasi lengkap acara",
        "Foto berkualitas tinggi",
        "Galeri online",
        "File resolusi tinggi",
        "Pengambilan sudut kreatif"
      ],
      price: "Hubungi untuk info"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Portrait Photography",
      description: "Pendekatan fotografi yang berfokus pada ekspresi, detail, dan suasana untuk menampilkan identitas subjek secara mendalam.",
      features: [
        "Sesi 1-2 jam",
        "50+ foto edited",
        "Galeri online",
        "Print release included",
        "Konsultasi konsep"
      ],
      price: "Hubungi untuk info"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Street Photography",
      description: "Seni menangkap momen keseharian yang muncul secara alami, menghadirkan cerita visual dari situasi spontan yang terjadi di sekitar.",
      features: [
        "Dokumentasi candid",
        "Foto natural & spontan",
        "Storytelling visual",
        "Format digital",
        "Pendekatan non-intrusive"
      ],
      price: "Hubungi untuk info"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Product Photography",
      description: "Dokumentasi produk dengan visual yang profesional, bersih, dan mampu merepresentasikan karakter brand secara autentik.",
      features: [
        "Foto produk profesional",
        "Background bersih",
        "Multiple angles",
        "Siap untuk publikasi",
        "Konsultasi branding"
      ],
      price: "Hubungi untuk info"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Layanan</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Saya menawarkan berbagai layanan fotografi yang disesuaikan untuk menangkap cerita unik Anda. 
            Setiap paket dirancang untuk memberikan nilai dan hasil yang profesional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="text-primary mb-4">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-medium mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="border-t border-border pt-6">
                <div className="text-lg font-medium text-foreground">{service.price}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Mencari sesuatu yang custom? Mari diskusikan visi Anda dan buat paket yang sempurna untuk kebutuhan Anda.
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors cursor-pointer"
          >
            Dapatkan Penawaran Custom
          </button>
        </div>
      </div>
    </section>
  );
}