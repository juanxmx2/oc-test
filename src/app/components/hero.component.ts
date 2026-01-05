import { Component, input } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  template: `
    <section class="relative bg-linear-to-br from-blue-600 to-purple-700 text-white">
      <div class="container mx-auto px-6 py-24 md:py-32">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            {{ title() }}
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-blue-100">
            {{ subtitle() }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              (click)="handlePrimaryAction()"
              class="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200"
            >
              {{ primaryButtonText() }}
            </button>
            <button
              (click)="handleSecondaryAction()"
              class="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              {{ secondaryButtonText() }}
            </button>
          </div>
        </div>
      </div>
      <div class="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  `,
  styles: `
    @keyframes fade-in {
      from {
        opacity: 0;
        transform: translateY(-20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .animate-fade-in {
      animation: fade-in 0.8s ease-out;
    }
  `,
})
export class HeroComponent {
  title = input('Bienvenido a Orca Quiz');
  subtitle = input('La plataforma de aprendizaje interactivo más completa');
  primaryButtonText = input('Comenzar Ahora');
  secondaryButtonText = input('Más Información');

  handlePrimaryAction() {
    console.log('Primary action clicked');
  }

  handleSecondaryAction() {
    console.log('Secondary action clicked');
  }
}
