import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../features/feature-auth/services/auth.service";
import {UserCredentials} from "../../../features/feature-auth/models/user-auth";

@Component({
  selector: 'app-page-register',
  templateUrl: './page-register.component.html',
  styleUrls: ['./page-register.component.scss']
})
export class PageRegisterComponent {

  private formBuilder: FormBuilder = inject(FormBuilder);
  private authService: AuthService = inject(AuthService);
  isSuccessfulRegister  = true;
  public authForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.min(8)]],
  });

  register() {
    if (this.authForm.valid) {
       this.isSuccessfulRegister = this.authService.register(this.authForm.getRawValue() as UserCredentials)
    }
  }
}
