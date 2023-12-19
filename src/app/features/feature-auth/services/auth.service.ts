import {inject, Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {UserCredentials} from "../models/user-auth";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private auth: AngularFireAuth,private router:Router) {}

  login(user: UserCredentials) {
    let isSuccessfullyLogin = false
      this.auth.signInWithEmailAndPassword(user.email, user.password).then(r => {
        isSuccessfullyLogin = true;
        this.router.navigate(['/home']).then(r => r)
      });
      return isSuccessfullyLogin;
  }

  register(user: UserCredentials) {
    let isSuccessfullyRegister = false
    this.auth.createUserWithEmailAndPassword(user.email, user.password).then(r => {
      isSuccessfullyRegister = true;
      this.router.navigate(['/home']).then(r => r)
    }).catch(e => e)
    return isSuccessfullyRegister;
  }

  logout() {
    this.auth.signOut().then(r => {
      this.router.navigate(['/home']).then(r => r)
    }).catch(e => e);
  }
}
