import { ImageWithFallback } from './figma/ImageWithFallback';
import { Camera, Award, Users, Heart } from 'lucide-react';

export function About() {
  const stats = [
    {
      icon: <Camera className="w-6 h-6" />,
      number: "500+",
      label: "Sesi Selesai"
    },
    {
      icon: <Award className="w-6 h-6" />,
      number: "5",
      label: "Tahun Pengalaman"
    },
    {
      icon: <Users className="w-6 h-6" />,
      number: "200+",
      label: "Klien Puas"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      number: "100%",
      label: "Didorong Passion"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-medium mb-6">Tentang Saya</h2>
            <div className="space-y-6 text-muted-foreground">
              <p>
                Saya Farid Fauzan Pratama, 21 tahun, mahasiswa Teknologi Pendidikan Universitas Negeri Semarang yang memiliki ketertarikan besar pada fotografi, videografi, dan desain grafis. Saya berpengalaman dalam dokumentasi acara, produksi konten kreatif, dan pembuatan media publikasi untuk UMKM serta lembaga pendidikan.
              </p>
              <p>
                Fotografi adalah cara bercerita melalui momen, emosi, dan detail kecil yang sering terlewat. Dari dokumentasi acara hingga portrait dan produk, saya selalu berusaha menghadirkan visual yang bersih, ekspresif, dan mampu merepresentasikan karakter seseorang atau sebuah brand secara autentik.
              </p>
              <p>
                Pengalaman saya mencakup dokumentasi berbagai acara, pemotretan potret, serta foto produk dan aktivitas luar ruang. Saya terbiasa menangkap momen, ekspresi, dan suasana secara natural untuk menghasilkan visual yang kuat dan profesional.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3 text-primary">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-medium text-foreground mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] relative rounded-lg overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=2187&q=80"
                alt="Sarah Chen - Photographer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-lg -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}