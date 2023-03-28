import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent {

  constructor (private authService: AuthService, private router: Router) {}

  handleSignUp(): void {
    this.authService.loginWithRedirect({
      appState: {
        target: '/home',
      },
      authorizationParams: {
        screen_hint: 'signup',
      },
    });
  }

  navigateToPage(page: string): void {
    this.router.navigate([page]);
  }

}
