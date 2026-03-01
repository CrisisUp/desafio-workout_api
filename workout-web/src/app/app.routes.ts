import { Routes } from '@angular/router';
import { AtletaListComponent } from './components/atleta-list/atleta-list.component';
import { AtletaFormComponent } from './components/atleta-form/atleta-form.component';

export const routes: Routes = [
  { path: '', component: AtletaListComponent },
  { path: 'novo-atleta', component: AtletaFormComponent }
];
