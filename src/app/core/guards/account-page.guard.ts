import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AngularFireAuth} from "@angular/fire/compat/auth";

export const AccountPageCanActivateGuard: CanActivateFn = (route, state) => {
  let asf = inject(AngularFireAuth)
  const router: Router = inject(Router)
  asf.onAuthStateChanged(user => {
    if (user) {
      return true
    } else {
      router.navigate(['/login']).then(r => r)
      return false
    }
  }).then(r => r)


  return true;
};
// signInWithEmailAndPassword(email: string, password: string) {
//   return this.auth.signInWithEmailAndPassword(email, password);
// }
//
// signUpWithEmailAndPassword(email: string, password: string) {
//   return this.auth.createUserWithEmailAndPassword(email, password);
// }
