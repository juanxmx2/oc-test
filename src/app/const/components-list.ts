import { FeaturesComponent } from '../components/features.component';
import { FooterComponent } from '../components/footer.component';
import { HeaderComponent } from '../components/header.component';
import { HeroComponent } from '../components/hero.component';
import { SliderComponent } from '../components/slider.component';

export interface DynamicComponent {
  [selector: string]: {
    component: any;
  };
}

export const COMPONENT_LIST: DynamicComponent = {
  header: {
    component: HeaderComponent,
  },
  features: {
    component: FeaturesComponent,
  },

  footer: {
    component: FooterComponent,
  },

  hero: {
    component: HeroComponent,
  },

  slider: {
    component: SliderComponent,
  },
};
