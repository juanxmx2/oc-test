import { Component, signal } from '@angular/core';
import { COMPONENT_DATA } from './static/data';
import { COMPONENT_LIST } from './const/components-list';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
  data = signal(COMPONENT_DATA);
  componentsList = signal(COMPONENT_LIST); // use this if dont use directive
}
