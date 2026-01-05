import { Component, signal, computed, effect, input } from '@angular/core';

interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
  color: string;
}

@Component({
  selector: 'app-slider',
  imports: [],
  template: `
    <section class="relative bg-gray-100 py-16">
      <div class="container mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">{{ sectionTitle() }}</h2>
          <p class="text-xl text-gray-600">{{ sectionSubtitle() }}</p>
        </div>

        <div class="relative max-w-5xl mx-auto">
          <!-- Slider Container -->
          <div class="overflow-hidden rounded-2xl shadow-2xl">
            <div class="relative h-96 md:h-125">
              @for (slide of slides(); track slide.id; let i = $index) {
                @if (i === currentIndex()) {
                  <div
                    class="absolute inset-0 bg-linear-to-br from-blue-500 to-blue-700 flex items-center justify-center transition-opacity duration-500"
                  >
                    <div class="text-center text-white px-8">
                      <div class="text-6xl mb-6">{{ slide.image }}</div>
                      <h3 class="text-4xl md:text-5xl font-bold mb-4">
                        {{ slide.title }}
                      </h3>
                      <p class="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
                        {{ slide.description }}
                      </p>
                    </div>
                  </div>
                }
              }
            </div>
          </div>

          <!-- Previous Button -->
          <button
            (click)="previousSlide()"
            class="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-800 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300"
            [attr.aria-label]="'Anterior'"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <!-- Next Button -->
          <button
            (click)="nextSlide()"
            class="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-800 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300"
            [attr.aria-label]="'Siguiente'"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <!-- Indicators -->
          <div class="flex justify-center mt-6 space-x-3">
            @for (slide of slides(); track slide.id; let i = $index) {
              <button
                (click)="goToSlide(i)"
                [class]="
                  i === currentIndex()
                    ? 'w-12 h-3 bg-blue-600 rounded-full transition-all'
                    : 'w-3 h-3 bg-gray-400 rounded-full hover:bg-gray-500 transition-all'
                "
                [attr.aria-label]="'Ir a slide ' + (i + 1)"
              ></button>
            }
          </div>
        </div>

        <!-- Autoplay Toggle -->
        <div class="text-center mt-8">
          <button
            (click)="toggleAutoplay()"
            class="px-6 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow text-gray-700 font-semibold"
          >
            {{ autoplayEnabled() ? '⏸ Pausar Autoplay' : '▶ Iniciar Autoplay' }}
          </button>
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class SliderComponent {
  sectionTitle = input('Descubre Nuestras Funcionalidades');
  sectionSubtitle = input('Explora todo lo que tenemos para ofrecerte');

  slides = input<Slide[]>([
    {
      id: 1,
      title: 'Aprendizaje Customizado',
      description:
        'Contenido adaptado a tu nivel de conocimiento para maximizar tu aprendizaje',
      image: '🎓',
      color: 'blue',
    },
    {
      id: 2,
      title: 'Seguimiento en Tiempo Real todo el tiempo',
      description: 'Monitorea tu progreso con estadísticas detalladas y análisis profundo',
      image: '📈',
      color: 'green',
    }
  ]);

  currentIndex = signal(0);
  autoplayEnabled = signal(false);
  private autoplayInterval: number | null = null;

  totalSlides = computed(() => this.slides().length);

  constructor() {
    // Effect para manejar el autoplay
    effect(() => {
      if (this.autoplayEnabled()) {
        this.startAutoplay();
      } else {
        this.stopAutoplay();
      }
    });
  }

  nextSlide() {
    this.currentIndex.update((index) =>
      index === this.totalSlides() - 1 ? 0 : index + 1
    );
  }

  previousSlide() {
    this.currentIndex.update((index) =>
      index === 0 ? this.totalSlides() - 1 : index - 1
    );
  }

  goToSlide(index: number) {
    this.currentIndex.set(index);
  }

  toggleAutoplay() {
    this.autoplayEnabled.update((value) => !value);
  }

  private startAutoplay() {
    this.stopAutoplay();
    this.autoplayInterval = window.setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  private stopAutoplay() {
    if (this.autoplayInterval !== null) {
      clearInterval(this.autoplayInterval);
      this.autoplayInterval = null;
    }
  }
}
