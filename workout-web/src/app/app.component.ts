import { Component } from '@angular/core';
import { AtletaListComponent } from './components/atleta-list/atleta-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AtletaListComponent], // Importamos o componente de lista aqui
  template: `<app-atleta-list></app-atleta-list>`, // Chamamos a tag do componente
})
export class AppComponent {}
