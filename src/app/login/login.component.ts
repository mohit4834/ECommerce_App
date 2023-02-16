import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;

    constructor(fb: FormBuilder)
    {
        this.loginForm = fb.group({
          userID: ["", Validators.required],
          password: ["", Validators.required]

        });
    }

  onSubmit() {
    console.warn(this.loginForm.value);
  }
}
