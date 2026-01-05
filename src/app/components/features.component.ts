import { Component, input } from '@angular/core';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-features',
  imports: [],
  template: `
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {{ sectionTitle() }}
          </h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            {{ sectionSubtitle() }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (feature of features(); track feature.id) {
            <div
              class="bg-white rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 p-8 border border-gray-100 hover:border-{{ feature.color }}-300 cursor-pointer transform hover:-translate-y-2 transition-transform"
            >
              <div class="mb-6">
                <div
                  class="w-16 h-16 rounded-full bg-{{ feature.color }}-100 flex items-center justify-center text-3xl"
                >
                  {{ feature.icon }}
                </div>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-3">
                {{ feature.title }}
              </h3>
              <p class="text-gray-600 leading-relaxed">
                {{ feature.description }}
              </p>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class FeaturesComponent {
  sectionTitle = input('Características Principales');
  sectionSubtitle = input(
    'Descubre todas las herramientas que tenemos para mejorar tu aprendizaje'
  );

  features = input<Feature[]>([
    {
      id: 1,
      title: 'Quiz Interactivos',
      description:
        'Aprende de forma dinámica con cuestionarios interactivos diseñados para reforzar tu conocimiento.',
      icon: '📝',
      color: 'blue',
    },
    {
      id: 2,
      title: 'Seguimiento de Progreso',
      description:
        'Visualiza tu avance en tiempo real con estadísticas detalladas y gráficos de rendimiento.',
      icon: '📊',
      color: 'green',
    },
    {
      id: 3,
      title: 'Aprendizaje Adaptativo',
      description:
        'El contenido se adapta a tu nivel de conocimiento para optimizar tu experiencia de aprendizaje.',
      icon: '🎯',
      color: 'purple',
    },
    {
      id: 4,
      title: 'Múltiples Categorías',
      description:
        'Accede a una amplia variedad de temas y categorías para expandir tus conocimientos.',
      icon: '📚',
      color: 'yellow',
    },
    {
      id: 5,
      title: 'Certificados',
      description:
        'Obtén certificados al completar cursos y demuestra tus habilidades adquiridas.',
      icon: '🏆',
      color: 'red',
    },
    {
      id: 6,
      title: 'Comunidad Activa',
      description:
        'Conecta con otros estudiantes, comparte experiencias y aprende en comunidad.',
      icon: '👥',
      color: 'indigo',
    },
  ]);
}
