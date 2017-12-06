import{ ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ResultadoComponent } from './resultado/resultado.component';

const APP_ROUTES: Routes = [
  { path: 'resultado', component: ResultadoComponent },
  { path: '', component: HomeComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
