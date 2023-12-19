import {Component, OnInit, inject} from '@angular/core';
import {AuthService} from "../../../features/feature-auth/services/auth.service";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import { Router } from '@angular/router';
import {Store} from "@ngrx/store";
import {CatalogItem} from "../../../features/feature-catalog/models/catalog-item.model";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public currentTheme: string = 'nvidia';
  public isBurgerVisible: boolean = false;
  public isUserLoggedIn: boolean = false;
  public userEmail: string = '';
  public auth: AuthService = inject(AuthService);
  public angularFireAuth: AngularFireAuth = inject(AngularFireAuth);
  public router:Router = inject(Router)
  public store:Store<{checkoutProducts:CatalogItem[]}> = inject(Store<{checkoutProducts:CatalogItem[]}>);
  public checkoutQuantity: number = 0;

  ngOnInit(): void {
    this.angularFireAuth.authState.subscribe((user) => {
      if (user?.email) {
        this.userEmail = user.email;
          this.isUserLoggedIn = true;
      }
    })
    this.getCheckoutQuantity();
  }

  getCheckoutQuantity() {
    this.store.select('checkoutProducts').subscribe(products => {
      this.checkoutQuantity = products.length;
    });
  }

  changeCurrentTheme(): void {
    this.currentTheme === 'nvidia' ? this.currentTheme = 'AMD' : this.currentTheme = "nvidia";
  }

  changeBurgerVisibilityToOpposite(): void {
    this.isBurgerVisible = !this.isBurgerVisible;
  }

  logout() {
    this.auth.logout();
    this.isUserLoggedIn = false;
    this.router.navigate(['/home']).then(r => r)
  }
}
