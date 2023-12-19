import {Component, OnInit, inject} from '@angular/core';
import {AuthService} from "../../../features/feature-auth/services/auth.service";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  currentTheme: string = 'nvidia';
  isBurgerVisible: boolean = false;
  isUserLoggedIn: boolean = false;
  userEmail: string = '';
  auth: AuthService = inject(AuthService);
  angularFireAuth: AngularFireAuth = inject(AngularFireAuth);
  router:Router = inject(Router)
  ngOnInit(): void {
    this.angularFireAuth.authState.subscribe((user) => {
      if (user?.email) {
        this.userEmail = user.email;
          this.isUserLoggedIn = true;
      }
    })
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
    this.router.navigate(['/home'])
  }
}
