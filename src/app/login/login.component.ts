import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(fb: FormBuilder, private auth: AuthService) {
    this.loginForm = fb.group({
      userID: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  handleSignUp(): void {
    console.warn(this.loginForm.value);
    this.auth.loginWithRedirect({
      appState: {
        target: '/profile',
      },
      authorizationParams: {
        screen_hint: 'signup',
      },
    });
  }
}
