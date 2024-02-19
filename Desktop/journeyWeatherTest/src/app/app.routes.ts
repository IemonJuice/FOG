import {Routes} from '@angular/router';
import {ErrorPageComponent} from "./pages/error-page/error-page.component";

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch:'full'
  },
  {
    path: 'add-trip',
    loadChildren: () => import('./pages/add-new-trip-page/add-new-trip-page.module').then(m => m.AddNewTripPageModule)
  },
  {
    path: '**',
    component:ErrorPageComponent
  }
];
