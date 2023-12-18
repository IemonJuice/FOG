import {Routes} from "@angular/router";
import {AccountPageCanActivateGuard} from "../guards/account-page.guard";

export const routes: Routes = [
  {
    path: '', loadChildren: () => import('./page-home/page-home.module').then(m => m.PageHomeModule)
  },
  {
    path: 'home', loadChildren: () => import('./page-home/page-home.module').then(m => m.PageHomeModule)
  },
  {
    path: 'cpu', loadChildren: () => import('./page-cpu/page-cpu.module').then(m => m.PageCpuModule)
  },
  {
    path: 'gpu', loadChildren: () => import('./page-gpu/page-gpu.module').then(m => m.PageGpuModule)
  },
  {
    path: 'setup', loadChildren: () => import('./page-setup/page-setup.module').then(m => m.PageSetupModule)
  },
  {
    path: 'account',canActivate: [AccountPageCanActivateGuard], loadChildren: () => import('./page-account/page-account.module').then(m => m.PageAccountModule)
  },
  {
    path: 'checkout', loadChildren: () => import('./page-checkout/page-checkout.module').then(m => m.PageCheckoutModule)
  },
  {
    path: 'login', loadChildren: () => import('./page-login/page-login.module').then(m => m.PageLoginModule)
  },
  {
    path: 'register', loadChildren: () => import('./page-register/page-register.module').then(m => m.PageRegisterModule)
  },
  {
    path: '**', redirectTo: '/home', pathMatch: 'full'
  },
]
