import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from "../../../features/feature-auth/services/auth.service";
import {UserCredentials} from "../../../features/feature-auth/models/user-auth";
import {Router} from "@angular/router";

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent {

  private formBuilder: FormBuilder = inject(FormBuilder);
  private authService: AuthService = inject(AuthService);
  public successfulLogin = true;
  public authForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.min(8)]],
  });

  login() {
    if (this.authForm.valid) {
       this.successfulLogin = this.authService.login(this.authForm.getRawValue() as UserCredentials);
    }
  }
}
