import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-fallback',
  templateUrl: './fallback.component.html',
  styleUrls: ['./fallback.component.scss']
})
export class FallbackComponent {

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
