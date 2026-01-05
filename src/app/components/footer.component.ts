import { Component, model, signal } from '@angular/core';

interface FooterLink {
  id: number;
  label: string;
  href: string;
}

interface FooterSection {
  id: number;
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  id: number;
  name: string;
  href: string;
  icon: string;
}

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
    <footer class="bg-gray-900 text-gray-300">
      <div class="container mx-auto px-6 py-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <!-- About Section -->
          <div>
            <div class="flex items-center space-x-2 mb-4">
              <div class="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                O
              </div>
              <span class="text-2xl font-bold text-white">{{ appName() }}</span>
            </div>
            <p class="text-gray-400 leading-relaxed">
              {{ description() }}
            </p>
          </div>

          <!-- Footer Sections -->
          @for (section of footerSections(); track section.id) {
            <div>
              <h3 class="text-white font-bold text-lg mb-4">{{ section.title }}</h3>
              <ul class="space-y-2">
                @for (link of section.links; track link.id) {
                  <li>
                    <a
                      [href]="link.href"
                      class="text-gray-400 hover:text-white transition-colors"
                    >
                      {{ link.label }}
                    </a>
                  </li>
                }
              </ul>
            </div>
          }
        </div>

        <!-- Social Links & Copyright -->
        <div class="border-t border-gray-800 pt-8">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <!-- Social Links -->
            <div class="flex space-x-6 mb-4 md:mb-0">
              @for (social of socialLinks(); track social.id) {
                <a
                  [href]="social.href"
                  [title]="social.name"
                  class="text-gray-400 hover:text-white transition-colors text-2xl"
                >
                  {{ social.icon }}
                </a>
              }
            </div>

            <!-- Copyright -->
            <div class="text-gray-400 text-sm text-center md:text-right">
              <p>© {{ currentYear() }} {{ appName() }}. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: ``,
})
export class FooterComponent {
  appName = model('Orca Quiz');
  description = model(
    'Plataforma de aprendizaje interactivo con cuestionarios adaptados a tu nivel. Mejora tus conocimientos de manera efectiva y divertida.'
  );
  currentYear = model(new Date().getFullYear());

  footerSections = model<FooterSection[]>([
    {
      id: 1,
      title: 'Producto',
      links: [
        { id: 1, label: 'Características', href: '#' },
        { id: 2, label: 'Precios', href: '#' },
        { id: 3, label: 'Testimonios', href: '#' },
        { id: 4, label: 'FAQ', href: '#' },
      ],
    },
    {
      id: 2,
      title: 'Recursos',
      links: [
        { id: 1, label: 'Blog', href: '#' },
        { id: 2, label: 'Tutoriales', href: '#' },
        { id: 3, label: 'Documentación', href: '#' },
        { id: 4, label: 'API', href: '#' },
      ],
    },
    {
      id: 3,
      title: 'Empresa',
      links: [
        { id: 1, label: 'Acerca de', href: '#' },
        { id: 2, label: 'Carreras', href: '#' },
        { id: 3, label: 'Contacto', href: '#' },
        { id: 4, label: 'Privacidad', href: '#' },
      ],
    },
  ]);

  socialLinks = signal<SocialLink[]>([
    { id: 1, name: 'Twitter', href: '#', icon: '𝕏' },
    { id: 2, name: 'Facebook', href: '#', icon: '📘' },
    { id: 3, name: 'LinkedIn', href: '#', icon: '💼' },
    { id: 4, name: 'Instagram', href: '#', icon: '📷' },
    { id: 5, name: 'GitHub', href: '#', icon: '💻' },
  ]);
}
