import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {FooterModule} from "./components/footer/footer.module";
import {NavBarModule} from "./components/nav-bar/nav-bar.module";
import {PageNotFoundModule} from "./components/page-not-found/page-not-found.module";
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";
import {PagesModule} from "./pages/pages.module";
import {RouterModule} from "@angular/router";
import {routes} from "./pages/pages.routes";





@NgModule({
  declarations: [
    NavBarComponent,


  ],
  imports: [
    CommonModule,
    FooterModule,
    PageNotFoundModule,
    NavBarModule,
    NgOptimizedImage,
    PagesModule,
    RouterModule.forRoot(routes)
  ],
  exports: [FooterModule, NavBarModule, PageNotFoundModule, NavBarComponent,RouterModule]
})
export class CoreModule { }
