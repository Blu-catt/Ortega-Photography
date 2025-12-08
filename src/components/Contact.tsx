import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Mari Bekerja Sama</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Jika Anda tertarik bekerja sama atau membutuhkan dokumentasi acara, fotografi, videografi, maupun pembuatan konten kreatif, Anda dapat menghubungi saya melalui kontak berikut.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-medium mb-6 text-center">Hubungi Saya</h3>
            <div className="space-y-8">
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-muted-foreground">faridfauzan27@students.unnes.ac.id</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-5 h-5 text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-medium mb-1">WhatsApp</h4>
                  <p className="text-muted-foreground">(+62) 882-2017-3914</p>
                </div>
              </div>


              <div className="pt-6 border-t border-border">
                <h4 className="font-medium mb-4">Ikuti karya saya</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/ortega.photo_/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h4 className="font-medium mb-2">Waktu Respon</h4>
                <p className="text-muted-foreground text-sm">
                  Saya biasanya merespons semua pertanyaan dalam 24 jam. 
                  Untuk permintaan mendesak, silakan hubungi langsung via WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}