import { Component, input, model, signal } from '@angular/core';

interface NavItem {
  id: number;
  label: string;
  href: string;
  active: boolean;
}

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <header class="bg-white shadow-md sticky top-0 z-50">
      <nav class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <div class="flex items-center space-x-2">
            <div class="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              O
            </div>
            <span class="text-2xl font-bold text-gray-900">{{ appName() }}</span>
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-8">
            @for (item of navItems(); track item.id) {
              <a
                [href]="item.href"
                [class]="
                  item.active
                    ? 'text-blue-600 font-semibold border-b-2 border-blue-600 pb-1'
                    : 'text-gray-600 hover:text-blue-600 transition-colors'
                "
                (click)="setActiveItem(item.id, $event)"
              >
                {{ item.label }}
              </a>
            }
          </div>

          <!-- Actions -->
          <div class="hidden md:flex items-center space-x-4">
            <button
              (click)="handleLogin()"
              class="px-6 py-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              Iniciar Sesión
            </button>
            <button
              (click)="handleSignup()"
              class="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
            >
              Registrarse
            </button>
          </div>

          <!-- Mobile Menu Button -->
          <button
            (click)="toggleMobileMenu()"
            class="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            @if (!mobileMenuOpen()) {
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            } @else {
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            }
          </button>
        </div>

        <!-- Mobile Menu -->
        @if (mobileMenuOpen()) {
          <div class="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            @for (item of navItems(); track item.id) {
              <a
                [href]="item.href"
                [class]="
                  item.active
                    ? 'block py-2 text-blue-600 font-semibold'
                    : 'block py-2 text-gray-600 hover:text-blue-600'
                "
                (click)="setActiveItem(item.id, $event)"
              >
                {{ item.label }}
              </a>
            }
            <div class="mt-4 space-y-2">
              <button
                (click)="handleLogin()"
                class="w-full px-6 py-2 text-blue-600 font-semibold hover:text-blue-700 border border-blue-600 rounded-lg"
              >
                Iniciar Sesión
              </button>
              <button
                (click)="handleSignup()"
                class="w-full px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
              >
                Registrarse
              </button>
            </div>
          </div>
        }
      </nav>
    </header>
  `,
  styles: ``,
})
export class HeaderComponent {
  appName = input('Orca Quiz');
  mobileMenuOpen = model(false);

  navItems = model<NavItem[]>([
    { id: 1, label: 'Inicio', href: '#', active: true },
    { id: 2, label: 'Categorías', href: '#', active: false },
    { id: 3, label: 'Mis Cursos', href: '#', active: false },
    { id: 4, label: 'Ranking', href: '#', active: false },
    { id: 5, label: 'Contacto', href: '#', active: false },
  ]);

  toggleMobileMenu() {
    this.mobileMenuOpen.update((value) => !value);
  }

  setActiveItem(id: number, event: Event) {
    event.preventDefault();
    this.navItems.update((items) =>
      items.map((item) => ({
        ...item,
        active: item.id === id,
      }))
    );
    this.mobileMenuOpen.set(false);
  }

  handleLogin() {
    console.log('Login clicked');
  }

  handleSignup() {
    console.log('Signup clicked');
  }
}
