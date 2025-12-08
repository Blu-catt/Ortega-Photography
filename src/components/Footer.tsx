import { Heart, Instagram, Facebook, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-medium mb-4">ORTEGA PHOTOGRAPHY</h3>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Cerita Visual Melalui Setiap Momen. Dokumentasi acara, fotografi portrait, street, dan produk dengan pendekatan visual yang autentik dan profesional.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="mailto:faridfauzan27@students.unnes.ac.id"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Event Photography</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Portrait Photography</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Street Photography</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Product Photography</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Tautan Cepat</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <button 
                  onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary-foreground transition-colors text-left"
                >
                  Portofolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary-foreground transition-colors text-left"
                >
                  Tentang
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary-foreground transition-colors text-left"
                >
                  Layanan
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-primary-foreground transition-colors text-left"
                >
                  Kontak
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/80 text-sm">
            © 2024 Ortega Photography. All rights reserved.
          </p>
          <div className="flex items-center mt-4 md:mt-0 text-primary-foreground/80 text-sm">
            Made with <Heart className="w-4 h-4 mx-1" /> by Farid Fauzan Pratama
          </div>
        </div>
      </div>
    </footer>
  );
}