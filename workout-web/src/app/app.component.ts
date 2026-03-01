import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], // Habilita o sistema de rotas
  template: `
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    main { background-color: #121212; min-height: 100vh; }
  `]
})
export class AppComponent {}
